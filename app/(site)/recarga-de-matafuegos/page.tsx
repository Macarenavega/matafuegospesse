import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import "@/components/inner-page.css"

export const metadata: Metadata = {
  title: "Recarga de matafuegos en Zona Oeste y CABA | Pesse",
  description: "Recarga y mantenimiento de matafuegos con certificación IRAM 3517-2. Revisión anual, prueba hidráulica y cambio de polvo. Merlo, Zona Oeste y CABA.",
  robots: "index, follow",
  alternates: {
    canonical: "https://matafuegospesse.com/recarga-de-matafuegos/"
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Matafuegos Pesse",
    title: "Recarga de matafuegos en Zona Oeste y CABA | Pesse",
    description: "Recarga y mantenimiento de matafuegos con certificación IRAM 3517-2. Revisión anual, prueba hidráulica y cambio de polvo. Merlo, Zona Oeste y CABA.",
    url: "https://matafuegospesse.com/recarga-de-matafuegos/",
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
      "@id": "https://matafuegospesse.com/recarga-de-matafuegos/#servicio",
      name: "Recarga y mantenimiento de matafuegos",
      serviceType: "Control, mantenimiento y recarga de extintores",
      provider: {
        "@id": "https://matafuegospesse.com/#business"
      },
      url: "https://matafuegospesse.com/recarga-de-matafuegos/",
      areaServed: [
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
        },
        {
          "@type": "AdministrativeArea",
          name: "Ciudad Autónoma de Buenos Aires"
        }
      ],
      hasCertification: {
        "@type": "Certification",
        name: "Certificado DC-P-M400-001.1 — IRAM 3517-2:2005"
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
          name: "Recarga de matafuegos"
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
        <div className="breadcrumb"><a href="/">Inicio</a>{" › Recarga de matafuegos"}</div>
        <span className="article-tag">Servicio</span>
        <h1>Recarga y mantenimiento de matafuegos</h1>
        <p>
          <strong>
            Recargamos y mantenemos matafuegos de todo tipo con certificación según la norma IRAM 3517-2:2005 (certificado N.º DC-P-M400-001.1) y habilitación provincial DPS N.º 330.
          </strong>
          {" El servicio incluye la revisión anual obligatoria, la prueba hidráulica cada 5 años y el cambio de polvo cada 10 años, con la etiqueta de servicio que exige la ART. Trabajamos desde nuestro taller de Merlo para empresas, comercios, consorcios y hogares de Zona Oeste y CABA. "}
          <strong>
            El retiro y la entrega son sin cargo, y mientras tus equipos están en el taller te dejamos matafuegos de reemplazo.
          </strong>
        </p>
        <p>
          <a href={"https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Quiero%20cotizar%20la%20recarga%20de%20matafuegos."} className="btn-red">
            Cotizar la recarga por WhatsApp
          </a>
        </p>
        <h2>Qué incluye la revisión anual</h2>
        <ul>
          <li>
            Control de presión con manómetro calibrado y verificación de que el manómetro no esté trabado
          </li>
          <li>Control de peso y del estado del agente extintor</li>
          <li>Inspección del cilindro: golpes, corrosión, abolladuras y estado de la base</li>
          <li>Revisión de válvula, manguera, tobera, precinto y pasador de seguridad</li>
          <li>
            Recarga cuando corresponde (después de un uso o si la presión o el peso están fuera de rango)
          </li>
          <li>Etiqueta de servicio con fecha, datos de la empresa y próximo vencimiento</li>
        </ul>
        <h2>El ciclo completo de mantenimiento</h2>
        <table>
          <thead><tr><th>Cuándo</th><th>Qué se hace</th></tr></thead>
          <tbody>
            <tr><td>Cada año</td><td>Revisión anual: inspección, presión, peso, válvula y manguera</td></tr>
            <tr>
              <td>Después de cada uso</td>
              <td>Recarga inmediata, aunque la descarga haya sido parcial</td>
            </tr>
            <tr><td>Cada 5 años</td><td>Prueba hidráulica del cilindro y re-timbrado</td></tr>
            <tr><td>Cada 10 años</td><td>Cambio completo del polvo químico seco</td></tr>
            <tr><td>A los 20 años</td><td>Baja del equipo, aunque parezca en buen estado</td></tr>
          </tbody>
        </table>
        <p>
          {"Más detalle en "}
          <a href="/blog/cada-cuanto-revisar-matafuegos">¿Cada cuánto hay que revisar los matafuegos?</a>
          {" y en "}
          <a href="/blog/cambio-polvo-quimico-seco-cada-10-anos">
            por qué hay que cambiar el polvo cada 10 años
          </a>
          .
        </p>
        <h2>Cuándo hay que recargar antes de que pase un año</h2>
        <ul>
          <li>Después de cualquier uso, aunque sea parcial</li>
          <li>Si el manómetro está fuera de la zona verde o no se mueve</li>
          <li>Si el precinto o el pasador de seguridad están rotos o faltan</li>
          <li>Si el cilindro tiene golpes, óxido o abolladuras</li>
          <li>Si la manguera o la tobera están obstruidas, rígidas o fisuradas</li>
        </ul>
        <h2>Certificación IRAM 3517-2</h2>
        <p>
          {"La norma IRAM 3517-2 define cómo se controlan, mantienen y recargan los extintores. Nuestro servicio está certificado bajo esa norma con el certificado N.º DC-P-M400-001.1. Eso significa que el proceso, los registros y la etiqueta que dejamos en cada equipo son válidos frente a la ART, una inspección municipal o la aseguradora. Ver "}
          <a href="/certificaciones/">nuestras certificaciones</a>
          .
        </p>
        <h2>Cómo trabajamos</h2>
        <ol>
          <li>
            <strong>Coordinamos la visita</strong>
            {" con el responsable del lugar, nunca con un empleado sin autorización (así se evita "}
            <a href="/blog/estafa-matafuegos-retiran-cobran-de-mas">la estafa del matafuego</a>
            ).
          </li>
          <li>
            <strong>Relevamos los equipos</strong>
            : tipo, capacidad, fecha de fabricación, última prueba hidráulica y último cambio de polvo.
          </li>
          <li>
            <strong>Retiramos los equipos sin cargo</strong>
            {" y te dejamos matafuegos de reemplazo, o hacemos el servicio en el lugar si corresponde."}
          </li>
          <li><strong>Hacemos el servicio</strong>{" en nuestro taller de Merlo."}</li>
          <li>
            <strong>Te entregamos los equipos sin cargo</strong>
            , etiquetados y con la documentación del servicio.
          </li>
        </ol>
        <h2>Matafuegos para auto</h2>
        <p>
          {"También vendemos y recargamos el matafuego de 1 kg para el auto, con la etiqueta vigente que se controla en la VTV. Ver "}
          <a href="/matafuego-para-auto/">matafuegos para auto</a>
          .
        </p>
        <h2>Zonas que cubrimos</h2>
        <p>
          Desde Sarandí 416, Merlo, atendemos Merlo, Morón, Ituzaingó, Moreno, Luján, La Matanza, Tres de Febrero y San Martín, el resto de la Provincia de Buenos Aires y la Ciudad Autónoma de Buenos Aires.
        </p>
        <h2>Preguntas frecuentes</h2>
        <div className="faq">
          <details>
            <summary>¿Cada cuánto hay que recargar un matafuego?</summary>
            <p>
              Una vez por año como mínimo, y siempre después de cualquier uso, aunque haya sido parcial. Además, el cilindro necesita una prueba hidráulica cada 5 años y, en los equipos de polvo, el cambio completo del polvo cada 10 años.
            </p>
          </details>
          <details>
            <summary>¿Qué pasa si el matafuego no se usó nunca?</summary>
            <p>
              Igual hay que revisarlo cada año. El polvo se compacta y absorbe humedad, y la presión puede bajar sin que se note desde afuera. La etiqueta de servicio vencida es una observación segura en una inspección de la ART.
            </p>
          </details>
          <details>
            <summary>¿Cuánto cuesta la recarga?</summary>
            <p>
              Depende del tipo de agente, la capacidad y la cantidad de equipos. Como los precios cambian seguido, no publicamos una lista fija: te cotizamos en el día por WhatsApp. El retiro y la entrega no tienen cargo.
            </p>
          </details>
          <details>
            <summary>¿Retiran y entregan los matafuegos?</summary>
            <p>
              Sí, sin cargo. Coordinamos el retiro con el responsable del lugar y te dejamos equipos de reemplazo mientras los tuyos están en el taller.
            </p>
          </details>
          <details>
            <summary>¿Cuánto tarda el servicio?</summary>
            <p>
              La revisión anual se coordina por visita. Los trabajos de taller, como la prueba hidráulica o el cambio de polvo, suelen demorar uno o dos días hábiles. Mientras tanto dejamos equipos de reemplazo para que el local no quede sin cobertura.
            </p>
          </details>
          <details>
            <summary>¿Recargan matafuegos de otras empresas o marcas?</summary>
            <p>
              Sí, siempre que el cilindro esté en condiciones. Si el equipo tiene más de 20 años desde su fabricación o no pasa la prueba hidráulica, hay que darlo de baja y reemplazarlo.
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
          <h3>¿Tus matafuegos están al día?</h3>
          <p>
            Pasanos cantidad y tipo de equipos y te cotizamos en el día. Retiro y entrega sin cargo. Lunes a viernes de 8 a 18 y sábados de 9 a 13.
          </p>
          <a href={"https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Quiero%20cotizar%20la%20recarga%20de%20matafuegos."} className="btn-red">
            Consultanos por WhatsApp
          </a>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
