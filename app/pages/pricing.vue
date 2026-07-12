<script setup>
const { locale, locales, t } = useI18n()
const localePath = useLocalePath()
const config = useRuntimeConfig()

const siteUrl = String(config.public.siteUrl || '').replace(/\/$/, '')
const ogImage = siteUrl + '/og-image.jpg'
const ogLocale = { en: 'en_US', fr: 'fr_FR', ar: 'ar_MA' }

const currentLocale = computed(() =>
  locales.value.find(l => l.code === locale.value)
)

const pathFor = (code) => (code === 'en' ? '/pricing' : `/${code}/pricing`)
const canonical = computed(() => siteUrl + pathFor(locale.value))

const homePath = computed(() => {
  const p = localePath('/')
  return p.endsWith('/') ? p : p + '/'
})

const builds = computed(() =>
  [0, 1, 2].map(i => ({
    name: t(`pricing.builds[${i}].name`),
    price: t(`pricing.builds[${i}].price`),
    // First two cards carry a launch discount; the custom card a price caveat.
    oldPrice: i < 2 ? t(`pricing.builds[${i}].oldPrice`) : '',
    priceNote: i === 2 ? t(`pricing.builds[${i}].priceNote`) : '',
    desc: t(`pricing.builds[${i}].desc`),
    features: [0, 1, 2, 3, 4].map(j => t(`pricing.builds[${i}].features[${j}]`)),
  }))
)

const plans = computed(() =>
  [0, 1, 2].map(i => ({
    name: t(`pricing.plans[${i}].name`),
    price: t(`pricing.plans[${i}].price`),
    period: t(`pricing.plans[${i}].period`),
    features: [0, 1, 2].map(j => t(`pricing.plans[${i}].features[${j}]`)),
  }))
)

const notes = computed(() => [0, 1, 2].map(i => t(`pricing.notes[${i}]`)))

useHead(() => ({
  htmlAttrs: {
    lang: locale.value,
    dir: currentLocale.value?.dir ?? 'ltr',
  },
  title: t('pricing.seoTitle'),
  link: [
    { rel: 'canonical', href: canonical.value },
    ...locales.value.map(l => ({
      rel: 'alternate',
      hreflang: l.language,
      href: siteUrl + pathFor(l.code),
    })),
    { rel: 'alternate', hreflang: 'x-default', href: siteUrl + '/pricing' },
  ],
  meta: [
    { name: 'description', content: t('pricing.seoDescription') },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Omar Bougma' },
    { property: 'og:title', content: t('pricing.seoTitle') },
    { property: 'og:description', content: t('pricing.seoDescription') },
    { property: 'og:url', content: canonical.value },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: t('pricing.seoTitle') },
    { property: 'og:locale', content: ogLocale[locale.value] || 'en_US' },
    ...locales.value
      .filter(l => l.code !== locale.value)
      .map(l => ({ property: 'og:locale:alternate', content: ogLocale[l.code] })),
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('pricing.seoTitle') },
    { name: 'twitter:description', content: t('pricing.seoDescription') },
    { name: 'twitter:image', content: ogImage },
  ],
}))
</script>

<template>
  <div>
    <AppNav />
    <main>
      <header class="p-hero">
        <div class="wrap">
          <p class="eyebrow p-hero__eyebrow">{{ t('pricing.eyebrow') }}</p>
          <h1 class="p-hero__title serif">{{ t('pricing.title') }}</h1>
          <p class="p-hero__sub">{{ t('pricing.sub') }}</p>
        </div>
      </header>

      <section class="p-builds">
        <div class="wrap">
          <p v-reveal class="eyebrow">{{ t('pricing.buildsLabel') }}</p>
          <div class="p-builds__grid">
            <article
              v-for="(b, i) in builds"
              :key="i"
              v-reveal
              :class="[`reveal-d${i + 1}`, i === 1 && 'p-card--featured']"
              class="p-card"
            >
              <span v-if="i === 1" class="p-card__badge">{{ t('pricing.popular') }}</span>
              <h2 class="p-card__name">{{ b.name }}</h2>
              <p class="p-card__price serif">
                <s v-if="b.oldPrice" class="p-card__old">{{ b.oldPrice }}</s>
                {{ b.price }}
              </p>
              <p v-if="b.priceNote" class="p-card__price-note">{{ b.priceNote }}</p>
              <p class="p-card__desc">{{ b.desc }}</p>
              <ul class="p-card__features" role="list">
                <li v-for="(f, j) in b.features" :key="j">{{ f }}</li>
              </ul>
            </article>
          </div>
          <p v-reveal class="p-builds__note">{{ t('pricing.customNote') }}</p>
        </div>
      </section>

      <section class="p-plans">
        <div class="wrap">
          <p v-reveal class="eyebrow p-plans__eyebrow">{{ t('pricing.plansLabel') }}</p>
          <p v-reveal class="p-plans__sub">{{ t('pricing.plansSub') }}</p>
          <div class="p-plans__grid">
            <article
              v-for="(p, i) in plans"
              :key="i"
              v-reveal
              :class="[`reveal-d${i + 1}`, i === 1 && 'p-plan--featured']"
              class="p-plan"
            >
              <h2 class="p-plan__name">{{ p.name }}</h2>
              <p class="p-plan__price serif">
                {{ p.price }} <span class="p-plan__period">{{ p.period }}</span>
              </p>
              <ul class="p-plan__features" role="list">
                <li v-for="(f, j) in p.features" :key="j">{{ f }}</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section class="p-notes">
        <div class="wrap">
          <div class="p-notes__layout">
            <div v-reveal>
              <p class="eyebrow">{{ t('pricing.notesLabel') }}</p>
              <ul class="p-notes__list" role="list">
                <li v-for="(n, i) in notes" :key="i">{{ n }}</li>
              </ul>
            </div>
            <div v-reveal class="p-cta reveal-d2">
              <h2 class="p-cta__title serif">{{ t('pricing.ctaTitle') }}</h2>
              <p class="p-cta__sub">{{ t('pricing.ctaSub') }}</p>
              <a :href="`${homePath}#contact`" class="btn btn-primary">{{ t('pricing.cta') }}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <WhatsAppFab />
  </div>
</template>

<style scoped>
/* ─── Header (dark, so the fixed nav stays readable) ─── */
.p-hero {
  background: var(--pine-deep);
  padding: calc(68px + clamp(48px, 8vw, 80px)) 0 clamp(48px, 8vw, 72px);
}
.p-hero__eyebrow { color: var(--honey-soft); }
.p-hero__title {
  font-size: clamp(2rem, 4.5vw, 3rem);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--paper);
  margin-top: 14px;
  max-width: 22ch;
}
.p-hero__sub {
  margin-top: 16px;
  max-width: 52ch;
  font-size: clamp(0.98rem, 1.6vw, 1.07rem);
  color: #CBD8D1;
  line-height: 1.7;
}

/* ─── One-time projects ─── */
.p-builds {
  padding: clamp(56px, 9vw, 88px) 0;
  border-bottom: 1px solid #DCE1D7;
}
.p-builds__grid {
  margin-top: clamp(24px, 4vw, 36px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(16px, 2.5vw, 24px);
}
.p-card {
  position: relative;
  background: #fff;
  border: 1px solid #DCE1D7;
  border-radius: 14px;
  padding: clamp(24px, 3vw, 32px);
  display: flex;
  flex-direction: column;
}
.p-card--featured { border-color: var(--honey); }
.p-card__badge {
  position: absolute;
  top: -12px;
  inset-inline-start: clamp(24px, 3vw, 32px);
  background: var(--honey);
  color: #fff;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 20px;
  line-height: 1.3;
}
.p-card__name {
  font-size: 1.02rem;
  font-weight: 600;
  color: var(--ink);
}
.p-card__price {
  margin-top: 10px;
  font-size: clamp(1.5rem, 2.5vw, 1.9rem);
  font-weight: 500;
  color: var(--honey);
  line-height: 1.1;
}
.p-card__old {
  font-size: 0.62em;
  color: #9AA69E;
  text-decoration-color: #9AA69E;
  margin-inline-end: 4px;
}
.p-card__price-note {
  margin-top: 8px;
  font-size: 0.8rem;
  color: var(--sage);
  line-height: 1.5;
}
.p-card__desc {
  margin-top: 12px;
  font-size: 0.93rem;
  color: var(--ink-soft);
  line-height: 1.65;
}
.p-card__features {
  margin-top: 18px;
  padding-top: 16px;
  border-top: 1px solid #E7EBE2;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.p-card__features li {
  display: flex;
  align-items: baseline;
  gap: 10px;
  font-size: 0.9rem;
  color: var(--ink-soft);
  line-height: 1.5;
}
.p-card__features li::before {
  content: '✓';
  flex-shrink: 0;
  color: var(--honey);
  font-weight: 700;
  font-size: 0.85rem;
}
.p-builds__note {
  margin-top: clamp(24px, 4vw, 32px);
  padding: 18px 22px;
  border-left: 3px solid var(--honey);
  background: var(--paper-2);
  border-radius: 0 8px 8px 0;
  font-size: 0.96rem;
  color: var(--ink-soft);
  line-height: 1.65;
  max-width: 62ch;
}
[dir="rtl"] .p-builds__note {
  border-left: none;
  border-right: 3px solid var(--honey);
  border-radius: 8px 0 0 8px;
}

/* ─── Monthly plans ─── */
.p-plans {
  background: var(--pine);
  color: var(--paper);
  padding: clamp(56px, 9vw, 88px) 0;
}
.p-plans__eyebrow { color: var(--honey-soft); }
.p-plans__sub {
  margin-top: 12px;
  max-width: 52ch;
  font-size: 0.98rem;
  color: #CBD8D1;
  line-height: 1.7;
}
.p-plans__grid {
  margin-top: clamp(28px, 4vw, 40px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(16px, 2.5vw, 24px);
}
.p-plan {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  padding: clamp(24px, 3vw, 32px);
}
.p-plan--featured { border-color: var(--honey); }
.p-plan__name {
  font-size: 0.98rem;
  font-weight: 600;
  color: var(--paper);
}
.p-plan__price {
  margin-top: 10px;
  font-size: clamp(1.6rem, 2.6vw, 2rem);
  font-weight: 500;
  color: var(--honey-soft);
  line-height: 1.1;
}
.p-plan__period {
  font-size: 0.85rem;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  color: rgba(238, 240, 234, 0.6);
}
[dir="rtl"] .p-plan__period { font-family: 'Cairo', sans-serif; }
.p-plan__features {
  margin-top: 18px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.p-plan__features li {
  display: flex;
  align-items: baseline;
  gap: 10px;
  font-size: 0.9rem;
  color: rgba(238, 240, 234, 0.85);
  line-height: 1.5;
}
.p-plan__features li::before {
  content: '✓';
  flex-shrink: 0;
  color: var(--honey-soft);
  font-weight: 700;
  font-size: 0.85rem;
}

/* ─── Notes + CTA ─── */
.p-notes {
  background: var(--paper-2);
  padding: clamp(56px, 9vw, 88px) 0;
}
.p-notes__layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(32px, 6vw, 72px);
  align-items: start;
}
.p-notes__list {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.p-notes__list li {
  display: flex;
  align-items: baseline;
  gap: 12px;
  font-size: 0.96rem;
  color: var(--ink-soft);
  line-height: 1.65;
  max-width: 48ch;
}
.p-notes__list li::before {
  content: '';
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--honey);
  transform: translateY(-1px);
}
.p-cta__title {
  font-size: clamp(1.5rem, 2.8vw, 1.9rem);
  font-weight: 400;
  color: var(--pine);
  line-height: 1.25;
}
.p-cta__sub {
  margin-top: 12px;
  font-size: 0.96rem;
  color: var(--ink-soft);
  line-height: 1.65;
  max-width: 44ch;
}
.p-cta .btn { margin-top: 22px; }

@media (max-width: 860px) {
  .p-builds__grid { grid-template-columns: 1fr; }
  .p-plans__grid { grid-template-columns: 1fr; }
  .p-notes__layout { grid-template-columns: 1fr; }
}
</style>
