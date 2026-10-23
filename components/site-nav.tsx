"use client"

import { useState } from "react"
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

/** The site menu: one source for every page. On narrow screens the links fold behind a button; the quote CTA stays in the bar. */
export function SiteNav() {
  const path = usePathname()
  const here = (href: string) => path.replace(/\/?$/, "/") === href
  const [open, setOpen] = useState(false)

  return (
    <nav className="site-nav" data-open={open || undefined}>
      <div className="nav-inner">
        <a href="/" className="nav-logo">
          <img width={506} height={208} src="/img/matafuegos-pesse-logo.webp" alt="Matafuegos Pesse" />
        </a>
        <ul className="nav-links" id="site-menu" onClick={() => setOpen(false)}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} aria-current={here(l.href) ? "page" : undefined}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={WHATSAPP_URL} className="nav-cta">
          Pedir cotización
        </a>
        <button type="button" className="nav-toggle" aria-expanded={open} aria-controls="site-menu" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
    </nav>
  )
}
