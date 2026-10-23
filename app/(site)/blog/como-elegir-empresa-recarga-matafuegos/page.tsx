import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import "@/components/inner-page.css"

export const metadata: Metadata = {
  title: "Cómo elegir empresa de recarga de matafuegos: 8 claves",
  description: "Qué verificar antes de contratar la recarga de matafuegos: certificación IRAM 3517-2, etiqueta, factura, plazos y señales de alerta.",
  robots: "index, follow",
  alternates: {
    canonical: "https://matafuegospesse.com/blog/como-elegir-empresa-recarga-matafuegos"
  },
  openGraph: {
    type: "article",
    locale: "es_AR",
    siteName: "Matafuegos Pesse",
    title: "Cómo elegir empresa de recarga de matafuegos: 8 claves",
    description: "Qué verificar antes de contratar la recarga de matafuegos: certificación IRAM 3517-2, etiqueta, factura, plazos y señales de alerta.",
    url: "https://matafuegospesse.com/blog/como-elegir-empresa-recarga-matafuegos",
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
      "@id": "https://matafuegospesse.com/blog/como-elegir-empresa-recarga-matafuegos#article",
      headline: "Cómo elegir una empresa de recarga de matafuegos (y evitar estafas)",
      description: "Qué verificar antes de contratar la recarga de matafuegos: certificación, etiqueta, factura, plazos y señales de alerta.",
      datePublished: "2026-09-16",
      dateModified: "2026-10-14",
      inLanguage: "es-AR",
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
      mainEntityOfPage: "https://matafuegospesse.com/blog/como-elegir-empresa-recarga-matafuegos",
      image: "https://matafuegospesse.com/og-image.jpg"
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
          name: "Cómo elegir empresa de recarga"
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
        <h1>Cómo elegir una empresa de recarga de matafuegos (y evitar estafas)</h1>
        <p className="article-meta">
          {"16 de septiembre de 2026 · Por "}
          <a href="/nosotros/juan-changala/" rel="author" style={{ color: "inherit" }}>Juan Changala</a>
          , Lic. en Higiene y Seguridad en el Trabajo · 6 min de lectura
        </p>
        <div className="highlight-box">
          <strong>En resumen</strong>
          Antes de contratar, verificá que la empresa tenga su servicio certificado según IRAM 3517-2 o su habilitación vigente, que deje una etiqueta con fecha, empresa y próximo vencimiento, que emita factura a su nombre, que coordine la visita con el responsable del lugar y que te diga por escrito cuánto tarda y qué pasa con tus equipos mientras tanto.
        </div>
        <h2>Por qué importa a quién le encargás la recarga</h2>
        <p>
          {"Un matafuego con la etiqueta de una empresa no certificada es, a efectos prácticos, un matafuego sin mantenimiento. Ante una inspección de la ART, una habilitación municipal o un siniestro, lo que vale es la documentación del servicio. La "}
          <a href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/15000-19999/17612/norma.htm" rel="noopener">
            Ley 19.587
          </a>
          {" y el "}
          <a href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/30000-34999/32030/texact.htm" rel="noopener">
            Decreto 351/79
          </a>
          {" ponen la responsabilidad en el empleador: si el equipo falla o la documentación no es válida, el problema es tuyo, no de quien lo recargó. Repasá los plazos en "}
          <a href="/blog/cada-cuanto-revisar-matafuegos">¿Cada cuánto hay que revisar los matafuegos?</a>
        </p>
        <h2>Las 8 claves para comparar empresas</h2>
        <h3>1. ¿Tiene certificación o habilitación vigente?</h3>
        <p>
          {"Pedí el número de certificado del servicio (por ejemplo, según IRAM 3517-2) o el de habilitación, y verificalo. Una empresa seria lo da en el momento; si dice que \"lo manda después\", es una señal de alerta."}
        </p>
        <h3>2. ¿Trabaja según la norma IRAM 3517-2?</h3>
        <p>
          Es la norma que define cómo se controla, mantiene y recarga un extintor. Si en el presupuesto o en la etiqueta no aparece ninguna norma, preguntá por qué.
        </p>
        <h3>3. ¿Qué datos deja en la etiqueta?</h3>
        <p>
          {"La etiqueta de servicio tiene que indicar fecha, empresa, sus datos de registro y el próximo vencimiento. Una etiqueta genérica o sin datos no sirve frente a una inspección. Mirá "}
          <a href="/blog/matafuego-vencido-puede-explotar">
            qué pasa cuando un matafuego no recibe el mantenimiento correcto
          </a>
          .
        </p>
        <h3>4. ¿Hace la prueba hidráulica y el cambio de polvo?</h3>
        <p>
          {"La revisión anual no alcanza: el cilindro necesita prueba hidráulica cada 5 años y el polvo se cambia cada 10. Preguntá si la empresa lo hace y cómo te avisa los vencimientos. Más en "}
          <a href="/blog/cambio-polvo-quimico-seco-cada-10-anos">
            por qué hay que cambiar el polvo cada 10 años
          </a>
          .
        </p>
        <h3>5. ¿Qué pasa con tus equipos mientras están en el taller?</h3>
        <p>
          Algunos trabajos se hacen en taller y llevan uno o dos días hábiles. Preguntá si dejan equipos de reemplazo para que el lugar no quede sin cobertura.
        </p>
        <h3>6. ¿Emite factura a su nombre?</h3>
        <p>
          La factura tiene que estar a nombre de la misma empresa que figura en la etiqueta y en el certificado. Un remito sin datos o una factura de otra razón social es motivo para no seguir.
        </p>
        <h3>7. ¿Coordina la visita con el responsable?</h3>
        <p>
          {"Una empresa legítima acuerda fecha y hora con el dueño o el administrador. Las estafas empiezan con alguien que se presenta sin aviso y habla con un empleado. Te lo contamos en "}
          <a href="/blog/estafa-matafuegos-retiran-cobran-de-mas">la estafa del matafuego</a>
          {"; también hay casos documentados en la prensa, como el del "}
          <a href="https://www.lacapital.com.ar/suscriptores/el-loco-del-matafuego-un-estafador-que-ronda-los-negocios-del-microcentro-n10108541.html" rel="noopener">
            {"\"loco del matafuego\" que publicó La Capital"}
          </a>
          .
        </p>
        <h3>8. ¿Te asesora o solo vende?</h3>
        <p>
          {"La cantidad y el tipo de matafuegos dependen de la superficie y de la actividad. Una buena empresa te dice si te falta un equipo, si el que tenés no corresponde al riesgo o si está mal ubicado. Ver "}
          <a href="/blog/tipos-de-matafuegos">tipos de matafuegos</a>
          .
        </p>
        <h2>Checklist para comparar presupuestos</h2>
        <table>
          <thead><tr><th>Criterio</th><th>Qué pedir</th><th>Señal de alerta</th></tr></thead>
          <tbody>
            <tr>
              <td>Certificación</td>
              <td>Número de certificado o habilitación</td>
              <td>{"No lo da o \"lo manda después\""}</td>
            </tr>
            <tr><td>Norma</td><td>IRAM 3517-2</td><td>No menciona ninguna norma</td></tr>
            <tr>
              <td>Etiqueta</td>
              <td>Fecha, empresa, registro y vencimiento</td>
              <td>Etiqueta genérica o sin datos</td>
            </tr>
            <tr>
              <td>Prueba hidráulica</td>
              <td>Cada 5 años, con re-timbrado</td>
              <td>{"\"No hace falta\""}</td>
            </tr>
            <tr><td>Cambio de polvo</td><td>Cada 10 años</td><td>No lo ofrece</td></tr>
            <tr>
              <td>Reemplazo temporal</td>
              <td>Equipos mientras están en taller</td>
              <td>Te deja sin matafuegos</td>
            </tr>
            <tr>
              <td>Factura</td>
              <td>A nombre de la empresa del certificado</td>
              <td>Remito sin datos u otra razón social</td>
            </tr>
            <tr><td>Visita</td><td>Coordinada con el responsable</td><td>Se presentan sin aviso</td></tr>
          </tbody>
        </table>
        <h2>Cómo trabajamos en Matafuegos Pesse</h2>
        <p>
          {"Nuestro servicio de control, mantenimiento y recarga está certificado según IRAM 3517-2:2005 (certificado N.º DC-P-M400-001.1; ver "}
          <a href="/certificaciones/">certificaciones</a>
          {"). Coordinamos cada visita con el responsable del lugar, retiramos y entregamos los equipos sin cargo y, mientras están en el taller, dejamos equipos de reemplazo. Tenemos habilitación provincial DPS N.º 330 y habilitación en CABA (N.º 4927135). Conocé el detalle del "}
          <a href="/recarga-de-matafuegos/">servicio de recarga</a>
          .
        </p>
        <h2>Preguntas frecuentes</h2>
        <div className="faq">
          <details>
            <summary>¿La recarga es obligatoria aunque no haya usado el matafuego?</summary>
            <p>
              Sí. La revisión es anual aunque el equipo nunca se haya usado: el polvo se compacta, la presión puede bajar y la etiqueta vencida es motivo de observación.
            </p>
          </details>
          <details>
            <summary>¿Puedo cambiar de empresa de mantenimiento?</summary>
            <p>
              Sí. La nueva empresa revisa los equipos, verifica las fechas de prueba hidráulica y cambio de polvo, y deja su propia etiqueta de servicio.
            </p>
          </details>
          <details>
            <summary>¿Cuánto cuesta la recarga?</summary>
            <p>
              Depende del tipo de agente, la capacidad en kilos, la cantidad de equipos y si corresponde prueba hidráulica o cambio de polvo. Desconfiá de un precio por equipo muy por debajo del mercado: suele no incluir lo que exige la norma.
            </p>
          </details>
        </div>
        <div className="cta-box">
          <h3>Pedinos el número de certificado antes de contratar</h3>
          <p>Te cotizamos sin cargo y te mandamos la documentación.</p>
          <a href={"https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Quiero%20cotizar%20la%20recarga%20de%20matafuegos."} className="btn-red">
            Consultanos por WhatsApp
          </a>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
