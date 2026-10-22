import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Normativa de matafuegos en Argentina | Matafuegos Pesse",
  description: "Ley 19587, Decreto 351/79, normas IRAM y SRT. Todo lo que una empresa debe cumplir en materia de extintores para estar en regla y evitar multas.",
  robots: "index, follow",
  alternates: {
    canonical: "https://matafuegospesse.com/blog/normativa-matafuegos-argentina"
  },
  openGraph: {
    type: "article",
    title: "Normativa de matafuegos en Argentina",
    description: "Ley 19587, Decreto 351/79, IRAM y SRT. Todo lo que una empresa debe cumplir en materia de extintores para estar en regla.",
    url: "https://matafuegospesse.com/blog/normativa-matafuegos-argentina"
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Normativa de matafuegos en Argentina: qué dice la ley",
      description: "Ley 19587, Decreto 351/79, normas IRAM y resoluciones SRT. Todo lo que una empresa argentina debe cumplir.",
      datePublished: "2026-09-02",
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
      mainEntityOfPage: "https://matafuegospesse.com/blog/normativa-matafuegos-argentina",
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
          name: "Normativa de matafuegos en Argentina: qué dice la ley"
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
          {" › Normativa "}
        </div>
        <span className="article-tag">Normativa</span>
        <h1>Normativa de matafuegos en Argentina: qué dice la ley</h1>
        <p className="article-meta">
          {"2 de septiembre de 2026 · Por "}
          <a href="/nosotros/juan-changala/" rel="author" style={{ color: "inherit" }}>Juan Changala</a>
          , Lic. en Higiene y Seguridad en el Trabajo · 6 min de lectura
        </p>
        <div className="highlight-box">
          <strong>En resumen</strong>
          En Argentina, los matafuegos en lugares de trabajo están regulados por la Ley 19.587, su Decreto reglamentario 351/79, las normas IRAM 3517 y las resoluciones de la SRT. En la práctica exigen al menos un matafuego cada 200 m², del tipo adecuado a la actividad, señalizado, con revisión anual y prueba hidráulica cada 5 años.
        </div>
        <p>
          Toda empresa que funcione en Argentina está obligada a contar con matafuegos en condiciones y al día. La normativa es clara, pero está distribuida en varias normas y decretos que conviene conocer. Acá las reunimos todas en un solo lugar.
        </p>
        <h2>El marco legal principal</h2>
        <div className="norm-card">
          <h3>
            <a href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/15000-19999/17612/norma.htm" rel="noopener" style={{ color: "inherit" }}>
              Ley 19587 — Higiene y Seguridad en el Trabajo
            </a>
          </h3>
          <p>
            Es la ley marco. Establece que todo empleador debe garantizar condiciones de seguridad en el lugar de trabajo, incluyendo medidas de prevención y lucha contra incendios. Es de aplicación nacional y cubre a todos los empleadores con personal en relación de dependencia.
          </p>
        </div>
        <div className="norm-card">
          <h3>
            <a href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/30000-34999/32030/texact.htm" rel="noopener" style={{ color: "inherit" }}>
              Decreto 351/79 — Reglamentación de la Ley 19587
            </a>
          </h3>
          <p>
            El decreto más importante en la práctica. Su Anexo VII (condiciones de seguridad) y el Capítulo 18 (protección contra incendios) establecen los requisitos específicos: cantidad de matafuegos por superficie, distancias máximas, clases según actividad y obligación de mantenimiento anual.
          </p>
        </div>
        <div className="norm-card">
          <h3>Normas IRAM 3517 — Extintores portátiles</h3>
          <p>
            Define los requisitos técnicos que deben cumplir los matafuegos para comercializarse en Argentina: construcción, ensayos, marcado y etiquetado. Solo los equipos que cumplan esta norma pueden ser habilitados.
          </p>
        </div>
        <div className="norm-card">
          <h3>Resoluciones SRT (Superintendencia de Riesgos del Trabajo)</h3>
          <p>
            La SRT emite resoluciones que complementan el decreto. La más relevante para matafuegos es la que regula las empresas habilitadas para realizar el mantenimiento y la obligación de registro de cada servicio.
          </p>
        </div>
        <h2>Qué exige el Decreto 351/79 en concreto</h2>
        <h3>Cantidad y distribución</h3>
        <ul>
          <li>
            {"Mínimo "}
            <strong>1 matafuego cada 200 m²</strong>
            {" de superficie a proteger (art. 176). "}
            <a href="/blog/cuantos-matafuegos-necesita-mi-empresa">Cómo calcularlo</a>
          </li>
          <li>
            {"La distancia máxima a recorrer hasta un extintor es de "}
            <strong>20 metros</strong>
            {" para fuegos clase A (sólidos) y "}
            <strong>15 metros</strong>
            {" para fuegos clase B (líquidos inflamables)"}
          </li>
          <li>
            Si hay líquidos inflamables con una superficie mayor a 1 m², el potencial extintor se calcula sobre esa superficie (art. 177)
          </li>
          <li>Deben estar en lugares visibles, señalizados y de fácil acceso — nunca obstruidos</li>
        </ul>
        <h3>Tipo según actividad</h3>
        <p>
          El decreto clasifica las actividades según su riesgo de incendio (ordinario, mediano y alto) y establece qué tipo de extintor corresponde. Una empresa de servicios con riesgo ordinario puede usar polvo ABC; una planta industrial con inflamables necesita equipamiento de mayor potencial extintor.
        </p>
        <h3>Mantenimiento obligatorio</h3>
        <ul>
          <li><strong>Control anual</strong>{" por empresa habilitada, con etiqueta de servicio"}</li>
          <li><strong>Prueba hidráulica cada 5 años</strong>{" (re-timbrado del cilindro)"}</li>
          <li>Recarga inmediata después de cualquier uso</li>
          <li>Registro de cada servicio con datos del técnico habilitado</li>
        </ul>
        <h3>Señalización</h3>
        <p>
          Cada matafuego debe estar indicado con una señal normalizada según IRAM 10005 (señales de seguridad). La señal debe ser visible desde al menos 10 metros de distancia.
        </p>
        <h2>Consecuencias del incumplimiento</h2>
        <p>No cumplir con la normativa puede derivar en:</p>
        <ul>
          <li><strong>Multas del Ministerio de Trabajo</strong>{" de la Nación o de la provincia"}</li>
          <li><strong>Clausura preventiva</strong>{" del establecimiento si el riesgo es inmediato"}</li>
          <li><strong>Rechazo del siniestro</strong>{" por parte de la aseguradora ante un incendio"}</li>
          <li>
            <strong>Alícuotas de ART más altas</strong>
            {" por observaciones de seguridad no subsanadas"}
          </li>
          <li><strong>Responsabilidad penal del empleador</strong>{" si hay lesionados o fallecidos"}</li>
        </ul>
        <div className="highlight-box">
          <strong>📋 Lista de verificación rápida para tu empresa</strong>
          <ul className="checklist">
            <li>Tengo al menos 1 matafuego cada 200 m²</li>
            <li>
              Ningún puesto está a más de 20 m de recorrido de un extintor (15 m donde hay líquidos inflamables)
            </li>
            <li>Todos los matafuegos tienen etiqueta de servicio vigente (menos de 1 año)</li>
            <li>Los cilindros con más de 5 años tienen prueba hidráulica al día</li>
            <li>Están señalizados según norma IRAM</li>
            <li>El tipo de matafuego es el correcto para la actividad del local</li>
          </ul>
        </div>
        <h2>¿Qué pasa en inspecciones de ART?</h2>
        <p>
          {"Las ART realizan visitas periódicas a los establecimientos. Si encuentran matafuegos vencidos, mal ubicados o sin señalización, emiten una "}
          <strong>{"\"Notificación de Incumplimiento\""}</strong>
          {" con un plazo para regularizar. Si no se subsana, pueden elevar la alícuota o, en casos extremos, denunciar ante el Ministerio de Trabajo."}
        </p>
        <p>
          La buena noticia: regularizar es simple. En la mayoría de los casos, una visita de mantenimiento y el agregado de señalización es suficiente para levantar todas las observaciones.
        </p>
        <div className="related-posts" style={{ margin: "48px 0 0", padding: "28px", background: "var(--gray-bg)", borderRadius: "6px" }}>
          <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: ".08em", color: "var(--gray-mid)", marginBottom: "14px" }}>
            También te puede interesar
          </p>
          <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li>
              <a href="/blog/cada-cuanto-revisar-matafuegos" style={{ color: "var(--red)", fontWeight: "600", textDecoration: "none" }}>
                ¿Cada cuánto hay que revisar los matafuegos? →
              </a>
            </li>
            <li>
              <a href="/blog/tipos-de-matafuegos" style={{ color: "var(--red)", fontWeight: "600", textDecoration: "none" }}>
                Tipos de matafuegos: cuál usar en cada situación →
              </a>
            </li>
            <li>
              <a href="/blog/matafuego-vencido-puede-explotar" style={{ color: "var(--red)", fontWeight: "600", textDecoration: "none" }}>
                Qué pasa cuando un matafuego no tiene mantenimiento →
              </a>
            </li>
            <li>
              <a href="/seguridad-e-higiene/" style={{ color: "var(--red)", fontWeight: "600", textDecoration: "none" }}>
                Asesoramiento en Seguridad e Higiene para empresas →
              </a>
            </li>
          </ul>
        </div>
        <div className="cta-box">
          <h3>Regularizá tu empresa hoy</h3>
          <p>
            Revisamos el estado de tu equipamiento, identificamos qué falta y dejamos todo en regla con la documentación correspondiente. Atendemos en toda Buenos Aires.
          </p>
          <a href={"https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Quiero%20regularizar%20los%20matafuegos%20de%20mi%20empresa."} className="btn-red">
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
.article-wrap { max-width: 740px; margin: 0 auto; padding: 56px 24px 80px; }
.article-tag { display: inline-block; background: var(--red); color: var(--white); font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; padding: 4px 10px; border-radius: 2px; margin-bottom: 20px; }
.article-wrap h1 { font-size: clamp(30px, 4vw, 46px); margin-bottom: 16px; }
.article-meta { font-size: 13px; color: var(--gray-mid); margin-bottom: 36px; border-bottom: 1px solid var(--gray-border); padding-bottom: 20px; }
.article-wrap h2 { font-size: 28px; margin: 40px 0 14px; }
.article-wrap h3 { font-size: 20px; margin: 28px 0 10px; }
.article-wrap p { margin-bottom: 18px; font-size: 16px; }
.article-wrap ul, .article-wrap ol { margin: 0 0 18px 24px; font-size: 16px; }
.article-wrap li { margin-bottom: 8px; }
.highlight-box { background: var(--gray-bg); border-left: 4px solid var(--red); padding: 18px 20px; margin: 28px 0; border-radius: 0 4px 4px 0; }
.highlight-box strong { display: block; font-size: 15px; margin-bottom: 6px; }
.norm-card { border: 1px solid var(--gray-border); border-radius: 6px; padding: 20px 24px; margin: 16px 0; }
.norm-card h3 { font-size: 18px; margin-bottom: 6px; color: var(--red); }
.norm-card p { margin: 0; font-size: 15px; color: #444; }
.checklist { list-style: none; margin-left: 0 !important; }
.checklist li::before { content: "✓ "; color: #1a7f37; font-weight: 700; }
.cta-box { background: var(--black); color: var(--white); padding: 32px; border-radius: 6px; margin: 48px 0 0; text-align: center; }
.cta-box h3 { font-size: 26px; color: var(--white); margin-bottom: 10px; }
.cta-box p { color: #8A9099; margin-bottom: 20px; }
.btn-red { display: inline-block; background: var(--red); color: var(--white); padding: 12px 28px; border-radius: 4px; font-weight: 600; text-decoration: none; font-size: 15px; }
.breadcrumb { font-size: 13px; color: var(--gray-mid); margin-bottom: 24px; }
.breadcrumb a { color: var(--gray-mid); text-decoration: none; }
`
