import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { SiteFooter } from "@/components/site-footer"
import "@/components/inner-page.css"

export const metadata: Metadata = {
  title: "Certificaciones y habilitaciones | Matafuegos Pesse",
  description: "Certificado DC-P-M400-001.1 (IRAM 3517-2:2005) para recarga de extintores, habilitación provincial DPS N.º 330 y habilitación en CABA (N.º 4927135).",
  robots: "index, follow",
  alternates: {
    canonical: "https://matafuegospesse.com/certificaciones/"
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Matafuegos Pesse",
    title: "Certificaciones y habilitaciones | Matafuegos Pesse",
    description: "Certificado DC-P-M400-001.1 (IRAM 3517-2:2005) para recarga de extintores, habilitación provincial DPS N.º 330 y habilitación en CABA (N.º 4927135).",
    url: "https://matafuegospesse.com/certificaciones/",
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
      "@type": "WebPage",
      "@id": "https://matafuegospesse.com/certificaciones/",
      name: "Certificaciones de Matafuegos Pesse",
      about: {
        "@id": "https://matafuegospesse.com/#business"
      },
      inLanguage: "es-AR"
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
          name: "Certificaciones"
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
        <div className="breadcrumb"><a href="/">Inicio</a>{" › Certificaciones"}</div>
        <span className="article-tag">Confianza</span>
        <h1>Certificaciones</h1>
        <p>
          <strong>
            El servicio de control, mantenimiento y recarga de extintores de Matafuegos Pesse está certificado según la norma IRAM 3517-2:2005, con el certificado N.º DC-P-M400-001.1, y la empresa cuenta con habilitación provincial DPS N.º 330 y habilitación en CABA (N.º 4927135).
          </strong>
          {" Además, el área de Seguridad e Higiene está a cargo de un profesional matriculado en el Colegio de la Provincia de Buenos Aires."}
        </p>
        <h2>Certificado de servicio</h2>
        <table>
          <tbody>
            <tr><td><strong>Empresa</strong></td><td>Matafuegos Pesse</td></tr>
            <tr><td><strong>Servicio</strong></td><td>Control, mantenimiento y recarga de extintores</td></tr>
            <tr><td><strong>Norma</strong></td><td>IRAM 3517-2:2005</td></tr>
            <tr><td><strong>Certificado N.º</strong></td><td>DC-P-M400-001.1</td></tr>
          </tbody>
        </table>
        <p>
          La norma IRAM 3517-2 establece cómo deben controlarse, mantenerse y recargarse los extintores, y qué registros y etiquetas tiene que dejar la empresa en cada equipo. Un servicio certificado es el que respalda tu cumplimiento frente a la ART, una inspección municipal o la aseguradora.
        </p>
        <h2>Habilitaciones</h2>
        <table>
          <tbody>
            <tr><td><strong>Provincia de Buenos Aires</strong></td><td>Habilitación DPS N.º 330</td></tr>
            <tr>
              <td><strong>Ciudad Autónoma de Buenos Aires</strong></td>
              <td>
                {"Registro de reparadores y recargadores de extintores, inscripción N.º 4927135 (Disposición DISFC-2026-28-GCABA-DGFYCO). "}
                <a href="https://data.buenosaires.gob.ar/dataset/registro-fabricantes-reparadores-recargadores-extintores" rel="noopener">
                  Ver el registro oficial
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <h2>Profesional matriculado</h2>
        <table>
          <tbody>
            <tr>
              <td><strong>Responsable</strong></td>
              <td><a href="/nosotros/juan-changala/">Juan Changala</a></td>
            </tr>
            <tr>
              <td><strong>Título</strong></td>
              <td>Licenciado en Higiene y Seguridad en el Trabajo (Universidad de Morón)</td>
            </tr>
            <tr><td><strong>Matrícula</strong></td><td>LHS-001107 PBA</td></tr>
            <tr>
              <td><strong>Colegio</strong></td>
              <td>
                <a href="https://www.cpsh.com.ar/" rel="noopener">
                  Colegio de Profesionales de la Higiene y Seguridad en el Trabajo de la Provincia de Buenos Aires
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <h2>Cómo verificar a una empresa de matafuegos</h2>
        <p>
          {"Antes de dejar que alguien retire o recargue tus equipos, pedile el número de certificado o de habilitación y verificalo. Si te piden pagar antes de entregar los equipos con su etiqueta, o se presentan sin haber coordinado la visita con el responsable, desconfiá. Mirá también "}
          <a href="/blog/oblea-tarjeta-matafuego">cómo leer la oblea y la tarjeta del matafuego</a>
          {". Te lo explicamos en "}
          <a href="/blog/como-elegir-empresa-recarga-matafuegos">
            cómo elegir una empresa de recarga de matafuegos
          </a>
          {" y en "}
          <a href="/blog/estafa-matafuegos-retiran-cobran-de-mas">la estafa del matafuego</a>
          .
        </p>
        <p>Si necesitás copia de nuestro certificado para una auditoría o una licitación, pedínosla.</p>
        <div className="cta-box">
          <h3>¿Necesitás el certificado para una auditoría?</h3>
          <p>Te enviamos la documentación por correo o WhatsApp.</p>
          <a href={"https://api.whatsapp.com/send?phone=+541121685408&text=Hola!%20Necesito%20copia%20del%20certificado%20IRAM."} className="btn-red">
            Pedir documentación
          </a>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
