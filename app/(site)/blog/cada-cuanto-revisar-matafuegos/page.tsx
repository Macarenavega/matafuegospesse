import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "¿Cada cuánto revisar matafuegos? Plazos obligatorios",
  description: "IRAM y ART exigen revisión anual y prueba hidráulica quinquenal. Plazos, consecuencias del incumplimiento y quién puede hacer la revisión en Buenos Aires.",
  robots: "index, follow",
  alternates: {
    canonical: "https://matafuegospesse.com/blog/cada-cuanto-revisar-matafuegos"
  },
  openGraph: {
    type: "article",
    title: "¿Cada cuánto revisar matafuegos? Plazos obligatorios",
    description: "IRAM y ART exigen revisión anual y prueba hidráulica quinquenal. Plazos y consecuencias del incumplimiento para empresas en Buenos Aires.",
    url: "https://matafuegospesse.com/blog/cada-cuanto-revisar-matafuegos"
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "¿Cada cuánto hay que revisar los matafuegos?",
      description: "La normativa IRAM y ART exige controles anuales y quinquenales de matafuegos. Conocé los plazos obligatorios para empresas en Buenos Aires.",
      datePublished: "2026-09-18",
      dateModified: "2026-10-14",
      author: {
        "@type": "Person",
        "@id": "https://matafuegospesse.com/nosotros/juan-changala/#person",
        name: "Juan Changala",
        url: "https://matafuegospesse.com/nosotros/juan-changala/",
        jobTitle: "Licenciado en Higiene y Seguridad en el Trabajo",
        worksFor: {
          "@type": "Organization",
          name: "Matafuegos Pesse",
          url: "https://matafuegospesse.com"
        }
      },
      publisher: {
        "@type": "Organization",
        name: "Matafuegos Pesse",
        url: "https://matafuegospesse.com"
      },
      mainEntityOfPage: "https://matafuegospesse.com/blog/cada-cuanto-revisar-matafuegos",
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
          name: "¿Cada cuánto hay que revisar los matafuegos?"
        }
      ]
    }
  ]
}

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <JsonLd data={jsonLd} />
      <div className="article-wrap">
        <div className="breadcrumb">
          <a href="/">Inicio</a>
          {" › "}
          <a href="/blog/">Blog</a>
          {" › Mantenimiento "}
        </div>
        <span className="article-tag">Mantenimiento</span>
        <h1>¿Cada cuánto hay que revisar los matafuegos?</h1>
        <p className="article-meta">
          {"18 de septiembre de 2026 · Por "}
          <a href="/nosotros/juan-changala/" rel="author" style={{ color: "inherit" }}>Juan Changala</a>
          , Lic. en Higiene y Seguridad en el Trabajo · 4 min de lectura
        </p>
        <div className="highlight-box">
          <strong>En resumen</strong>
          Los matafuegos se revisan una vez por año y después de cada uso, y el cilindro necesita una prueba hidráulica cada 5 años. Cada control lo hace una empresa habilitada, que deja una etiqueta con la fecha y sus datos: sin esa etiqueta, la revisión no vale ante la ART ni ante una inspección.
        </div>
        <p>
          {"Una de las preguntas más frecuentes que recibimos de empresas en Buenos Aires es: "}
          <strong>¿con qué frecuencia hay que revisar los matafuegos?</strong>
          {" La respuesta no es solo una cuestión de buenas prácticas — es una obligación legal con consecuencias concretas si se incumple."}
        </p>
        <h2>Lo que dice la normativa</h2>
        <p>En Argentina, el mantenimiento de matafuegos está regulado principalmente por:</p>
        <ul>
          <li>
            <strong>
              <a href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/15000-19999/17612/norma.htm" rel="noopener" style={{ color: "inherit" }}>
                Ley 19587 de Higiene y Seguridad en el Trabajo
              </a>
            </strong>
            {" y su "}
            <a href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/30000-34999/32030/texact.htm" rel="noopener">
              Decreto reglamentario 351/79
            </a>
          </li>
          <li><strong>Normas IRAM 3517 y 3523</strong>{" — requisitos técnicos para extintores"}</li>
          <li><strong>Resoluciones de la SRT</strong>{" (Superintendencia de Riesgos del Trabajo)"}</li>
        </ul>
        <p>
          {"La norma establece dos tipos de controles obligatorios: la "}
          <strong>revisión anual</strong>
          {" y la "}
          <strong>prueba hidráulica quinquenal</strong>
          .
        </p>
        <h2>Los dos controles obligatorios</h2>
        <table>
          <thead><tr><th>Control</th><th>Frecuencia</th><th>Qué incluye</th></tr></thead>
          <tbody>
            <tr>
              <td>Revisión / Recarga</td>
              <td>Anual (o después de cada uso)</td>
              <td>Presión, peso, precinto, estado del cilindro y manguera</td>
            </tr>
            <tr>
              <td>Prueba hidráulica</td>
              <td>Cada 5 años</td>
              <td>Ensayo de presión hidrostática del cilindro, re-timbrado</td>
            </tr>
          </tbody>
        </table>
        <div className="highlight-box">
          <strong>⚠️ Importante: el precinto y la etiqueta</strong>
          {" Cada revisión debe quedar registrada con una etiqueta adherida al matafuego que indique fecha, empresa interviniente y número de habilitación del técnico. Sin esa etiqueta, la revisión no tiene validez frente a la ART ni a una inspección. "}
        </div>
        <h2>¿Qué pasa si no se hacen las revisiones?</h2>
        <p>Las consecuencias de no mantener los matafuegos al día son más serias de lo que parece:</p>
        <ul>
          <li><strong>Multas del Ministerio de Trabajo</strong>{" durante inspecciones laborales"}</li>
          <li>
            <strong>Pérdida de cobertura del seguro</strong>
            {" ante un siniestro — las aseguradoras pueden rechazar el siniestro si el equipamiento no estaba en regla"}
          </li>
          <li>
            <strong>Responsabilidad penal del empleador</strong>
            {" si un incendio causa lesiones y se comprueba negligencia"}
          </li>
          <li><strong>Observaciones de la ART</strong>{" que pueden derivar en alícotas más altas"}</li>
        </ul>
        <h2>¿Cuándo hay que recargar aunque no haya pasado un año?</h2>
        <p>Más allá del ciclo anual, hay situaciones que obligan a una revisión inmediata:</p>
        <ul>
          <li>Después de cualquier uso, aunque sea parcial</li>
          <li>Si el indicador de presión está fuera del rango verde</li>
          <li>Si el precinto o el pasador de seguridad están rotos o faltantes</li>
          <li>Si el cilindro muestra golpes, corrosión o abolladuras</li>
          <li>Si la manguera o boquilla están obstruidas o dañadas</li>
        </ul>
        <h2>¿Quién puede hacer la revisión?</h2>
        <p>
          {"Solo empresas o técnicos habilitados por la autoridad competente de cada provincia. En Buenos Aires, la habilitación la otorga el Ministerio de Trabajo bonaerense. "}
          <strong>{"No alcanza con que un empleado \"le dé un vistazo\""}</strong>
          {" — la revisión debe realizarla un profesional matriculado que emita el comprobante correspondiente."}
        </p>
        <div className="highlight-box">
          <strong>💡 Consejo práctico</strong>
          {" Llevá un registro escrito (o en planilla) de cada matafuego: número de serie, fecha de la última revisión y fecha de vencimiento de la prueba hidráulica. Es lo primero que pide una inspección. "}
        </div>
        <h2>Resumen rápido</h2>
        <ul>
          <li>Revisión anual obligatoria con etiqueta certificada</li>
          <li>Prueba hidráulica cada 5 años</li>
          <li>Revisión inmediata después de cualquier uso</li>
          <li>Solo técnicos habilitados pueden firmar el servicio</li>
        </ul>
        <div className="related-posts" style={{ margin: "48px 0 0", padding: "28px", background: "var(--gray-bg)", borderRadius: "6px" }}>
          <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: ".08em", color: "var(--gray-mid)", marginBottom: "14px" }}>
            También te puede interesar
          </p>
          <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li>
              <a href="/blog/cambio-polvo-quimico-seco-cada-10-anos" style={{ color: "var(--red)", fontWeight: "600", textDecoration: "none" }}>
                Por qué hay que cambiar el polvo cada 10 años →
              </a>
            </li>
            <li>
              <a href="/blog/matafuego-vencido-puede-explotar" style={{ color: "var(--red)", fontWeight: "600", textDecoration: "none" }}>
                Qué pasa cuando un matafuego no tiene mantenimiento →
              </a>
            </li>
            <li>
              <a href="/blog/normativa-matafuegos-argentina" style={{ color: "var(--red)", fontWeight: "600", textDecoration: "none" }}>
                Normativa de matafuegos en Argentina: qué dice la ley →
              </a>
            </li>
            <li>
              <a href="/recarga-de-matafuegos/" style={{ color: "var(--red)", fontWeight: "600", textDecoration: "none" }}>
                Servicio de recarga y mantenimiento de matafuegos →
              </a>
            </li>
          </ul>
        </div>
        <div className="cta-box">
          <h3>¿Tus matafuegos están al día?</h3>
          <p>
            En Matafuegos Pesse hacemos la revisión anual y la prueba hidráulica con certificación incluida. Cubrimos toda la provincia de Buenos Aires.
          </p>
          <a href={"https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Quiero%20consultar%20por%20la%20revisi%C3%B3n%20de%20matafuegos."} className="btn-red">
            Consultanos por WhatsApp
          </a>
        </div>
      </div>
      <SiteFooter />
    </>
  )
}

// Page styles carried over from the static site; menu and footer styles live in components/site-chrome.css
const css = `:root { --black:#111111; --red:#C41E2A; --red-dark:#900E18; --white:#FFFFFF; --gray-bg:#F5F6F8; --gray-mid:#737880; --gray-border:#DEE1E6; --max-w:1200px; }
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: var(--font-inter), system-ui, sans-serif; color: var(--black); background: var(--white); line-height: 1.7; }
h1, h2, h3 { font-family: var(--font-barlow), sans-serif; font-weight: 700; line-height: 1.15; }
.container { max-width: var(--max-w); margin: 0 auto; padding: 0 24px; }

.article-wrap { max-width: 740px; margin: 0 auto; padding: 56px 24px 80px; }
.article-tag { display: inline-block; background: var(--red); color: var(--white); font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; padding: 4px 10px; border-radius: 2px; margin-bottom: 20px; }
.article-wrap h1 { font-size: clamp(30px, 4vw, 46px); margin-bottom: 16px; }
.article-meta { font-size: 13px; color: var(--gray-mid); margin-bottom: 36px; border-bottom: 1px solid var(--gray-border); padding-bottom: 20px; }
.article-wrap h2 { font-size: 28px; margin: 40px 0 14px; }
.article-wrap p { margin-bottom: 18px; font-size: 16px; }
.article-wrap ul, .article-wrap ol { margin: 0 0 18px 24px; font-size: 16px; }
.article-wrap li { margin-bottom: 8px; }
.highlight-box { background: var(--gray-bg); border-left: 4px solid var(--red); padding: 18px 20px; margin: 28px 0; border-radius: 0 4px 4px 0; }
.highlight-box strong { display: block; font-size: 15px; margin-bottom: 6px; }

table { width: 100%; border-collapse: collapse; margin: 28px 0; font-size: 15px; }
th { background: var(--black); color: var(--white); text-align: left; padding: 10px 14px; font-family: var(--font-barlow), sans-serif; font-size: 15px; }
td { padding: 10px 14px; border-bottom: 1px solid var(--gray-border); }
tr:nth-child(even) td { background: var(--gray-bg); }

.cta-box { background: var(--black); color: var(--white); padding: 32px; border-radius: 6px; margin: 48px 0 0; text-align: center; }
.cta-box h3 { font-size: 26px; color: var(--white); margin-bottom: 10px; }
.cta-box p { color: #8A9099; margin-bottom: 20px; }
.btn-red { display: inline-block; background: var(--red); color: var(--white); padding: 12px 28px; border-radius: 4px; font-weight: 600; text-decoration: none; font-size: 15px; }
.btn-red:hover { background: var(--red-dark); }

.breadcrumb { font-size: 13px; color: var(--gray-mid); margin-bottom: 24px; }
.breadcrumb a { color: var(--gray-mid); text-decoration: none; }
.breadcrumb a:hover { color: var(--black); }
`
