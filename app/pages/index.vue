<script setup>
const { locale, locales, t } = useI18n()
const config = useRuntimeConfig()

const siteUrl = String(config.public.siteUrl || '').replace(/\/$/, '')
const ogImage = siteUrl + '/og-image.jpg'
const ogLocale = { en: 'en_US', fr: 'fr_FR', ar: 'ar_MA' }

const currentLocale = computed(() =>
  locales.value.find(l => l.code === locale.value)
)

const pathFor = (code) => (code === 'en' ? '/' : `/${code}/`)
const canonical = computed(() => siteUrl + pathFor(locale.value))

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Omar Bougma',
  jobTitle: t('seo.jobTitle'),
  url: siteUrl + '/',
  image: ogImage,
  email: 'contact@omarbougma.com',
  telephone: '+212629071889',
  address: { '@type': 'PostalAddress', addressLocality: 'Marrakesh', addressCountry: 'MA' },
  areaServed: { '@type': 'Country', name: 'Morocco' },
  knowsLanguage: ['en', 'fr', 'ar'],
  knowsAbout: [0, 1, 2, 3, 4, 5].map(i => t(`seo.knowsAbout[${i}]`)),
  sameAs: [
    'https://github.com/bougmaomar',
    // TODO: add LinkedIn profile URL
  ],
}))

const faqJsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [0, 1, 2, 3, 4].map(i => ({
    '@type': 'Question',
    name: t(`faq.items[${i}].q`),
    acceptedAnswer: { '@type': 'Answer', text: t(`faq.items[${i}].a`) },
  })),
}))

useHead(() => ({
  htmlAttrs: {
    lang: locale.value,
    dir: currentLocale.value?.dir ?? 'ltr',
  },
  title: t('seo.title'),
  link: [
    { rel: 'canonical', href: canonical.value },
    ...locales.value.map(l => ({
      rel: 'alternate',
      hreflang: l.language,
      href: siteUrl + pathFor(l.code),
    })),
    { rel: 'alternate', hreflang: 'x-default', href: siteUrl + '/' },
  ],
  meta: [
    { name: 'description', content: t('seo.description') },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Omar Bougma' },
    { property: 'og:title', content: t('seo.title') },
    { property: 'og:description', content: t('seo.description') },
    { property: 'og:url', content: canonical.value },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: t('seo.title') },
    { property: 'og:locale', content: ogLocale[locale.value] || 'en_US' },
    ...locales.value
      .filter(l => l.code !== locale.value)
      .map(l => ({ property: 'og:locale:alternate', content: ogLocale[l.code] })),
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('seo.title') },
    { name: 'twitter:description', content: t('seo.description') },
    { name: 'twitter:image', content: ogImage },
  ],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(jsonLd.value) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(faqJsonLd.value) },
  ],
}))
</script>

<template>
  <div>
    <AppNav />
    <main>
      <HeroSection />
      <ReframeSection />
      <LazyWorkSection id="work" hydrate-on-visible />
      <LazyProjectsSection id="projects" hydrate-on-visible />
      <LazyServicesSection id="services" hydrate-on-visible />
      <LazyProcessSection id="process" hydrate-on-visible />
      <LazyAboutSection id="about" hydrate-on-visible />
      <LazyFaqSection id="faq" hydrate-on-visible />
      <LazyContactSection id="contact" hydrate-on-visible />
    </main>
    <WhatsAppFab />
  </div>
</template>
