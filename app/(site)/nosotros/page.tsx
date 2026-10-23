import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import "@/components/inner-page.css"

export const metadata: Metadata = {
  title: "Quiénes somos — Matafuegos Pesse, desde 1995 en Merlo",
  description: "Empresa familiar fundada en 1995 en Merlo. Recarga y mantenimiento de matafuegos certificado IRAM 3517-2 en Provincia de Buenos Aires y CABA.",
  robots: "index, follow",
  alternates: {
    canonical: "https://matafuegospesse.com/nosotros/"
  },
  openGraph: {
    type: "website",
    title: "Quiénes somos — Matafuegos Pesse",
    description: "Empresa familiar fundada en 1995 en Merlo. Servicio certificado IRAM 3517-2 en Provincia de Buenos Aires y CABA.",
    url: "https://matafuegospesse.com/nosotros/",
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
      "@type": "AboutPage",
      "@id": "https://matafuegospesse.com/nosotros/",
      url: "https://matafuegospesse.com/nosotros/",
      name: "Quiénes somos — Matafuegos Pesse",
      inLanguage: "es-AR",
      about: {
        "@id": "https://matafuegospesse.com/#business"
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
          name: "Quiénes somos"
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
      <main className="profile-wrap">
        <p className="breadcrumb"><a href="/">Inicio</a>{" › Quiénes somos"}</p>
        <h1>¿Quiénes somos?</h1>
        <p className="profile-title">Empresa familiar · Merlo, Buenos Aires · Desde 1995</p>
        <img src="/img/local-matafuegos-pesse-sarandi-416-merlo.webp" width={1200} height={693} alt="Local de Matafuegos Pesse en Sarandí 416, Merlo" className="hero-img" fetchPriority="high" />
        <p>
          Matafuegos Pesse es una empresa familiar fundada en 1995 por Elisabet Pesse en Merlo, Zona Oeste del Gran Buenos Aires. Hace más de 30 años que nos dedicamos a la venta, recarga y mantenimiento de matafuegos, redes contra incendio, señalización y asesoramiento en Higiene y Seguridad en el Trabajo para empresas, comercios y particulares.
        </p>
        <p>
          Desde nuestro local en Sarandí 416 atendemos toda la Provincia de Buenos Aires y CABA, con habilitación en ambas jurisdicciones.
        </p>
        <h2>Nuestra historia</h2>
        <p>
          Todo empezó con el padre de Elisabet Pesse. Trabajaba en el rubro de los repuestos para camiones y, antes de eso, había recorrido el país repartiendo extintores. El oficio le gustó tanto que empezó a recargar matafuegos de a poco, en el taller de la casa de repuestos, cuando todavía no existían leyes ni normas que regularan la actividad.
        </p>
        <p>
          En 1995 Elisabet, que también venía de los repuestos para camiones, siguió sus pasos y fundó Matafuegos Pesse. Lo cuenta siempre con orgullo: salía a buscar clientes con sus hijos en el carrito de bebé, con mucha voluntad y muchas ganas.
        </p>
        <p>
          {"Hoy el negocio lo continúa su hijo, "}
          <a href="/nosotros/juan-changala/">Juan Changala</a>
          , Licenciado en Higiene y Seguridad en el Trabajo. Él sumó la certificación IRAM 3517-2, las habilitaciones en Provincia y CABA y el asesoramiento en Seguridad e Higiene para empresas, sin perder lo que nos trajo hasta acá: el trato cercano de una empresa familiar.
        </p>
        <h2>Cómo trabajamos</h2>
        <ul>
          <li>
            <strong>Procesos certificados.</strong>
            {" Nuestro servicio de control, mantenimiento y recarga de extintores está certificado según la norma IRAM 3517-2. No solo cumplimos la norma: la garantizamos con documentación."}
          </li>
          <li>
            <strong>Asesoramiento real.</strong>
            {" Nuestro equipo técnico está en capacitación permanente y te dice qué necesita cada instalación, no solo te vende el producto."}
          </li>
          <li>
            <strong>Retiro y entrega sin cargo.</strong>
            {" Retiramos los equipos y dejamos matafuegos de reemplazo mientras hacemos la recarga."}
          </li>
          <li>
            <strong>Capacitaciones en empresa.</strong>
            {" Formamos a tu personal en el uso de los equipos, planes de evacuación y procedimientos de emergencia, en tus propias instalaciones."}
          </li>
        </ul>
        <h2>Certificaciones y habilitaciones</h2>
        <table className="cred-table">
          <tbody>
            <tr>
              <th scope="row">Norma IRAM 3517-2:2005</th>
              <td>Certificado DC-P-M400-001.1 — control, mantenimiento y recarga de extintores</td>
            </tr>
            <tr>
              <th scope="row">Provincia de Buenos Aires</th>
              <td>Habilitación provincial DPS N.º 330</td>
            </tr>
            <tr>
              <th scope="row">Ciudad de Buenos Aires</th>
              <td>Registro de reparadores y recargadores de extintores N.º 4927135</td>
            </tr>
          </tbody>
        </table>
        <p><a href="/certificaciones/">Ver certificaciones</a></p>
        <h2>Nuestro equipo</h2>
        <div className="team-card">
          <img src="/img/juan-changala.webp" width={480} height={480} alt="Juan Changala" loading="lazy" decoding="async" />
          <div>
            <h3><a href="/nosotros/juan-changala/">Juan Changala</a></h3>
            <p>
              Licenciado en Higiene y Seguridad en el Trabajo · Matrícula LHS-001107 PBA. Escribe y revisa las guías técnicas del blog.
            </p>
          </div>
        </div>
        <h2>Empresas que nos eligen</h2>
        <p>Eternit, Shell, Solo Deportes, Banco Nación y Banco Provincia, entre otras.</p>
        <div className="cta-box">
          <h2 style={{ marginTop: "0", color: "var(--white)" }}>¿Hablamos?</h2>
          <p>Lunes a viernes de 8:00 a 18:00 y sábados de 9:00 a 13:00. Teléfono 0220-486-1235.</p>
          <a className="btn" href={"https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Vi%20la%20web%20y%20quisiera%20pedir%20una%20cotizaci%C3%B3n."}>
            Consultar por WhatsApp
          </a>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

// Page styles carried over from the static site; menu and footer styles live in components/site-chrome.css
const css = `.profile-wrap { max-width: 760px; margin: 0 auto; padding: 56px 24px 80px; }
.breadcrumb { font-size: 13px; color: var(--gray-mid); margin-bottom: 20px; }
.breadcrumb a { color: var(--gray-mid); }
.profile-wrap h1 { font-size: clamp(34px, 5vw, 52px); margin-bottom: 6px; }
.profile-title { font-size: 17px; color: var(--red); font-weight: 600; margin-bottom: 28px; }
.hero-img { width: 100%; height: auto; border-radius: 6px; margin-bottom: 32px; display: block; }
.profile-wrap h2 { font-size: 28px; margin: 40px 0 14px; }
.profile-wrap p { margin-bottom: 16px; font-size: 16px; }
.profile-wrap ul { margin: 0 0 16px 22px; font-size: 16px; }
.profile-wrap li { margin-bottom: 8px; }
.profile-wrap a { color: var(--red); }
.cred-table { width: 100%; border-collapse: collapse; font-size: 15px; margin: 0 0 12px; }
.cred-table th, .cred-table td { text-align: left; padding: 12px 14px; border-bottom: 1px solid var(--gray-border); vertical-align: top; }
.cred-table th { width: 38%; background: var(--gray-bg); font-weight: 600; color: var(--black); font-family: inherit; font-size: inherit; }
.cred-table tr:nth-child(even) td { background: none; }
.team-card { display: flex; align-items: center; gap: 20px; border: 1px solid var(--gray-border); border-radius: 6px; padding: 18px; }
.team-card img { width: 88px; height: 88px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
.team-card h3 { font-size: 22px; }
.team-card p { margin: 0; font-size: 15px; color: var(--gray-mid); }
.cta-box { background: var(--black); color: var(--white); border-radius: 6px; padding: 28px; margin-top: 44px; text-align: left; }
.cta-box p { color: rgba(255,255,255,0.75); }
.cta-box a.btn { display: inline-block; background: var(--red); color: var(--white); text-decoration: none; font-weight: 600; padding: 12px 22px; border-radius: 4px; margin-top: 6px; }
@media (max-width: 640px) {
  .cred-table th { width: 42%; }
  .team-card { flex-direction: column; align-items: flex-start; }
}
`
