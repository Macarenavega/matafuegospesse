import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import "@/components/inner-page.css"

export const metadata: Metadata = {
  title: "Preguntas frecuentes sobre matafuegos | Matafuegos Pesse",
  description: "Cada cuánto recargar un matafuego, cuántos necesita una empresa, qué tipo usar, legajo técnico, certificaciones, zonas y horarios.",
  robots: "index, follow",
  alternates: {
    canonical: "https://matafuegospesse.com/preguntas-frecuentes/"
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Matafuegos Pesse",
    title: "Preguntas frecuentes sobre matafuegos | Matafuegos Pesse",
    description: "Cada cuánto recargar un matafuego, cuántos necesita una empresa, qué tipo usar, legajo técnico, certificaciones, zonas y horarios.",
    url: "https://matafuegospesse.com/preguntas-frecuentes/",
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
      "@type": "FAQPage",
      "@id": "https://matafuegospesse.com/preguntas-frecuentes/",
      inLanguage: "es-AR",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cada cuánto hay que recargar un matafuego?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Una vez por año como mínimo y siempre después de cualquier uso, aunque haya sido parcial. Además, el cilindro necesita una prueba hidráulica cada 5 años y, en los equipos de polvo, el cambio completo del polvo cada 10 años. A los 20 años desde su fabricación, el equipo se da de baja. Ver plazos."
          }
        },
        {
          "@type": "Question",
          name: "¿Qué pasa si el matafuego no se usó nunca?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Igual hay que revisarlo cada año. El polvo se compacta y absorbe humedad, y la presión puede bajar sin que se note desde afuera. La etiqueta de servicio vencida es una observación segura en una inspección de la ART."
          }
        },
        {
          "@type": "Question",
          name: "¿Retiran y entregan los matafuegos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, sin cargo. Coordinamos el retiro con el responsable del lugar y te dejamos equipos de reemplazo mientras los tuyos están en el taller."
          }
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta la recarga?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende del tipo de agente, la capacidad y la cantidad de equipos. Como los precios cambian seguido, no publicamos una lista fija: te cotizamos en el día por WhatsApp. El retiro y la entrega no tienen cargo."
          }
        },
        {
          "@type": "Question",
          name: "¿Venden y recargan matafuegos para auto?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. La Ley de Tránsito exige llevar matafuego en el auto y en la VTV se controla. Vendemos y recargamos el matafuego de 1 kg con su soporte. Ver matafuegos para auto."
          }
        },
        {
          "@type": "Question",
          name: "¿Cuánto tarda el servicio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La revisión anual se coordina por visita. Los trabajos de taller, como la prueba hidráulica o el cambio de polvo, suelen demorar uno o dos días hábiles. Mientras tanto dejamos equipos de reemplazo para que el local no quede sin cobertura."
          }
        },
        {
          "@type": "Question",
          name: "¿Recargan matafuegos de otras empresas o marcas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, siempre que el cilindro esté en condiciones. Si el equipo tiene más de 20 años desde su fabricación o no pasa la prueba hidráulica, hay que darlo de baja y reemplazarlo."
          }
        },
        {
          "@type": "Question",
          name: "¿Cuántos matafuegos necesita mi empresa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Como regla general, al menos uno cada 200 m² de superficie cubierta, del tipo adecuado al riesgo de la actividad y a una distancia de recorrido limitada. Cada caso depende del local: te asesoramos sin cargo. Ver normativa."
          }
        },
        {
          "@type": "Question",
          name: "¿Qué tipo de matafuego necesito?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende de lo que pueda arder. El de polvo ABC es el más usado en empresas porque cubre sólidos, líquidos inflamables y equipos eléctricos; el de CO₂ conviene para equipos electrónicos, y el de clase K, para cocinas industriales. Ver tipos de matafuegos."
          }
        },
        {
          "@type": "Question",
          name: "¿Qué es el legajo técnico de Higiene y Seguridad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es la carpeta que documenta las condiciones de seguridad de un establecimiento: relevamiento de riesgos, plano con salidas y matafuegos, plan de evacuación, carga de fuego y las medidas adoptadas. Los municipios lo suelen pedir para la habilitación comercial o industrial."
          }
        },
        {
          "@type": "Question",
          name: "¿Qué incluye un plan de evacuación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Las rutas de salida y los puntos de reunión, los roles del personal durante una emergencia, los teléfonos de emergencia, la ubicación de matafuegos y señalización, y el programa de simulacros."
          }
        },
        {
          "@type": "Question",
          name: "¿Pueden encargarse también de los matafuegos y la señalización?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Es la ventaja de trabajar con una sola empresa: el mismo equipo que releva los riesgos provee, recarga y señaliza los matafuegos y, si hace falta, diseña la red contra incendio. Ver el servicio de Seguridad e Higiene."
          }
        },
        {
          "@type": "Question",
          name: "¿Están certificados?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Nuestro servicio de control, mantenimiento y recarga está certificado según IRAM 3517-2:2005 (certificado N.º DC-P-M400-001.1) y tenemos habilitación provincial DPS N.º 330 y habilitación en CABA (N.º 4927135). Ver certificaciones."
          }
        },
        {
          "@type": "Question",
          name: "¿Qué zonas cubren?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Desde Merlo atendemos toda la Zona Oeste (Morón, Ituzaingó, Moreno, Luján, La Matanza, Tres de Febrero y San Martín), el resto de la Provincia de Buenos Aires y CABA."
          }
        },
        {
          "@type": "Question",
          name: "¿Cuál es el horario de atención?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lunes a viernes de 8:00 a 18:00 y sábados de 9:00 a 13:00. Por WhatsApp podés escribirnos en cualquier momento y respondemos en el día hábil."
          }
        },
        {
          "@type": "Question",
          name: "¿Cómo sé si una empresa de matafuegos es confiable?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pedí el número de certificado o habilitación, que la visita se coordine con el responsable y que la factura esté a nombre de la empresa. Desconfiá de quien se presenta sin aviso. Ver las 8 claves."
          }
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
          name: "Preguntas frecuentes"
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
        <div className="breadcrumb"><a href="/">Inicio</a>{" › Preguntas frecuentes"}</div>
        <h1>Preguntas frecuentes</h1>
        <p>
          Las consultas que más nos hacen sobre recarga y mantenimiento de matafuegos, normativa y Seguridad e Higiene. Si tu pregunta no está acá, escribinos por WhatsApp.
        </p>
        <h2>Recarga y mantenimiento</h2>
        <h3>¿Cada cuánto hay que recargar un matafuego?</h3>
        <p>
          {"Una vez por año como mínimo y siempre después de cualquier uso, aunque haya sido parcial. Además, el cilindro necesita una prueba hidráulica cada 5 años y, en los equipos de polvo, el cambio completo del polvo cada 10 años. A los 20 años desde su fabricación, el equipo se da de baja. "}
          <a href="/blog/cada-cuanto-revisar-matafuegos">Ver plazos</a>
          .
        </p>
        <h3>¿Qué pasa si el matafuego no se usó nunca?</h3>
        <p>
          Igual hay que revisarlo cada año. El polvo se compacta y absorbe humedad, y la presión puede bajar sin que se note desde afuera. La etiqueta de servicio vencida es una observación segura en una inspección de la ART.
        </p>
        <h3>¿Retiran y entregan los matafuegos?</h3>
        <p>
          Sí, sin cargo. Coordinamos el retiro con el responsable del lugar y te dejamos equipos de reemplazo mientras los tuyos están en el taller.
        </p>
        <h3>¿Cuánto cuesta la recarga?</h3>
        <p>
          Depende del tipo de agente, la capacidad y la cantidad de equipos. Como los precios cambian seguido, no publicamos una lista fija: te cotizamos en el día por WhatsApp. El retiro y la entrega no tienen cargo.
        </p>
        <h3>¿Venden y recargan matafuegos para auto?</h3>
        <p>
          {"Sí. La Ley de Tránsito exige llevar matafuego en el auto y en la VTV se controla. Vendemos y recargamos el matafuego de 1 kg con su soporte. "}
          <a href="/matafuego-para-auto/">Ver matafuegos para auto</a>
          .
        </p>
        <h3>¿Cuánto tarda el servicio?</h3>
        <p>
          La revisión anual se coordina por visita. Los trabajos de taller, como la prueba hidráulica o el cambio de polvo, suelen demorar uno o dos días hábiles. Mientras tanto dejamos equipos de reemplazo para que el local no quede sin cobertura.
        </p>
        <h3>¿Recargan matafuegos de otras empresas o marcas?</h3>
        <p>
          Sí, siempre que el cilindro esté en condiciones. Si el equipo tiene más de 20 años desde su fabricación o no pasa la prueba hidráulica, hay que darlo de baja y reemplazarlo.
        </p>
        <h2>Cantidad, tipos y normativa</h2>
        <h3>¿Cuántos matafuegos necesita mi empresa?</h3>
        <p>
          {"Como regla general, al menos uno cada 200 m² de superficie cubierta, del tipo adecuado al riesgo de la actividad y a una distancia de recorrido limitada. Cada caso depende del local: te asesoramos sin cargo. "}
          <a href="/blog/cuantos-matafuegos-necesita-mi-empresa">Ver cómo calcularlo</a>
          .
        </p>
        <h3>¿Qué tipo de matafuego necesito?</h3>
        <p>
          {"Depende de lo que pueda arder. El de polvo ABC es el más usado en empresas porque cubre sólidos, líquidos inflamables y equipos eléctricos; el de CO₂ conviene para equipos electrónicos, y el de clase K, para cocinas industriales. "}
          <a href="/blog/tipos-de-matafuegos">Ver tipos de matafuegos</a>
          .
        </p>
        <h2>Seguridad e Higiene</h2>
        <h3>¿Qué es el legajo técnico de Higiene y Seguridad?</h3>
        <p>
          Es la carpeta que documenta las condiciones de seguridad de un establecimiento: relevamiento de riesgos, plano con salidas y matafuegos, plan de evacuación, carga de fuego y las medidas adoptadas. Los municipios lo suelen pedir para la habilitación comercial o industrial.
        </p>
        <h3>¿Qué incluye un plan de evacuación?</h3>
        <p>
          Las rutas de salida y los puntos de reunión, los roles del personal durante una emergencia, los teléfonos de emergencia, la ubicación de matafuegos y señalización, y el programa de simulacros.
        </p>
        <h3>¿Pueden encargarse también de los matafuegos y la señalización?</h3>
        <p>
          {"Sí. Es la ventaja de trabajar con una sola empresa: el mismo equipo que releva los riesgos provee, recarga y señaliza los matafuegos y, si hace falta, diseña la red contra incendio. "}
          <a href="/seguridad-e-higiene/">Ver el servicio de Seguridad e Higiene</a>
          .
        </p>
        <h2>Sobre Matafuegos Pesse</h2>
        <h3>¿Están certificados?</h3>
        <p>
          {"Sí. Nuestro servicio de control, mantenimiento y recarga está certificado según IRAM 3517-2:2005 (certificado N.º DC-P-M400-001.1) y tenemos habilitación provincial DPS N.º 330 y habilitación en CABA (N.º 4927135). "}
          <a href="/certificaciones/">Ver certificaciones</a>
          .
        </p>
        <h3>¿Qué zonas cubren?</h3>
        <p>
          Desde Merlo atendemos toda la Zona Oeste (Morón, Ituzaingó, Moreno, Luján, La Matanza, Tres de Febrero y San Martín), el resto de la Provincia de Buenos Aires y CABA.
        </p>
        <h3>¿Cuál es el horario de atención?</h3>
        <p>
          Lunes a viernes de 8:00 a 18:00 y sábados de 9:00 a 13:00. Por WhatsApp podés escribirnos en cualquier momento y respondemos en el día hábil.
        </p>
        <h3>¿Cómo sé si una empresa de matafuegos es confiable?</h3>
        <p>
          {"Pedí el número de certificado o habilitación, que la visita se coordine con el responsable y que la factura esté a nombre de la empresa. Desconfiá de quien se presenta sin aviso. "}
          <a href="/blog/como-elegir-empresa-recarga-matafuegos">Ver las 8 claves</a>
          .
        </p>
        <div className="cta-box">
          <h3>¿No encontraste tu respuesta?</h3>
          <p>Escribinos y te respondemos en el día hábil. Lunes a viernes de 8 a 18 y sábados de 9 a 13.</p>
          <a href={"https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Tengo%20una%20consulta."} className="btn-red">
            Consultanos por WhatsApp
          </a>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
