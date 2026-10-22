type Json = { [key: string]: unknown }

/** Schema.org data for search engines. `<` is escaped so no string can close the script tag. */
export function JsonLd({ data }: { data: Json | Json[] }) {
  return (Array.isArray(data) ? data : [data]).map((d, i) => (
    <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, "\\u003c") }} />
  ))
}
