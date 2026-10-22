const LINKS = [
  { href: "/recarga-de-matafuegos/", label: "Recarga de matafuegos" },
  { href: "/seguridad-e-higiene/", label: "Seguridad e Higiene" },
  { href: "/certificaciones/", label: "Certificaciones" },
  { href: "/preguntas-frecuentes/", label: "Preguntas frecuentes" },
  { href: "/#contacto", label: "Contacto" },
  { href: "/blog/", label: "Blog" },
]

/** Footer of the inner pages (the home page has its own, with the logo). */
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <ul className="footer-nav">
        {LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
      <p className="footer-copy">© 2026 Matafuegos Pesse · Sarandí 416, Merlo, Buenos Aires</p>
    </footer>
  )
}
