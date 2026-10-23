import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import "@/components/inner-page.css"

export const metadata: Metadata = {
  title: "¿Cuántos matafuegos necesita una empresa? Cálculo y ley",
  description: "Cómo calcular cuántos matafuegos necesita tu empresa según el Decreto 351/79: 1 cada 200 m², distancias máximas, tipo según el riesgo y ejemplos.",
  robots: "index, follow",
  alternates: {
    canonical: "https://matafuegospesse.com/blog/cuantos-matafuegos-necesita-mi-empresa"
  },
  openGraph: {
    type: "article",
    locale: "es_AR",
    siteName: "Matafuegos Pesse",
    title: "¿Cuántos matafuegos necesita una empresa? Cálculo y ley",
    description: "Cómo calcular cuántos matafuegos necesita tu empresa según el Decreto 351/79: 1 cada 200 m², distancias máximas, tipo según el riesgo y ejemplos.",
    url: "https://matafuegospesse.com/blog/cuantos-matafuegos-necesita-mi-empresa",
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
      "@id": "https://matafuegospesse.com/blog/cuantos-matafuegos-necesita-mi-empresa#article",
      headline: "¿Cuántos matafuegos necesita mi empresa?",
      description: "Cómo calcular cuántos matafuegos necesita tu empresa según el Decreto 351/79: 1 cada 200 m², distancias máximas, tipo según el riesgo y ejemplos.",
      datePublished: "2026-10-14",
      dateModified: "2026-10-14",
      inLanguage: "es-AR",
      image: "https://matafuegospesse.com/og-image.jpg",
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
      mainEntityOfPage: "https://matafuegospesse.com/blog/cuantos-matafuegos-necesita-mi-empresa"
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
          name: "¿Cuántos matafuegos necesita mi empresa?"
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
        <div className="breadcrumb">
          <a href="/">Inicio</a>
          {" › "}
          <a href="/blog/">Blog</a>
          {" › Normativa"}
        </div>
        <span className="article-tag">Normativa</span>
        <h1>¿Cuántos matafuegos necesita mi empresa?</h1>
        <p className="article-meta">
          {"14 de octubre de 2026 · Por "}
          <a href="/nosotros/juan-changala/" rel="author" style={{ color: "inherit" }}>Juan Changala</a>
          , Lic. en Higiene y Seguridad en el Trabajo · 6 min de lectura
        </p>
        <div className="highlight-box">
          <strong>En resumen</strong>
          {"Como mínimo, "}
          <strong>un matafuego cada 200 m²</strong>
          {" de superficie a proteger, y ubicados de manera que nadie tenga que recorrer más de "}
          <strong>20 metros</strong>
          {" hasta uno si el riesgo es de fuegos clase A (sólidos) ni más de "}
          <strong>15 metros</strong>
          {" si es clase B (líquidos inflamables). Lo establece el artículo 176 del "}
          <a href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/30000-34999/32030/dto351-1979-anexo1.htm" rel="noopener">
            Decreto 351/79
          </a>
          . El tipo y la capacidad dependen de lo que puede arder en cada sector.
        </div>
        <h2>Qué dice la ley</h2>
        <p>
          El artículo 176 del Decreto 351/79, reglamentario de la Ley 19.587 de Higiene y Seguridad en el Trabajo, fija dos reglas que se cumplen a la vez:
        </p>
        <ul>
          <li>
            <strong>Cantidad mínima:</strong>
            {" \"En todos los casos deberá instalarse como mínimo un matafuego cada 200 metros cuadrados de superficie a ser protegida.\""}
          </li>
          <li>
            <strong>Distancia máxima:</strong>
            {" \"La máxima distancia a recorrer hasta el matafuego será de 20 metros para fuegos de clase A y 15 metros para fuegos de clase B.\""}
          </li>
        </ul>
        <p>
          {"Además, la capacidad de cada equipo (su "}
          <em>potencial extintor</em>
          {") tiene que alcanzar el mínimo que fija el "}
          <a href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/30000-34999/32030/dto351-1979-anexo7.htm" rel="noopener">
            Anexo VII
          </a>
          {" según la carga de fuego del lugar. Y si hay líquidos inflamables con una superficie mayor a 1 m², el artículo 177 exige un potencial extintor calculado sobre esa superficie."}
        </p>
        <h2>Cómo calcularlo, paso a paso</h2>
        <ol>
          <li>
            <strong>Medí la superficie a proteger de cada planta.</strong>
            {" La distancia se recorre dentro de cada nivel, así que cada piso se calcula por separado."}
          </li>
          <li>
            <strong>Dividí por 200 y redondeá hacia arriba.</strong>
            {" Ese es el piso mínimo de equipos para esa planta."}
          </li>
          <li>
            <strong>Verificá las distancias reales.</strong>
            {" Se mide el recorrido a pie, rodeando estanterías, paredes y máquinas, no en línea recta. Si desde algún puesto hay más de 20 m (o 15 m donde hay líquidos inflamables), hace falta otro equipo aunque ya cumplas con los 200 m²."}
          </li>
          <li>
            <strong>Elegí el tipo según lo que puede arder</strong>
            {" en cada sector: sólidos, líquidos, tableros eléctricos o aceites de cocina. Ver "}
            <a href="/blog/tipos-de-matafuegos">tipos de matafuegos</a>
            .
          </li>
          <li>
            <strong>Sumá los equipos específicos</strong>
            {" donde hay riesgos puntuales: una cocina comercial, un sector de pintura o una sala de tableros."}
          </li>
        </ol>
        <h2>Ejemplos</h2>
        <table>
          <thead>
            <tr>
              <th>Lugar</th>
              <th>Superficie</th>
              <th>Mínimo por superficie</th>
              <th>Qué revisar además</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Local comercial de una planta</td>
              <td>80 m²</td>
              <td>1</td>
              <td>Que el equipo quede cerca de la salida y del tablero eléctrico</td>
            </tr>
            <tr>
              <td>Oficina en una planta</td>
              <td>450 m²</td>
              <td>3 (450 ÷ 200 = 2,25)</td>
              <td>
                Distancia de 20 m desde cada puesto; equipo apto para fuegos eléctricos cerca de servidores
              </td>
            </tr>
            <tr>
              <td>Depósito</td>
              <td>1.000 m²</td>
              <td>5</td>
              <td>Con estanterías, el recorrido real suele obligar a sumar equipos</td>
            </tr>
            <tr>
              <td>Restaurante</td>
              <td>150 m²</td>
              <td>1</td>
              <td>Un matafuego clase K en la cocina, además del ABC para el salón</td>
            </tr>
            <tr>
              <td>Edificio de 3 plantas</td>
              <td>200 m² por planta</td>
              <td>3 (uno por planta)</td>
              <td>Cada planta se calcula por separado</td>
            </tr>
          </tbody>
        </table>
        <p>
          Son ejemplos orientativos: el número final depende del recorrido real y de la carga de fuego de cada sector. Los municipios, la ART o la aseguradora pueden pedir más equipos que el mínimo legal.
        </p>
        <h2>Qué tipo y qué capacidad</h2>
        <p>
          {"Cada matafuego lleva una notación de número y letra (por ejemplo, \"A\" y \"BC\") que indica su capacidad de extinción para cada clase de fuego. En oficinas y comercios lo más habitual es el de polvo ABC, porque cubre sólidos, líquidos y equipos eléctricos. La capacidad en kilos se define según el potencial extintor que exige la carga de fuego del lugar: en un relevamiento se calcula sector por sector."}
        </p>
        <h2>Errores que vemos seguido</h2>
        <ul>
          <li>
            <strong>Contar solo los metros cuadrados</strong>
            {" y olvidarse de la distancia: un depósito largo puede cumplir los 200 m² y aun así tener puestos a más de 20 m."}
          </li>
          <li>
            <strong>Un solo equipo para varias plantas</strong>
            , por ejemplo en la planta baja de un local con entrepiso.
          </li>
          <li><strong>Equipos de agua cerca de tableros eléctricos</strong>, donde no se deben usar.</li>
          <li>
            <strong>Matafuegos tapados o apoyados en el piso</strong>
            : tienen que estar colgados, señalizados y a la vista.
          </li>
          <li><strong>Cocinas comerciales sin matafuego clase K.</strong></li>
          <li>
            <strong>Equipos vencidos:</strong>
            {" la cantidad es correcta pero la etiqueta no está al día. Ver "}
            <a href="/blog/cada-cuanto-revisar-matafuegos">cada cuánto hay que revisarlos</a>
            .
          </li>
        </ul>
        <h2>¿Cuándo conviene pedir un relevamiento?</h2>
        <p>
          {"Si tenés varias plantas, depósitos con estanterías, líquidos inflamables, una cocina comercial o una inspección próxima, conviene que un profesional calcule la carga de fuego y la ubicación de cada equipo. Lo hacemos como parte del "}
          <a href="/seguridad-e-higiene/">servicio de Seguridad e Higiene</a>
          , y si faltan equipos los proveemos y los dejamos señalizados.
        </p>
        <h2>Preguntas frecuentes</h2>
        <div className="faq">
          <details>
            <summary>¿Un local chico necesita matafuego?</summary>
            <p>
              {"Sí. El decreto dice que \"en todos los casos\" debe haber como mínimo un matafuego: aunque el local tenga 30 m², necesita al menos uno."}
            </p>
          </details>
          <details>
            <summary>¿Se cuentan los patios o sectores descubiertos?</summary>
            <p>
              La regla habla de superficie a proteger. Si en un patio, playón o semicubierto hay mercadería, vehículos o materiales que pueden arder, también tiene que quedar cubierto.
            </p>
          </details>
          <details>
            <summary>¿De qué capacidad tienen que ser los matafuegos?</summary>
            <p>
              Depende del potencial extintor que exige la carga de fuego del lugar (Anexo VII del Decreto 351/79). En comercios y oficinas lo más habitual son equipos ABC de 5 kg, pero conviene calcularlo en cada caso.
            </p>
          </details>
          <details>
            <summary>¿Dónde se ubican?</summary>
            <p>
              Colgados en su soporte, en lugares visibles y señalizados, cerca de las salidas y de los riesgos puntuales, y sin nada que los obstruya.
            </p>
          </details>
        </div>
        <div className="author-box">
          <img src="/img/juan-changala.webp" width={480} height={480} alt="Juan Changala" loading="lazy" />
          <p>
            <strong>{"Escrito por "}<a href="/nosotros/juan-changala/">Juan Changala</a></strong>
            <br />
            Licenciado en Higiene y Seguridad en el Trabajo · Matrícula LHS-001107 PBA
          </p>
        </div>
        <div className="related-posts" style={{ margin: "48px 0 0", padding: "28px", background: "var(--gray-bg)", borderRadius: "6px" }}>
          <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: ".08em", color: "var(--gray-mid)", marginBottom: "14px" }}>
            También te puede interesar
          </p>
          <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li>
              <a href="/blog/oblea-tarjeta-matafuego" style={{ color: "var(--red)", fontWeight: "600", textDecoration: "none" }}>
                Oblea y tarjeta del matafuego: qué son y cómo verificarlas →
              </a>
            </li>
            <li>
              <a href="/blog/normativa-matafuegos-argentina" style={{ color: "var(--red)", fontWeight: "600", textDecoration: "none" }}>
                Normativa de matafuegos en Argentina →
              </a>
            </li>
            <li>
              <a href="/seguridad-e-higiene/" style={{ color: "var(--red)", fontWeight: "600", textDecoration: "none" }}>
                Relevamiento y asesoramiento en Seguridad e Higiene →
              </a>
            </li>
          </ul>
        </div>
        <div className="cta-box">
          <h3>¿No sabés si te alcanzan los matafuegos que tenés?</h3>
          <p>Contanos superficie, plantas y actividad, y te decimos cuántos necesitás. Sin cargo.</p>
          <a href={"https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Quiero%20saber%20cu%C3%A1ntos%20matafuegos%20necesita%20mi%20empresa."} className="btn-red">
            Consultanos por WhatsApp
          </a>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
