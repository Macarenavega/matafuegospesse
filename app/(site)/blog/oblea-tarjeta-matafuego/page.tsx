import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import "@/components/inner-page.css"

export const metadata: Metadata = {
  title: "Oblea y tarjeta del matafuego: qué son y cómo verificarlas",
  description: "Qué datos tiene la oblea o etiqueta del matafuego, qué es la tarjeta de CABA y cómo verificar que la empresa recargadora esté habilitada.",
  robots: "index, follow",
  alternates: {
    canonical: "https://matafuegospesse.com/blog/oblea-tarjeta-matafuego"
  },
  openGraph: {
    type: "article",
    locale: "es_AR",
    siteName: "Matafuegos Pesse",
    title: "Oblea y tarjeta del matafuego: qué son y cómo verificarlas",
    description: "Qué datos tiene la oblea o etiqueta del matafuego, qué es la tarjeta de CABA y cómo verificar que la empresa recargadora esté habilitada.",
    url: "https://matafuegospesse.com/blog/oblea-tarjeta-matafuego",
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
      "@type": "Article",
      "@id": "https://matafuegospesse.com/blog/oblea-tarjeta-matafuego#article",
      headline: "Oblea y tarjeta del matafuego: qué son y cómo verificarlas",
      description: "Qué datos tiene la oblea o etiqueta del matafuego, qué es la tarjeta de CABA y cómo verificar que la empresa recargadora esté habilitada.",
      datePublished: "2026-06-10",
      dateModified: "2026-10-14",
      inLanguage: "es-AR",
      image: "https://matafuegospesse.com/og-image.jpg",
      author: {
        "@type": "Person",
        "@id": "https://matafuegospesse.com/nosotros/juan-changala/#person",
        name: "Juan Changala",
        url: "https://matafuegospesse.com/nosotros/juan-changala/"
      },
      publisher: {
        "@type": "Organization",
        name: "Matafuegos Pesse",
        url: "https://matafuegospesse.com"
      },
      mainEntityOfPage: "https://matafuegospesse.com/blog/oblea-tarjeta-matafuego"
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
          name: "Blog",
          item: "https://matafuegospesse.com/blog/"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Oblea y tarjeta del matafuego: qué son y cómo verificarlas"
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
        <div className="breadcrumb"><a href="/">Inicio</a>{" › "}<a href="/blog/">Blog</a>{" › Guía"}</div>
        <span className="article-tag">Guía</span>
        <h1>Oblea y tarjeta del matafuego: qué son y cómo verificarlas</h1>
        <p className="article-meta">
          {"10 de junio de 2026 · Por "}
          <a href="/nosotros/juan-changala/" rel="author" style={{ color: "inherit" }}>Juan Changala</a>
          , Lic. en Higiene y Seguridad en el Trabajo · 5 min de lectura
        </p>
        <div className="highlight-box">
          <strong>En resumen</strong>
          {"La "}
          <strong>oblea</strong>
          {" (también llamada etiqueta de servicio o marbete) es el adhesivo que deja la empresa que recargó el matafuego: indica la fecha del servicio, los datos de la empresa y el próximo vencimiento. En la Ciudad de Buenos Aires, además, las empresas inscriptas en el "}
          <a href="https://data.buenosaires.gob.ar/dataset/registro-fabricantes-reparadores-recargadores-extintores" rel="noopener">
            registro oficial de recargadores
          </a>
          {" usan "}
          <strong>tarjetas de matafuegos</strong>
          {" que acreditan que el servicio lo hizo una empresa autorizada. Para verificar, chequeá que los datos coincidan con la factura y que la empresa figure en el registro."}
        </div>
        <h2>Qué es la oblea o etiqueta de servicio</h2>
        <p>
          Es la constancia, pegada en el propio equipo, de que el matafuego pasó por un servicio de control y recarga. Es lo primero que se mira en una inspección municipal, una visita de la ART, la VTV o un control de tránsito. Sin una etiqueta vigente, a efectos prácticos el matafuego está vencido, aunque esté cargado.
        </p>
        <h2>Qué datos tiene que tener</h2>
        <table>
          <thead><tr><th>Dato</th><th>Qué controlar</th></tr></thead>
          <tbody>
            <tr><td>Empresa que hizo el servicio</td><td>Que sea la misma que figura en la factura</td></tr>
            <tr><td>Número de habilitación o inscripción</td><td>Que exista y que puedas verificarlo</td></tr>
            <tr><td>Fecha del servicio</td><td>Que tenga menos de un año</td></tr>
            <tr><td>Próximo vencimiento</td><td>Agendalo para no quedar fuera de plazo</td></tr>
            <tr><td>Tipo de servicio</td><td>Si fue recarga, prueba hidráulica o cambio de polvo</td></tr>
          </tbody>
        </table>
        <p>
          {"Junto con la oblea, el matafuego tiene que tener el "}
          <strong>precinto y el pasador de seguridad</strong>
          {" colocados y el "}
          <strong>manómetro en la zona verde</strong>
          . Una oblea nueva sobre un equipo con el manómetro en rojo es una señal de alerta.
        </p>
        <h2>Qué es la tarjeta del matafuego en CABA</h2>
        <p>
          {"En la Ciudad de Buenos Aires existe un registro oficial de fabricantes, reparadores y recargadores de extintores, que el Gobierno de la Ciudad publica en su portal de datos abiertos. Según esa publicación, las empresas inscriptas \"están habilitadas para realizar la compra de tarjetas de matafuegos que indican la legalidad de la empresa autorizada y su labor\"."}
        </p>
        <p>
          {"Por eso, si tu local está en CABA, el matafuego tiene que tener la tarjeta de una empresa que figure en ese registro. En el caso de Matafuegos Pesse, la inscripción es la "}
          <strong>N.º 4927135</strong>
          .
        </p>
        <h2>Y en la Provincia de Buenos Aires</h2>
        <p>
          {"En la provincia, la empresa recargadora tiene que contar con su habilitación provincial, y ese número debería figurar en la documentación del servicio. Matafuegos Pesse tiene la "}
          <strong>habilitación provincial DPS N.º 330</strong>
          {" y su servicio está certificado según la norma IRAM 3517-2:2005. Ver "}
          <a href="/certificaciones/">certificaciones</a>
          .
        </p>
        <h2>Cómo verificar a la empresa en 3 pasos</h2>
        <ol>
          <li>
            <strong>Pedí el número de habilitación o inscripción</strong>
            {" antes de entregar los equipos. Una empresa seria lo da en el momento."}
          </li>
          <li>
            <strong>Buscala en el registro.</strong>
            {" Si estás en CABA, entrá al "}
            <a href="https://data.buenosaires.gob.ar/dataset/registro-fabricantes-reparadores-recargadores-extintores" rel="noopener">
              registro de recargadores de la Ciudad
            </a>
            , descargá el listado y buscá la razón social o el número.
          </li>
          <li>
            <strong>Compará con la factura:</strong>
            {" el nombre de la oblea, la factura y el registro tienen que coincidir."}
          </li>
        </ol>
        <h2>Señales de una oblea que no sirve</h2>
        <ul>
          <li>No tiene datos de la empresa o tiene solo un sello sin número</li>
          <li>La empresa no figura en el registro o no te da su número</li>
          <li>La factura es de otra razón social, o no hay factura</li>
          <li>La fecha está escrita a mano sobre una etiqueta genérica</li>
          <li>{"Te la ofrecen \"suelta\", sin haber hecho el servicio"}</li>
        </ul>
        <p>
          {"Estas señales suelen aparecer juntas en "}
          <a href="/blog/estafa-matafuegos-retiran-cobran-de-mas">la estafa del matafuego</a>
          .
        </p>
        <h2>Otros datos que conviene mirar en el cilindro</h2>
        <ul>
          <li>
            <strong>Fecha de fabricación</strong>
            , grabada en el cilindro: a los 20 años el equipo se da de baja.
          </li>
          <li><strong>Última prueba hidráulica</strong>: se hace cada 5 años.</li>
          <li>
            <strong>Último cambio de polvo</strong>
            {": cada 10 años en los equipos de polvo. Ver "}
            <a href="/blog/cambio-polvo-quimico-seco-cada-10-anos">por qué</a>
            .
          </li>
        </ul>
        <h2>Preguntas frecuentes</h2>
        <div className="faq">
          <details>
            <summary>¿Se puede comprar una oblea suelta?</summary>
            <p>
              No sirve. La oblea acredita que una empresa habilitada hizo el servicio en ese equipo: una etiqueta sin servicio no tiene validez y, si hay un siniestro, la aseguradora puede rechazar la cobertura.
            </p>
          </details>
          <details>
            <summary>¿La oblea del matafuego del auto es igual?</summary>
            <p>
              {"Sí, la lógica es la misma: el matafuego del auto tiene que tener la etiqueta de servicio vigente, porque es lo que se controla en la VTV. Ver "}
              <a href="/matafuego-para-auto/">matafuegos para auto</a>
              .
            </p>
          </details>
          <details>
            <summary>¿Qué hago si la empresa no figura en el registro?</summary>
            <p>
              No le entregues los equipos ni pagues hasta verificarlo. Si ya los retiró sin autorización, pedí factura con razón social y CUIT, y si hay presión para pagar, hacé la denuncia ante Defensa al Consumidor.
            </p>
          </details>
          <details>
            <summary>¿Cuánto dura la oblea?</summary>
            <p>
              Un año desde la fecha del servicio, o menos si el matafuego se usa: después de cualquier descarga hay que recargarlo y ponerle una etiqueta nueva.
            </p>
          </details>
        </div>
        <div className="author-box">
          <img src="/img/juan-changala.webp" width={480} height={480} alt="Juan Changala" loading="lazy" />
          <p>
            <strong>{"Escrito por "}<a href="/nosotros/juan-changala/">Juan Changala</a></strong>
            <br />
            Licenciado en Higiene y Seguridad en el Trabajo · Matrícula LHS-001107 PBA
          </p>
        </div>
        <div className="related-posts" style={{ margin: "48px 0 0", padding: "28px", background: "var(--gray-bg)", borderRadius: "6px" }}>
          <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: ".08em", color: "var(--gray-mid)", marginBottom: "14px" }}>
            También te puede interesar
          </p>
          <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li>
              <a href="/blog/como-elegir-empresa-recarga-matafuegos" style={{ color: "var(--red)", fontWeight: "600", textDecoration: "none" }}>
                Cómo elegir una empresa de recarga de matafuegos →
              </a>
            </li>
            <li>
              <a href="/blog/cuantos-matafuegos-necesita-mi-empresa" style={{ color: "var(--red)", fontWeight: "600", textDecoration: "none" }}>
                ¿Cuántos matafuegos necesita mi empresa? →
              </a>
            </li>
            <li>
              <a href="/certificaciones/" style={{ color: "var(--red)", fontWeight: "600", textDecoration: "none" }}>
                Certificaciones y habilitaciones de Matafuegos Pesse →
              </a>
            </li>
          </ul>
        </div>
        <div className="cta-box">
          <h3>¿Tus matafuegos tienen la oblea vencida?</h3>
          <p>
            Los retiramos sin cargo, te dejamos equipos de reemplazo y te los devolvemos con la etiqueta nueva.
          </p>
          <a href={"https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Tengo%20matafuegos%20con%20la%20oblea%20vencida."} className="btn-red">
            Consultanos por WhatsApp
          </a>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
