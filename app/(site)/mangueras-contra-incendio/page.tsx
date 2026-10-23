import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import "@/components/inner-page.css"

const URL = "https://matafuegospesse.com/mangueras-contra-incendio/"
const TITLE = "Mangueras contra incendio y mantenimiento | Pesse"
const DESCRIPTION = "Mangueras, lanzas y gabinetes para bocas de incendio, normalizados. Instalación, inspección y mantenimiento para empresas e industrias en Zona Oeste y CABA."
const WHATSAPP = "https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Necesito%20consultar%20por%20mangueras%20contra%20incendio."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: "index, follow",
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Matafuegos Pesse",
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    images: [{ url: "https://matafuegospesse.com/og-image.jpg" }],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": URL + "#servicio",
      name: "Mangueras contra incendio",
      serviceType: "Instalación y mantenimiento de mangueras y bocas de incendio",
      provider: { "@id": "https://matafuegospesse.com/#business" },
      url: URL,
      areaServed: [
        { "@type": "AdministrativeArea", name: "Provincia de Buenos Aires" },
        { "@type": "AdministrativeArea", name: "Ciudad Autónoma de Buenos Aires" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://matafuegospesse.com/" },
        { "@type": "ListItem", position: 2, name: "Mangueras contra incendio" },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main className="article-wrap">
        <div className="breadcrumb"><a href="/">Inicio</a>{" › Mangueras contra incendio"}</div>
        <span className="article-tag">Servicio</span>
        <h1>Mangueras contra incendio</h1>
        <p>
          <strong>
            Proveemos, instalamos y mantenemos mangueras, lanzas y gabinetes para las bocas de incendio de empresas, industrias y edificios.
          </strong>
          {" Trabajamos con equipos normalizados y dejamos cada boca lista para usar, con su gabinete, su manguera y su lanza en condiciones."}
        </p>
        <p>
          <a href={WHATSAPP} className="btn-red">Consultar por WhatsApp</a>
        </p>
        <h2>Qué hacemos</h2>
        <ul>
          <li>Provisión de mangueras, lanzas, válvulas y uniones para bocas de incendio</li>
          <li>Gabinetes normalizados para interior y exterior</li>
          <li>Instalación de bocas nuevas y reemplazo de equipos dañados</li>
          <li>Inspección periódica: estado de la manguera, uniones, lanza, válvula y gabinete</li>
          <li>Prueba de las mangueras y reemplazo de las que no pasan el control</li>
        </ul>
        <h2>Por qué hay que revisarlas</h2>
        <p>
          Una manguera que pasa años guardada puede resecarse, cuartearse o perder estanqueidad en las uniones, y eso no se ve hasta que hace falta usarla. Por eso conviene revisarlas con la misma regularidad que los matafuegos y dejar constancia de cada control, que es lo que piden la ART y las inspecciones.
        </p>
        <h2>Mangueras dentro de una red contra incendios</h2>
        <p>
          {"Las bocas de incendio son parte de la red hidráulica del edificio. Si además de las mangueras necesitás diseñar, ampliar o mantener la red completa, mirá nuestro servicio de "}
          <a href="/#redes">redes contra incendios</a>
          {". Y si tu empresa tiene que presentar un plan de evacuación o un legajo técnico, lo resolvemos con "}
          <a href="/seguridad-e-higiene/">Seguridad e Higiene</a>
          .
        </p>
        <h2>Preguntas frecuentes</h2>
        <div className="faq">
          <details>
            <summary>¿Las mangueras reemplazan a los matafuegos?</summary>
            <p>No. Las bocas de incendio con manguera complementan a los matafuegos: el matafuego es para el principio de un fuego y la manguera para combatirlo cuando ya creció. La mayoría de los edificios necesita las dos cosas.</p>
          </details>
          <details>
            <summary>¿Trabajan con instalaciones que ya existen?</summary>
            <p>Sí. Revisamos lo que tenés, te decimos qué está en condiciones y qué hay que cambiar, y reemplazamos solo lo necesario.</p>
          </details>
          <details>
            <summary>¿Cuánto cuesta?</summary>
            <p>Depende de la cantidad de bocas y del estado de los equipos. Escribinos por WhatsApp y coordinamos una visita para cotizar.</p>
          </details>
        </div>
        <div className="cta-box">
          <h3>¿Tus bocas de incendio están en condiciones?</h3>
          <p>Coordinamos una revisión en tu empresa. Lunes a viernes de 8 a 18 y sábados de 9 a 13.</p>
          <a href={WHATSAPP} className="btn-red">Consultanos por WhatsApp</a>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
