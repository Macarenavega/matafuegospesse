import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import "@/components/inner-page.css"
import { NoteIcon } from "@/components/note-icon"

export const metadata: Metadata = {
  title: "\"Tenía un matafuego en casa y salvé todo\" | Matafuegos Pesse",
  description: "Ramón se despertó con la cocina en llamas en Morón. Tenía un extintor detrás de la puerta. En 20 segundos apagó el fuego y salvó su casa.",
  robots: "index, follow",
  alternates: {
    canonical: "https://matafuegospesse.com/blog/incendio-en-casa-extintor-salvo-mi-hogar"
  },
  openGraph: {
    type: "article",
    title: "Incendio en casa a las 2am: cómo un matafuego lo salvó todo",
    description: "Ramón tenía un extintor en la cocina. A las 2am lo necesitó. En 20 segundos apagó el fuego y salvó su casa.",
    url: "https://matafuegospesse.com/blog/incendio-en-casa-extintor-salvo-mi-hogar"
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Un incendio en casa a las 2am: cómo un matafuego lo cambió todo",
      datePublished: "2026-08-05",
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
      mainEntityOfPage: "https://matafuegospesse.com/blog/incendio-en-casa-extintor-salvo-mi-hogar",
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
          name: "\"Tenía un matafuego en casa y salvé todo\""
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
        <h1>{"\"Tenía un matafuego en casa y salvé todo\""}</h1>
        <p className="article-meta">
          {"5 de agosto de 2026 · Por "}
          <a href="/nosotros/juan-changala/" rel="author" style={{ color: "inherit" }}>Juan Changala</a>
          , Lic. en Higiene y Seguridad en el Trabajo · 4 min de lectura
        </p>
        <div className="highlight-box">
          <strong>En resumen</strong>
          En el hogar conviene tener un matafuego de polvo ABC de 1 kg, colgado a la vista en la cocina o el garage. Los primeros segundos son decisivos: apuntá a la base de la llama y, si el fuego sigue creciendo, la prioridad es evacuar.
        </div>
        <p>
          Ramón tiene 54 años, vive en Morón y trabaja de electricista. Hace tres años instaló un matafuego de polvo ABC en su cocina, casi por costumbre: lo ve en las obras donde trabaja y le pareció lógico tenerlo en casa. Nunca pensó que lo iba a necesitar tan pronto.
        </p>
        <h2>La madrugada que cambió todo</h2>
        <p>
          Era la una y media de la mañana. Su hija de 17 años había dejado el aceite en el fuego y se había dormido en el sillón. El aceite sobrepasó el punto de humo, entró en ignición y en segundos la llama llegó al ventilador de cocina.
        </p>
        <blockquote>
          {" \"Me despertó el olor. Bajé las escaleras y la cocina era una antorcha. Mi primer instinto fue buscar agua, pero me acordé del matafuego. Estaba justo detrás de la puerta.\" "}
          <cite>— Ramón, Morón</cite>
        </blockquote>
        <p>
          Ramón había asistido a una capacitación en la empresa donde trabajaba y recordó el procedimiento: seguro afuera, apuntar a la base de la llama, presionar. Tardó menos de veinte segundos en sofocar el fuego. El ventilador quedó destruido. La cocina, ennegrecida. La casa, en pie.
        </p>
        <h2>Lo que habría pasado sin el matafuego</h2>
        <p>
          El Cuartel de Bomberos de Morón tarda en promedio entre 6 y 10 minutos en llegar a una emergencia. Un incendio de aceite en cocina puede consumir una habitación entera en 3 minutos. Para cuando llegaban los bomberos, el fuego ya habría trepado por las paredes hasta el piso superior donde dormía su esposa.
        </p>
        <blockquote>
          {" \"El bombero que vino a hacer el relevamiento me dijo que si no lo apagaba yo, en diez minutos se iba la casa entera. Eso no se me va más de la cabeza.\" "}
          <cite>— Ramón</cite>
        </blockquote>
        <h2>Lo que Ramón aprendió — y lo que nos transmitió</h2>
        <p>
          Cuando Ramón nos contactó para renovar el matafuego (el suyo quedó descargado y fuera de uso tras el incidente, como es lógico), nos pidió que contáramos su historia. Estas son sus palabras exactas:
        </p>
        <blockquote>
          {" \"Hay gente que dice que es un gasto al pedo tener un matafuego en casa. Que es para fábricas. Yo les digo: un matafuego de 1 kg cuesta menos que una cena afuera. Y mi casa vale todo lo que tengo.\" "}
          <cite>— Ramón</cite>
        </blockquote>
        <div className="highlight-box">
          <strong><NoteIcon name="fire" />Los primeros 30 segundos son decisivos</strong>
          {" El 80% de los incendios domésticos que se apagan antes de propagarse son sofocados por el propio habitante con un extintor a mano. Pasados los 2 minutos, la prioridad es evacuar — ya no hay forma segura de combatirlo sin equipo profesional. "}
        </div>
        <h2>¿Qué matafuego corresponde en el hogar?</h2>
        <p>
          {"Para uso doméstico, la opción más versátil es un extintor de "}
          <strong>polvo ABC de 1 kg</strong>
          {", que cubre fuegos de sólidos, líquidos inflamables y eléctricos. Para cocinas con uso intensivo de aceite, se puede complementar con uno de "}
          <strong>clase K</strong>
          .
        </p>
        <p>
          {"La ubicación ideal: "}
          <strong>cocina y garage</strong>
          , los dos focos de incendio más frecuentes en hogares. Montado en la pared, a la vista, sin nada bloqueando el acceso.
        </p>
        <div className="related-posts" style={{ margin: "48px 0 0", padding: "28px", background: "var(--gray-bg)", borderRadius: "6px" }}>
          <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: ".08em", color: "var(--gray-mid)", marginBottom: "14px" }}>
            También te puede interesar
          </p>
          <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li>
              <a href="/blog/tipos-de-matafuegos" style={{ color: "var(--red)", fontWeight: "600", textDecoration: "none" }}>
                Tipos de matafuegos: cuál usar en cada situación →
              </a>
            </li>
            <li>
              <a href="/blog/cada-cuanto-revisar-matafuegos" style={{ color: "var(--red)", fontWeight: "600", textDecoration: "none" }}>
                ¿Cada cuánto hay que revisar los matafuegos? →
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
          <h3>Un matafuego para tu casa</h3>
          <p>Lo instalamos y te explicamos cómo usarlo. Entregamos en todo Buenos Aires.</p>
          <a href={"https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Quiero%20un%20matafuego%20para%20mi%20casa."} className="btn-red">
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
blockquote{border-left:4px solid var(--red);padding:14px 20px;margin:28px 0;background:var(--gray-bg);font-style:italic;font-size:17px;border-radius:0 4px 4px 0}
blockquote cite{display:block;font-style:normal;font-size:13px;color:var(--gray-mid);margin-top:8px}
`
