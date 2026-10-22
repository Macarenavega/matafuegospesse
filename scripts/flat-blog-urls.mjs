// Blog articles have always lived at /blog/<slug> (no trailing slash, served from blog/<slug>.html),
// and that is their canonical URL. Next exports them as blog/<slug>/index.html and, with
// trailingSlash, appends "/" to their canonical and og:url — so flatten them back.
import { existsSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const blog = join(import.meta.dirname, "..", "out", "blog")
for (const entry of readdirSync(blog, { withFileTypes: true })) {
  const page = join(blog, entry.name, "index.html")
  if (!entry.isDirectory() || !existsSync(page)) continue
  const url = `https://matafuegospesse.com/blog/${entry.name}`
  // the URL appears in the <head> tags and, quote-escaped, in React's hydration payload
  const html = readFileSync(page, "utf8").replaceAll(`${url}/"`, `${url}"`).replaceAll(`${url}/\\"`, `${url}\\"`)
  writeFileSync(join(blog, `${entry.name}.html`), html)
  rmSync(join(blog, entry.name), { recursive: true })
}
