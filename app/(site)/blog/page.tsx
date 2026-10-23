import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import "@/components/inner-page.css"

export const metadata: Metadata = {
  title: "Blog — Seguridad Contra Incendios | Matafuegos Pesse",
  description: "Artículos sobre matafuegos, normativas y prevención de incendios para empresas de Buenos Aires. Por Matafuegos Pesse.",
  robots: "index, follow",
  alternates: {
    canonical: "https://matafuegospesse.com/blog/"
  },
  openGraph: {
    type: "website",
    title: "Blog — Seguridad Contra Incendios | Matafuegos Pesse",
    description: "Artículos sobre seguridad contra incendios, normativas y mantenimiento de matafuegos en Buenos Aires.",
    url: "https://matafuegospesse.com/blog/"
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://matafuegospesse.com/blog/",
  name: "Blog de Seguridad Contra Incendios",
  inLanguage: "es-AR",
  publisher: {
    "@id": "https://matafuegospesse.com/#business"
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: "https://matafuegospesse.com/blog/cuantos-matafuegos-necesita-mi-empresa",
        name: "¿Cuántos matafuegos necesita mi empresa?"
      },
      {
        "@type": "ListItem",
        position: 2,
        url: "https://matafuegospesse.com/blog/oblea-tarjeta-matafuego",
        name: "Oblea y tarjeta del matafuego: qué son y cómo verificarlas"
      },
      {
        "@type": "ListItem",
        position: 3,
        url: "https://matafuegospesse.com/blog/como-elegir-empresa-recarga-matafuegos",
        name: "Cómo elegir una empresa de recarga de matafuegos"
      },
      {
        "@type": "ListItem",
        position: 4,
        url: "https://matafuegospesse.com/blog/cada-cuanto-revisar-matafuegos",
        name: "¿Cada cuánto hay que revisar los matafuegos?"
      },
      {
        "@type": "ListItem",
        position: 5,
        url: "https://matafuegospesse.com/blog/tipos-de-matafuegos",
        name: "Tipos de matafuegos: cuál usar en cada situación"
      },
      {
        "@type": "ListItem",
        position: 6,
        url: "https://matafuegospesse.com/blog/incendio-en-casa-extintor-salvo-mi-hogar",
        name: "\"Tenía un matafuego en casa y salvé todo\""
      },
      {
        "@type": "ListItem",
        position: 7,
        url: "https://matafuegospesse.com/blog/buenas-practicas-contra-incendios-en-empresas",
        name: "40 segundos y cero heridos: cómo una brigada capacitada salvó una fábrica"
      },
      {
        "@type": "ListItem",
        position: 8,
        url: "https://matafuegospesse.com/blog/cambio-polvo-quimico-seco-cada-10-anos",
        name: "Por qué hay que cambiar el polvo del matafuego cada 10 años"
      },
      {
        "@type": "ListItem",
        position: 9,
        url: "https://matafuegospesse.com/blog/matafuego-vencido-puede-explotar",
        name: "Qué pasa cuando un matafuego no recibe el mantenimiento correcto"
      },
      {
        "@type": "ListItem",
        position: 10,
        url: "https://matafuegospesse.com/blog/estafa-matafuegos-retiran-cobran-de-mas",
        name: "Cuidado: la estafa del matafuego que ya afectó a comerciantes en todo el país"
      },
      {
        "@type": "ListItem",
        position: 11,
        url: "https://matafuegospesse.com/blog/por-que-los-matafuegos-baratos-pueden-salir-caros",
        name: "Por qué un matafuego barato puede salirte muy caro"
      },
      {
        "@type": "ListItem",
        position: 12,
        url: "https://matafuegospesse.com/blog/normativa-matafuegos-argentina",
        name: "Normativa de matafuegos en Argentina: qué dice la ley"
      }
    ]
  }
}

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <JsonLd data={jsonLd} />
      <div className="blog-hero">
        <h1>Blog de Seguridad Contra Incendios</h1>
        <p>Normativas, mantenimiento y prevención para empresas de Buenos Aires</p>
      </div>
      <div className="container">
        <div className="posts-grid">
          <a href="/blog/cuantos-matafuegos-necesita-mi-empresa" className="post-card">
            <span className="post-card-tag tag-normativa">Normativa</span>
            <div className="post-card-body">
              <h2>¿Cuántos matafuegos necesita mi empresa?</h2>
              <p>
                1 cada 200 m² y a no más de 20 metros: cómo calcularlo paso a paso según el Decreto 351/79, con ejemplos para locales, oficinas y depósitos.
              </p>
              <div className="post-meta">14 de octubre de 2026 · 6 min de lectura</div>
              <span className="read-more">Leer artículo →</span>
            </div>
          </a>
          {" "}
          <a href="/blog/oblea-tarjeta-matafuego" className="post-card">
            <span className="post-card-tag tag-guia">Guía</span>
            <div className="post-card-body">
              <h2>Oblea y tarjeta del matafuego: qué son y cómo verificarlas</h2>
              <p>
                Qué datos tiene que tener la etiqueta, qué es la tarjeta de CABA y cómo comprobar en el registro oficial que la empresa está habilitada.
              </p>
              <div className="post-meta">14 de octubre de 2026 · 5 min de lectura</div>
              <span className="read-more">Leer artículo →</span>
            </div>
          </a>
          {" "}
          <a href="/blog/como-elegir-empresa-recarga-matafuegos" className="post-card">
            <span className="post-card-tag tag-guia">Guía</span>
            <div className="post-card-body">
              <h2>Cómo elegir una empresa de recarga de matafuegos</h2>
              <p>
                Certificación, etiqueta, factura, plazos y señales de alerta: las 8 claves para comparar presupuestos y no caer en una estafa.
              </p>
              <div className="post-meta">14 de octubre de 2026 · 6 min de lectura</div>
              <span className="read-more">Leer artículo →</span>
            </div>
          </a>
          {" "}
          <a href="/blog/cada-cuanto-revisar-matafuegos" className="post-card">
            <span className="post-card-tag">Mantenimiento</span>
            <div className="post-card-body">
              <h2>¿Cada cuánto hay que revisar los matafuegos?</h2>
              <p>
                La normativa IRAM y ART establece plazos claros. Incumplirlos puede invalidar tu seguro y generar multas. Acá te explicamos los ciclos obligatorios.
              </p>
              <div className="post-meta">18 de septiembre de 2026 · 4 min de lectura</div>
              <span className="read-more">Leer artículo →</span>
            </div>
          </a>
          {" "}
          <a href="/blog/tipos-de-matafuegos" className="post-card">
            <span className="post-card-tag tag-guia">Guía</span>
            <div className="post-card-body">
              <h2>Tipos de matafuegos: cuál usar en cada situación</h2>
              <p>
                Agua, polvo, CO₂, halón… elegir mal puede empeorar un incendio. Esta guía explica qué tipo corresponde según el tipo de fuego y la actividad de tu empresa.
              </p>
              <div className="post-meta">10 de septiembre de 2026 · 5 min de lectura</div>
              <span className="read-more">Leer artículo →</span>
            </div>
          </a>
          {" "}
          <a href="/blog/incendio-en-casa-extintor-salvo-mi-hogar" className="post-card">
            <span className="post-card-tag tag-historia">Historia real</span>
            <div className="post-card-body">
              <h2>{"\"Tenía un matafuego en casa y salvé todo\""}</h2>
              <p>
                Ramón se despertó a la 1am con su cocina en llamas. Tenía un extintor detrás de la puerta. Esta es la historia de los veinte segundos que salvaron su casa en Morón.
              </p>
              <div className="post-meta">18 de septiembre de 2026 · 4 min de lectura</div>
              <span className="read-more">Leer artículo →</span>
            </div>
          </a>
          {" "}
          <a href="/blog/buenas-practicas-contra-incendios-en-empresas" className="post-card">
            <span className="post-card-tag tag-historia">Historia real</span>
            <div className="post-card-body">
              <h2>40 segundos y cero heridos: cómo una brigada capacitada salvó una fábrica</h2>
              <p>
                Un cortocircuito en un depósito de Merlo. 23 personas trabajando. La brigada actuó en 40 segundos. Lo que pasó antes para que fuera posible.
              </p>
              <div className="post-meta">18 de septiembre de 2026 · 5 min de lectura</div>
              <span className="read-more">Leer artículo →</span>
            </div>
          </a>
          {" "}
          <a href="/blog/cambio-polvo-quimico-seco-cada-10-anos" className="post-card">
            <span className="post-card-tag">Mantenimiento</span>
            <div className="post-card-body">
              <h2>Por qué hay que cambiar el polvo del matafuego cada 10 años</h2>
              <p>
                El polvo ABC se compacta, absorbe humedad y pierde eficacia aunque el extintor nunca fue usado. Es el mantenimiento más ignorado — y es obligatorio por norma IRAM.
              </p>
              <div className="post-meta">18 de septiembre de 2026 · 4 min de lectura</div>
              <span className="read-more">Leer artículo →</span>
            </div>
          </a>
          {" "}
          <a href="/blog/matafuego-vencido-puede-explotar" className="post-card">
            <span className="post-card-tag">Seguridad</span>
            <div className="post-card-body">
              <h2>Qué pasa cuando un matafuego no recibe el mantenimiento correcto</h2>
              <p>
                En mayo de 2026 murió un empleado en Chaco cuando explotó un extintor durante una recarga. El dueño fue imputado por homicidio culposo. Qué falló y cómo se previene con mantenimiento certificado.
              </p>
              <div className="post-meta">18 de septiembre de 2026 · 5 min de lectura</div>
              <span className="read-more">Leer artículo →</span>
            </div>
          </a>
          {" "}
          <a href="/blog/estafa-matafuegos-retiran-cobran-de-mas" className="post-card">
            <span className="post-card-tag tag-alerta">Alerta</span>
            <div className="post-card-body">
              <h2>Cuidado: la estafa del matafuego que ya afectó a comerciantes en todo el país</h2>
              <p>
                Entran a tu local, retiran los matafuegos con cualquier excusa y después cobran lo que quieren bajo presión. Así funciona la estafa y cómo no caer.
              </p>
              <div className="post-meta">18 de septiembre de 2026 · 4 min de lectura</div>
              <span className="read-more">Leer artículo →</span>
            </div>
          </a>
          {" "}
          <a href="/blog/por-que-los-matafuegos-baratos-pueden-salir-caros" className="post-card">
            <span className="post-card-tag tag-guia">Guía de compra</span>
            <div className="post-card-body">
              <h2>Por qué un matafuego barato puede salirte muy caro</h2>
              <p>
                En MercadoLibre hay extintores más económicos. Acá explicamos qué diferencia hace el sello IRAM cuando lo necesitás de verdad — y qué pasa con tu seguro si no lo tenés.
              </p>
              <div className="post-meta">18 de septiembre de 2026 · 5 min de lectura</div>
              <span className="read-more">Leer artículo →</span>
            </div>
          </a>
          {" "}
          <a href="/blog/normativa-matafuegos-argentina" className="post-card">
            <span className="post-card-tag tag-normativa">Normativa</span>
            <div className="post-card-body">
              <h2>Normativa de matafuegos en Argentina: qué dice la ley</h2>
              <p>
                Ley 19587, Decreto 351/79, normas IRAM y resoluciones de la SRT. Todo lo que una empresa argentina debe cumplir en materia de extintores.
              </p>
              <div className="post-meta">2 de septiembre de 2026 · 6 min de lectura</div>
              <span className="read-more">Leer artículo →</span>
            </div>
          </a>
        </div>
      </div>
      <SiteFooter />
    </>
  )
}

// Page styles carried over from the static site; menu and footer styles live in components/site-chrome.css
const css = `html { scroll-behavior: smooth; }
body { font-family: var(--font-inter), system-ui, sans-serif; color: var(--black); background: var(--white); line-height: 1.6; }
h1, h2, h3 { font-family: var(--font-barlow), sans-serif; font-weight: 700; line-height: 1.1; }
.blog-hero { background: var(--black); padding: 64px 24px; text-align: center; }
.blog-hero h1 { font-size: clamp(32px, 4vw, 52px); color: var(--white); margin-bottom: 12px; }
.blog-hero p { color: #8A9099; font-size: 16px; }
.posts-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 28px; padding: 64px 0; }
.post-card { border: 1px solid var(--gray-border); border-radius: 6px; overflow: hidden; text-decoration: none; color: inherit; display: flex; flex-direction: column; transition: box-shadow .15s; }
.post-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
.post-card-tag { background: var(--red); color: var(--white); font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; padding: 10px 16px; display: block; }
.tag-normativa { background: #1a3a5c; }
.tag-guia { background: #2d4a3e; }
.tag-alerta { background: #7a4f00; }
.tag-historia { background: #3d2b1f; }
.post-card-body { padding: 24px; flex: 1; display: flex; flex-direction: column; gap: 10px; }
.post-card-body h2 { font-size: 22px; line-height: 1.2; }
.post-card-body p { font-size: 14px; color: var(--gray-mid); flex: 1; }
.post-meta { font-size: 12px; color: var(--gray-mid); margin-top: 8px; }
.read-more { font-size: 13px; font-weight: 600; color: var(--red); margin-top: 12px; }
@media (max-width: 640px) {
  .posts-grid { grid-template-columns: 1fr; }
}
`
