import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Tipos de matafuegos: cuál usar según el fuego | Pesse",
  description: "Agua, polvo ABC, CO₂, espuma AFFF. Guía para elegir el extintor correcto según la clase de fuego y la actividad de tu empresa en Buenos Aires.",
  robots: "index, follow",
  alternates: {
    canonical: "https://matafuegospesse.com/blog/tipos-de-matafuegos"
  },
  openGraph: {
    type: "article",
    title: "Tipos de matafuegos: cuál usar según el fuego",
    description: "Agua, polvo ABC, CO₂, espuma AFFF. Guía para elegir el extintor correcto según la clase de fuego y tu actividad.",
    url: "https://matafuegospesse.com/blog/tipos-de-matafuegos"
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Tipos de matafuegos: cuál usar en cada situación",
      description: "Guía completa sobre los tipos de matafuegos y cómo elegir el correcto según la clase de fuego.",
      datePublished: "2026-09-10",
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
      mainEntityOfPage: "https://matafuegospesse.com/blog/tipos-de-matafuegos",
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
          name: "Tipos de matafuegos: cuál usar en cada situación"
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
        <div className="breadcrumb"><a href="/">Inicio</a>{" › "}<a href="/blog/">Blog</a>{" › Guía "}</div>
        <span className="article-tag">Guía</span>
        <h1>Tipos de matafuegos: cuál usar en cada situación</h1>
        <p className="article-meta">
          {"10 de septiembre de 2026 · Por "}
          <a href="/nosotros/juan-changala/" rel="author" style={{ color: "inherit" }}>Juan Changala</a>
          , Lic. en Higiene y Seguridad en el Trabajo · 5 min de lectura
        </p>
        <div className="highlight-box">
          <strong>En resumen</strong>
          Hay cinco clases de fuego: A (sólidos), B (líquidos inflamables), C (equipos eléctricos), D (metales) y K (aceites de cocina). El matafuego de polvo ABC es el más usado en empresas porque cubre las clases A, B y C; el de CO₂ conviene para equipos electrónicos y el de clase K, para cocinas industriales.
        </div>
        <p>
          {"Elegir mal el tipo de matafuego no solo puede ser ineficaz — en algunos casos puede "}
          <strong>empeorar el incendio o generar riesgo eléctrico</strong>
          . Esta guía explica cada tipo, qué fuegos apaga y dónde corresponde usarlo.
        </p>
        <h2>Primero: las clases de fuego</h2>
        <p>La norma IRAM clasifica los incendios según el material que arde:</p>
        <table>
          <thead><tr><th>Clase</th><th>Qué arde</th><th>Ejemplo</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Clase A</strong></td>
              <td>Sólidos comunes</td>
              <td>Madera, papel, tela, plástico</td>
            </tr>
            <tr>
              <td><strong>Clase B</strong></td>
              <td>Líquidos inflamables</td>
              <td>Nafta, aceite, solventes, pinturas</td>
            </tr>
            <tr>
              <td><strong>Clase C</strong></td>
              <td>Equipos eléctricos energizados</td>
              <td>Tableros, computadoras, motores</td>
            </tr>
            <tr>
              <td><strong>Clase D</strong></td>
              <td>Metales combustibles</td>
              <td>Magnesio, titanio, sodio</td>
            </tr>
            <tr>
              <td><strong>Clase K</strong></td>
              <td>Grasas y aceites de cocina</td>
              <td>Freidoras industriales</td>
            </tr>
          </tbody>
        </table>
        <h2>Los tipos de matafuego</h2>
        <h3>Agua pulverizada</h3>
        <p>El más básico. Enfría el material en combustión bajando su temperatura.</p>
        <ul>
          <li><span className="check">✓</span>{" Clase A"}</li>
          <li>
            <span className="cross">✗</span>
            {" Nunca usar en fuegos eléctricos (clase C) — riesgo de electrocución"}
          </li>
          <li><span className="cross">✗</span>{" No sirve para líquidos inflamables"}</li>
        </ul>
        <p><strong>Uso típico:</strong>{" depósitos de papel, almacenes, archivos."}</p>
        <h3>Polvo ABC (polvo químico seco triclase)</h3>
        <p>El más usado en empresas argentinas. El polvo interrumpe la reacción química del fuego.</p>
        <ul>
          <li><span className="check">✓</span>{" Clases A, B y C"}</li>
          <li>
            <span className="cross">✗</span>
            {" Daña equipos electrónicos y ópticos — evitar en salas de servidores"}
          </li>
          <li><span className="cross">✗</span>{" Deja residuo que requiere limpieza post-uso"}</li>
        </ul>
        <p><strong>Uso típico:</strong>{" oficinas generales, talleres, locales comerciales, vehículos."}</p>
        <h3>Dióxido de Carbono (CO₂)</h3>
        <p>Desplaza el oxígeno sofocando el fuego sin dejar residuos. Ideal para equipos sensibles.</p>
        <ul>
          <li><span className="check">✓</span>{" Clases B y C"}</li>
          <li><span className="cross">✗</span>{" No es efectivo en exteriores con viento"}</li>
          <li>
            <span className="cross">✗</span>
            {" Riesgo de asfixia en espacios confinados — ventilación post-uso"}
          </li>
        </ul>
        <p>
          <strong>Uso típico:</strong>
          {" salas de servidores, laboratorios, equipos eléctricos, estudios."}
        </p>
        <h3>Espuma AFFF</h3>
        <p>Crea una capa que sella el combustible líquido impidiendo que sus vapores alimenten el fuego.</p>
        <ul>
          <li><span className="check">✓</span>{" Clases A y B"}</li>
          <li><span className="cross">✗</span>{" No usar en fuegos eléctricos"}</li>
        </ul>
        <p>
          <strong>Uso típico:</strong>
          {" estaciones de servicio, depósitos de combustible, industria química."}
        </p>
        <h3>Polvo para fuegos clase K</h3>
        <p>Específico para cocinas industriales con aceites y grasas a altas temperaturas.</p>
        <ul><li><span className="check">✓</span>{" Clase K exclusivamente"}</li></ul>
        <p><strong>Uso típico:</strong>{" restaurantes, cocinas industriales, frigoríficos."}</p>
        <h2>Tabla resumen de compatibilidad</h2>
        <table>
          <thead>
            <tr>
              <th>Tipo de matafuego</th>
              <th>Clase A</th>
              <th>Clase B</th>
              <th>Clase C</th>
              <th>Clase K</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Agua pulverizada</td>
              <td className="check">✓</td>
              <td className="cross">✗</td>
              <td className="cross">✗</td>
              <td className="cross">✗</td>
            </tr>
            <tr>
              <td>Polvo ABC</td>
              <td className="check">✓</td>
              <td className="check">✓</td>
              <td className="check">✓</td>
              <td className="cross">✗</td>
            </tr>
            <tr>
              <td>CO₂</td>
              <td className="cross">✗</td>
              <td className="check">✓</td>
              <td className="check">✓</td>
              <td className="cross">✗</td>
            </tr>
            <tr>
              <td>Espuma AFFF</td>
              <td className="check">✓</td>
              <td className="check">✓</td>
              <td className="cross">✗</td>
              <td className="cross">✗</td>
            </tr>
            <tr>
              <td>Polvo clase K</td>
              <td className="cross">✗</td>
              <td className="cross">✗</td>
              <td className="cross">✗</td>
              <td className="check">✓</td>
            </tr>
          </tbody>
        </table>
        <div className="danger-box">
          <strong>⛔ Error común: polvo ABC en sala de servidores</strong>
          {" El polvo químico es altamente corrosivo y puede destruir equipos electrónicos de forma irreversible incluso si el fuego era pequeño. Para salas de servidores o centros de datos, el extintor correcto es siempre CO₂. "}
        </div>
        <h2>¿Cuántos matafuegos necesita mi empresa?</h2>
        <p>
          {"El Decreto 351/79 establece que debe haber al menos un matafuego cada "}
          <strong>200 m² de superficie</strong>
          {", con una distancia máxima de recorrido de 20 metros para fuegos clase A y de 15 metros para fuegos clase B. Ver "}
          <a href="/blog/cuantos-matafuegos-necesita-mi-empresa">cómo calcular cuántos necesitás</a>
          .
        </p>
        <div className="highlight-box">
          <strong>💡 Para no equivocarse</strong>
          {" Si tenés dudas sobre qué tipo y cuántos matafuegos necesita tu empresa, una visita de evaluación de riesgos resuelve todo en una hora. Es parte del servicio que ofrecemos sin cargo para nuevos clientes. "}
        </div>
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
              <a href="/blog/normativa-matafuegos-argentina" style={{ color: "var(--red)", fontWeight: "600", textDecoration: "none" }}>
                Normativa de matafuegos en Argentina →
              </a>
            </li>
            <li>
              <a href="/blog/por-que-los-matafuegos-baratos-pueden-salir-caros" style={{ color: "var(--red)", fontWeight: "600", textDecoration: "none" }}>
                Matafuego barato vs. certificado IRAM →
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
          <h3>¿Necesitás asesoramiento sin compromiso?</h3>
          <p>Te ayudamos a elegir el equipamiento correcto para tu actividad. Cubrimos toda Buenos Aires.</p>
          <a href={"https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Quiero%20saber%20qu%C3%A9%20matafuegos%20necesito%20para%20mi%20empresa."} className="btn-red">
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
.article-wrap h3 { font-size: 20px; margin: 28px 0 10px; }
.article-wrap p { margin-bottom: 18px; font-size: 16px; }
.article-wrap ul, .article-wrap ol { margin: 0 0 18px 24px; font-size: 16px; }
.article-wrap li { margin-bottom: 8px; }
.highlight-box { background: var(--gray-bg); border-left: 4px solid var(--red); padding: 18px 20px; margin: 28px 0; border-radius: 0 4px 4px 0; }
.highlight-box strong { display: block; font-size: 15px; margin-bottom: 6px; }
.danger-box { background: #FFF5F5; border-left: 4px solid #C41E2A; padding: 18px 20px; margin: 28px 0; border-radius: 0 4px 4px 0; }
table { width: 100%; border-collapse: collapse; margin: 28px 0; font-size: 15px; overflow-x: auto; display: block; }
th { background: var(--black); color: var(--white); text-align: left; padding: 10px 14px; font-family: var(--font-barlow), sans-serif; font-size: 15px; }
td { padding: 10px 14px; border-bottom: 1px solid var(--gray-border); }
tr:nth-child(even) td { background: var(--gray-bg); }
.check { color: #1a7f37; font-weight: 700; }
.cross { color: #C41E2A; font-weight: 700; }
.cta-box { background: var(--black); color: var(--white); padding: 32px; border-radius: 6px; margin: 48px 0 0; text-align: center; }
.cta-box h3 { font-size: 26px; color: var(--white); margin-bottom: 10px; }
.cta-box p { color: #8A9099; margin-bottom: 20px; }
.btn-red { display: inline-block; background: var(--red); color: var(--white); padding: 12px 28px; border-radius: 4px; font-weight: 600; text-decoration: none; font-size: 15px; }
.breadcrumb { font-size: 13px; color: var(--gray-mid); margin-bottom: 24px; }
.breadcrumb a { color: var(--gray-mid); text-decoration: none; }
`
