import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import "@/components/inner-page.css"

const URL = "https://matafuegospesse.com/soportes-y-gabinetes/"
const TITLE = "Soportes y gabinetes para matafuegos | Pesse"
const DESCRIPTION = "Portaextintores, soportes de pared y gabinetes homologados para matafuegos, para interior y exterior. Venta e instalación en Zona Oeste y CABA."
const WHATSAPP = "https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Necesito%20soportes%20o%20gabinetes%20para%20matafuegos."

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
      name: "Soportes y gabinetes para matafuegos",
      serviceType: "Venta e instalación de soportes y gabinetes para extintores",
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
        { "@type": "ListItem", position: 2, name: "Soportes y gabinetes" },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main className="article-wrap">
        <div className="breadcrumb"><a href="/">Inicio</a>{" › Soportes y gabinetes"}</div>
        <span className="article-tag">Servicio</span>
        <h1>Soportes y gabinetes para matafuegos</h1>
        <p>
          <strong>
            Un matafuego tiene que estar fijo, visible y a mano. Vendemos e instalamos portaextintores, soportes y gabinetes homologados para interior y exterior.
          </strong>
          {" Un equipo apoyado en el piso o escondido detrás de una puerta se cae, se golpea o no se encuentra cuando hace falta."}
        </p>
        <p>
          <a href={WHATSAPP} className="btn-red">Consultar por WhatsApp</a>
        </p>
        <h2>Qué ofrecemos</h2>
        <table>
          <thead><tr><th>Producto</th><th>Para qué sirve</th></tr></thead>
          <tbody>
            <tr><td>Soporte de pared</td><td>Fija el matafuego en interiores: oficinas, comercios, pasillos</td></tr>
            <tr><td>Portaextintor de pie</td><td>Para lugares donde no se puede amurar, como locales con vidriera o stands</td></tr>
            <tr><td>Gabinete para exterior</td><td>Protege el equipo de la lluvia, el sol y los golpes en playas de estacionamiento, depósitos y obras</td></tr>
            <tr><td>Gabinete para interior</td><td>Ordena y protege el equipo en lugares de mucho tránsito</td></tr>
          </tbody>
        </table>
        <h2>Instalación</h2>
        <p>
          Cuando instalamos, ubicamos cada matafuego en un lugar visible y de fácil acceso, sin obstáculos adelante, y lo señalizamos para que se encuentre rápido. Si estás armando la distribución de los equipos, te ayudamos a calcular cuántos necesitás y dónde van.
        </p>
        <p>
          {"Más información en "}
          <a href="/blog/cuantos-matafuegos-necesita-mi-empresa">¿cuántos matafuegos necesita mi empresa?</a>
          {", y para la cartelería, mirá "}
          <a href="/senalizacion/">señalización</a>
          .
        </p>
        <h2>Preguntas frecuentes</h2>
        <div className="faq">
          <details>
            <summary>¿El soporte viene con el matafuego?</summary>
            <p>Sí, los matafuegos que vendemos salen con su soporte. Los gabinetes y portaextintores de pie se venden aparte.</p>
          </details>
          <details>
            <summary>¿Hacen la instalación?</summary>
            <p>Sí, instalamos los soportes y gabinetes en tu empresa o comercio. Coordinamos la visita por WhatsApp.</p>
          </details>
          <details>
            <summary>¿Cuándo conviene un gabinete?</summary>
            <p>Siempre que el matafuego quede a la intemperie o expuesto a golpes, polvo o vandalismo. El gabinete lo protege y alarga la vida útil del equipo.</p>
          </details>
        </div>
        <div className="cta-box">
          <h3>¿Tus matafuegos están bien ubicados?</h3>
          <p>Te asesoramos sin cargo. Lunes a viernes de 8 a 18 y sábados de 9 a 13.</p>
          <a href={WHATSAPP} className="btn-red">Consultanos por WhatsApp</a>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
