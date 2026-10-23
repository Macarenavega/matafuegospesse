import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import "@/components/inner-page.css"

const URL = "https://matafuegospesse.com/venta-de-matafuegos/"
const TITLE = "Venta de matafuegos certificados en Zona Oeste | Pesse"
const DESCRIPTION = "Venta de matafuegos ABC, CO₂, agua y clase K certificados IRAM, con soporte y tarjeta. Stock permanente y entrega en el día en Zona Oeste. Merlo, desde 1995."
const WHATSAPP = "https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Quiero%20comprar%20matafuegos."

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
      name: "Venta de matafuegos",
      serviceType: "Venta de extintores",
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
        { "@type": "ListItem", position: 2, name: "Venta de matafuegos" },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main className="article-wrap">
        <div className="breadcrumb"><a href="/">Inicio</a>{" › Venta de matafuegos"}</div>
        <span className="article-tag">Servicio</span>
        <h1>Venta de matafuegos</h1>
        <p>
          <strong>
            Vendemos matafuegos nuevos y certificados para todo tipo de fuego: para empresas, comercios, depósitos, hogares y vehículos.
          </strong>
          {" Tenemos stock permanente y entregamos en el día en Zona Oeste. Cada equipo sale con su soporte, su tarjeta y la etiqueta de la empresa, listo para instalar."}
        </p>
        <p>
          <a href={WHATSAPP} className="btn-red">Pedir cotización por WhatsApp</a>
        </p>
        <h2>Qué matafuego necesitás</h2>
        <p>
          El tipo de extintor depende de lo que se puede quemar en el lugar. Si no estás seguro, te asesoramos sin cargo.
        </p>
        <table>
          <thead><tr><th>Tipo</th><th>Para qué fuegos</th><th>Dónde se usa</th></tr></thead>
          <tbody>
            <tr><td>Polvo químico ABC</td><td>Clases A, B y C</td><td>Oficinas, comercios, depósitos, hogares y vehículos</td></tr>
            <tr><td>CO₂ (dióxido de carbono)</td><td>Clases B y C</td><td>Tableros eléctricos, salas de servidores, equipos electrónicos</td></tr>
            <tr><td>Agua presurizada</td><td>Clase A</td><td>Materiales sólidos: papel, madera, telas</td></tr>
            <tr><td>Clase K</td><td>Aceites y grasas de cocina</td><td>Cocinas de restaurantes y comedores</td></tr>
          </tbody>
        </table>
        <p>
          {"Más detalle en "}
          <a href="/blog/tipos-de-matafuegos">tipos de matafuegos y cuál usar en cada caso</a>
          .
        </p>
        <h2>Cuántos matafuegos necesita tu empresa</h2>
        <p>
          {"El Decreto 351/79 pide como mínimo un matafuego cada 200 m² de superficie, a una distancia máxima de recorrido de 20 metros para fuegos clase A y de 15 metros para clase B. Te explicamos cómo calcularlo en "}
          <a href="/blog/cuantos-matafuegos-necesita-mi-empresa">¿cuántos matafuegos necesita mi empresa?</a>
          {", y si querés lo vemos en tu local."}
        </p>
        <h2>Qué incluye la compra</h2>
        <ul>
          <li>Matafuego nuevo, con certificación y sello IRAM</li>
          <li>
            {"Soporte para fijarlo a la pared, o "}
            <a href="/soportes-y-gabinetes/">gabinete</a>
            {" si va a la intemperie"}
          </li>
          <li>Tarjeta y etiqueta con los datos de la empresa y la fecha</li>
          <li>Asesoramiento sobre el tipo, la cantidad y la ubicación</li>
          <li>Recordatorio del próximo vencimiento, para que no se te pase la recarga</li>
        </ul>
        <p>
          {"¿Es para el auto? Mirá los "}
          <a href="/matafuego-para-auto/">matafuegos para auto apto VTV</a>
          {". ¿Ya tenés matafuegos? Hacemos la "}
          <a href="/recarga-de-matafuegos/">recarga y el mantenimiento</a>
          .
        </p>
        <h2>Preguntas frecuentes</h2>
        <div className="faq">
          <details>
            <summary>¿Hacen envíos?</summary>
            <p>Sí. En Zona Oeste entregamos en el día; para el resto de la Provincia de Buenos Aires y CABA, coordinamos la entrega por WhatsApp.</p>
          </details>
          <details>
            <summary>¿Qué capacidad conviene?</summary>
            <p>Depende del riesgo y de la superficie. Para un comercio o una oficina lo habitual es el ABC de 5 kg; para el auto, el de 1 kg. En depósitos o industrias puede convenir uno de mayor capacidad. Te recomendamos el adecuado según tu caso.</p>
          </details>
          <details>
            <summary>¿Cuánto cuesta un matafuego?</summary>
            <p>Depende del tipo y la capacidad, y los precios cambian seguido. Escribinos por WhatsApp y te pasamos la cotización en el día.</p>
          </details>
          <details>
            <summary>¿Un matafuego nuevo hay que recargarlo?</summary>
            <p>Todo matafuego necesita una revisión por año y una recarga después de cada uso, aunque sea nuevo. Te avisamos cuando le toca.</p>
          </details>
        </div>
        <div className="cta-box">
          <h3>¿Necesitás matafuegos para tu empresa o tu casa?</h3>
          <p>Te asesoramos sin cargo y te cotizamos en el día. Lunes a viernes de 8 a 18 y sábados de 9 a 13.</p>
          <a href={WHATSAPP} className="btn-red">Consultanos por WhatsApp</a>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
