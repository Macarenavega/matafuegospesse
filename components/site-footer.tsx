import { WHATSAPP_URL } from "@/lib/site"

const COLUMNS = [
  {
    title: "Servicios",
    links: [
      { href: "/venta-de-matafuegos/", label: "Venta de matafuegos" },
      { href: "/recarga-de-matafuegos/", label: "Recarga de matafuegos" },
      { href: "/matafuego-para-auto/", label: "Matafuegos para auto" },
      { href: "/mangueras-contra-incendio/", label: "Mangueras contra incendio" },
      { href: "/soportes-y-gabinetes/", label: "Soportes y gabinetes" },
      { href: "/senalizacion/", label: "Señalización" },
      { href: "/elementos-de-proteccion-personal/", label: "Protección personal (EPP)" },
      { href: "/seguridad-e-higiene/", label: "Seguridad e Higiene" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { href: "/nosotros/", label: "Nosotros" },
      { href: "/certificaciones/", label: "Certificaciones" },
      { href: "/preguntas-frecuentes/", label: "Preguntas frecuentes" },
      { href: "/blog/", label: "Blog" },
      { href: "/#contacto", label: "Contacto" },
    ],
  },
]

/** Footer shared by every page: brand, link columns, contact details. */
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            <img width={506} height={208} loading="lazy" decoding="async" src="/img/matafuegos-pesse-logo.webp" alt="Matafuegos Pesse" />
          </a>
          <p>Venta, recarga y mantenimiento de matafuegos con certificación IRAM. Desde 1995 en Merlo, Zona Oeste.</p>
        </div>
        {COLUMNS.map((c) => (
          <div key={c.title}>
            <p className="footer-title">{c.title}</p>
            <ul>
              {c.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <p className="footer-title">Contacto</p>
          <ul>
            <li><a href="tel:02204861235">0220-486-1235</a></li>
            <li><a href={WHATSAPP_URL}>WhatsApp: +54 11 2168-5408</a></li>
            <li><a href="mailto:info@matafuegospesse.com">info@matafuegospesse.com</a></li>
            <li>Sarandí 416, Merlo, Buenos Aires</li>
            <li>Lun a vie 8 a 18 · Sáb 9 a 13</li>
          </ul>
        </div>
      </div>
      <p className="footer-copy">© 2026 Matafuegos Pesse. Todos los derechos reservados.</p>
    </footer>
  )
}
