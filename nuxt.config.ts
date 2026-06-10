export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // Static generation for Cloudflare Pages: prerender every locale route to
  // plain HTML. No server runtime needed — output lands in .output/public.
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/fr/', '/ar/'],
      failOnError: false,
    },
  },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
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
      title: 'Omar Bougma — Web Developer, Marrakesh',
      meta: [
        { name: 'description', content: 'I build websites and tools that help small businesses get more customers and waste less time on admin. Nearly four years\' experience, based in Marrakesh. Fixed quotes, plain language.' },
        { property: 'og:title', content: 'Omar Bougma — Web Developer, Marrakesh' },
        { property: 'og:description', content: 'Websites and tools that get small businesses more customers and less busywork. Based in Marrakesh.' },
        { name: 'theme-color', content: '#173A33' }
      ],
      link: [
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
