import type { Metadata } from "next"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import "@/components/site-chrome.css"

export const metadata: Metadata = {
  title: "Página no encontrada | Matafuegos Pesse",
  robots: "noindex"
}

export default function NotFound() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteNav />
      <main className="article-wrap">
        <span className="article-tag">Error 404</span>
        <h1>No encontramos esta página</h1>
        <p>
          Puede que la dirección haya cambiado o tenga un error de tipeo. Estas son las páginas más consultadas:
        </p>
        <ul>
          <li>
            <a href="/recarga-de-matafuegos/">Recarga y mantenimiento de matafuegos</a>
            : retiro y entrega sin cargo
          </li>
          <li><a href="/matafuego-para-auto/">Matafuego para auto apto VTV</a></li>
          <li><a href="/seguridad-e-higiene/">Seguridad e Higiene para empresas</a></li>
          <li><a href="/preguntas-frecuentes/">Preguntas frecuentes</a></li>
          <li><a href="/blog/">Blog: guías y normativa</a></li>
          <li><a href="/">Volver al inicio</a></li>
        </ul>
        <div className="cta-box">
          <h3>¿Buscabas algo puntual?</h3>
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

// Page styles carried over from the static site; menu and footer styles live in components/site-chrome.css
const css = `:root { --black:#111111; --red:#C41E2A; --red-dark:#900E18; --white:#FFFFFF; --gray-bg:#F5F6F8; --gray-mid:#737880; --gray-border:#DEE1E6; --max-w:1200px; }
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: var(--font-inter), system-ui, sans-serif; color: var(--black); background: var(--white); line-height: 1.7; }
h1, h2, h3 { font-family: var(--font-barlow), sans-serif; font-weight: 700; line-height: 1.15; }
.container { max-width: var(--max-w); margin: 0 auto; padding: 0 24px; }

.article-wrap { max-width: 740px; margin: 0 auto; padding: 56px 24px 80px; }
.article-tag { display: inline-block; background: var(--red); color: var(--white); font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; padding: 4px 10px; border-radius: 2px; margin-bottom: 20px; }
.article-wrap h1 { font-size: clamp(30px, 4vw, 46px); margin-bottom: 16px; }
.article-meta { font-size: 13px; color: var(--gray-mid); margin-bottom: 36px; border-bottom: 1px solid var(--gray-border); padding-bottom: 20px; }
.article-wrap h2 { font-size: 28px; margin: 40px 0 14px; }
.article-wrap p { margin-bottom: 18px; font-size: 16px; }
.article-wrap ul, .article-wrap ol { margin: 0 0 18px 24px; font-size: 16px; }
.article-wrap li { margin-bottom: 8px; }
.highlight-box { background: var(--gray-bg); border-left: 4px solid var(--red); padding: 18px 20px; margin: 28px 0; border-radius: 0 4px 4px 0; }
.highlight-box strong { display: block; font-size: 15px; margin-bottom: 6px; }

table { width: 100%; border-collapse: collapse; margin: 28px 0; font-size: 15px; }
th { background: var(--black); color: var(--white); text-align: left; padding: 10px 14px; font-family: var(--font-barlow), sans-serif; font-size: 15px; }
td { padding: 10px 14px; border-bottom: 1px solid var(--gray-border); }
tr:nth-child(even) td { background: var(--gray-bg); }

.cta-box { background: var(--black); color: var(--white); padding: 32px; border-radius: 6px; margin: 48px 0 0; text-align: center; }
.cta-box h3 { font-size: 26px; color: var(--white); margin-bottom: 10px; }
.cta-box p { color: #8A9099; margin-bottom: 20px; }
.btn-red { display: inline-block; background: var(--red); color: var(--white); padding: 12px 28px; border-radius: 4px; font-weight: 600; text-decoration: none; font-size: 15px; }
.btn-red:hover { background: var(--red-dark); }

.breadcrumb { font-size: 13px; color: var(--gray-mid); margin-bottom: 24px; }
.breadcrumb a { color: var(--gray-mid); text-decoration: none; }
.breadcrumb a:hover { color: var(--black); }

  .faq details { border-bottom: 1px solid var(--gray-border); padding: 14px 0; }
.faq summary { font-weight: 600; cursor: pointer; font-size: 16px; }
.faq details p { margin: 10px 0 0; }
.author-box { display: flex; gap: 18px; align-items: center; background: var(--gray-bg); padding: 20px; border-radius: 6px; margin: 32px 0; }
.author-box img { width: 84px; height: 84px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
.author-box p { margin: 0; font-size: 15px; }
.article-wrap a { color: var(--red); }
.article-wrap .btn-red { color: var(--white); }
`
