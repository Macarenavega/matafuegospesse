import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import "@/components/inner-page.css"

export const metadata: Metadata = {
  title: "Juan Changala — Lic. en Higiene y Seguridad | Pesse",
  description: "Juan Changala, Licenciado en Higiene y Seguridad en el Trabajo (Universidad de Morón), matrícula LHS-001107 PBA. Autor de las guías de Pesse.",
  robots: "index, follow",
  alternates: {
    canonical: "https://matafuegospesse.com/nosotros/juan-changala/"
  },
  openGraph: {
    type: "profile",
    title: "Juan Changala — Lic. en Higiene y Seguridad en el Trabajo",
    description: "Matrícula LHS-001107 PBA. Autor de las guías técnicas de Matafuegos Pesse.",
    url: "https://matafuegospesse.com/nosotros/juan-changala/",
    images: [
      {
        url: "https://matafuegospesse.com/img/juan-changala.webp",
        width: 480,
        height: 480
      }
    ]
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://matafuegospesse.com/nosotros/juan-changala/",
      url: "https://matafuegospesse.com/nosotros/juan-changala/",
      name: "Juan Changala — Licenciado en Higiene y Seguridad en el Trabajo",
      inLanguage: "es-AR",
      mainEntity: {
        "@id": "https://matafuegospesse.com/nosotros/juan-changala/#person"
      }
    },
    {
      "@type": "Person",
      "@id": "https://matafuegospesse.com/nosotros/juan-changala/#person",
      name: "Juan Changala",
      alternateName: "Juan Manuel Rubén Changala",
      url: "https://matafuegospesse.com/nosotros/juan-changala/",
      image: "https://matafuegospesse.com/img/juan-changala.webp",
      sameAs: [
        "https://www.linkedin.com/in/juan-changala-92719a177/"
      ],
      jobTitle: "Licenciado en Higiene y Seguridad en el Trabajo",
      worksFor: {
        "@id": "https://matafuegospesse.com/#business"
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Universidad de Morón"
      },
      memberOf: {
        "@type": "Organization",
        name: "Colegio de Profesionales de la Higiene y Seguridad en el Trabajo de la Provincia de Buenos Aires",
        url: "https://www.cpsh.com.ar/"
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Licenciatura en Higiene y Seguridad en el Trabajo",
          credentialCategory: "degree",
          recognizedBy: {
            "@type": "CollegeOrUniversity",
            name: "Universidad de Morón"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Matrícula profesional LHS-001107 PBA",
          credentialCategory: "license",
          recognizedBy: {
            "@type": "Organization",
            name: "Colegio de Profesionales de la Higiene y Seguridad en el Trabajo de la Provincia de Buenos Aires",
            url: "https://www.cpsh.com.ar/"
          }
        }
      ],
      knowsAbout: [
        "Higiene y Seguridad en el Trabajo",
        "Protección contra incendios",
        "Matafuegos",
        "Ley 19.587",
        "Decreto 351/79",
        "Planes de evacuación"
      ]
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
          name: "Nosotros",
          item: "https://matafuegospesse.com/nosotros/"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Juan Changala"
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
        <p className="breadcrumb">
          <a href="/">Inicio</a>
          {" › "}
          <a href="/nosotros/">Nosotros</a>
          {" › Juan Changala"}
        </p>
        <div className="profile-head">
          <img src="/img/juan-changala.webp" width={480} height={480} alt="Juan Changala, Licenciado en Higiene y Seguridad en el Trabajo" className="profile-photo" fetchPriority="high" />
          <div>
            <h1>Juan Changala</h1>
            <p className="profile-title">
              Licenciado en Higiene y Seguridad en el Trabajo · Matrícula LHS-001107 PBA
            </p>
          </div>
        </div>
        <p>
          Juan Changala es Licenciado en Higiene y Seguridad en el Trabajo, egresado de la Universidad de Morón, y está matriculado en el Colegio de Profesionales de la Higiene y Seguridad en el Trabajo de la Provincia de Buenos Aires.
        </p>
        <p>
          En Matafuegos Pesse escribe y revisa las guías técnicas del blog: plazos de mantenimiento, tipos de matafuegos, normativa vigente y prevención de incendios en empresas.
        </p>
        <h2>Formación y matrícula</h2>
        <table className="cred-table">
          <tbody>
            <tr><th scope="row">Título</th><td>Licenciado en Higiene y Seguridad en el Trabajo</td></tr>
            <tr><th scope="row">Universidad</th><td>Universidad de Morón</td></tr>
            <tr><th scope="row">Matrícula</th><td>LHS-001107 PBA</td></tr>
            <tr>
              <th scope="row">Colegio profesional</th>
              <td>
                Colegio de Profesionales de la Higiene y Seguridad en el Trabajo de la Provincia de Buenos Aires — Distrito 1
              </td>
            </tr>
          </tbody>
        </table>
        <p className="cred-note">
          {"Perfil profesional en "}
          <a href="https://www.linkedin.com/in/juan-changala-92719a177/" rel="noopener me">LinkedIn</a>
          {". La matrícula puede verificarse en el "}
          <a href="https://www.cpsh.com.ar/" rel="noopener">
            Colegio de Profesionales de la Higiene y Seguridad en el Trabajo
          </a>
          .
        </p>
        <h2>Artículos de Juan Changala</h2>
        <ul>
          <li>
            <a href="/blog/cuantos-matafuegos-necesita-mi-empresa">
              ¿Cuántos matafuegos necesita mi empresa?
            </a>
          </li>
          <li>
            <a href="/blog/oblea-tarjeta-matafuego">
              Oblea y tarjeta del matafuego: qué son y cómo verificarlas
            </a>
          </li>
          <li>
            <a href="/blog/como-elegir-empresa-recarga-matafuegos">
              Cómo elegir una empresa de recarga de matafuegos
            </a>
          </li>
          <li>
            <a href="/blog/cada-cuanto-revisar-matafuegos">¿Cada cuánto hay que revisar los matafuegos?</a>
          </li>
          <li><a href="/blog/tipos-de-matafuegos">Tipos de matafuegos: cuál usar en cada situación</a></li>
          <li>
            <a href="/blog/normativa-matafuegos-argentina">
              Normativa de matafuegos en Argentina: qué dice la ley
            </a>
          </li>
          <li>
            <a href="/blog/cambio-polvo-quimico-seco-cada-10-anos">
              Por qué hay que cambiar el polvo químico seco cada 10 años
            </a>
          </li>
          <li>
            <a href="/blog/matafuego-vencido-puede-explotar">
              Qué pasa cuando un matafuego no recibe el mantenimiento correcto
            </a>
          </li>
          <li>
            <a href="/blog/por-que-los-matafuegos-baratos-pueden-salir-caros">
              Por qué un matafuego barato puede salirte muy caro
            </a>
          </li>
          <li>
            <a href="/blog/estafa-matafuegos-retiran-cobran-de-mas">
              Cuidado: la estafa del matafuego que ya afectó a comerciantes en todo el país
            </a>
          </li>
          <li>
            <a href="/blog/buenas-practicas-contra-incendios-en-empresas">
              40 segundos y cero heridos: cómo una brigada capacitada salvó una fábrica
            </a>
          </li>
          <li>
            <a href="/blog/incendio-en-casa-extintor-salvo-mi-hogar">
              {"\"Tenía un matafuego en casa y salvé todo\""}
            </a>
          </li>
        </ul>
        <div className="cta-box">
          <h2 style={{ marginTop: "0", color: "var(--white)" }}>
            ¿Tu empresa necesita asesoramiento en Seguridad e Higiene?
          </h2>
          <p>
            {"Planes de evacuación, legajos técnicos, capacitaciones y cumplimiento de la Ley 19.587. "}
            <a href="/seguridad-e-higiene/" style={{ color: "var(--white)" }}>Ver el servicio</a>
            .
          </p>
          <a className="btn" href={"https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Necesito%20asesoramiento%20en%20Seguridad%20e%20Higiene."}>
            Consultar por WhatsApp
          </a>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

// Page styles carried over from the static site; menu and footer styles live in components/site-chrome.css
const css = `h1, h2 { font-family: var(--font-barlow), sans-serif; font-weight: 700; line-height: 1.15; }
.profile-wrap { max-width: 760px; margin: 0 auto; padding: 56px 24px 80px; }
.breadcrumb { font-size: 13px; color: var(--gray-mid); margin-bottom: 20px; }
.breadcrumb a { color: var(--gray-mid); }
.profile-wrap h1 { font-size: clamp(34px, 5vw, 52px); margin-bottom: 6px; }
.profile-title { font-size: 17px; color: var(--red); font-weight: 600; }
.profile-head { display: flex; align-items: center; gap: 28px; margin-bottom: 32px; }
.profile-photo { width: 140px; height: 140px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
.profile-wrap h2 { font-size: 28px; margin: 40px 0 14px; }
.profile-wrap p { margin-bottom: 16px; font-size: 16px; }
.profile-wrap ul { margin: 0 0 16px 22px; font-size: 16px; }
.profile-wrap li { margin-bottom: 8px; }
.profile-wrap a { color: var(--red); }
.cred-table { width: 100%; border-collapse: collapse; font-size: 15px; margin: 0 0 12px; }
.cred-table th, .cred-table td { text-align: left; padding: 12px 14px; border-bottom: 1px solid var(--gray-border); vertical-align: top; }
.cred-table th { width: 38%; background: var(--gray-bg); font-weight: 600; color: var(--black); font-family: inherit; font-size: inherit; }
.cred-table tr:nth-child(even) td { background: none; }
.cred-note { font-size: 14px; color: var(--gray-mid); }
.cta-box { background: var(--black); color: var(--white); border-radius: 6px; padding: 28px; margin-top: 44px; text-align: left; }
.cta-box p { color: rgba(255,255,255,0.75); }
.cta-box a.btn { display: inline-block; background: var(--red); color: var(--white); text-decoration: none; font-weight: 600; padding: 12px 22px; border-radius: 4px; margin-top: 6px; }
@media (max-width: 640px) {
  .cred-table th { width: 42%; }
  .profile-head { flex-direction: column; align-items: flex-start; gap: 18px; }
  .profile-photo { width: 110px; height: 110px; }
}
`
