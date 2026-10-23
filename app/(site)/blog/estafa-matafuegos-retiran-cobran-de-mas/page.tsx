import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import "@/components/inner-page.css"
import { NoteIcon } from "@/components/note-icon"

export const metadata: Metadata = {
  title: "La estafa del matafuego: cómo funciona y cómo evitarla",
  description: "Cómo funciona la estafa del matafuego: retiran los equipos sin aviso y cobran de más. Señales de alerta y qué hacer si ya te pasó.",
  robots: "index, follow",
  alternates: {
    canonical: "https://matafuegospesse.com/blog/estafa-matafuegos-retiran-cobran-de-mas"
  },
  openGraph: {
    type: "article",
    title: "La estafa del matafuego: cómo funciona y cómo evitarla",
    description: "Retiran tus matafuegos sin autorización y cobran lo que quieren bajo presión. Así funciona la estafa y cómo no caer.",
    url: "https://matafuegospesse.com/blog/estafa-matafuegos-retiran-cobran-de-mas"
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Cuidado: la estafa del matafuego que ya afectó a comerciantes en todo el país",
      datePublished: "2026-09-30",
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
      mainEntityOfPage: "https://matafuegospesse.com/blog/estafa-matafuegos-retiran-cobran-de-mas",
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
          name: "Cuidado: la estafa del matafuego que ya afectó a comerciantes en todo el país"
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
        <div className="breadcrumb"><a href="/">Inicio</a>{" › "}<a href="/blog/">Blog</a>{" › Alerta"}</div>
        <span className="article-tag">Alerta</span>
        <h1>Cuidado: la estafa del matafuego que ya afectó a comerciantes en todo el país</h1>
        <p className="article-meta">
          {"30 de septiembre de 2026 · Por "}
          <a href="/nosotros/juan-changala/" rel="author" style={{ color: "inherit" }}>Juan Changala</a>
          , Lic. en Higiene y Seguridad en el Trabajo · 4 min de lectura
        </p>
        <div className="highlight-box">
          <strong>En resumen</strong>
          La estafa del matafuego funciona así: alguien se presenta sin aviso, convence a un empleado de que los equipos están vencidos, se los lleva y después cobra tres o cuatro veces el precio normal bajo presión. Para evitarla, que nadie retire matafuegos sin acordarlo con el responsable, y pedí siempre número de habilitación y factura a nombre de la empresa.
        </div>
        <p>
          {"En septiembre de 2026, el diario "}
          <a href="https://mendozatoday.com.ar/sociedad/alerta-entre-comerciantes-de-mendoza-por-una-ingeniosa-estafa-con-matafuegos/" rel="noopener">
            Mendoza Today
          </a>
          {" publicó una alerta sobre comerciantes estafados por una empresa que se presentaba en locales, retiraba los matafuegos y luego exigía cobros abusivos bajo presión. La empresa en cuestión operaba bajo el nombre \"Control Cuyo\"."}
        </p>
        <p>
          No nos sorprendió leerlo. A nosotros también nos han consultado clientes de Buenos Aires que pasaron por situaciones similares. Por eso decidimos escribir este artículo: para que sepa cómo funciona la estafa y pueda identificarla antes de que sea tarde.
        </p>
        <div className="warning-box">
          <strong><NoteIcon name="alert" />Si alguien ya retiró tus matafuegos sin tu autorización escrita</strong>
          <p>
            No pagues nada. Comunicate con tu empresa habitual de mantenimiento y, si hay presión o amenazas, hacé la denuncia ante la Oficina Municipal de Defensa al Consumidor o la Policía.
          </p>
        </div>
        <h2>Cómo funciona la estafa, paso a paso</h2>
        <p>El mecanismo es siempre el mismo, con pequeñas variaciones:</p>
        <ol style={{ margin: "0 0 18px 24px", fontSize: "16px" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>Entran al local cuando el dueño no está.</strong>
            {" Hablan directamente con un empleado o vendedor. Presentan un carnet, una carpeta, algo que parece oficial."}
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Argumentan urgencia.</strong>
            {" Dicen que los matafuegos están vencidos, que hay una inspección pendiente, que la ART notificó algo. El empleado, sin herramientas para verificarlo, los deja actuar."}
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Se llevan los equipos.</strong>
            {" A veces dejan un remito genérico. A veces, nada."}
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Presentan el cobro.</strong>
            {" El monto suele ser tres o cuatro veces el precio de mercado habitual. Y ahí empieza la presión."}
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Amenazan con consecuencias.</strong>
            {" Dicen que si no pagás serás denunciado, que los equipos \"no se pueden devolver sin pagar\", que van a mandar a alguien. En algunos casos reportados, los llamados se vuelven hostigamiento."}
          </li>
        </ol>
        <p>
          La documentación que entregan, cuando existe, suele tener irregularidades: CUIT que no corresponde a la actividad, razones sociales que no aparecen en registros públicos, sellos sin número de habilitación.
        </p>
        <h2>Por qué funciona</h2>
        <p>
          Funciona porque los matafuegos son equipamiento obligatorio y la mayoría de los empleados saben que hay que tenerlos al día. Cuando alguien llega con seguridad y menciona normas e inspecciones, el instinto natural es no contradecirlo.
        </p>
        <p>
          Además, los equipos de seguridad contra incendios son exactamente el tipo de cosa que se delega: el dueño firma el contrato con una empresa, los equipos cuelgan en la pared, y el día a día del negocio sigue. Eso crea una ventana perfecta para que alguien externo actúe sin que nadie lo cuestione.
        </p>
        <h2>Las señales que hay que conocer</h2>
        <p>
          {"Una empresa legítima de mantenimiento de matafuegos "}
          <strong>no hace ninguna de estas cosas:</strong>
        </p>
        <ul className="checklist">
          <li>
            Ingresar a retirar equipos sin haber acordado la visita previamente con el responsable del local
          </li>
          <li>Hablar solo con empleados sin identificarse ante el dueño o administrador</li>
          <li>Negarse a dar número de habilitación ante la SRT o el municipio correspondiente</li>
          <li>
            Presentar facturas o remitos con datos que no coinciden con la empresa que dicen representar
          </li>
          <li>Cobrar antes de entregar los equipos revisados con su etiqueta de servicio</li>
          <li>Amenazar con denuncias o consecuencias legales para presionar el pago</li>
        </ul>
        <p>
          Una empresa habilitada tiene número de registro, emite factura tipo A o B a nombre correcto, y puede mostrar su habilitación ante cualquier pedido.
        </p>
        <h2>Qué hacer si ya pasó</h2>
        <ul className="safe-list">
          <li>
            <strong>No pagar</strong>
            {" bajo presión. El pago no garantiza que devuelvan los equipos ni que la documentación sea válida."}
          </li>
          <li>
            <strong>Verificar la identidad</strong>
            {" de la empresa: CUIT en AFIP, habilitación en el municipio, registro en la SRT."}
          </li>
          <li>
            <strong>Contactar a tu empresa habitual</strong>
            {" de mantenimiento para que evalúe los equipos si los devuelven."}
          </li>
          <li>
            <strong>Hacer la denuncia</strong>
            {" ante Defensa al Consumidor, AFIP (facturas apócrifas) o la Policía si hay hostigamiento."}
          </li>
          <li>
            <strong>Avisar a otros comerciantes</strong>
            {" de la zona: estas operaciones suelen concentrarse en un barrio o corredor comercial durante días consecutivos."}
          </li>
        </ul>
        <h2>Cómo trabajamos nosotros</h2>
        <p>
          Desde Matafuegos Pesse, cada visita de mantenimiento se coordina previamente con el responsable del local — nunca con un empleado que no tiene autorización para decidir. Llegamos en fecha y horario acordados, presentamos nuestra habilitación ante quien lo solicite, entregamos los equipos con etiqueta de servicio firmada y emitimos factura antes de cobrar.
        </p>
        <p>
          Si alguien se presenta en tu negocio diciendo que viene de nuestra parte sin haber acordado una visita con vos directamente, no es de nuestra parte. Escribinos por WhatsApp en el momento y lo verificamos.
        </p>
        <div className="highlight-box">
          <strong><NoteIcon name="list" />Instrucción simple para tu equipo de trabajo</strong>
          {" Pegá un cartel interno junto a los matafuegos: \"Ante cualquier persona que venga a revisar o retirar los matafuegos, avisá al dueño antes de permitir el acceso.\" Un paso, cero costo, evita el 100% de estos casos. "}
        </div>
        <div className="related-posts" style={{ margin: "48px 0 0", padding: "28px", background: "var(--gray-bg)", borderRadius: "6px" }}>
          <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: ".08em", color: "var(--gray-mid)", marginBottom: "14px" }}>
            También te puede interesar
          </p>
          <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li>
              <a href="/blog/oblea-tarjeta-matafuego" style={{ color: "var(--red)", fontWeight: "600", textDecoration: "none" }}>
                Oblea y tarjeta del matafuego: cómo verificarlas →
              </a>
            </li>
            <li>
              <a href="/blog/por-que-los-matafuegos-baratos-pueden-salir-caros" style={{ color: "var(--red)", fontWeight: "600", textDecoration: "none" }}>
                Matafuego barato vs. certificado IRAM: qué cambia →
              </a>
            </li>
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
              <a href="/blog/como-elegir-empresa-recarga-matafuegos" style={{ color: "var(--red)", fontWeight: "600", textDecoration: "none" }}>
                Cómo elegir una empresa de recarga de matafuegos →
              </a>
            </li>
            <li>
              <a href="/certificaciones/" style={{ color: "var(--red)", fontWeight: "600", textDecoration: "none" }}>
                Nuestras certificaciones IRAM →
              </a>
            </li>
          </ul>
        </div>
        <div className="cta-box">
          <h3>¿Dudás de alguien que ya pasó por tu local?</h3>
          <p>
            Escribinos y te ayudamos a verificar si la empresa está habilitada y si la documentación que te dejaron es válida. Sin costo.
          </p>
          <a href={"https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Quisiera%20verificar%20una%20empresa%20que%20vino%20a%20revisar%20mis%20matafuegos."} className="btn-red">
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
.warning-box{background:#fff3cd;border-left:4px solid #e6a817;padding:18px 20px;margin:28px 0;border-radius:0 4px 4px 0}
.warning-box strong{display:block;font-size:15px;margin-bottom:6px;color:#7a5200}
.warning-box p{font-size:15px;color:#5a3e00;margin:0}
.checklist{list-style:none;margin-left:0!important}
.checklist li{padding-left:24px;position:relative;margin-bottom:10px}
.checklist li::before{content:"✗";position:absolute;left:0;color:var(--red);font-weight:700}
.safe-list{list-style:none;margin-left:0!important}
.safe-list li{padding-left:24px;position:relative;margin-bottom:10px}
.safe-list li::before{content:"✓";position:absolute;left:0;color:#1a7f37;font-weight:700}
`
