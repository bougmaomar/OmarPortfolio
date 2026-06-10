// Prerendered to .output/public/sitemap.xml. Lists every locale with hreflang
// alternates so search engines index all three language versions correctly.
export default defineEventHandler((event) => {
  const base = String(useRuntimeConfig().public.siteUrl || '').replace(/\/$/, '')

  const locales = [
    { path: '/', lang: 'en-US', priority: '1.0' },
    { path: '/fr/', lang: 'fr-FR', priority: '0.8' },
    { path: '/ar/', lang: 'ar', priority: '0.8' },
  ]

  const alternates = [
    ...locales.map(l => `<xhtml:link rel="alternate" hreflang="${l.lang}" href="${base}${l.path}"/>`),
    `<xhtml:link rel="alternate" hreflang="x-default" href="${base}/"/>`,
  ].join('')

  const urls = locales
    .map(
      l =>
        `  <url>\n    <loc>${base}${l.path}</loc>\n    ${alternates}\n    <changefreq>monthly</changefreq>\n    <priority>${l.priority}</priority>\n  </url>`
    )
    .join('\n')

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`
})
