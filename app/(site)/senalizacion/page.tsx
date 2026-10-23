import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import "@/components/inner-page.css"

const URL = "https://matafuegospesse.com/senalizacion/"
const TITLE = "Señalización de seguridad y cartelería fotoluminiscente | Pesse"
const DESCRIPTION = "Carteles de matafuego, salida de emergencia, riesgo eléctrico y planos de evacuación. Cartelería fotoluminiscente conforme a normas IRAM. Zona Oeste y CABA."
const WHATSAPP = "https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Necesito%20se%C3%B1alizaci%C3%B3n%20de%20seguridad."

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
      name: "Señalización de seguridad",
      serviceType: "Cartelería de seguridad y fotoluminiscente",
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
        { "@type": "ListItem", position: 2, name: "Señalización" },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main className="article-wrap">
        <div className="breadcrumb"><a href="/">Inicio</a>{" › Señalización"}</div>
        <span className="article-tag">Servicio</span>
        <h1>Señalización de seguridad</h1>
        <p>
          <strong>
            Proveemos e instalamos cartelería de seguridad y fotoluminiscente conforme a normas IRAM y a la legislación provincial.
          </strong>
          {" La señalización es lo que permite encontrar un matafuego o una salida en segundos, incluso con humo o sin luz."}
        </p>
        <p>
          <a href={WHATSAPP} className="btn-red">Consultar por WhatsApp</a>
        </p>
        <h2>Qué carteles necesita una empresa</h2>
        <ul>
          <li>Ubicación de matafuegos y bocas de incendio</li>
          <li>Salidas de emergencia y recorridos de evacuación</li>
          <li>Riesgo eléctrico en tableros y salas de máquinas</li>
          <li>Prohibiciones: no fumar, prohibido el paso, no usar agua en fuego eléctrico</li>
          <li>Obligaciones: uso de casco, protección auditiva, calzado de seguridad</li>
          <li>Planos de evacuación con la ubicación de equipos y salidas</li>
        </ul>
        <h2>Por qué fotoluminiscente</h2>
        <p>
          Los carteles fotoluminiscentes absorben la luz y brillan en la oscuridad. Si se corta la luz durante una emergencia, siguen marcando dónde están las salidas y los matafuegos, sin necesidad de electricidad ni mantenimiento.
        </p>
        <h2>Relevamiento e instalación</h2>
        <p>
          {"Recorremos tu empresa, te decimos qué carteles faltan y dónde van, y los instalamos. Si además necesitás el plan de evacuación o el legajo técnico, lo resolvemos con nuestro servicio de "}
          <a href="/seguridad-e-higiene/">Seguridad e Higiene</a>
          .
        </p>
        <h2>Preguntas frecuentes</h2>
        <div className="faq">
          <details>
            <summary>¿La señalización es obligatoria?</summary>
            <p>Sí. La Ley 19.587 de Higiene y Seguridad en el Trabajo y su Decreto 351/79 exigen señalizar los equipos contra incendio, las salidas y los riesgos de cada lugar de trabajo. La ART y las inspecciones municipales lo controlan.</p>
          </details>
          <details>
            <summary>¿Venden carteles sueltos?</summary>
            <p>Sí. Podés comprar los carteles que necesites o pedirnos el relevamiento y la instalación completa.</p>
          </details>
          <details>
            <summary>¿Hacen el plano de evacuación?</summary>
            <p>Sí, como parte de nuestro servicio de Seguridad e Higiene. El plano se arma con la ubicación real de los equipos y las salidas de tu empresa.</p>
          </details>
        </div>
        <div className="cta-box">
          <h3>¿Le falta señalización a tu empresa?</h3>
          <p>Hacemos el relevamiento y te pasamos la cotización. Lunes a viernes de 8 a 18 y sábados de 9 a 13.</p>
          <a href={WHATSAPP} className="btn-red">Consultanos por WhatsApp</a>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
