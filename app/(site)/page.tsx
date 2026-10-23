import type { Metadata } from "next"
import type { CSSProperties, ReactNode } from "react"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import FireExtinguishHero from "@/components/ui/fire-extinguish-hero"
import { WHATSAPP_URL } from "@/lib/site"

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
          name: "Venta de Extintores"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Recarga y Mantenimiento de Matafuegos"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Redes Contra Incendios"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mangueras y Gabinetes"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Señalización de Emergencia"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Capacitaciones en Empresa"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Seguridad e Higiene"
        }
      }
    ]
  },
  logo: "https://matafuegospesse.com/img/matafuegos-pesse.avif",
  image: [
    "https://matafuegospesse.com/img/local-matafuegos-pesse-sarandi-416-merlo.webp",
    "https://matafuegospesse.com/og-image.jpg"
  ]
}

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
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
            <div className="service-card">
              <span className="service-icon"><Icon name="extinguisher" /></span>
              <h3 className="service-title">Venta de extintores</h3>
              <p className="service-desc">
                {"Extintores para todo tipo de fuego y superficie. Stock permanente, entrega en el día para Zona Oeste. "}
                <a href="/matafuego-para-auto/" style={{ color: "var(--red)", fontWeight: "600" }}>
                  ¿Para el auto? Ver matafuegos apto VTV →
                </a>
              </p>
            </div>
            <div className="service-card">
              <span className="service-icon"><Icon name="wrench" /></span>
              <h3 className="service-title">Mantenimiento de extintores</h3>
              <p className="service-desc">
                {"Recarga, prueba hidráulica y certificación según norma IRAM 3517. Retiro y entrega sin cargo, con equipos de reemplazo. "}
                <a href="/recarga-de-matafuegos/" style={{ color: "var(--red)", fontWeight: "600" }}>
                  Ver servicio →
                </a>
              </p>
            </div>
            <div className="service-card">
              <span className="service-icon"><Icon name="hose" /></span>
              <h3 className="service-title">Mangueras contra incendio</h3>
              <p className="service-desc">
                Mangueras tipo piletón y gabinetes normalizados. Instalación y mantenimiento incluidos.
              </p>
            </div>
            <div className="service-card">
              <span className="service-icon"><Icon name="cabinet" /></span>
              <h3 className="service-title">Soportes y gabinetes</h3>
              <p className="service-desc">
                Portaextintores, soportes y gabinetes homologados para interior y exterior.
              </p>
            </div>
            <div className="service-card">
              <span className="service-icon"><Icon name="sign" /></span>
              <h3 className="service-title">Señalización</h3>
              <p className="service-desc">
                Cartelería fotoluminiscente y de seguridad conforme a normas IRAM y legislación provincial.
              </p>
            </div>
            <div className="service-card">
              <span className="service-icon"><Icon name="helmet" /></span>
              <h3 className="service-title">Elementos de protección personal</h3>
              <p className="service-desc">
                EPP certificados: cascos, guantes, calzado de seguridad y protección respiratoria.
              </p>
            </div>
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

// Page styles carried over from the static site; menu and footer styles live in components/site-chrome.css
const css = `:root {
  --black: #111111;
  --red: #C41E2A;
  --red-dark: #900E18;
  --white: #FFFFFF;
  --gray-bg: #F5F6F8;
  --gray-mid: #5C6169;
  --gray-border: #DEE1E6;
  --max-w: 1200px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
  font-family: var(--font-inter), system-ui, sans-serif;
  color: var(--black);
  background: var(--white);
  line-height: 1.6;
}

h1, h2, h3, h4 {
  font-family: var(--font-barlow), sans-serif;
  font-weight: 700;
  line-height: 1.1;
}

.container {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 24px;
}

/* NAV */
nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--white);
  border-bottom: 1px solid var(--gray-border);
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

/* HERO */
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 560px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--red);
  color: var(--white);
  padding: 14px 28px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  align-self: flex-start;
  transition: background .15s;
}

.btn-primary:hover { background: var(--red-dark); }

/* SECTIONS */
section { padding: 80px 0; scroll-margin-top: 64px; }

.section-label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 12px;
}

.section-title {
  font-size: clamp(30px, 3.5vw, 46px);
  color: var(--black);
  margin-bottom: 16px;
}

.section-sub {
  font-size: 16px;
  color: var(--gray-mid);
  max-width: 540px;
  line-height: 1.65;
}

.section-header { margin-bottom: 48px; }

/* SERVICIOS */
#servicios { background: var(--gray-bg); }

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.service-card {
  background: var(--white);
  border: 1px solid var(--gray-border);
  border-top: 3px solid var(--red);
  border-radius: 10px;
  padding: 32px 30px;
  transition: transform .2s ease, box-shadow .2s ease;
}

.service-card:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(17,17,17,0.08); }

.service-icon {
  width: 52px;
  height: 52px;
  margin-bottom: 18px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: #FCEBEC;
  color: var(--red);
}

.service-icon svg { width: 28px; height: 28px; }

.service-title {
  font-family: var(--font-barlow), sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: var(--black);
  margin-bottom: 10px;
}

.service-desc {
  font-size: 14px;
  color: var(--gray-mid);
  line-height: 1.65;
}

/* DIFERENCIADORES */
.diff-section { background: var(--black); }

.diff-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-top: 48px;
}

.diff-item {
  border-top: 2px solid var(--red);
  padding-top: 24px;
}

.diff-heading {
  font-family: var(--font-barlow), sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 10px;
}

.diff-section .section-label { color: #F2606A; }

.diff-text {
  font-size: 14px;
  color: #A3A9B1;
  line-height: 1.65;
}

/* CLIENTES */
.clients-section { background: var(--white); padding: 56px 0; border-bottom: 1px solid var(--gray-border); }
.clients-section .section-label { text-align: center; margin-bottom: 24px; }

.clients-strip {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px 48px;
}

.client-name {
  font-family: var(--font-barlow), sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: var(--gray-mid);
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

/* REDES */
.redes-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.redes-steps {
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-top: 36px;
}

.redes-step {
  display: flex;
  gap: 20px;
}

.step-num {
  font-family: var(--font-barlow), sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: var(--red);
  padding-top: 3px;
  min-width: 24px;
}

.step-content strong {
  display: block;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
  color: var(--black);
}

.step-content p {
  font-size: 14px;
  color: var(--gray-mid);
}

.redes-visual {
  background: #1A2230;
  aspect-ratio: 4/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.redes-visual-icon { font-size: 72px; }

.redes-visual-label {
  font-family: var(--font-barlow), sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #3A4A5A;
}

/* SEGURIDAD */
.seg-section { background: var(--gray-bg); }

.seg-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.seg-visual {
  background: #1A2230;
  aspect-ratio: 16/10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.seg-visual-icon { font-size: 64px; }

.seg-visual-label {
  font-family: var(--font-barlow), sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #3A4A5A;
}

.seg-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 28px;
}

.seg-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 15px;
  color: var(--black);
}

.seg-list li::before {
  content: '';
  width: 6px;
  height: 6px;
  background: var(--red);
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 8px;
}

/* CONTACTO */
.contact-section {
  background: radial-gradient(ellipse 70% 60% at 0% 0%, rgba(196,30,42,0.22), transparent 70%), #161616;
  border-top: 3px solid var(--red);
}

.contact-section .section-label { color: #F2606A; }

.contact-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 15px;
  font-weight: 500;
  color: rgba(255,255,255,0.88);
  text-decoration: none;
  transition: color .15s;
}

.contact-method:hover { color: var(--white); }

.contact-icon {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(196,30,42,0.18);
  color: #F2606A;
  transition: background .15s, color .15s;
}

.contact-method:hover .contact-icon { background: var(--red); color: var(--white); }

.contact-icon svg { width: 18px; height: 18px; }

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: var(--white);
  border-radius: 12px;
  padding: 36px 32px;
  box-shadow: 0 24px 60px rgba(0,0,0,0.35);
}

.form-title {
  font-size: 26px;
  color: var(--black);
}

.form-sub {
  font-size: 14px;
  color: var(--gray-mid);
  margin-bottom: 6px;
}

.form-input {
  padding: 13px 16px;
  background: var(--gray-bg);
  border: 1px solid var(--gray-border);
  border-radius: 6px;
  font-size: 15px;
  color: var(--black);
  font-family: var(--font-inter), sans-serif;
  outline: none;
  transition: border-color .15s, box-shadow .15s, background .15s;
}

.form-input::placeholder { color: var(--gray-mid); }
.form-input:focus { border-color: var(--red); background: var(--white); box-shadow: 0 0 0 3px rgba(196,30,42,0.15); }
.form-input option { color: var(--black); background: var(--white); }

.form-textarea { resize: vertical; min-height: 110px; }

.form-submit {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: var(--red);
  color: var(--white);
  padding: 15px 28px;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  font-family: var(--font-inter), sans-serif;
  margin-top: 4px;
  transition: background .15s;
}

.form-submit:hover { background: var(--red-dark); }
.form-submit:focus-visible { outline: 3px solid rgba(196,30,42,0.35); outline-offset: 2px; }

/* RESPONSIVE */

@media (max-width: 700px) {
  .gallery-grid { grid-template-columns: 1fr 1fr; }
  .gallery-item[style] { grid-column: span 2; }
}

/* CAPACITACIONES */
.cap-section { background: var(--gray-bg); }

.gallery-row {
  display: grid;
  gap: 6px;
  margin-bottom: 6px;
}

.gallery-row:last-child { margin-bottom: 0; }

.gallery-row-3 { grid-template-columns: repeat(3, 1fr); }
.gallery-row-2 { grid-template-columns: repeat(2, 1fr); }

.gallery-item {
  overflow: hidden;
  aspect-ratio: 4/3;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .4s ease;
}

.gallery-item:hover img { transform: scale(1.03); }

@media (max-width: 700px) {
  .gallery-row-3 { grid-template-columns: 1fr 1fr; }
  .gallery-row-3 .gallery-item:first-child { grid-column: span 2; aspect-ratio: 16/9; }
}

@media (max-width: 960px) {
  .services-grid { grid-template-columns: 1fr 1fr; }
  .diff-grid { grid-template-columns: 1fr 1fr; gap: 28px; }
  .redes-inner, .seg-inner, .contact-inner { grid-template-columns: 1fr; gap: 40px; }
}

@media (max-width: 600px) {
  section { padding: 56px 0; }
  .services-grid { grid-template-columns: 1fr; gap: 12px; }
  /* phones: icon beside the text, so six cards don't take two screens */
  .service-card { display: grid; grid-template-columns: 44px 1fr; column-gap: 16px; padding: 20px; }
  .service-icon { grid-row: span 2; width: 44px; height: 44px; margin: 0; }
  .service-icon svg { width: 24px; height: 24px; }
  .service-title { font-size: 20px; margin-bottom: 6px; }
  .contact-form { padding: 28px 20px; }
  .form-submit { width: 100%; }
  .diff-grid { grid-template-columns: 1fr; gap: 20px; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { transition: none !important; }
}
img { height: auto; }
.faq-list { max-width: 820px; }
.faq-item { border-bottom: 1px solid var(--gray-border); padding: 18px 0; }
.faq-item summary { font-weight: 600; font-size: 17px; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 16px; }
.faq-item summary::-webkit-details-marker { display: none; }
.faq-item summary::after { content: "+"; flex-shrink: 0; width: 28px; height: 28px; display: grid; place-items: center; border-radius: 50%; background: #FCEBEC; color: var(--red); font-size: 20px; font-weight: 500; line-height: 1; transition: transform .2s ease; }
.faq-item[open] summary::after { transform: rotate(45deg); }
.faq-item summary:hover { color: var(--red); }
.faq-item p { margin-top: 10px; color: #3A4048; }
.faq-item a { color: var(--red); font-weight: 600; }
.sr-only { position:absolute; width:1px; height:1px; overflow:hidden; clip:rect(0 0 0 0); white-space:nowrap; }
`
