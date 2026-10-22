"use client"

import { usePathname } from "next/navigation"
import { WHATSAPP_URL } from "@/lib/site"

const LINKS = [
  { href: "/recarga-de-matafuegos/", label: "Recarga de matafuegos" },
  { href: "/seguridad-e-higiene/", label: "Seguridad e Higiene" },
  { href: "/nosotros/", label: "Nosotros" },
  { href: "/preguntas-frecuentes/", label: "Preguntas frecuentes" },
  { href: "/#contacto", label: "Contacto" },
  { href: "/blog/", label: "Blog" },
]

/** The site menu: one source for every page. */
export function SiteNav() {
  const path = usePathname()
  const here = (href: string) => path.replace(/\/?$/, "/") === href

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <a href="/" className="nav-logo">
          <img width={297} height={102} src="/img/matafuegos-pesse.avif" alt="Matafuegos Pesse" style={{ height: 46, width: "auto", objectFit: "contain" }} />
        </a>
        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} aria-current={here(l.href) ? "page" : undefined}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={WHATSAPP_URL} className="nav-cta">
              Pedir cotización
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
