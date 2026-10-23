import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import "@/components/inner-page.css"

export const metadata: Metadata = {
  title: "Cambio de polvo en matafuegos cada 10 años | Pesse",
  description: "El polvo ABC se compacta, absorbe humedad y pierde eficacia. A los 10 años debe reemplazarse por norma IRAM, aunque el extintor nunca fue usado.",
  robots: "index, follow",
  alternates: {
    canonical: "https://matafuegospesse.com/blog/cambio-polvo-quimico-seco-cada-10-anos"
  },
  openGraph: {
    type: "article",
    title: "Cambio de polvo en matafuegos cada 10 años | Pesse",
    description: "El polvo ABC envejece, se compacta y pierde eficacia. A los 10 años debe reemplazarse por norma IRAM.",
    url: "https://matafuegospesse.com/blog/cambio-polvo-quimico-seco-cada-10-anos"
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Por qué hay que cambiar el polvo químico seco del matafuego cada 10 años",
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
      mainEntityOfPage: "https://matafuegospesse.com/blog/cambio-polvo-quimico-seco-cada-10-anos",
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
          name: "Por qué hay que cambiar el polvo químico seco cada 10 años"
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
          {" › Mantenimiento"}
        </div>
        <span className="article-tag">Mantenimiento</span>
        <h1>Por qué hay que cambiar el polvo químico seco cada 10 años</h1>
        <p className="article-meta">
          {"18 de septiembre de 2026 · Por "}
          <a href="/nosotros/juan-changala/" rel="author" style={{ color: "inherit" }}>Juan Changala</a>
          , Lic. en Higiene y Seguridad en el Trabajo · 4 min de lectura
        </p>
        <div className="highlight-box">
          <strong>En resumen</strong>
          El polvo químico seco de los matafuegos se cambia por completo cada 10 años, aunque el equipo nunca se haya usado. Con el tiempo absorbe humedad, se compacta y pierde eficacia, y nada de eso se ve desde afuera. Es parte del ciclo de mantenimiento, junto con la revisión anual y la prueba hidráulica cada 5 años.
        </div>
        <p>
          {"De todos los mantenimientos que requiere un extintor, este es el más ignorado — y el que más sorprende a los clientes cuando lo mencionamos. El polvo químico seco que hay dentro del cilindro no dura para siempre. Aunque el extintor nunca fue usado, aunque el manómetro marque presión correcta y aunque la etiqueta de revisión anual esté al día, el agente extintor tiene una vida útil propia que vence a los "}
          <strong>10 años</strong>
          .
        </p>
        <p>
          En Argentina, la norma IRAM 3517 establece que el polvo debe ser reemplazado en ese plazo. No es opcional.
        </p>
        <h2>Por qué el polvo envejece</h2>
        <p>
          El polvo ABC — el más común en extintores de uso general — es una mezcla de fosfato monoamónico con aditivos que le dan fluidez, evitan la compactación y mantienen las propiedades ignífugas activas. Con el tiempo, esos aditivos se degradan por tres mecanismos principales:
        </p>
        <ul>
          <li>
            <strong>Absorción de humedad.</strong>
            {" El polvo es higroscópico: absorbe la humedad del ambiente de forma gradual, incluso dentro del cilindro sellado. A medida que incorpora agua, las partículas se adhieren entre sí y forman grumos."}
          </li>
          <li>
            <strong>Compactación por vibración.</strong>
            {" Cada vez que el extintor se mueve, se transporta o simplemente vibra por el tránsito y el uso del edificio, el polvo se asienta y se compacta en el fondo del cilindro. Un polvo compactado no fluye bien por la manguera."}
          </li>
          <li>
            <strong>Degradación química del agente activo.</strong>
            {" El fosfato monoamónico pierde eficacia ignífuga con el tiempo. Un polvo de 12 años puede tener una capacidad extintora significativamente menor que uno nuevo, aunque visualmente sean idénticos."}
          </li>
        </ul>
        <blockquote>
          {" El problema es que ninguno de estos procesos es visible desde afuera. El cilindro se ve igual, pesa casi lo mismo y el manómetro no cambia. La degradación es completamente silenciosa. "}
        </blockquote>
        <h2>Qué pasa si el polvo está degradado cuando lo necesitás</h2>
        <p>
          Un polvo compactado o con grumos puede obstruir parcialmente la manguera o la tobera en el momento de la descarga. En lugar de salir como una nube densa y continua que cubre la base del fuego, sale en pulsos irregulares o con presión reducida.
        </p>
        <p>
          Resultado: el extintor descarga, el operador cree que está funcionando, pero la eficacia real es una fracción de lo que debería ser. En un fuego de cocina o eléctrico que tiene tres o cuatro segundos de margen antes de propagarse, esa diferencia importa.
        </p>
        <h2>Qué implica el servicio de cambio de polvo</h2>
        <p>Este mantenimiento es más invasivo que la revisión anual y justifica que cueste más:</p>
        <ul className="timeline-simple">
          <li>
            <strong>Despresurización completa del cilindro</strong>
            {" — se libera todo el nitrógeno antes de abrirlo"}
          </li>
          <li>
            <strong>Apertura y vaciado total</strong>
            {" — el polvo viejo se extrae y se descarta; no se reutiliza"}
          </li>
          <li>
            <strong>Limpieza interior del cilindro</strong>
            {" — se eliminan residuos, óxido superficial y cualquier contaminante"}
          </li>
          <li>
            <strong>Inspección visual interna</strong>
            {" — se revisa el estado de la pared interior antes de volver a cargar"}
          </li>
          <li>
            <strong>Carga con polvo nuevo certificado</strong>
            {" — polvo ABC de primera calidad, pesado y registrado"}
          </li>
          <li><strong>Represurización y control de presión</strong>{" — con manómetro calibrado"}</li>
          <li><strong>Etiqueta de servicio con fecha de próximo cambio de polvo</strong></li>
        </ul>
        <p>
          El servicio se hace en el taller, no in situ. Por eso el extintor sale del local por uno o dos días hábiles — mientras tanto dejamos equipos de reemplazo para que el local nunca quede sin cobertura.
        </p>
        <h2>Cómo saber si tus extintores necesitan el cambio ahora</h2>
        <p>
          {"La fecha del último cambio de polvo debe figurar en la etiqueta de servicio pegada al cilindro. Buscá una leyenda como \"Recarga de polvo\" o \"Cambio de agente extintor\" con su fecha. Si la última revisión que figura es solo la anual y no hay registro de cambio de polvo, preguntá a tu empresa de mantenimiento cuándo corresponde."}
        </p>
        <p>
          Si el extintor tiene más de 10 años desde su fabricación y nunca tuvo cambio de polvo documentado, ya está en mora.
        </p>
        <div className="highlight-box">
          <strong>📋 Ciclo completo de mantenimiento de un extintor de polvo ABC</strong>
          <ul style={{ margin: "8px 0 0 20px", fontSize: "15px" }}>
            <li><strong>Cada año:</strong>{" revisión anual (inspección, presión, válvula, manguera)"}</li>
            <li><strong>Cada 5 años:</strong>{" prueba hidráulica del cilindro (re-timbrado)"}</li>
            <li><strong>Cada 10 años:</strong>{" cambio completo del polvo químico seco"}</li>
            <li><strong>A los 20 años:</strong>{" baja del equipo, independientemente de su estado"}</li>
          </ul>
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
              <a href="/blog/matafuego-vencido-puede-explotar" style={{ color: "var(--red)", fontWeight: "600", textDecoration: "none" }}>
                Qué pasa cuando un matafuego no tiene mantenimiento →
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
          <h3>¿Sabés cuándo fue el último cambio de polvo?</h3>
          <p>
            Si no tenés el registro o querés verificar el estado de tu equipamiento, coordinamos una visita sin costo de diagnóstico. Cubrimos toda la provincia de Buenos Aires.
          </p>
          <a href={"https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Quiero%20verificar%20si%20mis%20matafuegos%20necesitan%20cambio%20de%20polvo."} className="btn-red">
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
.timeline-simple{list-style:none;margin:24px 0 24px 0!important;padding:0;border-left:3px solid var(--gray-border)}
.timeline-simple li{padding:0 0 20px 24px;position:relative;font-size:15px}
.timeline-simple li::before{content:'';width:10px;height:10px;background:var(--red);border-radius:50%;position:absolute;left:-6.5px;top:5px}
.timeline-simple li strong{display:block;font-size:16px;font-family:var(--font-barlow),sans-serif;font-weight:700;margin-bottom:2px}
`
