import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import "@/components/inner-page.css"

export const metadata: Metadata = {
  title: "Buenas prácticas contra incendios en empresas: caso real",
  description: "Cortocircuito en una fábrica de Merlo. 23 trabajadores. La brigada actuó en 40 segundos y no hubo heridos. Lo que pasó antes para que fuera posible.",
  robots: "index, follow",
  alternates: {
    canonical: "https://matafuegospesse.com/blog/buenas-practicas-contra-incendios-en-empresas"
  },
  openGraph: {
    type: "article",
    title: "Buenas prácticas contra incendios en empresas: caso real",
    description: "Cortocircuito en Merlo, 23 trabajadores, brigada en acción en 40 segundos. Cero heridos. La historia de lo que pasó antes para que fuera posible.",
    url: "https://matafuegospesse.com/blog/buenas-practicas-contra-incendios-en-empresas"
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Cómo las buenas prácticas contra incendios salvaron una fábrica",
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
      mainEntityOfPage: "https://matafuegospesse.com/blog/buenas-practicas-contra-incendios-en-empresas",
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
          name: "40 segundos y cero heridos: cómo una brigada capacitada salvó una fábrica"
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
          {" › Historias reales"}
        </div>
        <span className="article-tag">Historia real</span>
        <h1>40 segundos y cero heridos: cómo una brigada capacitada salvó una fábrica</h1>
        <p className="article-meta">
          {"18 de septiembre de 2026 · Por "}
          <a href="/nosotros/juan-changala/" rel="author" style={{ color: "inherit" }}>Juan Changala</a>
          , Lic. en Higiene y Seguridad en el Trabajo · 5 min de lectura
        </p>
        <div className="highlight-box">
          <strong>En resumen</strong>
          Lo que permite apagar un principio de incendio en segundos no es la suerte: son matafuegos al día y bien ubicados, una brigada interna con roles claros, capacitación práctica y simulacros al menos una vez por año.
        </div>
        <p>
          En agosto de 2024, un depósito de materiales plásticos en el Parque Industrial de Merlo sufrió un cortocircuito en el sector de carga. El fuego prendió en una estantería con materia prima. Eran las 10:20 de la mañana. Había 23 personas trabajando en el galpón.
        </p>
        <p>
          Cuarenta segundos después, el fuego estaba extinguido. Nadie resultó herido. El daño material fue una estantería y parte del revestimiento de una pared. La producción se retomó esa misma tarde.
        </p>
        <p>
          Esta es la historia de por qué salió así — y de todo lo que tuvo que pasar antes para que fuera posible.
        </p>
        <h2>Cómo actuó la brigada</h2>
        <ul className="timeline">
          <li>
            <span className="tl-badge">0 seg</span>
            <span className="tl-text">
              {"Carlos, operario del sector, detecta humo y llama \"fuego\" en voz alta. No intenta apagarlo solo."}
            </span>
          </li>
          <li>
            <span className="tl-badge">8 seg</span>
            <span className="tl-text">
              Otros dos operarios — integrantes de la brigada interna — se dirigen al gabinete de matafuegos más cercano. El resto del personal inicia la evacuación según el procedimiento ensayado.
            </span>
          </li>
          <li>
            <span className="tl-badge">22 seg</span>
            <span className="tl-text">
              Los dos brigadistas llegan al foco con extintores de polvo ABC. Uno cubre, el otro aplica. Atacan la base de la llama.
            </span>
          </li>
          <li>
            <span className="tl-badge">40 seg</span>
            <span className="tl-text">
              Fuego extinguido. El responsable de seguridad confirma que no hay reactivación y autoriza el regreso controlado.
            </span>
          </li>
          <li>
            <span className="tl-badge">4 min</span>
            <span className="tl-text">
              Llegan los bomberos. Verifican el área, felicitan a la brigada y retiran. No hubo necesidad de intervención adicional.
            </span>
          </li>
        </ul>
        <h2>Lo que había detrás de esos 40 segundos</h2>
        <p>
          El dueño de la empresa, Jorge, había contratado capacitación en brigadas contra incendios dos años antes, después de una inspección de la ART que detectó que el personal no sabía usar los matafuegos.
        </p>
        <blockquote>
          {" \"La ART nos dejó una observación y nos dimos cuenta de que los matafuegos estaban pero nadie sabía bien cómo usarlos. Algunos tenían miedo de acercarse al fuego. Ahí decidimos invertir en capacitación de verdad.\" "}
          <cite>— Jorge, propietario</cite>
        </blockquote>
        <p>
          Desde entonces, la empresa realizaba simulacros semestrales, tenía designados roles fijos dentro de la brigada y había reorganizado la ubicación de los matafuegos para reducir el tiempo de acceso en cada sector.
        </p>
        <h2>Las tres cosas que marcaron la diferencia</h2>
        <p>
          <strong>1. Los matafuegos estaban al día.</strong>
          {" Todos tenían revisión anual vigente. Uno con la carga baja no habría bastado para apagar ese incendio."}
        </p>
        <p>
          <strong>2. El personal sabía su rol.</strong>
          {" En el simulacro previo, el mismo Carlos había practicado exactamente la misma situación: detección, alerta, evacuación. No improvisó — ejecutó lo que ya sabía."}
        </p>
        <p>
          <strong>3. Nadie actuó de más.</strong>
          {" Los operarios que no eran brigada evacuaron en lugar de quedarse a \"ayudar\". Ese detalle evita que un incidente manejable se convierta en tragedia por congestión en el área del foco."}
        </p>
        <blockquote>
          {" \"Lo que más me impactó fue ver que el procedimiento funcionó exactamente como lo habíamos practicado. No es suerte. Es entrenamiento.\" "}
          <cite>— Jorge</cite>
        </blockquote>
        <div className="highlight-box">
          <strong>📊 Los números detrás del caso</strong>
          {" Un incendio que se controla en los primeros 2 minutos tiene un costo promedio de reparación 40 veces menor que uno que se extiende 10 minutos. La capacitación anual de una brigada de 5 personas cuesta menos que un día de producción perdida. "}
        </div>
        <h2>Qué necesita una empresa para estar preparada</h2>
        <ul>
          <li>
            <strong>Matafuegos correctos y al día</strong>
            {" — tipo adecuado a la actividad, revisión anual certificada"}
          </li>
          <li>
            <strong>Brigada interna designada</strong>
            {" — mínimo 2 personas por turno, con roles claros"}
          </li>
          <li>
            <strong>Capacitación práctica</strong>
            {" — no alcanza con leer un cartel; hay que haber usado un extintor"}
          </li>
          <li><strong>Simulacro al menos una vez por año</strong>{" — la memoria muscular salva vidas"}</li>
          <li>
            <strong>Señalización visible</strong>
            {" — los matafuegos deben encontrarse de noche, con humo o bajo estrés"}
          </li>
          <li>
            <strong>Plan de evacuación conocido</strong>
            {" — cada persona sabe por dónde salir y a dónde ir"}
          </li>
        </ul>
        <p>
          {"Jorge hoy dice que el incidente fue \"la mejor publicidad posible\" para el programa de seguridad de su empresa. Los mismos operarios que antes veían los simulacros como una pérdida de tiempo ahora los piden."}
        </p>
        <div className="related-posts" style={{ margin: "48px 0 0", padding: "28px", background: "var(--gray-bg)", borderRadius: "6px" }}>
          <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: ".08em", color: "var(--gray-mid)", marginBottom: "14px" }}>
            También te puede interesar
          </p>
          <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li>
              <a href="/blog/normativa-matafuegos-argentina" style={{ color: "var(--red)", fontWeight: "600", textDecoration: "none" }}>
                Normativa de matafuegos en Argentina: qué dice la ley →
              </a>
            </li>
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
              <a href="/seguridad-e-higiene/" style={{ color: "var(--red)", fontWeight: "600", textDecoration: "none" }}>
                Capacitaciones y planes de evacuación para empresas →
              </a>
            </li>
          </ul>
        </div>
        <div className="cta-box">
          <h3>Capacitá a tu equipo antes de necesitarlo</h3>
          <p>
            Hacemos capacitaciones en empresa, simulacros y revisión completa del equipamiento. Cubrimos toda la provincia de Buenos Aires.
          </p>
          <a href={"https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Quiero%20capacitaci%C3%B3n%20contra%20incendios%20para%20mi%20empresa."} className="btn-red">
            Consultanos por WhatsApp
          </a>
        </div>
      </div>
      <SiteFooter />
    </>
  )
}

// Page styles carried over from the static site; menu and footer styles live in components/site-chrome.css
const css = `body{font-family:var(--font-inter),system-ui,sans-serif;color:var(--black);background:var(--white);line-height:1.75}
.article-wrap{max-width:700px;margin:0 auto;padding:56px 24px 80px}
.article-wrap h2{font-size:28px;margin:36px 0 12px}
.article-wrap ul{margin:0 0 18px 24px;font-size:16px}
blockquote{border-left:4px solid var(--red);padding:14px 20px;margin:28px 0;background:var(--gray-bg);font-style:italic;font-size:17px;border-radius:0 4px 4px 0}
blockquote cite{display:block;font-style:normal;font-size:13px;color:var(--gray-mid);margin-top:8px}
.timeline{margin:28px 0;padding:0;list-style:none}
.timeline li{display:flex;gap:16px;margin-bottom:20px;align-items:flex-start}
.tl-badge{background:var(--red);color:var(--white);font-family:var(--font-barlow),sans-serif;font-size:13px;font-weight:700;padding:4px 10px;border-radius:3px;white-space:nowrap;flex-shrink:0;margin-top:2px}
.tl-text{font-size:15px;line-height:1.6}
`
