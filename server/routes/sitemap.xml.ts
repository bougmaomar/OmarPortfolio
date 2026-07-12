// Prerendered to .output/public/sitemap.xml. Lists every page in every locale
// with hreflang alternates so search engines index all language versions.
export default defineEventHandler((event) => {
  const base = String(useRuntimeConfig().public.siteUrl || '').replace(/\/$/, '')

  const locales = [
    { prefix: '', lang: 'en-US', isDefault: true },
    { prefix: '/fr', lang: 'fr-FR', isDefault: false },
    { prefix: '/ar', lang: 'ar', isDefault: false },
  ]

  // path: '' is the locale root (kept with a trailing slash); subpages have none.
  const pages = [
    { path: '', defaultPriority: '1.0', otherPriority: '0.8' },
    { path: '/pricing', defaultPriority: '0.7', otherPriority: '0.6' },
  ]

  const urlFor = (l: (typeof locales)[number], p: (typeof pages)[number]) =>
    `${base}${l.prefix}${p.path || '/'}`

  const urls = pages
    .flatMap((p) => {
      const alternates = [
        ...locales.map(l => `<xhtml:link rel="alternate" hreflang="${l.lang}" href="${urlFor(l, p)}"/>`),
        `<xhtml:link rel="alternate" hreflang="x-default" href="${base}${p.path || '/'}"/>`,
      ].join('')
      return locales.map(
        l =>
          `  <url>\n    <loc>${urlFor(l, p)}</loc>\n    ${alternates}\n    <changefreq>monthly</changefreq>\n    <priority>${l.isDefault ? p.defaultPriority : p.otherPriority}</priority>\n  </url>`
      )
    })
    .join('\n')

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`
})
