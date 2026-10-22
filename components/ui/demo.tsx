"use client"

import * as React from "react"
import FireExtinguishHero, { type ExtinguishInfo } from "@/components/ui/fire-extinguish-hero"
import { WHATSAPP_URL } from "@/lib/site"

export default function Demo() {
  const [last, setLast] = React.useState<ExtinguishInfo | null>(null)

  return (
    <>
      <FireExtinguishHero
        brand={
          // the dark logo turned white for the black hero, as in the site footer
          <img src="/img/matafuegos-pesse.avif" width={297} height={102} alt="Matafuegos Pesse" style={{ height: 40, width: "auto", filter: "brightness(0) invert(1)" }} />
        }
        brandHref="/"
        navLinks={[
          { label: "Recarga de matafuegos", href: "/recarga-de-matafuegos/" },
          { label: "Seguridad e Higiene", href: "/seguridad-e-higiene/" },
          { label: "Nosotros", href: "/nosotros/" },
          { label: "Contacto", href: "/#contacto" },
        ]}
        navCta={{ label: "Pedir cotización", href: WHATSAPP_URL }}
        primaryCta={{ label: "Solicitar presupuesto", href: WHATSAPP_URL }}
        secondaryCta={{ label: "Ver servicios", href: "/#servicios" }}
        onExtinguished={setLast}
      />
      <p role="status" style={{ margin: 0, padding: "14px 20px", background: "#0B0B0C", color: "#FFFFFF", font: "14px system-ui, sans-serif" }}>
        {last
          ? `Fuego apagado en ${(last.durationMs / 1000).toLocaleString("es-AR", { maximumFractionDigits: 1 })} s.`
          : "Pasá el cursor por el fuego para apagarlo."}
      </p>
    </>
  )
}
