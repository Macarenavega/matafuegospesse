"use client"

/**
 * Fire Extinguish Hero — procedural fire you put out with the cursor
 * Engine architecture adapted from a liquid-particle sculpture hero.
 *
 * A GPU heat map (heat · fuel · char · smoke) feeds a domain-warped flame pass,
 * plus GPU-simulated embers, smoke and extinguishing agent. The cursor knocks the
 * heat down and starves the fuel below it; left alone, the fire creeps back from
 * its embers. Without WebGL2 a CSS fire is shown in the same place.
 */

import * as React from "react"

/* ────────────────────────────────────────────────────────────────────
   Engine (WebGL2 GPGPU)
   ──────────────────────────────────────────────────────────────────── */

type Rect = { x: number; y: number; w: number; h: number }
type RGB = [number, number, number]

export type ExtinguishingAgent = "powder" | "co2" | "water"

interface EngineOptions {
  intensity: number
  flameHeight: number
  emberDensity: number
  palette: [RGB, RGB, RGB, RGB]
  heatDistortion: boolean
  interactive: boolean
  radius: number
  strength: number
  agent: ExtinguishingAgent
  smoke: boolean
  reignite: boolean
  reigniteDelay: number
  reigniteSpeed: number
  intro: boolean
  reducedMotion: boolean
  bg: RGB
}

export interface ExtinguishInfo {
  /** Time from the first pass of the cursor to the fire being out. */
  durationMs: number
}

function clamp(v: number, a: number, b: number) {
  return Math.min(b, Math.max(a, v))
}

function hexToRgb(hex: string, fallback: RGB): RGB {
  if (typeof hex !== "string") return fallback
  const s = hex.trim()
  let m = s.match(/^#?([0-9a-f]{3})$/i)
  if (m) {
    const [r, g, b] = m[1].split("").map((c) => parseInt(c + c, 16) / 255)
    return [r, g, b]
  }
  m = s.match(/^#?([0-9a-f]{6})([0-9a-f]{2})?$/i)
  if (m) {
    const n = parseInt(m[1], 16)
    return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]
  }
  m = s.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/i)
  if (m) return [+m[1] / 255, +m[2] / 255, +m[3] / 255]
  return fallback
}

/* ── shaders ─────────────────────────────────────────────────────────── */

const NOISE = `
float hash(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
float vnoise(vec2 p){ vec2 i=floor(p); vec2 f=fract(p); vec2 u=f*f*f*(f*(f*6.0-15.0)+10.0);
  return mix(mix(hash(i),hash(i+vec2(1.0,0.0)),u.x), mix(hash(i+vec2(0.0,1.0)),hash(i+vec2(1.0,1.0)),u.x), u.y); }
float fbm(vec2 p){ float s = 0.0; float a = 0.5;
  for(int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + vec2(1.7, 9.2); a *= 0.5; }
  return s/0.9375; }
vec2 curl(vec2 p){
  const float e = 0.35;
  float a = vnoise(p+vec2(0.0,e)) - vnoise(p-vec2(0.0,e));
  float b = vnoise(p+vec2(e,0.0)) - vnoise(p-vec2(e,0.0));
  return vec2(a, -b)/(2.0*e);
}
`

/* integer hash: independent random numbers per particle and per frame */
const HASH = `
uint pcg(uint v){ uint s = v*747796405u + 2891336453u; uint w = ((s >> ((s >> 28u) + 4u)) ^ s)*277803737u; return (w >> 22u) ^ w; }
float rnd(uint a, uint b){ return float(pcg(a ^ pcg(b + 0x9e3779b9u)))/4294967295.0; }
`

const QUAD_VS = `#version 300 es
layout(location=0) in vec2 aPos;
out vec2 vUv;
void main(){ vUv = aPos*0.5+0.5; gl_Position = vec4(aPos,0.0,1.0); }
`

/* Heat map step. RGBA16F: r = heat, g = fuel of the fire bed, b = char, a = smoke.
   uv.y grows upwards; the fire bed is the bottom band. */
const HEAT_FS = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 o;
uniform sampler2D uPrev;
uniform vec2 uTexel;
uniform vec2 uSize;
uniform float uDt;
uniform float uTime;
uniform float uRise;
uniform float uCool;
uniform float uSource;
uniform float uTurb;
uniform float uBedH;
uniform vec2 uM0;
uniform vec2 uM1;
uniform float uRadius;
uniform float uPresence;
uniform float uSpeed;
uniform float uStrength;
uniform float uGrow;
uniform float uFill;
uniform float uSpread;
uniform float uQuench;
${NOISE}
float segDist(vec2 p, vec2 a, vec2 b){
  vec2 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba)/max(dot(ba, ba), 1e-4), 0.0, 1.0);
  return length(pa - ba*h);
}
void main(){
  vec2 uv = vUv;
  vec4 here = texture(uPrev, uv);

  // heat rises along a curling flow, spreads a little and cools on the way up
  vec2 c = curl(vec2(uv.x*5.0, uv.y*3.0 - uTime*0.7));
  float lift = uRise*(0.7 + 0.6*vnoise(vec2(uv.x*9.0, uv.y*4.0 - uTime*1.3)));
  vec2 src = uv - vec2(c.x*uTurb*0.8*uTexel.x, lift + c.y*uTurb*0.2*uTexel.y)*uDt;
  float h = texture(uPrev, src).r;
  float hn = 0.25*(texture(uPrev, src + vec2(uTexel.x, 0.0)).r + texture(uPrev, src - vec2(uTexel.x, 0.0)).r
                 + texture(uPrev, src + vec2(0.0, uTexel.y)).r + texture(uPrev, src - vec2(0.0, uTexel.y)).r);
  h = mix(h, hn, 0.2);
  h *= exp(-uCool*uDt);

  float fuel = here.g;
  float chr = here.b;
  float smk = here.a;

  // the fire bed feeds heat in proportion to the fuel left there
  float bed = 1.0 - smoothstep(uBedH*0.4, uBedH, uv.y);
  // tapered sides and uneven, slowly shifting peaks along the bed
  float env = pow(sin(3.14159265*clamp(uv.x, 0.0, 1.0)), 0.8)*(0.45 + 0.75*vnoise(vec2(uv.x*4.0 + 2.3, uTime*0.12)));
  float flick = 0.45 + 1.1*vnoise(vec2(uv.x*16.0, uTime*2.4))*vnoise(vec2(uv.x*6.0 + 3.1, uTime*0.8));
  h += bed*env*fuel*flick*uSource*uDt;

  // extinguishing brush along the cursor's path this frame
  vec2 px = uv*uSize;
  // a fast sweep fans out like an extinguisher's cone
  float rr = uRadius*(1.0 + 0.6*uSpeed);
  float r2 = rr*rr;
  float d = segDist(px, uM0, uM1);
  float f = exp(-d*d/r2)*uPresence;
  // a tall, wide reach: aiming at the flames also starves the fuel feeding them
  vec2 sq = vec2(0.67, 0.4);
  float de = segDist(px*sq, uM0*sq, uM1*sq);
  float fe = exp(-de*de/r2)*uPresence;
  float kill = clamp(f*(0.03 + 0.3*uSpeed)*uStrength*uDt, 0.0, 0.95);
  float removed = h*kill;
  h -= removed;
  // two quick sweeps put the fire out; a resting cursor barely touches it
  float lost = min(fuel, fe*(0.0025 + 0.14*uSpeed)*uStrength*uDt);
  fuel -= lost;

  // one full pass: the whole fire is smothered at once, bed and flames together
  float qk = 1.0 - exp(-uQuench*uDt);
  float qh = h*qk;
  float ql = fuel*min(1.0, qk*1.4);
  h -= qh;
  fuel -= ql;
  removed += qh;
  lost += ql;

  // what is left behind: a charred bed and smoke where the heat was knocked down
  float bedZone = 1.0 - smoothstep(uBedH*(0.8 + 0.8*vnoise(vec2(uv.x*12.0, 1.7))), uBedH*2.6, uv.y);
  chr = min(1.0, chr + (lost*4.0 + removed*1.5)*bedZone);
  chr = max(0.0, chr*pow(0.9985, uDt) - h*0.02*uDt);
  smk = min(1.0, smk*pow(0.955, uDt) + removed*2.2 + lost*3.0);

  // re-ignition: embers in the charred bed and leftover fuel regrow on their own,
  // dead patches only catch from hot neighbours
  float sp = uSpread*uTexel.x;
  float yb = uBedH*0.5;
  float nb = max(max(texture(uPrev, vec2(uv.x + sp, yb)).r, texture(uPrev, vec2(uv.x - sp, yb)).r),
                 0.7*max(texture(uPrev, vec2(uv.x + sp*2.2, yb)).r, texture(uPrev, vec2(uv.x - sp*2.2, yb)).r));
  // embers survive in some patches of the charred bed: those catch first, the rest follows
  float ember = smoothstep(0.15, 0.6, chr)*smoothstep(0.35, 0.75, vnoise(vec2(uv.x*30.0, 7.3)));
  float grow = uGrow*uDt*(0.004*smoothstep(0.03, 0.35, fuel) + 0.0025*ember + 0.015*smoothstep(0.05, 0.45, nb)) + uFill*uDt;
  fuel = min(1.0, fuel + grow);

  o = vec4(clamp(h, 0.0, 3.0), fuel, chr, smk);
}
`

/* Average heat and fuel into a tiny RGBA8 target that is read back on the CPU. */
const REDUCE_FS = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 o;
uniform sampler2D uHeat;
uniform vec2 uCell;
void main(){
  vec2 base = vUv - uCell*0.5;
  float h = 0.0, f = 0.0;
  for(int y = 0; y < 4; y++) for(int x = 0; x < 4; x++){
    vec4 s = texture(uHeat, base + uCell*(vec2(float(x), float(y)) + 0.5)/4.0);
    h += s.r; f += s.g;
  }
  o = vec4(clamp(h/32.0, 0.0, 1.0), f/16.0, 0.0, 1.0);
}
`

/* Particle step (MRT). A = position.xy, velocity.zw in CSS px.
   B = life (1 → 0), lifespan in seconds, kind (0 ember, 1 smoke, 2 agent), seed. */
const PSIM_FS = `#version 300 es
precision highp float;
precision highp int;
layout(location=0) out vec4 oA;
layout(location=1) out vec4 oB;
uniform sampler2D uA;
uniform sampler2D uB;
uniform sampler2D uHeat;
uniform int uTexW;
uniform int uNE;
uniform int uNS;
uniform uint uFrame;
uniform vec4 uRect;
uniform float uDt;
uniform float uTime;
uniform float uEmberRate;
uniform float uSmokeRate;
uniform float uAgentRate;
uniform vec2 uMouse;
uniform vec2 uMVel;
uniform float uRadius;
uniform float uAgent;
${NOISE}
${HASH}
vec2 toPx(vec2 uv){ return vec2(uRect.x + uv.x*uRect.z, uRect.y + (1.0 - uv.y)*uRect.w); }
void main(){
  ivec2 ij = ivec2(gl_FragCoord.xy);
  int id = ij.y*uTexW + ij.x;
  vec4 a = texelFetch(uA, ij, 0);
  vec4 b = texelFetch(uB, ij, 0);
  uint uid = uint(id);
  float kind = id < uNE ? 0.0 : (id < uNE + uNS ? 1.0 : 2.0);
  uint fr = uFrame*4u;
  float r0 = rnd(uid, fr), r1 = rnd(uid, fr + 1u), r2 = rnd(uid, fr + 2u), r3 = rnd(uid, fr + 3u);

  if(b.x <= 0.0){
    // dead: try to be born where the field asks for it (rejection sampling)
    if(kind < 0.5){
      vec2 uv = vec2(r0, r1*0.6);
      float h = texture(uHeat, uv).r;
      if(r2 < uEmberRate*h*h*uDt){
        oA = vec4(toPx(uv), (r3 - 0.5)*1.2, -0.6 - 1.4*rnd(uid + 17u, fr));
        oB = vec4(1.0, 0.7 + 1.6*r3, kind, b.w);
        return;
      }
    } else if(kind < 1.5){
      vec2 uv = vec2(r0*1.1 - 0.05, r1);
      float s = texture(uHeat, uv).a;
      if(r2 < uSmokeRate*s*uDt){
        oA = vec4(toPx(uv), (r3 - 0.5)*0.5, -0.4 - 0.6*r3);
        oB = vec4(1.0, 2.4 + 2.2*r3, kind, b.w);
        return;
      }
    } else if(r2 < uAgentRate*uDt){
      float ang = r0*6.2831853;
      vec2 pos = uMouse + vec2(cos(ang), sin(ang))*sqrt(r1)*uRadius*0.3;
      float sp = length(uMVel);
      // the agent follows the sweep; when the cursor rests it sprays down at the fire
      vec2 dir = sp > 0.6 ? uMVel/sp : vec2(0.0, 1.0);
      float spread = (r3 - 0.5)*1.1;
      dir = vec2(dir.x*cos(spread) - dir.y*sin(spread), dir.x*sin(spread) + dir.y*cos(spread));
      oA = vec4(pos, uMVel*0.45 + dir*(1.2 + 3.2*rnd(uid + 31u, fr)));
      float span = uAgent > 0.5 && uAgent < 1.5 ? 0.9 + 0.7*r3 : 0.45 + 0.45*r3;
      oB = vec4(1.0, span, kind, b.w);
      return;
    }
    oA = vec4(-1e4, -1e4, 0.0, 0.0);
    oB = vec4(0.0, 1.0, kind, b.w);
    return;
  }

  vec2 pos = a.xy;
  vec2 vel = a.zw;
  if(kind < 0.5){
    // embers: buoyant, carried by the turbulence
    vel.y -= 0.05*uDt;
    vel += curl(pos*0.006 + vec2(0.0, uTime*0.4))*0.11*uDt;
    vel *= pow(0.982, uDt);
  } else if(kind < 1.5){
    // smoke: slow, lazy drift upwards
    vel.y -= 0.012*uDt;
    vel.x += (vnoise(pos*0.004 + uTime*0.2) - 0.5)*0.03*uDt;
    vel *= pow(0.992, uDt);
  } else {
    if(uAgent > 1.5) vel.y += 0.07*uDt;
    vel *= pow(uAgent > 1.5 ? 0.985 : 0.94, uDt);
    vel += curl(pos*0.01 + uTime*0.5)*0.05*uDt;
  }
  pos += vel*uDt;
  oA = vec4(pos, vel);
  oB = vec4(b.x - uDt/60.0/b.y, b.y, kind, b.w);
}
`

/* Particles: one instanced quad each, a capsule stretched along velocity (hard)
   or a gaussian puff (soft). */
const PART_VS = `#version 300 es
precision highp float;
layout(location=0) in vec2 aCorner;
uniform sampler2D uA;
uniform sampler2D uB;
uniform int uTexW;
uniform int uBase;
uniform vec2 uRes;
uniform float uAgent;
uniform float uScale;
uniform float uStreak;
uniform vec3 uHot;
uniform vec3 uMid;
uniform vec3 uCool;
out vec2 vLocal;
out float vHalfLen;
out float vR;
out vec4 vCol;
out float vSoft;
void main(){
  int id = gl_InstanceID + uBase;
  ivec2 ij = ivec2(id % uTexW, id / uTexW);
  vec4 a = texelFetch(uA, ij, 0);
  vec4 b = texelFetch(uB, ij, 0);
  float life = b.x;
  if(life <= 0.0){ gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
  float kind = b.z;
  float seed = b.w;
  float age = 1.0 - life;
  vec2 v = a.zw;
  float sp = length(v);
  vec2 dir = sp > 0.001 ? v/sp : vec2(0.0, -1.0);
  float r, len, alpha, soft;
  vec3 col;
  if(kind < 0.5){
    // ember cooling from yellow to red to dark
    r = (0.7 + 0.9*seed)*uScale;
    len = min(sp*2.2, 12.0)*uStreak;
    col = life > 0.55 ? mix(uMid, uHot, (life - 0.55)/0.45) : mix(uCool, uMid, life/0.55);
    alpha = smoothstep(0.0, 0.25, life)*(0.75 + 0.25*sin(seed*40.0 + age*30.0));
    soft = 0.0;
  } else if(kind < 1.5){
    r = (7.0 + 18.0*age)*(0.7 + 0.6*seed)*uScale;
    len = 0.0;
    col = vec3(0.34, 0.33, 0.32);
    alpha = 0.12*smoothstep(0.0, 0.15, age)*(1.0 - smoothstep(0.45, 1.0, age));
    soft = 1.0;
  } else if(uAgent < 0.5){
    // ABC dry powder: a fine pale cloud
    r = (2.0 + 4.0*seed + 5.0*age)*uScale;
    len = 0.0;
    col = mix(vec3(1.0, 0.98, 0.92), vec3(1.0, 0.95, 0.8), seed);
    alpha = 0.38*life*smoothstep(0.0, 0.08, age);
    soft = 1.0;
  } else if(uAgent < 1.5){
    // CO2: freezing white mist
    r = (5.0 + 12.0*age + 6.0*seed)*uScale;
    len = 0.0;
    col = vec3(0.93, 0.97, 1.0);
    alpha = 0.14*life*smoothstep(0.0, 0.1, age);
    soft = 1.0;
  } else {
    // water droplets
    r = (0.9 + 1.1*seed)*uScale;
    len = min(sp*2.0, 14.0)*uStreak;
    col = mix(vec3(0.62, 0.8, 1.0), vec3(0.92, 0.97, 1.0), seed);
    alpha = 0.7*life;
    soft = 0.0;
  }
  vec2 lc = aCorner*vec2(r + len*0.5 + 1.0, r + 1.0);
  vec2 center = a.xy - dir*len*0.5;
  vec2 world = center + dir*lc.x + vec2(-dir.y, dir.x)*lc.y;
  vec2 clip = world/uRes*2.0 - 1.0;
  gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
  vLocal = lc;
  vHalfLen = len*0.5;
  vR = r;
  vCol = vec4(col, alpha);
  vSoft = soft;
}
`

const PART_FS = `#version 300 es
precision highp float;
in vec2 vLocal;
in float vHalfLen;
in float vR;
in vec4 vCol;
in float vSoft;
uniform float uDpr;
uniform float uAdditive;
out vec4 o;
void main(){
  vec2 q = vec2(max(abs(vLocal.x) - vHalfLen, 0.0), vLocal.y);
  float d = length(q);
  float hard = clamp(0.5 - (d - vR)*uDpr, 0.0, 1.0);
  float t = d/max(vR, 0.001);
  float puff = exp(-t*t*3.0)*step(t, 1.0);
  float a = mix(hard, puff, vSoft);
  // comet tail: the trailing end thins out
  float tail = vHalfLen > 0.0 ? clamp(0.5 - vLocal.x/(2.0*(vHalfLen + vR)), 0.0, 1.0) : 0.0;
  a *= (1.0 - tail*0.6)*vCol.a;
  if(a < 0.003) discard;
  o = uAdditive > 0.5 ? vec4(vCol.rgb*a, 0.0) : vec4(vCol.rgb*a, a);
}
`

/* Flames, glow, charred bed and smoke haze over the background. Opaque output. */
const FLAME_FS = `#version 300 es
precision highp float;
out vec4 o;
uniform sampler2D uHeat;
uniform vec2 uRes;
uniform float uDpr;
uniform vec4 uRect;
uniform vec3 uBg;
uniform vec3 uPal[4];
uniform float uTime;
uniform float uShimmer;
uniform float uHeatTotal;
${NOISE}
vec3 ramp(float t){
  // blackbody-like: nothing → deep red → orange → yellow → near-white core
  t = clamp(t, 0.0, 1.0);
  vec3 c = uPal[0]*smoothstep(0.0, 0.12, t);
  c = mix(c, uPal[1], smoothstep(0.1, 0.35, t));
  c = mix(c, uPal[2], smoothstep(0.35, 0.7, t));
  return mix(c, uPal[3], smoothstep(0.72, 1.0, t));
}
float heatAt(vec2 uv){
  // the map clamps at its edges: fade it out instead of smearing the bed below the rect
  float m = smoothstep(-0.01, 0.03, uv.y)*(1.0 - smoothstep(0.9, 1.0, uv.y))*smoothstep(-0.01, 0.03, uv.x)*(1.0 - smoothstep(0.97, 1.01, uv.x));
  return texture(uHeat, clamp(uv, 0.0, 1.0)).r*m;
}
void main(){
  vec2 px = vec2(gl_FragCoord.x, uRes.y*uDpr - gl_FragCoord.y)/uDpr;
  vec2 uv = (px - uRect.xy)/uRect.zw;
  uv.y = 1.0 - uv.y;

  // warm light the fire throws around it
  vec2 dd = (px - vec2(uRect.x + uRect.z*0.5, uRect.y + uRect.w*0.92))/vec2(uRect.z*0.75, uRect.w*0.9);
  float amb = exp(-dot(dd, dd)*1.6)*uHeatTotal;
  vec3 col = uBg + uPal[1]*amb*0.16 + uPal[0]*amb*0.1;
  if(uv.x < -0.2 || uv.x > 1.2 || uv.y < -0.2 || uv.y > 1.25){ o = vec4(col, 1.0); return; }
  float t = uTime;

  // heat shimmer: the air over the flames wobbles
  float above = heatAt(vec2(uv.x, uv.y*0.5));
  uv.x += (vnoise(vec2(px.x*0.045, px.y*0.03 + t*3.2)) - 0.5)*uShimmer*smoothstep(0.1, 1.0, above)*0.012;

  // domain-warped fbm scrolling upwards, masked by the heat map
  vec2 q = vec2(uv.x*3.4, uv.y*2.3 - t*1.15);
  vec2 w = vec2(fbm(q + vec2(0.0, t*0.35)), fbm(q + vec2(5.2, 1.3 - t*0.2)));
  float n = fbm(q*1.7 + w*1.6 - vec2(0.0, t*0.8));
  vec2 huv = uv + (w - 0.5)*vec2(0.035, 0.06);
  float h = heatAt(huv);
  vec4 hs = texture(uHeat, clamp(uv, 0.0, 1.0));
  // tongues: the higher up, the more the noise eats into the flame
  float shaped = h*(0.35 + 1.3*n) - 0.16*smoothstep(0.0, 0.8, uv.y);
  float flame = smoothstep(0.03, 1.0, shaped);

  // cheap bloom from a ring of taps on the (bilinear) heat map
  float g = 0.0;
  for(int i = 0; i < 8; i++){
    float an = float(i)*0.7853982 + 0.39;
    vec2 dir = vec2(cos(an), sin(an));
    g += heatAt(uv + dir*vec2(0.035, 0.06)) + 0.6*heatAt(uv + dir*vec2(0.08, 0.13));
  }
  g /= 12.8;
  vec3 glow = (uPal[1]*0.5 + uPal[0]*0.35)*smoothstep(0.0, 1.2, g)*0.55;

  // charred bed with dying ember specks where the fire was put out
  float edge = smoothstep(-0.01, 0.03, uv.x)*(1.0 - smoothstep(0.97, 1.01, uv.x))*smoothstep(-0.02, 0.02, uv.y);
  // soot: patchy, fading out upwards along a ragged line and towards the sides
  float zone = 1.0 - smoothstep(0.03, 0.18 + 0.12*fbm(vec2(px.x*0.012, 3.1)), uv.y);
  float side = smoothstep(0.0, 0.1, uv.x)*(1.0 - smoothstep(0.9, 1.0, uv.x));
  float chr = hs.b*(1.0 - smoothstep(0.05, 0.4, h))*edge*zone*side*(0.4 + 0.6*smoothstep(0.3, 0.7, fbm(px*0.02 + 3.7)));
  vec3 soot = vec3(0.1, 0.08, 0.068)*(0.75 + 0.25*vnoise(px*0.06));
  col = mix(col, soot, chr*0.6);
  // dying embers: a few round specks, each pulsing at its own pace
  vec2 cell = floor(px/7.0);
  vec2 cp = (cell + 0.2 + 0.6*vec2(hash(cell), hash(cell + 17.3)))*7.0;
  float dotm = 1.0 - smoothstep(0.6, 1.8, length(px - cp));
  float speck = dotm*step(0.8, hash(cell + 41.9))*chr*(0.5 + 0.5*sin(t*(1.5 + 2.0*hash(cell + 5.1)) + hash(cell)*6.28));
  col += mix(uPal[0], uPal[1], 0.4)*speck*1.8;

  // smoke haze
  float hz = hs.a*edge*fbm(px*0.012 + vec2(0.0, t*0.25))*0.35;
  col = mix(col, vec3(0.28, 0.27, 0.26), clamp(hz, 0.0, 0.5));

  col += ramp(flame) + glow;
  o = vec4(col, 1.0);
}
`

/* ── helpers ─────────────────────────────────────────────────────────── */

type Prog = { p: WebGLProgram; u: Record<string, WebGLUniformLocation | null> }

function compile(gl: WebGL2RenderingContext, vs: string, fs: string): Prog {
  const make = (type: number, src: string) => {
    const sh = gl.createShader(type)!
    gl.shaderSource(sh, src)
    gl.compileShader(sh)
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      const log = gl.getShaderInfoLog(sh)
      gl.deleteShader(sh)
      throw new Error("Shader: " + log)
    }
    return sh
  }
  const p = gl.createProgram()!
  const v = make(gl.VERTEX_SHADER, vs)
  const f = make(gl.FRAGMENT_SHADER, fs)
  gl.attachShader(p, v)
  gl.attachShader(p, f)
  gl.bindAttribLocation(p, 0, "aPos")
  gl.linkProgram(p)
  gl.deleteShader(v)
  gl.deleteShader(f)
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error("Link: " + gl.getProgramInfoLog(p))
  const u: Record<string, WebGLUniformLocation | null> = {}
  const n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS)
  for (let i = 0; i < n; i++) {
    const info = gl.getActiveUniform(p, i)
    if (info) u[info.name.replace(/\[0\]$/, "")] = gl.getUniformLocation(p, info.name)
  }
  return { p, u }
}

/* ── engine ──────────────────────────────────────────────────────────── */

const TEX_W = 256
const RED_W = 16
const RED_H = 8
/** Fire bed thickness, in heat-map height. */
const BED_H = 0.1
const INTRO_MS = 1500
const AGENTS: Record<ExtinguishingAgent, number> = { powder: 0, co2: 1, water: 2 }

class FireEngine {
  /** Called once, after the first frame has actually been drawn. */
  onFirstFrame: (() => void) | null = null
  /** Fire went out (true) or came back (false). */
  onStatus: ((out: boolean, info: ExtinguishInfo) => void) | null = null

  private canvas: HTMLCanvasElement
  private gl: WebGL2RenderingContext
  private opts: EngineOptions
  private onFail: () => void
  private lowPower = false
  private heatFormat = 0
  private partFormat = 0

  private pHeat!: Prog
  private pReduce!: Prog
  private pPsim!: Prog
  private pPart!: Prog
  private pFlame!: Prog
  private vao!: WebGLVertexArrayObject
  private quad!: WebGLBuffer

  private heatTex: WebGLTexture[] = []
  private heatFb: WebGLFramebuffer[] = []
  private heatIdx = 0
  private gridW = 0
  private gridH = 0

  private redTex: WebGLTexture | null = null
  private redFb: WebGLFramebuffer | null = null
  private redBuf = new Uint8Array(RED_W * RED_H * 4)

  private partA: WebGLTexture[] = []
  private partB: WebGLTexture[] = []
  private partFb: WebGLFramebuffer[] = []
  private partIdx = 0
  private texH = 1
  private nE = 0
  private nS = 0
  private nA = 0

  private rect: Rect = { x: 0, y: 0, w: 1, h: 1 }
  private cssW = 1
  private cssH = 1

  private target = { x: -9999, y: -9999 }
  private mouse = { x: -9999, y: -9999 }
  private prevMouse = { x: -9999, y: -9999 }
  private mvel = { x: 0, y: 0 }
  private presence = 0
  private presenceTarget = 0
  private lastInput = -1e9
  private touchRelease = 0
  private firstInput = 0

  private heatAvg = 1
  private baseline = 0
  private heatShown = 1
  private out = false
  private outAt = 0
  /** Put out for good by one full pass: no regrowth until reload. */
  private quenched = false
  private quenchAt = 0

  private time = 0
  private frameNo = 0
  /** Intro progress, 0 → 1. Counted in simulated frames so a busy or hidden tab still completes it. */
  private intro = 1
  private raf = 0
  private running = false
  private last = 0
  private visible = true
  private ready = false
  private destroyed = false
  private lost = false

  constructor(canvas: HTMLCanvasElement, opts: EngineOptions, onFail: () => void) {
    this.canvas = canvas
    this.opts = opts
    this.onFail = onFail
    // opaque: the background is drawn by the flame pass
    const gl = canvas.getContext("webgl2", {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      preserveDrawingBuffer: false,
      powerPreference: "high-performance",
    }) as WebGL2RenderingContext | null
    if (!gl) throw new Error("WebGL2 unavailable")
    this.gl = gl
    const nav = navigator as Navigator & { deviceMemory?: number }
    this.lowPower =
      (nav.hardwareConcurrency || 8) <= 4 ||
      (nav.deviceMemory || 8) <= 4 ||
      window.matchMedia("(pointer: coarse)").matches
    this.initGL()
    canvas.addEventListener("webglcontextlost", this.onLost, false)
  }

  private onLost = (e: Event) => {
    e.preventDefault()
    this.lost = true
    this.stop()
    this.onFail()
  }

  private initGL() {
    const gl = this.gl
    // the heat map is filtered (RGBA16F); particle positions need full floats when available
    const full = gl.getExtension("EXT_color_buffer_float")
    const half = full ? null : gl.getExtension("EXT_color_buffer_half_float")
    if (!full && !half) throw new Error("No float render targets")
    this.heatFormat = gl.RGBA16F
    this.partFormat = full ? gl.RGBA32F : gl.RGBA16F

    this.pHeat = compile(gl, QUAD_VS, HEAT_FS)
    this.pReduce = compile(gl, QUAD_VS, REDUCE_FS)
    this.pPsim = compile(gl, QUAD_VS, PSIM_FS)
    this.pPart = compile(gl, PART_VS, PART_FS)
    this.pFlame = compile(gl, QUAD_VS, FLAME_FS)

    this.vao = gl.createVertexArray()!
    gl.bindVertexArray(this.vao)
    this.quad = gl.createBuffer()!
    gl.bindBuffer(gl.ARRAY_BUFFER, this.quad)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
    gl.enableVertexAttribArray(0)
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)

    this.redTex = this.makeTex(gl.RGBA8, RED_W, RED_H, gl.RGBA, gl.UNSIGNED_BYTE, null, gl.NEAREST)
    this.redFb = this.makeFb([this.redTex])
    this.buildParticles()
  }

  private makeTex(internal: number, w: number, h: number, format: number, type: number, data: ArrayBufferView | null, filter: number) {
    const gl = this.gl
    const t = gl.createTexture()!
    gl.bindTexture(gl.TEXTURE_2D, t)
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1)
    gl.texImage2D(gl.TEXTURE_2D, 0, internal, w, h, 0, format, type, data)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    return t
  }

  private makeFb(texs: WebGLTexture[]) {
    const gl = this.gl
    const fb = gl.createFramebuffer()!
    gl.bindFramebuffer(gl.FRAMEBUFFER, fb)
    texs.forEach((t, i) => gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + i, gl.TEXTURE_2D, t, 0))
    if (texs.length > 1) gl.drawBuffers(texs.map((_, i) => gl.COLOR_ATTACHMENT0 + i))
    if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) throw new Error("Float FBO incomplete")
    gl.bindFramebuffer(gl.FRAMEBUFFER, null)
    return fb
  }

  /** Embers, smoke and agent share one particle state, in three index ranges. */
  private buildParticles() {
    const gl = this.gl
    const o = this.opts
    const lp = this.lowPower ? 0.5 : 1
    this.nE = Math.round(4096 * clamp(o.emberDensity, 0, 2) * lp * (o.reducedMotion ? 0.4 : 1))
    this.nS = Math.round(2048 * lp)
    this.nA = Math.round(3072 * lp)
    const n = this.nE + this.nS + this.nA
    this.texH = Math.max(1, Math.ceil(n / TEX_W))
    const total = TEX_W * this.texH
    const b = new Float32Array(total * 4)
    for (let i = 0; i < total; i++) {
      b[i * 4 + 1] = 1
      b[i * 4 + 3] = Math.random()
    }
    for (const t of [...this.partA, ...this.partB]) gl.deleteTexture(t)
    for (const f of this.partFb) gl.deleteFramebuffer(f)
    this.partA = []
    this.partB = []
    this.partFb = []
    for (let i = 0; i < 2; i++) {
      const ta = this.makeTex(this.partFormat, TEX_W, this.texH, gl.RGBA, gl.FLOAT, null, gl.NEAREST)
      const tb = this.makeTex(this.partFormat, TEX_W, this.texH, gl.RGBA, gl.FLOAT, b, gl.NEAREST)
      this.partA.push(ta)
      this.partB.push(tb)
      this.partFb.push(this.makeFb([ta, tb]))
    }
    this.partIdx = 0
  }

  /** (Re)creates the heat map for the current rect and lights it: fully, or from a few sparks for the intro. */
  private buildHeat(withIntro: boolean) {
    const gl = this.gl
    const gw = this.lowPower ? 160 : 256
    const gh = clamp(Math.round((gw * this.rect.h) / Math.max(1, this.rect.w)), 48, 256)
    this.gridW = gw
    this.gridH = gh
    const data = new Float32Array(gw * gh * 4)
    const sparks = withIntro ? Array.from({ length: 6 }, (_, i) => (i + 0.3 + Math.random() * 0.4) / 6) : []
    for (let y = 0; y < gh; y++)
      for (let x = 0; x < gw; x++) {
        const u = (x + 0.5) / gw
        let fuel = 1
        if (withIntro) fuel = sparks.reduce((m, s) => Math.max(m, Math.exp(-(((u - s) * 22) ** 2))), 0)
        data[(y * gw + x) * 4 + 1] = fuel
      }
    for (const t of this.heatTex) gl.deleteTexture(t)
    for (const f of this.heatFb) gl.deleteFramebuffer(f)
    this.heatTex = []
    this.heatFb = []
    for (let i = 0; i < 2; i++) {
      const t = this.makeTex(this.heatFormat, gw, gh, gl.RGBA, gl.FLOAT, data, gl.LINEAR)
      this.heatTex.push(t)
      this.heatFb.push(this.makeFb([t]))
    }
    this.heatIdx = 0
    this.baseline = 0
    if (this.out) {
      this.out = false
      this.firstInput = 0
      this.onStatus?.(false, { durationMs: 0 })
    }
    this.intro = withIntro ? 0 : 1
    // without intro, burn for a moment off-screen so the first frame already shows a full fire
    if (!withIntro) for (let i = 0; i < 110; i++) this.stepHeat(1, 0)
  }

  setOptions(o: Partial<EngineOptions>) {
    const rebuild =
      (o.emberDensity !== undefined && o.emberDensity !== this.opts.emberDensity) ||
      (o.reducedMotion !== undefined && o.reducedMotion !== this.opts.reducedMotion)
    this.opts = { ...this.opts, ...o }
    if (rebuild && !this.lost) {
      try {
        this.buildParticles()
      } catch {
        this.onFail()
      }
    }
    this.wake()
  }

  resize(cssW: number, cssH: number, rect: Rect) {
    this.cssW = Math.max(1, cssW)
    this.cssH = Math.max(1, cssH)
    const prev = this.rect
    this.rect = rect
    // flames are soft: 1.5x is plenty, and much cheaper than 2x
    let dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    const px = this.cssW * this.cssH * dpr * dpr
    if (px > 3.2e6) dpr = Math.max(1, Math.sqrt(3.2e6 / (this.cssW * this.cssH)))
    const w = Math.round(this.cssW * dpr)
    const h = Math.round(this.cssH * dpr)
    if (this.canvas.width !== w || this.canvas.height !== h) {
      this.canvas.width = w
      this.canvas.height = h
    }
    if (this.lost || this.destroyed) return
    // the heat map lives in rect space and simply stretches with it; only a big change
    // of shape (a phone turned sideways) is worth a fresh map
    const reshaped = Math.abs(rect.h / rect.w - prev.h / prev.w) > 0.5 * (prev.h / prev.w)
    if (!this.ready) {
      this.ready = true
      this.buildHeat(this.opts.intro && !this.opts.reducedMotion)
    } else if (reshaped) {
      this.buildHeat(this.intro < 1)
    }
    this.draw()
    this.wake()
  }

  /** Smothers the whole fire, as one full sweep of the extinguisher does. */
  quench() {
    if (this.quenched || this.lost) return
    this.quenched = true
    this.quenchAt = 0
    if (!this.firstInput) this.firstInput = performance.now()
    this.wake()
  }

  setVisible(v: boolean) {
    this.visible = v
    if (v) this.wake()
    else this.stop()
  }

  pointer(type: "move" | "down" | "up" | "leave", x: number, y: number, touch: boolean) {
    if (!this.opts.interactive || this.lost) return
    const now = performance.now()
    if (type === "leave" || type === "up") {
      if (touch) this.touchRelease = now + 260
      else this.presenceTarget = 0
      this.wake()
      return
    }
    if (this.mouse.x < -9000 || type === "down") {
      this.mouse.x = this.prevMouse.x = x
      this.mouse.y = this.prevMouse.y = y
    }
    this.target.x = x
    this.target.y = y
    this.presenceTarget = 1
    this.lastInput = now
    if (!this.firstInput) this.firstInput = now
    if (type === "down") this.touchRelease = 0
    this.wake()
  }

  private wake() {
    if (!this.ready || this.running || !this.visible || this.destroyed || this.lost) return
    this.running = true
    this.last = performance.now()
    this.raf = requestAnimationFrame(this.frame)
  }

  private stop() {
    this.running = false
    cancelAnimationFrame(this.raf)
  }

  /** The cursor only starts fighting the fire once it has fully caught. */
  private brushPresence() {
    return this.intro < 1 ? 0 : this.presence
  }

  private radiusPx() {
    // what one pass puts out grows with the brush, so small screens keep a generous one (and fingers are wide)
    return this.opts.radius * clamp(this.cssW / 1440, 0.9, 1.25)
  }

  private frame = (now: number) => {
    if (!this.running) return
    const rawMs = now - this.last
    // reduced motion: a calm fire at half the frame rate
    if (this.opts.reducedMotion && rawMs < 30) {
      this.raf = requestAnimationFrame(this.frame)
      return
    }
    this.last = now
    if (this.tick(now, rawMs)) this.raf = requestAnimationFrame(this.frame)
    else this.stop()
  }

  /** One simulation and render step. Returns false once there is nothing left to animate. */
  private tick(now: number, rawMs: number) {
    const o = this.opts
    const rm = o.reducedMotion
    const dt = clamp(rawMs / 16.6667, 0.25, 3)

    if (this.touchRelease && now > this.touchRelease) {
      this.presenceTarget = 0
      this.touchRelease = 0
    }
    const ease = 1 - Math.pow(1 - 0.3, dt)
    this.prevMouse.x = this.mouse.x
    this.prevMouse.y = this.mouse.y
    this.mouse.x += (this.target.x - this.mouse.x) * ease
    this.mouse.y += (this.target.y - this.mouse.y) * ease
    const vx = (this.mouse.x - this.prevMouse.x) / dt
    const vy = (this.mouse.y - this.prevMouse.y) / dt
    this.mvel.x += (clamp(vx, -60, 60) - this.mvel.x) * 0.5
    this.mvel.y += (clamp(vy, -60, 60) - this.mvel.y) * 0.5
    const pk = this.presenceTarget > this.presence ? 0.12 : 0.08
    this.presence += (this.presenceTarget - this.presence) * (1 - Math.pow(1 - pk, dt))
    if (this.presence < 0.001 && this.presenceTarget === 0) this.presence = 0

    // a dead fire that will not come back: stop once the smoke has cleared
    if (this.out && (!o.reignite || this.quenched) && this.presence === 0 && now - this.outAt > 6000 && now - this.lastInput > 6000) {
      this.draw()
      return false
    }

    this.time += (dt * (rm ? 0.4 : 1)) / 60
    this.frameNo++
    let grow = 0
    let fill = 0
    if (this.intro < 1) {
      this.intro = Math.min(1, this.intro + Math.min(rawMs, 50) / INTRO_MS)
      grow = 8
      fill = this.intro > 0.6 ? 0.05 : 0
    } else if (this.quenched) {
      // waits for the intro so the fire has caught before it is smothered
      if (!this.quenchAt) this.quenchAt = now
      // reported once it has collapsed, without waiting on a heat reading
      if (!this.out && now - this.quenchAt > 1100) {
        this.out = true
        this.outAt = now
        this.onStatus?.(true, { durationMs: now - this.firstInput })
      }
    } else if (o.reignite && now - this.lastInput > o.reigniteDelay) {
      grow = clamp(o.reigniteSpeed, 0, 2) * clamp((now - this.lastInput - o.reigniteDelay) / 1000, 0, 1)
    }
    this.stepHeat(dt, grow, fill)
    this.stepParticles(dt)
    if (this.frameNo % 20 === 0) this.measure(now)
    this.draw()
    this.firstFrame()
    return true
  }

  private firstFrame() {
    if (this.onFirstFrame) {
      const cb = this.onFirstFrame
      this.onFirstFrame = null
      // one more frame so the compositor has presented the canvas
      requestAnimationFrame(() => cb())
    }
  }

  private bindTex(unit: number, tex: WebGLTexture | null, loc: WebGLUniformLocation | null) {
    const gl = this.gl
    gl.activeTexture(gl.TEXTURE0 + unit)
    gl.bindTexture(gl.TEXTURE_2D, tex)
    gl.uniform1i(loc, unit)
  }

  private stepHeat(dt: number, grow: number, fill = 0) {
    const gl = this.gl
    const P = this.pHeat
    const o = this.opts
    const r = this.rect
    const rm = o.reducedMotion
    const dst = 1 - this.heatIdx
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.heatFb[dst])
    gl.viewport(0, 0, this.gridW, this.gridH)
    gl.disable(gl.BLEND)
    gl.useProgram(P.p)
    gl.bindVertexArray(this.vao)
    this.bindTex(0, this.heatTex[this.heatIdx], P.u.uPrev)
    gl.uniform2f(P.u.uTexel, 1 / this.gridW, 1 / this.gridH)
    gl.uniform2f(P.u.uSize, r.w, r.h)
    gl.uniform1f(P.u.uDt, dt)
    gl.uniform1f(P.u.uTime, this.time)
    // rise speed over cooling sets the height: visible tips at ~(0.3 + 0.2·flameHeight) of the rect
    const rise = 0.0085
    const reach = clamp(0.2 + 0.3 * o.flameHeight, 0.08, 0.9)
    gl.uniform1f(P.u.uRise, rise)
    gl.uniform1f(P.u.uCool, (rise * 1.9) / reach)
    gl.uniform1f(P.u.uSource, 0.065 * clamp(o.intensity, 0, 2) * (rm ? 0.85 : 1))
    gl.uniform1f(P.u.uTurb, rm ? 0.5 : 1)
    gl.uniform1f(P.u.uBedH, BED_H)
    // brush segment in rect px, y up
    const m0x = this.prevMouse.x - r.x
    const m0y = r.h - (this.prevMouse.y - r.y)
    const m1x = this.mouse.x - r.x
    const m1y = r.h - (this.mouse.y - r.y)
    gl.uniform2f(P.u.uM0, m0x, m0y)
    gl.uniform2f(P.u.uM1, m1x, m1y)
    gl.uniform1f(P.u.uRadius, this.radiusPx())
    gl.uniform1f(P.u.uPresence, this.brushPresence())
    gl.uniform1f(P.u.uSpeed, clamp(Math.hypot(this.mvel.x, this.mvel.y) / 25, 0, 1))
    gl.uniform1f(P.u.uStrength, clamp(o.strength, 0, 2) * (rm ? 0.5 : 1))
    gl.uniform1f(P.u.uGrow, grow)
    gl.uniform1f(P.u.uFill, fill)
    gl.uniform1f(P.u.uSpread, 5)
    // ramps in over ~0.3 s so the fire collapses rather than blinking out
    const q = this.quenchAt ? clamp((performance.now() - this.quenchAt) / 300, 0, 1) : 0
    gl.uniform1f(P.u.uQuench, q * (rm ? 0.05 : 0.09))
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    this.heatIdx = dst
  }

  private stepParticles(dt: number) {
    const gl = this.gl
    const P = this.pPsim
    const o = this.opts
    const r = this.rect
    const dst = 1 - this.partIdx
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.partFb[dst])
    gl.viewport(0, 0, TEX_W, this.texH)
    gl.disable(gl.BLEND)
    gl.useProgram(P.p)
    gl.bindVertexArray(this.vao)
    this.bindTex(0, this.partA[this.partIdx], P.u.uA)
    this.bindTex(1, this.partB[this.partIdx], P.u.uB)
    this.bindTex(2, this.heatTex[this.heatIdx], P.u.uHeat)
    gl.uniform1i(P.u.uTexW, TEX_W)
    gl.uniform1i(P.u.uNE, this.nE)
    gl.uniform1i(P.u.uNS, this.nS)
    gl.uniform1ui(P.u.uFrame, this.frameNo)
    gl.uniform4f(P.u.uRect, r.x, r.y, r.w, r.h)
    gl.uniform1f(P.u.uDt, dt)
    gl.uniform1f(P.u.uTime, this.time)
    gl.uniform1f(P.u.uEmberRate, 0.02 * (o.reducedMotion ? 0.3 : 1))
    gl.uniform1f(P.u.uSmokeRate, o.smoke ? 0.06 : 0)
    const speed = clamp(Math.hypot(this.mvel.x, this.mvel.y) / 25, 0, 1)
    gl.uniform1f(P.u.uAgentRate, o.interactive ? 0.008 * this.brushPresence() * (0.15 + speed) * (o.reducedMotion ? 0.5 : 1) : 0)
    gl.uniform2f(P.u.uMouse, this.mouse.x, this.mouse.y)
    gl.uniform2f(P.u.uMVel, this.mvel.x, this.mvel.y)
    gl.uniform1f(P.u.uRadius, this.radiusPx())
    gl.uniform1f(P.u.uAgent, AGENTS[o.agent])
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    this.partIdx = dst
  }

  /** Reads back how much fire is left and reports it going out / coming back. */
  private measure(now: number) {
    const gl = this.gl
    const P = this.pReduce
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.redFb)
    gl.viewport(0, 0, RED_W, RED_H)
    gl.disable(gl.BLEND)
    gl.useProgram(P.p)
    gl.bindVertexArray(this.vao)
    this.bindTex(0, this.heatTex[this.heatIdx], P.u.uHeat)
    gl.uniform2f(P.u.uCell, 1 / RED_W, 1 / RED_H)
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    gl.readPixels(0, 0, RED_W, RED_H, gl.RGBA, gl.UNSIGNED_BYTE, this.redBuf)
    let h = 0
    for (let i = 0; i < RED_W * RED_H; i++) h += this.redBuf[i * 4]
    this.heatAvg = h / (RED_W * RED_H * 255)
    // the reference is the fire before anyone touched it
    if (!this.firstInput && this.intro >= 1) this.baseline = Math.max(this.baseline, this.heatAvg)
    if (this.baseline <= 0) return
    const ratio = this.heatAvg / this.baseline
    if (!this.out && this.firstInput && ratio < 0.05) {
      this.out = true
      this.outAt = now
      this.onStatus?.(true, { durationMs: now - this.firstInput })
    } else if (this.out && !this.quenched && ratio > 0.25) {
      this.out = false
      this.firstInput = 0
      this.onStatus?.(false, { durationMs: 0 })
    }
  }

  private draw() {
    if (!this.ready || this.lost || this.destroyed) return
    const gl = this.gl
    const o = this.opts
    const r = this.rect
    const dpr = this.canvas.width / this.cssW
    if (this.baseline > 0) this.heatShown += (clamp(this.heatAvg / this.baseline, 0, 1.2) - this.heatShown) * 0.08

    gl.bindFramebuffer(gl.FRAMEBUFFER, null)
    gl.viewport(0, 0, this.canvas.width, this.canvas.height)
    gl.bindVertexArray(this.vao)
    gl.disable(gl.BLEND)

    const F = this.pFlame
    gl.useProgram(F.p)
    this.bindTex(0, this.heatTex[this.heatIdx], F.u.uHeat)
    gl.uniform2f(F.u.uRes, this.cssW, this.cssH)
    gl.uniform1f(F.u.uDpr, dpr)
    gl.uniform4f(F.u.uRect, r.x, r.y, r.w, r.h)
    gl.uniform3f(F.u.uBg, ...o.bg)
    gl.uniform3fv(F.u.uPal, o.palette.flat())
    gl.uniform1f(F.u.uTime, this.time)
    gl.uniform1f(F.u.uShimmer, o.heatDistortion && !o.reducedMotion ? 1 : 0)
    gl.uniform1f(F.u.uHeatTotal, this.heatShown)
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)

    const P = this.pPart
    gl.useProgram(P.p)
    this.bindTex(0, this.partA[this.partIdx], P.u.uA)
    this.bindTex(1, this.partB[this.partIdx], P.u.uB)
    gl.uniform1i(P.u.uTexW, TEX_W)
    gl.uniform2f(P.u.uRes, this.cssW, this.cssH)
    gl.uniform1f(P.u.uAgent, AGENTS[o.agent])
    gl.uniform1f(P.u.uScale, clamp(this.cssW / 1440, 0.75, 1.3))
    gl.uniform1f(P.u.uStreak, o.reducedMotion ? 0.4 : 1)
    gl.uniform3f(P.u.uHot, ...o.palette[2])
    gl.uniform3f(P.u.uMid, ...o.palette[1])
    gl.uniform3f(P.u.uCool, o.palette[0][0] * 0.6, o.palette[0][1] * 0.6, o.palette[0][2] * 0.6)
    gl.uniform1f(P.u.uDpr, dpr)
    gl.enable(gl.BLEND)
    const pass = (base: number, count: number, additive: boolean) => {
      if (count <= 0) return
      gl.blendFunc(gl.ONE, additive ? gl.ONE : gl.ONE_MINUS_SRC_ALPHA)
      gl.uniform1i(P.u.uBase, base)
      gl.uniform1f(P.u.uAdditive, additive ? 1 : 0)
      gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, count)
    }
    pass(this.nE, this.nS, false) // smoke over the flames
    pass(0, this.nE, true) // embers glow
    pass(this.nE + this.nS, this.nA, false) // agent cloud on top
    gl.disable(gl.BLEND)
  }

  destroy() {
    this.destroyed = true
    this.stop()
    this.canvas.removeEventListener("webglcontextlost", this.onLost)
    const gl = this.gl
    if (!this.lost) {
      gl.deleteBuffer(this.quad)
      gl.deleteVertexArray(this.vao)
      for (const t of [...this.heatTex, ...this.partA, ...this.partB, this.redTex]) if (t) gl.deleteTexture(t)
      for (const f of [...this.heatFb, ...this.partFb, this.redFb]) if (f) gl.deleteFramebuffer(f)
      for (const p of [this.pHeat, this.pReduce, this.pPsim, this.pPart, this.pFlame]) if (p) gl.deleteProgram(p.p)
    }
    gl.getExtension("WEBGL_lose_context")?.loseContext()
  }
}

/* ────────────────────────────────────────────────────────────────────
   Public API
   ──────────────────────────────────────────────────────────────────── */

export interface FireHeroLink {
  label: string
  href: string
}

export interface FirePromo {
  badge?: string
  title: string
  body?: string
  cta?: FireHeroLink
  note?: string
}

export interface FireExtinguishHeroProps {
  /* fire */
  /** 0 – 2 */
  intensity?: number
  /** 0 – 2, how high the flames reach. */
  flameHeight?: number
  /** 0 – 1, width of the fire bed as a share of the hero width. */
  fireWidth?: number
  /** 0 – 2, multiplies the number of embers. */
  emberDensity?: number
  /** Flame colours from cool to hot: deep red, orange, yellow, core. */
  palette?: [string, string, string, string]
  /** Wobble of the air above the flames (off with reduced motion). */
  heatDistortion?: boolean

  /* interaction */
  interactive?: boolean
  /** Brush radius, in px at 1440px wide. */
  extinguishRadius?: number
  /** 0 – 2 */
  extinguishStrength?: number
  /** Look of the cloud the cursor sprays. */
  agent?: ExtinguishingAgent
  /** Smoke where the fire is knocked down. */
  smoke?: boolean
  /** Share (0 – 1) of the fire's width one pass must cross to put it all out for good; 0 keeps it gradual. */
  sweepToExtinguish?: number
  /** Fires once each time the fire is put out (total heat below 5%). */
  onExtinguished?: (info: ExtinguishInfo) => void

  /* recovery */
  /** Let the fire grow back from its embers. */
  reignite?: boolean
  /** ms without interaction before it starts growing back. */
  reigniteDelay?: number
  /** 0 – 2 */
  reigniteSpeed?: number
  /** Ignite from a few sparks on load (~1.5 s). */
  intro?: boolean

  /* content */
  brand?: React.ReactNode
  brandHref?: string
  navLinks?: FireHeroLink[]
  navCta?: FireHeroLink
  showNav?: boolean
  eyebrow?: string
  /** Line breaks with \n. */
  headline?: string
  /** Words of the headline set in the accent face and colour. */
  headlineAccent?: string
  body?: string
  primaryCta?: FireHeroLink
  secondaryCta?: FireHeroLink
  hint?: string
  hintTouch?: string
  /** Shown over the fire once it is out (empty to hide). */
  extinguishedMessage?: string
  /** Offer revealed where the fire was, once it is out. Replaces the message. */
  promo?: FirePromo
  /** Visually hidden description of the animation, for screen readers. */
  visualLabel?: string

  /* theme */
  background?: string
  textColor?: string
  accentColor?: string
  headingFont?: string
  accentFont?: string
  bodyFont?: string
  /** Load the default Google Fonts (Geist + Instrument Serif, both OFL). */
  loadFonts?: boolean

  /** Hero height. Default fills the screen. */
  height?: string
  className?: string
  style?: React.CSSProperties
}

const DEFAULTS = {
  brand: "Matafuegos Pesse",
  navLinks: [
    { label: "Extintores", href: "#" },
    { label: "Recarga", href: "#" },
    { label: "Mantenimiento", href: "#" },
    { label: "Contacto", href: "#" },
  ],
  navCta: { label: "Solicitar presupuesto", href: "#" },
  eyebrow: "Protección contra incendios",
  headline: "Apagamos el fuego\nantes de que empiece.",
  headlineAccent: "antes de que empiece.",
  body: "Venta, recarga y mantenimiento de extintores con certificación. Respuesta rápida para hogares, comercios e industrias.",
  primaryCta: { label: "Solicitar presupuesto", href: "#" },
  secondaryCta: { label: "Ver servicios", href: "#" },
  hint: "Pasa el cursor para apagar el fuego",
  hintTouch: "Desliza para apagar el fuego",
  extinguishedMessage: "Así de rápido actuamos.",
  visualLabel: "Animación de un fuego que se apaga al pasar el cursor por encima, como con un extintor.",
  palette: ["#5A0A06", "#D42A1C", "#FF8C42", "#FFF6EA"] as [string, string, string, string],
  background: "#0B0B0C",
  textColor: "#FFFFFF",
  accentColor: "#C41E2A",
  headingFont: "'Geist', 'Helvetica Neue', Arial, sans-serif",
  accentFont: "'Instrument Serif', 'Times New Roman', serif",
  bodyFont: "'Geist', 'Helvetica Neue', Arial, sans-serif",
}

/* ────────────────────────────────────────────────────────────────────
   Layout
   ──────────────────────────────────────────────────────────────────── */

/** The fire bed sits at the bottom of the band between the nav and the copy,
 *  centred; the heat map covers the band above it, where the flames rise. */
function computeRect(w: number, band: { top: number; bottom: number }, fireWidth: number): Rect {
  const bandH = Math.max(120, band.bottom - band.top)
  // narrow screens: a wider share, or the fire looks like a candle
  const share = w < 640 ? Math.min(1, fireWidth * 1.45) : w < 1024 ? Math.min(1, fireWidth * 1.2) : fireWidth
  const rw = w * share
  const rh = bandH * 1.04
  const bottom = band.top + rh
  return { x: (w - rw) / 2, y: bottom - rh, w: rw, h: rh }
}

/* ────────────────────────────────────────────────────────────────────
   Styles
   ──────────────────────────────────────────────────────────────────── */

const CSS = `
.fh-root{position:relative;width:100%;height:var(--fh-h);overflow:hidden;isolation:isolate;container-type:size;
  background:var(--fh-bg);color:var(--fh-fg);font-family:var(--fh-body);-webkit-font-smoothing:antialiased;
  touch-action:pan-y;display:flex;flex-direction:column;box-sizing:border-box}
.fh-root *,.fh-root *::before,.fh-root *::after{box-sizing:border-box}
.fh-stage{position:absolute;inset:0;z-index:0;pointer-events:none}
.fh-canvas{position:absolute;inset:0;width:100%;height:100%;display:block;opacity:0;transition:opacity .6s ease}
.fh-root[data-gl="on"] .fh-canvas{opacity:1}
.fh-root[data-gl="on"] .fh-cssfire{opacity:0}
.fh-sr{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}

/* CSS fire: shown until WebGL is up, and instead of it when it is not available */
.fh-cssfire{position:absolute;display:block;transition:opacity .6s ease;filter:blur(6px);mix-blend-mode:screen}
.fh-cssfire::before{content:"";position:absolute;inset:auto 4% 0 4%;height:18%;border-radius:50%;
  background:radial-gradient(ellipse at 50% 100%,rgba(255,140,40,.55),rgba(160,30,10,.25) 55%,transparent 72%);filter:blur(10px)}
.fh-cssfire span{position:absolute;bottom:0;border-radius:50% 50% 45% 45%/60% 60% 40% 40%;transform-origin:50% 100%;
  background:radial-gradient(ellipse at 50% 85%,var(--fh-p3) 0%,var(--fh-p2) 22%,var(--fh-p1) 48%,var(--fh-p0) 68%,transparent 78%);
  animation:fh-flick 1.4s ease-in-out infinite alternate}
.fh-cssfire span:nth-child(1){left:6%;width:26%;height:52%;animation-duration:1.1s}
.fh-cssfire span:nth-child(2){left:22%;width:30%;height:78%;animation-duration:1.5s;animation-delay:-.4s}
.fh-cssfire span:nth-child(3){left:38%;width:26%;height:92%;animation-duration:1.25s;animation-delay:-.9s}
.fh-cssfire span:nth-child(4){left:52%;width:30%;height:72%;animation-duration:1.6s;animation-delay:-.2s}
.fh-cssfire span:nth-child(5){left:70%;width:24%;height:50%;animation-duration:1.2s;animation-delay:-.7s}
@keyframes fh-flick{0%{transform:scale(1,1) skewX(0deg);opacity:.85}35%{transform:scale(.94,1.08) skewX(2deg);opacity:1}
  70%{transform:scale(1.04,.93) skewX(-2deg);opacity:.9}100%{transform:scale(.97,1.05) skewX(1deg);opacity:1}}

.fh-nav{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;gap:24px;
  padding:26px clamp(20px,3.2cqw,48px) 0}
.fh-brand{display:inline-flex;align-items:center;font-family:var(--fh-head);font-weight:600;font-size:17px;letter-spacing:-.02em;color:inherit;text-decoration:none}
.fh-links{display:flex;align-items:center;gap:clamp(18px,2.4cqw,36px);list-style:none;margin:0;padding:0}
.fh-link{color:inherit;text-decoration:none;font-size:13.5px;letter-spacing:-.005em;opacity:.72;transition:opacity .2s}
.fh-link:hover{opacity:1}
.fh-navcta{color:inherit;text-decoration:none;font-size:13.5px;padding:8px 14px;border:1px solid color-mix(in srgb,var(--fh-fg) 22%,transparent);
  border-radius:999px;transition:background .25s,color .25s}
.fh-navcta:hover{background:var(--fh-fg);color:var(--fh-bg)}
.fh-hint{position:absolute;z-index:1;transform:translate(-50%,0);display:flex;align-items:center;gap:10px;white-space:nowrap;
  font-size:11px;letter-spacing:.14em;text-transform:uppercase;opacity:.6;pointer-events:none;transition:opacity .8s ease}
.fh-hint::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--fh-acc);animation:fh-pulse 2.4s ease-in-out infinite}
.fh-root[data-touched="1"] .fh-hint{opacity:0}
@keyframes fh-pulse{0%,100%{transform:scale(.6);opacity:.45}50%{transform:scale(1);opacity:1}}
.fh-out{position:absolute;z-index:3;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:16px;text-align:center;
  opacity:0;visibility:hidden;transition:opacity .9s ease,visibility 0s linear .9s,transform .9s cubic-bezier(.2,.7,.2,1)}
.fh-root[data-out="1"] .fh-out{opacity:1;visibility:visible;transition:opacity .9s ease .3s,visibility 0s,transform .9s cubic-bezier(.2,.7,.2,1) .3s}
.fh-outmsg{margin:0;font-family:var(--fh-accent);font-style:var(--fh-accent-style,italic);font-size:clamp(28px,min(4.2cqw,7cqh),56px);line-height:1.05;
  letter-spacing:-.02em;color:var(--fh-fg);text-wrap:balance}
.fh-out-promo{width:min(520px,calc(100cqw - 32px))}
.fh-root[data-out="1"] .fh-cssfire{opacity:0}
.fh-promo{display:flex;flex-direction:column;align-items:center;gap:14px;width:100%;padding:clamp(22px,3cqw,34px) clamp(20px,3cqw,36px);
  border:1px solid color-mix(in srgb,var(--fh-acc) 55%,transparent);border-radius:20px;
  background:color-mix(in srgb,var(--fh-bg) 82%,transparent);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);
  box-shadow:0 24px 60px -24px color-mix(in srgb,var(--fh-acc) 45%,transparent)}
.fh-promo-badge{margin:0;padding:6px 12px;border-radius:999px;background:var(--fh-acc);color:#fff;font-size:11px;font-weight:700;
  letter-spacing:.14em;text-transform:uppercase}
.fh-promo-title{margin:0;font-family:var(--fh-head);font-weight:600;font-size:clamp(28px,min(4cqw,7cqh),48px);line-height:1;letter-spacing:-.02em;text-wrap:balance}
.fh-promo-body{margin:0;font-size:clamp(14.5px,1.05cqw,16px);line-height:1.5;opacity:.82;text-wrap:pretty;max-width:42ch}
.fh-promo .fh-btn{margin-top:4px}
.fh-promo-note{margin:0;font-size:11.5px;opacity:.5}
.fh-spacer{flex:1 1 auto;min-height:0}
.fh-content{position:relative;z-index:2;display:grid;grid-template-columns:minmax(0,1.7fr) minmax(0,1fr);align-items:end;
  gap:clamp(24px,4cqw,72px);padding:0 clamp(20px,3.2cqw,48px) clamp(28px,3.4cqw,52px)}
.fh-eyebrow{font-size:12px;letter-spacing:.12em;text-transform:uppercase;opacity:.7;margin:0 0 clamp(14px,1.6cqw,22px);
  display:flex;align-items:center;gap:12px}
.fh-eyebrow::before{content:"";width:28px;height:1px;background:var(--fh-acc)}
.fh-h1{font-family:var(--fh-head);font-weight:500;font-size:clamp(40px,min(6.2cqw,11cqh),116px);line-height:.94;letter-spacing:-.04em;margin:0;
  text-wrap:balance}
.fh-h1 .fh-line{display:block}
.fh-accent{font-family:var(--fh-accent);font-style:var(--fh-accent-style,italic);font-weight:400;letter-spacing:-.02em;color:var(--fh-acc)}
.fh-aside{max-width:400px;justify-self:end;padding-bottom:.6em}
.fh-body{font-size:clamp(15px,1.1cqw,17px);line-height:1.5;letter-spacing:-.01em;margin:0 0 26px;opacity:.8;text-wrap:pretty}
.fh-ctas{display:flex;flex-wrap:wrap;align-items:center;gap:22px}
.fh-btn{display:inline-flex;align-items:center;gap:10px;height:46px;padding:0 22px;border-radius:999px;background:var(--fh-acc);
  color:#fff;text-decoration:none;font-size:14.5px;font-weight:600;letter-spacing:-.01em;transition:transform .3s cubic-bezier(.2,.7,.2,1),filter .2s}
.fh-btn:hover{transform:translateY(-1px);filter:brightness(1.08)}
.fh-btn svg,.fh-txt svg{transition:transform .3s cubic-bezier(.2,.7,.2,1)}
.fh-btn:hover svg,.fh-txt:hover svg{transform:translateX(3px)}
.fh-txt{display:inline-flex;align-items:center;gap:8px;color:inherit;text-decoration:none;font-size:14.5px;font-weight:500;
  letter-spacing:-.01em;padding:4px 0;border-bottom:1px solid color-mix(in srgb,var(--fh-fg) 30%,transparent)}
.fh-root a:focus-visible{outline:2px solid var(--fh-fg);outline-offset:4px;border-radius:4px}
@container (max-width:1023px){
  .fh-content{grid-template-columns:1fr;gap:28px}
  .fh-aside{justify-self:start;max-width:520px;padding-bottom:0}
  .fh-h1{font-size:clamp(40px,min(9.5cqw,9cqh),96px)}
}
@container (max-width:767px){
  .fh-links li:not(.fh-keep){display:none}
}
@container (max-width:639px){
  .fh-nav{padding-top:20px}
  .fh-h1{font-size:clamp(36px,min(12.5cqw,7.2cqh),60px);line-height:.96}
  .fh-body{font-size:15px;margin-bottom:20px}
  .fh-eyebrow{font-size:11px}
  .fh-ctas{gap:18px}
  .fh-btn{height:48px}
  .fh-content{padding-bottom:40px}
}
@media (prefers-reduced-motion:reduce){
  .fh-hint::before{animation:none}
  .fh-cssfire span{animation-duration:4s!important}
  .fh-canvas,.fh-cssfire,.fh-btn,.fh-btn svg,.fh-txt svg,.fh-out{transition:none}
}
`

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* ────────────────────────────────────────────────────────────────────
   Component
   ──────────────────────────────────────────────────────────────────── */

let fontsInjected = false
function injectFonts() {
  if (fontsInjected || typeof document === "undefined") return
  fontsInjected = true
  const id = "fh-fonts"
  if (document.getElementById(id)) return
  const l = document.createElement("link")
  l.id = id
  l.rel = "stylesheet"
  l.href = "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap"
  document.head.appendChild(l)
}

function renderHeadline(text: string, accent: string) {
  return text.split("\n").map((line, li) => {
    let content: React.ReactNode = line
    const a = accent && accent.trim()
    if (a) {
      const idx = line.indexOf(a)
      if (idx >= 0) {
        content = (
          <>
            {line.slice(0, idx)}
            <span className="fh-accent">{a}</span>
            {line.slice(idx + a.length)}
          </>
        )
      }
    }
    return (
      <span className="fh-line" key={li}>
        {content}
      </span>
    )
  })
}

export default function FireExtinguishHero(props: FireExtinguishHeroProps) {
  const {
    intensity = 1,
    flameHeight = 1,
    fireWidth = 0.6,
    emberDensity = 1,
    palette = DEFAULTS.palette,
    heatDistortion = true,
    interactive = true,
    extinguishRadius = 120,
    extinguishStrength = 1,
    agent = "powder",
    smoke = true,
    sweepToExtinguish = 0.6,
    onExtinguished,
    reignite = true,
    reigniteDelay = 2500,
    reigniteSpeed = 1,
    intro = true,
    brand = DEFAULTS.brand,
    brandHref = "#",
    navLinks = DEFAULTS.navLinks,
    navCta = DEFAULTS.navCta,
    showNav = true,
    eyebrow = DEFAULTS.eyebrow,
    headline = DEFAULTS.headline,
    headlineAccent = DEFAULTS.headlineAccent,
    body = DEFAULTS.body,
    primaryCta = DEFAULTS.primaryCta,
    secondaryCta = DEFAULTS.secondaryCta,
    hint = DEFAULTS.hint,
    hintTouch = DEFAULTS.hintTouch,
    extinguishedMessage = DEFAULTS.extinguishedMessage,
    promo,
    visualLabel = DEFAULTS.visualLabel,
    background = DEFAULTS.background,
    textColor = DEFAULTS.textColor,
    accentColor = DEFAULTS.accentColor,
    headingFont = DEFAULTS.headingFont,
    accentFont = DEFAULTS.accentFont,
    bodyFont = DEFAULTS.bodyFont,
    loadFonts = true,
    height = "100svh",
    className,
    style,
  } = props

  const rootRef = React.useRef<HTMLElement>(null)
  const stageRef = React.useRef<HTMLDivElement>(null)
  const cssFireRef = React.useRef<HTMLDivElement>(null)
  const hintRef = React.useRef<HTMLDivElement>(null)
  const outRef = React.useRef<HTMLDivElement>(null)
  const navRef = React.useRef<HTMLElement>(null)
  const contentRef = React.useRef<HTMLDivElement>(null)
  const engineRef = React.useRef<FireEngine | null>(null)
  const [isTouch, setIsTouch] = React.useState(false)
  const [isOut, setIsOut] = React.useState(false)

  const widthRef = React.useRef(clamp(fireWidth, 0.1, 1))
  const rectRef = React.useRef<Rect>({ x: 0, y: 0, w: 1, h: 1 })
  const sweepRef = React.useRef(clamp(sweepToExtinguish, 0, 1))
  const onExtinguishedRef = React.useRef(onExtinguished)

  const bgRgb = React.useMemo(() => hexToRgb(background, [0.043, 0.043, 0.047]), [background])
  const paletteKey = palette.join(",")
  const palRgb = React.useMemo(
    () => palette.map((c, i) => hexToRgb(c, hexToRgb(DEFAULTS.palette[i], [1, 0.5, 0.1]))) as [RGB, RGB, RGB, RGB],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [paletteKey]
  )

  const engineOpts = (rm: boolean): EngineOptions => ({
    intensity: clamp(intensity, 0, 2),
    flameHeight: clamp(flameHeight, 0, 2),
    emberDensity: clamp(emberDensity, 0, 2),
    palette: palRgb,
    heatDistortion,
    interactive,
    radius: clamp(extinguishRadius, 30, 500),
    strength: clamp(extinguishStrength, 0, 2),
    agent,
    smoke,
    reignite,
    reigniteDelay: clamp(reigniteDelay, 0, 60000),
    reigniteSpeed: clamp(reigniteSpeed, 0, 2),
    intro,
    reducedMotion: rm,
    bg: bgRgb,
  })
  const optsRef = React.useRef(engineOpts)
  // the engine reads the latest props through refs, refreshed after every render
  React.useLayoutEffect(() => {
    widthRef.current = clamp(fireWidth, 0.1, 1)
    sweepRef.current = clamp(sweepToExtinguish, 0, 1)
    onExtinguishedRef.current = onExtinguished
    optsRef.current = engineOpts
  })

  React.useEffect(() => {
    if (loadFonts) injectFonts()
  }, [loadFonts])

  const relayout = React.useCallback(() => {
    const root = rootRef.current
    if (!root) return
    const w = root.clientWidth
    const h = root.clientHeight
    const nav = navRef.current
    const content = contentRef.current
    const band = {
      top: nav ? nav.offsetTop + nav.offsetHeight + 8 : 16,
      bottom: content ? content.offsetTop - 8 : h,
    }
    const rect = computeRect(w, band, widthRef.current)
    rectRef.current = rect
    const css = cssFireRef.current
    if (css) {
      css.style.left = rect.x + rect.w * 0.12 + "px"
      css.style.width = rect.w * 0.76 + "px"
      css.style.top = rect.y + rect.h * 0.35 + "px"
      css.style.height = rect.h * 0.65 + "px"
    }
    // a very short hero leaves no room over the fire for the cue or the message
    const roomy = band.bottom - band.top >= 180
    const hintEl = hintRef.current
    if (hintEl) {
      hintEl.style.display = roomy ? "" : "none"
      hintEl.style.left = clamp(rect.x + rect.w / 2, 90, w - 90) + "px"
      hintEl.style.top = rect.y + rect.h * 0.12 + "px"
    }
    const outEl = outRef.current
    if (outEl) {
      // the offer is the payoff, so it shows even in a short hero, just higher up
      outEl.style.display = roomy || outEl.dataset.promo ? "" : "none"
      outEl.style.left = w / 2 + "px"
      outEl.style.top = Math.max(band.top + outEl.offsetHeight / 2, rect.y + rect.h * 0.55) + "px"
    }
    engineRef.current?.resize(w, h, rect)
  }, [])

  // engine lifecycle
  React.useEffect(() => {
    const root = rootRef.current
    const stage = stageRef.current
    if (!root || !stage) return
    // a fresh canvas per engine: a released WebGL context can never be reused
    const canvas = document.createElement("canvas")
    canvas.className = "fh-canvas"
    stage.appendChild(canvas)
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const coarse = window.matchMedia("(hover: none), (pointer: coarse)")
    setIsTouch(coarse.matches)
    let engine: FireEngine | null = null
    const fail = () => {
      root.dataset.gl = "off"
    }
    try {
      engine = new FireEngine(canvas, optsRef.current(mq.matches), fail)
      engine.onFirstFrame = () => {
        if (root.dataset.gl !== "off") root.dataset.gl = "on"
      }
      engine.onStatus = (out, info) => {
        setIsOut(out)
        if (out) onExtinguishedRef.current?.(info)
      }
      engineRef.current = engine
    } catch {
      fail()
    }

    const ro = new ResizeObserver(() => relayout())
    ro.observe(root)
    // the band moves when fonts load or the copy reflows
    if (navRef.current) ro.observe(navRef.current)
    if (contentRef.current) ro.observe(contentRef.current)
    if (outRef.current) ro.observe(outRef.current)
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) engine?.setVisible(e.isIntersecting && !document.hidden)
    })
    io.observe(root)
    const onVis = () => engine?.setVisible(!document.hidden)
    document.addEventListener("visibilitychange", onVis)
    const onMq = () => engine?.setOptions({ reducedMotion: mq.matches })
    mq.addEventListener?.("change", onMq)

    const pos = (e: PointerEvent) => {
      const b = root.getBoundingClientRect()
      return [e.clientX - b.left, e.clientY - b.top] as const
    }
    // one pass: the share of the fire's width the pointer has crossed over the flames
    const BINS = 24
    const swept = new Uint8Array(BINS)
    let sweptCount = 0
    let lastX: number | null = null
    let done = false
    const sweep = (x: number, y: number) => {
      const need = sweepRef.current
      if (done || need <= 0) return
      const r = rectRef.current
      if (y < r.y - 40 || y > r.y + r.h + 40) {
        lastX = null
        return
      }
      const from = lastX ?? x
      lastX = x
      const a = Math.floor(((Math.min(from, x) - r.x) / r.w) * BINS)
      const b = Math.floor(((Math.max(from, x) - r.x) / r.w) * BINS)
      for (let i = Math.max(0, a); i <= Math.min(BINS - 1, b); i++) {
        if (!swept[i]) {
          swept[i] = 1
          sweptCount++
        }
      }
      if (sweptCount >= Math.ceil(need * BINS)) {
        done = true
        if (engine && root.dataset.gl !== "off") engine.quench()
        else {
          // CSS fallback: nothing to simulate, so just put it out
          setIsOut(true)
          onExtinguishedRef.current?.({ durationMs: 0 })
        }
      }
    }
    let touched = false
    const markTouched = () => {
      if (!touched) {
        touched = true
        root.dataset.touched = "1"
      }
    }
    const onMove = (e: PointerEvent) => {
      const [x, y] = pos(e)
      const touch = e.pointerType === "touch"
      if (touch && e.buttons === 0 && e.pressure === 0) return
      engine?.pointer("move", x, y, touch)
      sweep(x, y)
      markTouched()
    }
    const onDown = (e: PointerEvent) => {
      const [x, y] = pos(e)
      lastX = null
      engine?.pointer("down", x, y, e.pointerType === "touch")
      sweep(x, y)
      markTouched()
    }
    const onUp = (e: PointerEvent) => {
      const [x, y] = pos(e)
      engine?.pointer("up", x, y, e.pointerType === "touch")
      lastX = null
    }
    const onLeave = (e: PointerEvent) => {
      const [x, y] = pos(e)
      engine?.pointer("leave", x, y, e.pointerType === "touch")
      lastX = null
    }
    root.addEventListener("pointermove", onMove, { passive: true })
    root.addEventListener("pointerdown", onDown, { passive: true })
    root.addEventListener("pointerup", onUp, { passive: true })
    root.addEventListener("pointercancel", onUp, { passive: true })
    root.addEventListener("pointerleave", onLeave, { passive: true })
    relayout()

    return () => {
      ro.disconnect()
      io.disconnect()
      document.removeEventListener("visibilitychange", onVis)
      mq.removeEventListener?.("change", onMq)
      root.removeEventListener("pointermove", onMove)
      root.removeEventListener("pointerdown", onDown)
      root.removeEventListener("pointerup", onUp)
      root.removeEventListener("pointercancel", onUp)
      root.removeEventListener("pointerleave", onLeave)
      engine?.destroy()
      engineRef.current = null
      canvas.remove()
      delete root.dataset.gl
    }
  }, [relayout])

  // live option updates without re-creating the engine
  React.useEffect(() => {
    const e = engineRef.current
    if (!e) return
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    e.setOptions(optsRef.current(rm))
  }, [intensity, flameHeight, emberDensity, palRgb, heatDistortion, interactive, extinguishRadius, extinguishStrength, agent, smoke, reignite, reigniteDelay, reigniteSpeed, intro, bgRgb])

  React.useEffect(() => {
    relayout()
  }, [fireWidth, isOut, relayout])

  const vars = {
    "--fh-bg": background,
    "--fh-fg": textColor,
    "--fh-acc": accentColor,
    "--fh-head": headingFont,
    "--fh-accent": accentFont,
    "--fh-body": bodyFont,
    "--fh-h": height,
    "--fh-p0": palette[0],
    "--fh-p1": palette[1],
    "--fh-p2": palette[2],
    "--fh-p3": palette[3],
  } as React.CSSProperties

  const hintText = isTouch ? hintTouch : hint

  return (
    <section
      ref={rootRef}
      className={"fh-root" + (className ? " " + className : "")}
      style={{ ...vars, ...style }}
      data-out={isOut && (promo || extinguishedMessage) ? "1" : undefined}
    >
      <style>{CSS}</style>
      <div ref={stageRef} className="fh-stage" aria-hidden="true">
        <div ref={cssFireRef} className="fh-cssfire">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <span className="fh-sr">{visualLabel}</span>

      {showNav && (
        <nav ref={navRef} className="fh-nav" aria-label="Principal">
          <a className="fh-brand" href={brandHref}>
            {brand}
          </a>
          <ul className="fh-links">
            {navLinks.map((l, i) => (
              <li key={i}>
                <a className="fh-link" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
            {navCta && navCta.label && (
              <li className="fh-keep">
                <a className="fh-navcta" href={navCta.href}>
                  {navCta.label}
                </a>
              </li>
            )}
          </ul>
        </nav>
      )}

      {interactive && hintText ? (
        <div ref={hintRef} className="fh-hint" aria-hidden="true">
          {hintText}
        </div>
      ) : null}

      {promo ? (
        <div ref={outRef} className="fh-out fh-out-promo" data-promo="1" aria-live="polite">
          {isOut ? (
            <div className="fh-promo">
              {promo.badge ? <p className="fh-promo-badge">{promo.badge}</p> : null}
              <p className="fh-promo-title">{promo.title}</p>
              {promo.body ? <p className="fh-promo-body">{promo.body}</p> : null}
              {promo.cta && promo.cta.label ? (
                <a className="fh-btn" href={promo.cta.href}>
                  {promo.cta.label}
                  <Arrow />
                </a>
              ) : null}
              {promo.note ? <p className="fh-promo-note">{promo.note}</p> : null}
            </div>
          ) : null}
        </div>
      ) : extinguishedMessage ? (
        <div ref={outRef} className="fh-out" aria-live="polite">
          {isOut ? <p className="fh-outmsg">{extinguishedMessage}</p> : null}
          {isOut && primaryCta && primaryCta.label ? (
            <a className="fh-btn" href={primaryCta.href}>
              {primaryCta.label}
              <Arrow />
            </a>
          ) : null}
        </div>
      ) : null}

      <div className="fh-spacer" />

      <div ref={contentRef} className="fh-content">
        <div>
          {eyebrow ? <p className="fh-eyebrow">{eyebrow}</p> : null}
          <h1 className="fh-h1">{renderHeadline(headline, headlineAccent)}</h1>
        </div>
        <div className="fh-aside">
          {body ? <p className="fh-body">{body}</p> : null}
          <div className="fh-ctas">
            {primaryCta && primaryCta.label ? (
              <a className="fh-btn" href={primaryCta.href}>
                {primaryCta.label}
                <Arrow />
              </a>
            ) : null}
            {secondaryCta && secondaryCta.label ? (
              <a className="fh-txt" href={secondaryCta.href}>
                {secondaryCta.label}
                <Arrow />
              </a>
            ) : null}
          </div>
        </div>
      </div>

    </section>
  )
}
