import type { Metadata } from "next"
import type { CSSProperties, ReactNode } from "react"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import FireExtinguishHero from "@/components/ui/fire-extinguish-hero"
import { WHATSAPP_URL } from "@/lib/site"
import "./home.css"

/** Line icons (24px grid, Lucide style) for services and contact, so they look the same on every device. */
const ICONS: Record<string, ReactNode> = {
  extinguisher: <><path d="M8 10a3 3 0 0 1 6 0v11a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" /><path d="M11 7V3M8 3h6M14 3h2a3 3 0 0 1 3 3v6" /></>,
  wrench: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z" />,
  hose: <><circle cx="11" cy="12" r="8" /><circle cx="11" cy="12" r="4" /><path d="M19 12h2v8h-3" /></>,
  cabinet: <><rect x="5" y="2" width="14" height="20" rx="1" /><rect x="8" y="5" width="8" height="10" rx="1" /><path d="M8 18h3" /></>,
  sign: <><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /><path d="M12 9v4M12 17h.01" /></>,
  helmet: <><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" /><path d="M14 6a6 6 0 0 1 6 6v3M4 15v-3a6 6 0 0 1 6-6" /><rect x="2" y="15" width="20" height="4" rx="1" /></>,
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  chat: <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>,
  pin: <><path d="M20 10c0 5-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 15 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></>,
}

/** Service cards on the home page; each one opens its own page. */
const SERVICES: { href: string; icon: string; title: string; desc: string; extra?: ReactNode }[] = [
  {
    href: "/venta-de-matafuegos/",
    icon: "extinguisher",
    title: "Venta de extintores",
    desc: "Extintores para todo tipo de fuego y superficie. Stock permanente, entrega en el día para Zona Oeste.",
    extra: <a href="/matafuego-para-auto/" className="service-extra">¿Para el auto? Ver matafuegos apto VTV →</a>,
  },
  {
    href: "/recarga-de-matafuegos/",
    icon: "wrench",
    title: "Mantenimiento de extintores",
    desc: "Recarga, prueba hidráulica y certificación según norma IRAM 3517. Retiro y entrega sin cargo, con equipos de reemplazo.",
  },
  {
    href: "/mangueras-contra-incendio/",
    icon: "hose",
    title: "Mangueras contra incendio",
    desc: "Mangueras tipo piletón y gabinetes normalizados. Instalación y mantenimiento incluidos.",
  },
  {
    href: "/soportes-y-gabinetes/",
    icon: "cabinet",
    title: "Soportes y gabinetes",
    desc: "Portaextintores, soportes y gabinetes homologados para interior y exterior.",
  },
  {
    href: "/senalizacion/",
    icon: "sign",
    title: "Señalización",
    desc: "Cartelería fotoluminiscente y de seguridad conforme a normas IRAM y legislación provincial.",
  },
  {
    href: "/elementos-de-proteccion-personal/",
    icon: "helmet",
    title: "Elementos de protección personal",
    desc: "EPP certificados: cascos, guantes, calzado de seguridad y protección respiratoria.",
  },
]

function Icon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  )
}

export const metadata: Metadata = {
  title: "Matafuegos Pesse — Extintores y Seguridad, Buenos Aires",
  description: "Venta, recarga y mantenimiento de matafuegos en Buenos Aires. Redes contra incendios, señalización y SyH. Certificados IRAM desde 1995. Cotizá sin cargo.",
  authors: [
    {
      name: "Matafuegos Pesse"
    }
  ],
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: {
    canonical: "https://matafuegospesse.com/"
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Matafuegos Pesse",
    title: "Matafuegos Pesse — Extintores y Seguridad, Buenos Aires",
    description: "Venta, recarga y mantenimiento de matafuegos en Buenos Aires. Redes contra incendios, señalización y SyH. Certificados IRAM desde 1995.",
    url: "https://matafuegospesse.com/",
    images: [
      {
        url: "https://matafuegospesse.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Matafuegos Pesse — Seguridad Contra Incendios Merlo Buenos Aires"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Matafuegos Pesse — Extintores y Seguridad, Buenos Aires",
    description: "Venta, recarga y mantenimiento de matafuegos en Merlo y Zona Oeste. Certificados IRAM desde 1995.",
    images: [
      "https://matafuegospesse.com/og-image.jpg"
    ]
  },
  other: {
    "geo.region": "AR-B",
    "geo.placename": "Merlo, Buenos Aires, Argentina",
    "geo.position": "-34.6673;-58.7282",
    ICBM: "-34.6673, -58.7282"
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": [
    "LocalBusiness",
    "HomeAndConstructionBusiness"
  ],
  "@id": "https://matafuegospesse.com/#business",
  name: "Matafuegos Pesse",
  alternateName: "Pesse Seguridad Contra Incendios",
  description: "Venta, recarga y mantenimiento de matafuegos. Redes contra incendios, señalización y Seguridad e Higiene. Certificados IRAM desde 1995.",
  url: "https://matafuegospesse.com/",
  telephone: "+54-220-486-1235",
  email: "info@matafuegospesse.com",
  foundingDate: "1995",
  founder: {
    "@type": "Person",
    name: "Elisabet Pesse"
  },
  hasCertification: [
    {
      "@type": "Certification",
      name: "Certificado DC-P-M400-001.1 — IRAM 3517-2:2005: servicio de control, mantenimiento y recarga de extintores"
    },
    {
      "@type": "Certification",
      name: "Habilitación provincial DPS N.º 330 — Provincia de Buenos Aires"
    },
    {
      "@type": "Certification",
      name: "Registro de reparadores y recargadores de extintores de la Ciudad de Buenos Aires — N.º 4927135"
    }
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      opens: "08:00",
      closes: "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00"
    }
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sarandí 416",
    addressLocality: "Merlo",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
    postalCode: "1722"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -34.6673,
    longitude: -58.7282
  },
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Buenos Aires, Argentina"
    },
    {
      "@type": "AdministrativeArea",
      name: "Ciudad Autónoma de Buenos Aires"
    },
    {
      "@type": "AdministrativeArea",
      name: "Gran Buenos Aires"
    },
    {
      "@type": "City",
      name: "Merlo"
    },
    {
      "@type": "City",
      name: "Morón"
    },
    {
      "@type": "City",
      name: "Ituzaingó"
    },
    {
      "@type": "City",
      name: "Moreno"
    },
    {
      "@type": "City",
      name: "Luján"
    },
    {
      "@type": "City",
      name: "La Matanza"
    },
    {
      "@type": "City",
      name: "Tres de Febrero"
    },
    {
      "@type": "City",
      name: "San Martín"
    }
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Seguridad Contra Incendios",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": "https://matafuegospesse.com/venta-de-matafuegos/#servicio",
          name: "Venta de Extintores",
          url: "https://matafuegospesse.com/venta-de-matafuegos/"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": "https://matafuegospesse.com/recarga-de-matafuegos/#servicio",
          name: "Recarga y Mantenimiento de Matafuegos",
          url: "https://matafuegospesse.com/recarga-de-matafuegos/"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": "https://matafuegospesse.com/matafuego-para-auto/#servicio",
          name: "Matafuegos para Auto",
          url: "https://matafuegospesse.com/matafuego-para-auto/"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": "https://matafuegospesse.com/mangueras-contra-incendio/#servicio",
          name: "Mangueras Contra Incendio",
          url: "https://matafuegospesse.com/mangueras-contra-incendio/"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": "https://matafuegospesse.com/soportes-y-gabinetes/#servicio",
          name: "Soportes y Gabinetes para Matafuegos",
          url: "https://matafuegospesse.com/soportes-y-gabinetes/"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": "https://matafuegospesse.com/senalizacion/#servicio",
          name: "Señalización de Seguridad",
          url: "https://matafuegospesse.com/senalizacion/"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": "https://matafuegospesse.com/elementos-de-proteccion-personal/#servicio",
          name: "Elementos de Protección Personal",
          url: "https://matafuegospesse.com/elementos-de-proteccion-personal/"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": "https://matafuegospesse.com/seguridad-e-higiene/#servicio",
          name: "Seguridad e Higiene",
          url: "https://matafuegospesse.com/seguridad-e-higiene/"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Redes Contra Incendios",
          url: "https://matafuegospesse.com/#redes"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Capacitaciones en Empresa",
          url: "https://matafuegospesse.com/#capacitaciones"
        }
      }
    ]
  },
  hasMap: "https://www.google.com/maps/search/?api=1&query=Matafuegos+Pesse+Sarand%C3%AD+416+Merlo+Buenos+Aires",
  logo: "https://matafuegospesse.com/img/matafuegos-pesse-logo.webp",
  image: [
    "https://matafuegospesse.com/img/local-matafuegos-pesse-sarandi-416-merlo.webp",
    "https://matafuegospesse.com/og-image.jpg"
  ]
}

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <FireExtinguishHero
        showNav={false}
        height="calc(100svh - 64px)"
        eyebrow="Matafuegos y seguridad contra incendios · Buenos Aires"
        body="Venta, recarga y mantenimiento de matafuegos con certificación IRAM. Respuesta rápida para hogares, comercios e industrias de Provincia de Buenos Aires y CABA."
        primaryCta={{ label: "Solicitar presupuesto", href: WHATSAPP_URL }}
        secondaryCta={{ label: "Ver servicios", href: "#servicios" }}
        hint="Pasá el cursor de punta a punta para apagar el fuego"
        hintTouch="Deslizá de punta a punta para apagar el fuego"
        outCard={{
          title: "Así de rápido apagamos el fuego.",
          body: "Ante una emergencia o para tener tus matafuegos al día, contactanos y te respondemos en el día.",
          cta: { label: "Contactanos", href: WHATSAPP_URL },
          note: "Lunes a viernes de 8 a 18 · Sábados de 9 a 13",
        }}
        headingFont="var(--font-barlow), sans-serif"
        accentFont="var(--font-barlow), sans-serif"
        bodyFont="var(--font-inter), system-ui, sans-serif"
        loadFonts={false}
        style={{ "--fh-accent-style": "normal" } as CSSProperties}
      />
      <section id="servicios">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Qué ofrecemos</p>
            <h2 className="section-title">Soluciones completas contra incendios</h2>
            <p className="section-sub">
              Para empresas, fábricas, depósitos, hogares y vehículos. Con el respaldo de certificación IRAM y más de tres décadas de trayectoria.
            </p>
          </div>
          <div className="services-grid">
            {SERVICES.map((sv) => (
              <div className="service-card" key={sv.href}>
                <span className="service-icon"><Icon name={sv.icon} /></span>
                <h3 className="service-title"><a href={sv.href} className="service-link">{sv.title}</a></h3>
                <p className="service-desc">{sv.desc}</p>
                {sv.extra}
                <span className="service-more" aria-hidden="true">Ver más →</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="diff-section" id="nosotros">
        <div className="container">
          <p className="section-label">Por qué elegir Pesse</p>
          <h2 className="section-title" style={{ color: "var(--white)" }}>
            Tres décadas cuidando empresas de la Zona Oeste
          </h2>
          <div className="diff-grid">
            <div className="diff-item">
              <h3 className="diff-heading">Certificación IRAM</h3>
              <p className="diff-text">
                Todos nuestros procesos están auditados y certificados con Sello IRAM. No solo cumplimos la norma: la garantizamos con documentación.
              </p>
            </div>
            <div className="diff-item">
              <h3 className="diff-heading">Fundados en 1995</h3>
              <p className="diff-text">
                Empresa familiar con más de 30 años de historia. Continuidad, confianza y conocimiento profundo del territorio donde operamos.
              </p>
            </div>
            <div className="diff-item">
              <h3 className="diff-heading">Personal calificado</h3>
              <p className="diff-text">
                Equipo técnico en capacitación permanente. Damos asesoramiento real sobre qué necesita cada instalación, no solo vendemos producto.
              </p>
            </div>
            <div className="diff-item">
              <h3 className="diff-heading">Cobertura certificada</h3>
              <p className="diff-text">
                Con base en Merlo, brindamos servicio en toda la Provincia de Buenos Aires y CABA, con certificación habilitante en ambas jurisdicciones.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="clients-section">
        <div className="container">
          <p className="section-label">Empresas e instituciones que confían en nosotros</p>
          <ul className="clients-strip">
            <li className="client-name">Eternit</li>
            <li className="client-name">Shell</li>
            <li className="client-name">Solo Deportes</li>
            <li className="client-name">Banco Nación</li>
            <li className="client-name">Banco Provincia</li>
          </ul>
        </div>
      </section>
      <section className="cap-section" id="capacitaciones">
        <div className="container">
          <div className="section-header">
            <p className="section-label">En el campo</p>
            <h2 className="section-title">Capacitaciones en empresa</h2>
            <p className="section-sub">
              Formamos al personal de nuestros clientes en el uso correcto de los equipos, planes de evacuación y procedimientos de emergencia — en sus propias instalaciones.
            </p>
          </div>
          <div className="gallery-row gallery-row-3">
            <div className="gallery-item">
              <img width={900} height={597} loading="lazy" decoding="async" src="/img/capacitacion-grupal-en-prevencion-de-incendios.jpg" alt="Capacitación grupal en prevención de incendios" />
            </div>
            <div className="gallery-item">
              <img width={525} height={700} loading="lazy" decoding="async" src="/img/inspeccion-de-gabinete-de-mangueras.jpg" alt="Inspección de gabinete de mangueras" />
            </div>
            <div className="gallery-item">
              <img width={900} height={597} loading="lazy" decoding="async" src="/img/capacitacion-en-uso-de-extintores-trenes-argentino.jpg" alt="Capacitación en uso de extintores — Trenes Argentinos" />
            </div>
          </div>
          <div className="gallery-row gallery-row-2">
            <div className="gallery-item">
              <img width={525} height={700} loading="lazy" decoding="async" src="/img/uso-de-manguera-contra-incendios-en-campo.jpg" alt="Uso de manguera contra incendios en campo" />
            </div>
            <div className="gallery-item">
              <img width={900} height={225} loading="lazy" decoding="async" src="/img/practica-de-mangueras-contra-incendio-en-exterior.jpg" alt="Práctica de mangueras contra incendio en exterior" />
            </div>
          </div>
        </div>
      </section>
      <section id="redes">
        <div className="container">
          <div className="redes-inner">
            <div>
              <p className="section-label">Servicio especializado</p>
              <h2 className="section-title">Redes contra incendios</h2>
              <p className="section-sub">
                Diseño, instalación y mantenimiento de sistemas hidráulicos para detección y extinción de incendios en instalaciones industriales y comerciales.
              </p>
              <div className="redes-steps">
                <div className="redes-step">
                  <span className="step-num">01</span>
                  <div className="step-content">
                    <strong>Relevamiento y diagnóstico</strong>
                    <p>Evaluación técnica del espacio, análisis de carga de fuego y normativa aplicable.</p>
                  </div>
                </div>
                <div className="redes-step">
                  <span className="step-num">02</span>
                  <div className="step-content">
                    <strong>Diseño de la red</strong>
                    <p>
                      Planos, memorias técnicas y especificación de materiales según normas IRAM e IRAM-NFPA vigentes.
                    </p>
                  </div>
                </div>
                <div className="redes-step">
                  <span className="step-num">03</span>
                  <div className="step-content">
                    <strong>Instalación certificada</strong>
                    <p>Ejecución por técnicos calificados con habilitación municipal y provincial.</p>
                  </div>
                </div>
                <div className="redes-step">
                  <span className="step-num">04</span>
                  <div className="step-content">
                    <strong>Mantenimiento periódico</strong>
                    <p>Planes con certificación y documentación completa para auditorías e inspecciones.</p>
                  </div>
                </div>
              </div>
              <a href={"https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Quiero%20consultar%20sobre%20redes%20contra%20incendios."} className="btn-primary" style={{ marginTop: "36px" }}>
                Consultar sobre redes
              </a>
            </div>
            <img width={640} height={960} loading="lazy" decoding="async" src="/img/redes-hidraulicas-contra-incendios.webp" alt="Redes hidráulicas contra incendios" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover" }} />
          </div>
        </div>
      </section>
      <section className="seg-section" id="seguridad">
        <div className="container">
          <div className="seg-inner">
            <img width={1200} height={800} loading="lazy" decoding="async" src="/img/capacitacion-en-seguridad-e-higiene.jpg" alt="Capacitación en Seguridad e Higiene" style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover" }} />
            <div>
              <p className="section-label">Cumplimiento normativo</p>
              <h2 className="section-title">Seguridad e Higiene</h2>
              <p className="section-sub">
                Asesoramiento integral para que tu empresa cumpla con la legislación de Seguridad e Higiene en el Trabajo.
              </p>
              <ul className="seg-list">
                <li>Elaboración de planes de evacuación y lucha contra incendios</li>
                <li>Confección de legajos técnicos para habilitaciones municipales</li>
                <li>Auditorías de cumplimiento normativo (Ley 19.587 y Decreto 351/79)</li>
                <li>Capacitación del personal en prevención y uso de extintores</li>
                <li>Elaboración de matrices de riesgo y procedimientos de emergencia</li>
              </ul>
              <p style={{ marginTop: "20px" }}>
                <a href="/seguridad-e-higiene/" style={{ color: "var(--red)", fontWeight: "600" }}>
                  Conocé el servicio de Seguridad e Higiene →
                </a>
              </p>
              <a href={"https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Necesito%20asesoramiento%20en%20Seguridad%20e%20Higiene."} className="btn-primary" style={{ marginTop: "32px", background: "var(--black)" }}>
                Pedir asesoramiento
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="preguntas" className="faq-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Preguntas frecuentes</p>
            <h2 className="section-title">Lo que más nos consultan</h2>
          </div>
          <div className="faq-list">
            <details className="faq-item" open>
              <summary>¿Cada cuánto hay que recargar un matafuego?</summary>
              <p>
                {"Una vez por año como mínimo y siempre después de cualquier uso. Además, el cilindro necesita una prueba hidráulica cada 5 años y, en los equipos de polvo, el cambio de polvo cada 10 años. "}
                <a href="/blog/cada-cuanto-revisar-matafuegos">Ver plazos</a>
                .
              </p>
            </details>
            <details className="faq-item">
              <summary>¿Retiran y entregan los matafuegos?</summary>
              <p>
                Sí, sin cargo. Coordinamos el retiro con el responsable del lugar y te dejamos equipos de reemplazo mientras los tuyos están en el taller.
              </p>
            </details>
            <details className="faq-item">
              <summary>¿Venden y recargan matafuegos para auto?</summary>
              <p>
                {"Sí. La Ley de Tránsito exige llevar matafuego en el auto y en la VTV se controla. Vendemos y recargamos el matafuego de 1 kg con su soporte. "}
                <a href="/matafuego-para-auto/">Ver matafuegos para auto</a>
                .
              </p>
            </details>
            <details className="faq-item">
              <summary>¿Cuántos matafuegos necesita mi empresa?</summary>
              <p>
                {"Como regla general, al menos uno cada 200 m² de superficie cubierta, del tipo adecuado al riesgo de la actividad y a una distancia de recorrido limitada. Cada caso depende del local: te asesoramos sin cargo. "}
                <a href="/blog/cuantos-matafuegos-necesita-mi-empresa">Ver cómo calcularlo</a>
                .
              </p>
            </details>
            <details className="faq-item">
              <summary>¿Están certificados?</summary>
              <p>
                {"Sí. Nuestro servicio de control, mantenimiento y recarga está certificado según IRAM 3517-2:2005 (certificado N.º DC-P-M400-001.1) y tenemos habilitación provincial DPS N.º 330 y habilitación en CABA (N.º 4927135). "}
                <a href="/certificaciones/">Ver certificaciones</a>
                .
              </p>
            </details>
            <details className="faq-item">
              <summary>¿Qué zonas cubren?</summary>
              <p>
                Desde Merlo atendemos toda la Zona Oeste (Morón, Ituzaingó, Moreno, Luján, La Matanza, Tres de Febrero y San Martín), el resto de la Provincia de Buenos Aires y CABA.
              </p>
            </details>
            <details className="faq-item">
              <summary>¿Cuál es el horario de atención?</summary>
              <p>
                Lunes a viernes de 8:00 a 18:00 y sábados de 9:00 a 13:00. Por WhatsApp podés escribirnos en cualquier momento y respondemos en el día hábil.
              </p>
            </details>
            <details className="faq-item">
              <summary>¿Cómo sé si una empresa de matafuegos es confiable?</summary>
              <p>
                {"Pedí el número de certificado o habilitación, que la visita se coordine con el responsable y que la factura esté a nombre de la empresa. "}
                <a href="/blog/como-elegir-empresa-recarga-matafuegos">Ver las 8 claves</a>
                .
              </p>
            </details>
          </div>
          <p style={{ marginTop: "28px" }}>
            <a href="/preguntas-frecuentes/" className="btn-primary" style={{ background: "var(--black)" }}>
              Ver todas las preguntas frecuentes
            </a>
          </p>
        </div>
      </section>
      <section className="contact-section" id="contacto">
        <div className="container">
          <div className="contact-inner">
            <div>
              <p className="section-label">Contacto</p>
              <h2 className="section-title" style={{ color: "var(--white)" }}>Pedí tu cotización</h2>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.9)", marginBottom: "8px", lineHeight: "1.6" }}>
                Sin compromiso. Respondemos en el día hábil.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.9)", marginBottom: "8px", lineHeight: "1.6" }}>
                <strong style={{ color: "var(--white)" }}>Horario:</strong>
                {" lunes a viernes 8:00–18:00 · sábados 9:00–13:00 · domingos cerrado"}
              </p>
              <div className="contact-methods">
                <a href="tel:02204861235" className="contact-method">
                  <span className="contact-icon"><Icon name="phone" /></span>
                  0220-486-1235
                </a>
                {" "}
                <a href="https://api.whatsapp.com/send?phone=+541121685408" className="contact-method">
                  <span className="contact-icon"><Icon name="chat" /></span>
                  WhatsApp: +54 11 2168-5408
                </a>
                {" "}
                <a href="mailto:info@matafuegospesse.com" className="contact-method">
                  <span className="contact-icon"><Icon name="mail" /></span>
                  info@matafuegospesse.com
                </a>
                {" "}
                <a href={"https://www.google.com/maps/search/?api=1&query=Matafuegos+Pesse+Sarand%C3%AD+416+Merlo+Buenos+Aires"} className="contact-method" rel="noopener">
                  <span className="contact-icon"><Icon name="pin" /></span>
                  Sarandí 416, Merlo, Buenos Aires
                </a>
              </div>
              <iframe title="Mapa: Matafuegos Pesse, Sarandí 416, Merlo" src={"https://www.google.com/maps?q=Sarand%C3%AD+416,+Merlo,+Buenos+Aires&output=embed"} loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ width: "100%", height: "220px", border: "0", borderRadius: "6px", marginTop: "28px", display: "block" }}></iframe>
            </div>
            <div>
              <form className="contact-form" name="contacto" action="https://api.web3forms.com/submit" method="POST">
                <h3 className="form-title">Envianos tu consulta</h3>
                <p className="form-sub">Completá tus datos y te contactamos en el día hábil.</p>
                <input type="hidden" name="access_key" defaultValue="fc1c3703-b5c0-45ca-8460-332ea2183c2f" />
                {" "}
                <input type="hidden" name="subject" defaultValue="Nuevo contacto desde matafuegospesse.com" />
                {" "}
                <input type="hidden" name="from_name" defaultValue="Web Matafuegos Pesse" />
                {" "}
                <input type="checkbox" name="botcheck" style={{ display: "none" }} />
                {" "}
                <label htmlFor="f-nombre" className="sr-only">Nombre o empresa</label>
                {" "}
                <input type="text" id="f-nombre" name="nombre" className="form-input" placeholder="Tu nombre o empresa" required autoComplete="organization" />
                {" "}
                <label htmlFor="f-tel" className="sr-only">Teléfono</label>
                {" "}
                <input type="tel" id="f-tel" name="telefono" className="form-input" placeholder="Teléfono de contacto" required autoComplete="tel" />
                {" "}
                <label htmlFor="f-servicio" className="sr-only">Servicio</label>
                {" "}
                <select id="f-servicio" name="servicio" className="form-input" defaultValue="">
                  <option value="" disabled>¿Qué necesitás?</option>
                  <option>Venta de extintores</option>
                  <option>Mantenimiento de extintores</option>
                  <option>Mangueras y gabinetes</option>
                  <option>Señalización</option>
                  <option>Elementos de protección personal</option>
                  <option>Redes contra incendios</option>
                  <option>Seguridad e Higiene</option>
                  <option>Otro</option>
                </select>
                {" "}
                <label htmlFor="f-mensaje" className="sr-only">Mensaje</label>
                {" "}
                <textarea id="f-mensaje" name="mensaje" className="form-input form-textarea" placeholder="Contanos más sobre lo que necesitás…"></textarea>
                {" "}
                <button type="submit" className="form-submit">Enviar consulta <span aria-hidden="true">→</span></button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  )
}

