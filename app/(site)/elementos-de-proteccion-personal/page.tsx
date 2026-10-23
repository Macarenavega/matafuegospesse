import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import "@/components/inner-page.css"

const URL = "https://matafuegospesse.com/elementos-de-proteccion-personal/"
const TITLE = "Elementos de protección personal (EPP) certificados | Pesse"
const DESCRIPTION = "EPP certificados para empresas: cascos, guantes, calzado de seguridad, protección respiratoria, ocular y auditiva. Asesoramiento por rubro. Zona Oeste y CABA."
const WHATSAPP = "https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Necesito%20elementos%20de%20protecci%C3%B3n%20personal."

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
      name: "Elementos de protección personal",
      serviceType: "Venta de EPP certificados",
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
        { "@type": "ListItem", position: 2, name: "Elementos de protección personal" },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main className="article-wrap">
        <div className="breadcrumb"><a href="/">Inicio</a>{" › Elementos de protección personal"}</div>
        <span className="article-tag">Servicio</span>
        <h1>Elementos de protección personal</h1>
        <p>
          <strong>
            Proveemos elementos de protección personal (EPP) certificados para el personal de tu empresa: cascos, guantes, calzado de seguridad y protección respiratoria, entre otros.
          </strong>
          {" Te asesoramos sobre qué equipo corresponde a cada puesto según los riesgos de la tarea."}
        </p>
        <p>
          <a href={WHATSAPP} className="btn-red">Pedir cotización por WhatsApp</a>
        </p>
        <h2>Qué EPP tenemos</h2>
        <table>
          <thead><tr><th>Protección</th><th>Elementos</th></tr></thead>
          <tbody>
            <tr><td>Cabeza</td><td>Cascos de seguridad</td></tr>
            <tr><td>Manos</td><td>Guantes según el riesgo: corte, químicos, abrasión</td></tr>
            <tr><td>Pies</td><td>Calzado de seguridad con puntera</td></tr>
            <tr><td>Vías respiratorias</td><td>Barbijos y semimáscaras con filtros</td></tr>
            <tr><td>Ojos y cara</td><td>Anteojos y protectores faciales</td></tr>
            <tr><td>Oídos</td><td>Protectores auditivos de copa y endoaurales</td></tr>
            <tr><td>Visibilidad</td><td>Chalecos reflectivos</td></tr>
          </tbody>
        </table>
        <p>Si necesitás algo que no está en la lista, consultanos.</p>
        <h2>Entrega y registro</h2>
        <p>
          El empleador tiene que entregar los EPP que corresponden a cada puesto y dejar constancia de la entrega firmada por el trabajador, porque es lo que piden la ART y las inspecciones. Te ayudamos a definir qué elementos lleva cada puesto y a mantener ese registro al día.
        </p>
        <p>
          {"Para el análisis de riesgos por puesto, las capacitaciones en el uso de los EPP y el resto de la documentación, mirá "}
          <a href="/seguridad-e-higiene/">Seguridad e Higiene</a>
          .
        </p>
        <h2>Preguntas frecuentes</h2>
        <div className="faq">
          <details>
            <summary>¿Los EPP son certificados?</summary>
            <p>Sí, todos los elementos que proveemos son certificados.</p>
          </details>
          <details>
            <summary>¿Venden por unidad o solo por cantidad?</summary>
            <p>Las dos cosas. Para empresas armamos el pedido completo por puesto y te cotizamos todo junto.</p>
          </details>
          <details>
            <summary>¿Cómo sé qué EPP necesita cada trabajador?</summary>
            <p>Depende de los riesgos de cada tarea. Te asesoramos sin cargo y, si tu empresa necesita el análisis formal, lo hace nuestro equipo de Seguridad e Higiene.</p>
          </details>
        </div>
        <div className="cta-box">
          <h3>¿Necesitás equipar a tu personal?</h3>
          <p>Te armamos el pedido por puesto y te cotizamos en el día. Lunes a viernes de 8 a 18 y sábados de 9 a 13.</p>
          <a href={WHATSAPP} className="btn-red">Consultanos por WhatsApp</a>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
