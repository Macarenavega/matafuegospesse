import type { Metadata } from "next"
import { Barlow_Condensed, Inter } from "next/font/google"
import "./globals.css"

// Self-hosted at build time: no request to Google Fonts from the visitor's browser
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://matafuegospesse.com"),
  icons: { icon: { url: "/favicon.svg", type: "image/svg+xml" } },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  )
}
