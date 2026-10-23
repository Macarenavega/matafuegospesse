import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import "@/components/inner-page.css"

export const metadata: Metadata = {
  title: "Seguridad e Higiene para empresas en Buenos Aires | Pesse",
  description: "Higiene y Seguridad en el Trabajo para empresas: legajos técnicos, planes de evacuación, capacitaciones y auditorías (Ley 19.587). Provincia y CABA.",
  robots: "index, follow",
  alternates: {
    canonical: "https://matafuegospesse.com/seguridad-e-higiene/"
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Matafuegos Pesse",
    title: "Seguridad e Higiene para empresas en Buenos Aires | Pesse",
    description: "Higiene y Seguridad en el Trabajo para empresas: legajos técnicos, planes de evacuación, capacitaciones y auditorías (Ley 19.587). Provincia y CABA.",
    url: "https://matafuegospesse.com/seguridad-e-higiene/",
    images: [
      {
        url: "https://matafuegospesse.com/og-image.jpg"
      }
    ]
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://matafuegospesse.com/seguridad-e-higiene/#servicio",
      name: "Asesoramiento en Higiene y Seguridad en el Trabajo",
      serviceType: "Higiene y Seguridad en el Trabajo",
      provider: {
        "@id": "https://matafuegospesse.com/#business"
      },
      url: "https://matafuegospesse.com/seguridad-e-higiene/",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Empresas, comercios e industrias"
      },
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Provincia de Buenos Aires"
        },
        {
          "@type": "AdministrativeArea",
          name: "Ciudad Autónoma de Buenos Aires"
        }
      ],
      employee: {
        "@id": "https://matafuegospesse.com/nosotros/juan-changala/#person"
      }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: "https://matafuegospesse.com/"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Seguridad e Higiene"
        }
      ]
    }
  ]
}

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main className="article-wrap">
        <div className="breadcrumb"><a href="/">Inicio</a>{" › Seguridad e Higiene"}</div>
        <span className="article-tag">Servicio</span>
        <h1>Seguridad e Higiene para empresas</h1>
        <p>
          <strong>
            {"Ayudamos a las empresas a cumplir la "}
            <a href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/15000-19999/17612/norma.htm" rel="noopener">
              Ley 19.587 de Higiene y Seguridad en el Trabajo
            </a>
            {" y su "}
            <a href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/30000-34999/32030/texact.htm" rel="noopener">
              Decreto reglamentario 351/79
            </a>
            .
          </strong>
          {" Elaboramos legajos técnicos para habilitaciones, planes de evacuación y lucha contra incendios, matrices de riesgo, auditorías de cumplimiento y capacitaciones del personal. El área está a cargo de Juan Changala, Licenciado en Higiene y Seguridad en el Trabajo (matrícula LHS-001107 PBA)."}
        </p>
        <p>
          <a href={"https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Necesito%20asesoramiento%20en%20Seguridad%20e%20Higiene."} className="btn-red">
            Pedir asesoramiento por WhatsApp
          </a>
        </p>
        <h2>Qué hacemos</h2>
        <ul>
          <li><strong>Legajos técnicos</strong>{" para habilitaciones municipales"}</li>
          <li><strong>Planes de evacuación</strong>{" y de lucha contra incendios, con simulacros"}</li>
          <li><strong>Auditorías de cumplimiento normativo</strong>{" (Ley 19.587 y Decreto 351/79)"}</li>
          <li>
            <strong>Capacitación del personal</strong>
            {" en prevención de incendios y uso de extintores, en las instalaciones del cliente"}
          </li>
          <li><strong>Matrices de riesgo</strong>{" y procedimientos de emergencia"}</li>
        </ul>
        <h2>Cómo trabajamos</h2>
        <ol>
          <li>
            <strong>Relevamiento:</strong>
            {" visitamos el establecimiento y evaluamos actividad, superficie, carga de fuego, salidas, equipos y documentación existente."}
          </li>
          <li>
            <strong>Informe:</strong>
            {" te entregamos qué falta, qué riesgo implica y en qué orden conviene resolverlo."}
          </li>
          <li>
            <strong>Implementación:</strong>
            {" confeccionamos la documentación, capacitamos al personal y, si hace falta, proveemos matafuegos, señalización y redes contra incendio."}
          </li>
          <li>
            <strong>Seguimiento:</strong>
            {" mantenemos al día vencimientos, simulacros y capacitaciones."}
          </li>
        </ol>
        <h2>El marco legal</h2>
        <table>
          <thead><tr><th>Norma</th><th>Qué regula</th></tr></thead>
          <tbody>
            <tr>
              <td>
                <a href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/15000-19999/17612/norma.htm" rel="noopener">
                  Ley 19.587
                </a>
              </td>
              <td>
                Ley marco de Higiene y Seguridad en el Trabajo: obligaciones del empleador, incluida la prevención y lucha contra incendios
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/30000-34999/32030/texact.htm" rel="noopener">
                  Decreto 351/79
                </a>
              </td>
              <td>
                Reglamentación de la Ley 19.587: protección contra incendios, cantidad y ubicación de matafuegos, señalización y capacitación
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/25000-29999/27971/texact.htm" rel="noopener">
                  Ley 24.557
                </a>
              </td>
              <td>Riesgos del Trabajo: el sistema de ART, que inspecciona y notifica incumplimientos</td>
            </tr>
            <tr>
              <td>Decreto 1338/96</td>
              <td>Servicios de Higiene y Seguridad en el Trabajo de las empresas</td>
            </tr>
          </tbody>
        </table>
        <p>
          {"Ver también "}
          <a href="/blog/normativa-matafuegos-argentina">Normativa de matafuegos en Argentina</a>
          .
        </p>
        <h2>Por qué combinar Seguridad e Higiene y matafuegos</h2>
        <p>
          {"La mayoría de las observaciones de una inspección tienen que ver con la protección contra incendios: matafuegos vencidos o mal ubicados, falta de señalización o personal sin capacitar. Al tener todo en una misma empresa, el relevamiento de riesgos y la solución quedan coordinados: el plan de evacuación coincide con la ubicación real de los equipos, y los vencimientos se controlan juntos. Mirá cómo lo resolvió "}
          <a href="/blog/buenas-practicas-contra-incendios-en-empresas">
            una empresa con su brigada capacitada
          </a>
          .
        </p>
        <h2>Preguntas frecuentes</h2>
        <div className="faq">
          <details>
            <summary>¿Qué es el legajo técnico de Higiene y Seguridad?</summary>
            <p>
              Es la carpeta que documenta las condiciones de seguridad de un establecimiento: relevamiento de riesgos, plano con salidas y matafuegos, plan de evacuación, carga de fuego y las medidas adoptadas. Los municipios lo suelen pedir para la habilitación comercial o industrial.
            </p>
          </details>
          <details>
            <summary>¿Qué incluye un plan de evacuación?</summary>
            <p>
              Las rutas de salida y los puntos de reunión, los roles del personal durante una emergencia, los teléfonos de emergencia, la ubicación de matafuegos y señalización, y el programa de simulacros.
            </p>
          </details>
          <details>
            <summary>¿Pueden encargarse también de los matafuegos y la señalización?</summary>
            <p>
              Sí. Es la ventaja de trabajar con una sola empresa: el mismo equipo que releva los riesgos provee, recarga y señaliza los matafuegos y, si hace falta, diseña la red contra incendio.
            </p>
          </details>
          <details>
            <summary>¿Trabajan en CABA?</summary>
            <p>
              Sí. Con base en Merlo, brindamos servicio en toda la Provincia de Buenos Aires y en la Ciudad Autónoma de Buenos Aires.
            </p>
          </details>
        </div>
        <div className="author-box">
          <img src="/img/juan-changala.webp" width={480} height={480} alt="Juan Changala" loading="lazy" />
          <p>
            <strong>{"Revisado por "}<a href="/nosotros/juan-changala/">Juan Changala</a></strong>
            <br />
            Licenciado en Higiene y Seguridad en el Trabajo · Matrícula LHS-001107 PBA
          </p>
        </div>
        <div className="cta-box">
          <h3>¿Tu empresa está en regla?</h3>
          <p>
            Contanos actividad, superficie y cantidad de personal, y te decimos qué necesitás. Sin compromiso.
          </p>
          <a href={"https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Necesito%20asesoramiento%20en%20Seguridad%20e%20Higiene."} className="btn-red">
            Consultanos por WhatsApp
          </a>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
