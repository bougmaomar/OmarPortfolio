export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // Static generation for Cloudflare Pages: prerender every locale route to
  // plain HTML. No server runtime needed — output lands in .output/public.
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/fr/', '/ar/', '/sitemap.xml', '/robots.txt'],
      failOnError: false,
    },
  },
  // Canonical site URL — used for canonical tags, hreflang, sitemap, JSON-LD.
  // Override per-environment with NUXT_PUBLIC_SITE_URL (e.g. in Cloudflare Pages).
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://omarbougma.com',
    },
  },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://omarbougma.com',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', dir: 'ltr', file: 'en.json' },
      { code: 'fr', language: 'fr-FR', name: 'Français', dir: 'ltr', file: 'fr.json' },
      { code: 'ar', language: 'ar', name: 'العربية', dir: 'rtl', file: 'ar.json' },
    ],
    langDir: 'locales',
    compilation: {
      strictMessage: false,
      escapeHtml: false,
    },
  },
  app: {
    head: {
      htmlAttrs: {},
      // Title + description + OG/Twitter/canonical/hreflang/JSON-LD are set
      // per-locale in app/pages/index.vue. This title is only a fallback.
      title: 'Omar Bougma — Software Developer, Marrakesh',
      meta: [
        { name: 'theme-color', content: '#173A33' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600&family=Cairo:wght@400;500;600;700&display=swap'
        }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})
