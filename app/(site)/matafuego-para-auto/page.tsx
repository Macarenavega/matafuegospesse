import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Matafuego para auto apto VTV: venta y recarga | Pesse",
  description: "Venta y recarga de matafuegos para auto: ABC de 1 kg con soporte, etiqueta vigente para la VTV. Merlo, Zona Oeste. Obligatorio por Ley 24.449.",
  robots: "index, follow",
  alternates: {
    canonical: "https://matafuegospesse.com/matafuego-para-auto/"
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Matafuegos Pesse",
    title: "Matafuego para auto apto VTV: venta y recarga | Pesse",
    description: "Venta y recarga de matafuegos para auto: ABC de 1 kg con soporte, etiqueta vigente para la VTV. Merlo, Zona Oeste. Obligatorio por Ley 24.449.",
    url: "https://matafuegospesse.com/matafuego-para-auto/",
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
      "@id": "https://matafuegospesse.com/matafuego-para-auto/#servicio",
      name: "Venta y recarga de matafuegos para auto",
      serviceType: "Matafuegos para vehículos",
      provider: {
        "@id": "https://matafuegospesse.com/#business"
      },
      url: "https://matafuegospesse.com/matafuego-para-auto/",
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Provincia de Buenos Aires"
        },
        {
          "@type": "AdministrativeArea",
          name: "Ciudad Autónoma de Buenos Aires"
        }
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
          name: "Matafuego para auto"
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
      <main className="article-wrap">
        <div className="breadcrumb"><a href="/">Inicio</a>{" › Matafuego para auto"}</div>
        <span className="article-tag">Vehículos</span>
        <h1>Matafuego para auto apto VTV</h1>
        <p>
          <strong>
            Vendemos y recargamos matafuegos para auto: el de polvo ABC de 1 kg con su soporte, con la etiqueta de servicio vigente que se controla en la VTV.
          </strong>
          {" Llevar matafuego es obligatorio para circular según la "}
          <a href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/0-4999/818/texact.htm" rel="noopener">
            Ley Nacional de Tránsito 24.449
          </a>
          . Te atendemos en Sarandí 416, Merlo, y para flotas retiramos y entregamos sin cargo.
        </p>
        <p>
          <a href={"https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Necesito%20un%20matafuego%20para%20el%20auto."} className="btn-red">
            Consultar por WhatsApp
          </a>
        </p>
        <h2>Qué necesitás para la VTV</h2>
        <ul>
          <li>Un matafuego en el vehículo, fijo en su soporte y accesible</li>
          <li>Carga y presión correctas (manómetro en la zona verde)</li>
          <li>Etiqueta de servicio vigente, con fecha y datos de la empresa que hizo la recarga</li>
          <li>Precinto y pasador de seguridad colocados</li>
        </ul>
        <p>
          Si el matafuego está vencido o el manómetro no marca verde, lo recargamos y te lo entregamos con la etiqueta nueva.
        </p>
        <h2>Venta y recarga</h2>
        <table>
          <thead><tr><th>Servicio</th><th>Qué incluye</th></tr></thead>
          <tbody>
            <tr><td>Matafuego nuevo para auto</td><td>Polvo ABC de 1 kg, certificado, con soporte</td></tr>
            <tr>
              <td>Recarga anual</td>
              <td>Control de presión y peso, recarga si corresponde, precinto y etiqueta de servicio</td>
            </tr>
            <tr><td>Después de un uso</td><td>Recarga completa, aunque la descarga haya sido parcial</td></tr>
          </tbody>
        </table>
        <p>Como los precios cambian seguido, te cotizamos en el día por WhatsApp.</p>
        <h2>Empresas con flota de vehículos</h2>
        <p>
          {"Si tu empresa tiene utilitarios, camionetas o camiones, coordinamos la recarga de todos los equipos juntos: retiramos y entregamos sin cargo y te avisamos los vencimientos. Ver el "}
          <a href="/recarga-de-matafuegos/">servicio de recarga para empresas</a>
          .
        </p>
        <h2>Preguntas frecuentes</h2>
        <div className="faq">
          <details>
            <summary>¿Es obligatorio llevar matafuego en el auto?</summary>
            <p>
              {"Sí. El artículo 40 de la "}
              <a href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/0-4999/818/texact.htm" rel="noopener">
                Ley Nacional de Tránsito 24.449
              </a>
              {" establece que para circular con un automotor es indispensable llevar matafuego y balizas portátiles normalizados (las motos están exceptuadas)."}
            </p>
          </details>
          <details>
            <summary>¿Qué matafuego necesito para el auto?</summary>
            <p>
              Para autos particulares el más usado es el de polvo químico ABC de 1 kg, con su soporte. Para camionetas, utilitarios o vehículos de trabajo, consultanos: según el uso puede convenir uno de mayor capacidad.
            </p>
          </details>
          <details>
            <summary>¿Cada cuánto hay que recargarlo?</summary>
            <p>
              Igual que cualquier extintor: una revisión por año y siempre después de usarlo. La etiqueta de servicio tiene que estar vigente, porque es lo que se mira en la VTV o en un control.
            </p>
          </details>
          <details>
            <summary>¿Dónde conviene llevarlo?</summary>
            <p>
              Fijo en su soporte, en un lugar al que llegues rápido. Suelto en el baúl rueda, se golpea y en una emergencia tardás en encontrarlo.
            </p>
          </details>
          <details>
            <summary>¿Cómo hago para recargar el matafuego del auto?</summary>
            <p>
              Acercate a Sarandí 416, Merlo, o escribinos por WhatsApp y coordinamos. Si tenés varios vehículos (por ejemplo, una flota), retiramos y entregamos sin cargo.
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
          <h3>¿Se te venció el matafuego del auto?</h3>
          <p>Pasá por Sarandí 416, Merlo. Lunes a viernes de 8 a 18 y sábados de 9 a 13.</p>
          <a href={"https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Necesito%20recargar%20el%20matafuego%20del%20auto."} className="btn-red">
            Consultanos por WhatsApp
          </a>
        </div>
      </main>
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

  .faq details { border-bottom: 1px solid var(--gray-border); padding: 14px 0; }
.faq summary { font-weight: 600; cursor: pointer; font-size: 16px; }
.faq details p { margin: 10px 0 0; }
.author-box { display: flex; gap: 18px; align-items: center; background: var(--gray-bg); padding: 20px; border-radius: 6px; margin: 32px 0; }
.author-box img { width: 84px; height: 84px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
.author-box p { margin: 0; font-size: 15px; }
.article-wrap a { color: var(--red); }
.article-wrap .btn-red { color: var(--white); }
`
