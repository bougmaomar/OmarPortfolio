<script setup>
const { locale, locales, t } = useI18n()
const localePath = useLocalePath()
const config = useRuntimeConfig()

const WHATSAPP = '212629071889'
const siteUrl = String(config.public.siteUrl || '').replace(/\/$/, '')
const ogImage = siteUrl + '/og-image.jpg'
const ogLocale = { en: 'en_US', fr: 'fr_FR', ar: 'ar_MA' }

const currentLocale = computed(() =>
  locales.value.find(l => l.code === locale.value)
)

const pathFor = (code) => (code === 'fr' ? '/pricing' : `/${code}/pricing`)
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

const payment = computed(() =>
  [0, 1, 2, 3].map(i => ({
    title: t(`pricing.payment.items[${i}].title`),
    desc: t(`pricing.payment.items[${i}].desc`),
  }))
)

const domainItems = computed(() =>
  [0, 1].map(i => ({
    title: t(`pricing.domain.items[${i}].title`),
    desc: t(`pricing.domain.items[${i}].desc`),
  }))
)

const plans = computed(() =>
  [0, 1, 2].map(i => ({
    name: t(`pricing.plans[${i}].name`),
    price: t(`pricing.plans[${i}].price`),
    period: t(`pricing.plans[${i}].period`),
    features: [0, 1, 2, 3].map(j => t(`pricing.plans[${i}].features[${j}]`)),
  }))
)

const updates = computed(() =>
  [0, 1].map(i => ({
    name: t(`pricing.updates.items[${i}].name`),
    desc: t(`pricing.updates.items[${i}].desc`),
    price: t(`pricing.updates.items[${i}].price`),
    // Only the content update carries a turnaround promise.
    time: i === 0 ? t(`pricing.updates.items[${i}].time`) : '',
  }))
)

const seoFeatures = computed(() =>
  [0, 1, 2, 3].map(i => t(`pricing.seo.ongoing.features[${i}]`))
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
    { property: 'og:locale', content: ogLocale[locale.value] || 'fr_FR' },
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

      <nav class="p-subnav" aria-label="Jump to pricing section">
        <div class="wrap p-subnav__inner">
          <div class="p-subnav__links">
            <a href="#builds">{{ t('pricing.jump.builds') }}</a>
            <a href="#payment">{{ t('pricing.jump.payment') }}</a>
            <a href="#plans">{{ t('pricing.jump.plans') }}</a>
            <a href="#updates">{{ t('pricing.jump.updates') }}</a>
            <a href="#seo">{{ t('pricing.jump.seo') }}</a>
          </div>
          <a :href="`${homePath}#contact`" class="p-subnav__cta">{{ t('pricing.jump.cta') }}</a>
        </div>
      </nav>

      <section class="p-consult">
        <div class="wrap">
          <div v-reveal class="p-consult__card">
            <div>
              <span class="p-consult__tag">{{ t('pricing.consult.tag') }}</span>
              <h2 class="p-consult__title serif">{{ t('pricing.consult.title') }}</h2>
              <p class="p-consult__desc">{{ t('pricing.consult.desc') }}</p>
            </div>
            <div class="p-consult__side">
              <p class="p-consult__price serif">{{ t('pricing.consult.price') }}</p>
              <p class="p-consult__duration">{{ t('pricing.consult.duration') }}</p>
              <a :href="`${homePath}#contact`" class="btn btn-pine">{{ t('pricing.consult.cta') }}</a>
            </div>
          </div>
        </div>
      </section>

      <section id="builds" class="p-builds">
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

      <section id="payment" class="p-pay">
        <div class="wrap">
          <p v-reveal class="eyebrow">{{ t('pricing.payment.label') }}</p>
          <div class="p-pay__grid">
            <article
              v-for="(item, i) in payment"
              :key="i"
              v-reveal
              :class="`reveal-d${i + 1}`"
              class="p-pay__card"
            >
              <h2 class="p-pay__title">{{ item.title }}</h2>
              <p class="p-pay__desc">{{ item.desc }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="p-domain">
        <div class="wrap">
          <p v-reveal class="eyebrow">{{ t('pricing.domain.label') }}</p>
          <div class="p-domain__grid">
            <article
              v-for="(item, i) in domainItems"
              :key="i"
              v-reveal
              :class="`reveal-d${i + 1}`"
              class="p-domain__card"
            >
              <h2 class="p-domain__title">{{ item.title }}</h2>
              <p class="p-domain__desc">{{ item.desc }}</p>
            </article>
          </div>
          <p v-reveal class="p-strip p-domain__note">{{ t('pricing.domain.note') }}</p>
        </div>
      </section>

      <section id="plans" class="p-plans">
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
              <span v-if="i === 1" class="p-plan__badge">{{ t('pricing.popular') }}</span>
              <h2 class="p-plan__name">{{ p.name }}</h2>
              <p class="p-plan__price serif">
                {{ p.price }} <span class="p-plan__period">{{ p.period }}</span>
              </p>
              <ul class="p-plan__features" role="list">
                <li v-for="(f, j) in p.features" :key="j">{{ f }}</li>
              </ul>
            </article>
          </div>
          <p v-reveal class="p-plans__note">{{ t('pricing.plansNote') }}</p>
        </div>
      </section>

      <section id="updates" class="p-updates">
        <div class="wrap">
          <p v-reveal class="eyebrow">{{ t('pricing.updates.label') }}</p>
          <p v-reveal class="p-updates__sub">{{ t('pricing.updates.sub') }}</p>
          <ul class="p-updates__list" role="list">
            <li
              v-for="(u, i) in updates"
              :key="i"
              v-reveal
              :class="`reveal-d${i + 1}`"
              class="p-updates__row"
            >
              <div>
                <h2 class="p-updates__name">{{ u.name }}</h2>
                <p class="p-updates__desc">{{ u.desc }}</p>
              </div>
              <div class="p-updates__side">
                <p class="p-updates__price serif">{{ u.price }}</p>
                <p v-if="u.time" class="p-updates__time">{{ u.time }}</p>
              </div>
            </li>
          </ul>
          <p v-reveal class="p-strip">
            {{ t('pricing.updates.note') }}
            <a
              :href="`https://wa.me/${WHATSAPP}`"
              target="_blank"
              rel="noopener"
              class="p-strip__link"
            >{{ t('pricing.updates.noteCta') }}</a>
          </p>
        </div>
      </section>

      <section id="seo" class="p-seo">
        <div class="wrap">
          <p v-reveal class="eyebrow">{{ t('pricing.seo.label') }}</p>
          <div class="p-seo__layout">
            <div v-reveal>
              <h2 class="p-seo__launch-title serif">{{ t('pricing.seo.launchTitle') }}</h2>
              <p class="p-seo__launch-desc">{{ t('pricing.seo.launchDesc') }}</p>
              <p class="p-strip">{{ t('pricing.seo.limit') }}</p>
            </div>
            <article v-reveal class="p-card p-seo__card reveal-d2">
              <h2 class="p-card__name">{{ t('pricing.seo.ongoing.name') }}</h2>
              <p class="p-card__price serif">
                {{ t('pricing.seo.ongoing.price') }}
                <span class="p-card__period">{{ t('pricing.seo.ongoing.period') }}</span>
              </p>
              <ul class="p-card__features" role="list">
                <li v-for="(f, i) in seoFeatures" :key="i">{{ f }}</li>
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
  color: var(--paper-dim);
  line-height: 1.7;
}

/* ─── Sticky in-page wayfinding (sits under the fixed main nav) ─── */
.p-subnav {
  position: sticky;
  top: 68px;
  z-index: 90;
  background: rgba(238, 240, 234, 0.97);
  border-bottom: 1px solid #DCE1D7;
}
.p-subnav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 52px;
}
.p-subnav__links {
  display: flex;
  align-items: center;
  gap: clamp(14px, 2.5vw, 26px);
  overflow-x: auto;
  scrollbar-width: none;
}
.p-subnav__links::-webkit-scrollbar { display: none; }
.p-subnav__links a {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--ink-soft);
  white-space: nowrap;
  transition: color 0.2s var(--ease);
}
.p-subnav__links a:hover { color: var(--pine); }
.p-subnav__cta {
  flex-shrink: 0;
  background: var(--honey);
  color: #fff;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 6px;
  white-space: nowrap;
  transition: background 0.2s var(--ease);
}
.p-subnav__cta:hover { background: var(--honey-soft); }

/* Anchor targets clear the fixed nav (68px) + sticky sub-nav (52px). */
#builds, #payment, #plans, #updates, #seo { scroll-margin-top: 128px; }

/* ─── Free consultation ─── */
.p-consult { padding-top: clamp(40px, 6vw, 56px); }
.p-consult__card {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: clamp(24px, 4vw, 56px);
  align-items: center;
  background: #fff;
  border: 1px solid var(--honey);
  border-radius: 14px;
  padding: clamp(24px, 4vw, 40px);
}
.p-consult__tag {
  display: inline-block;
  background: transparent;
  color: var(--honey);
  border: 1px solid var(--honey);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 11px;
  border-radius: 20px;
  line-height: 1.3;
}
.p-consult__title {
  margin-top: 14px;
  font-size: clamp(1.3rem, 2.4vw, 1.7rem);
  font-weight: 400;
  color: var(--pine);
  line-height: 1.3;
  max-width: 32ch;
}
.p-consult__desc {
  margin-top: 10px;
  font-size: 0.95rem;
  color: var(--ink-soft);
  line-height: 1.65;
  max-width: 58ch;
}
.p-consult__side {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.p-consult__price {
  font-size: clamp(2rem, 4vw, 2.6rem);
  font-weight: 500;
  color: var(--honey);
  line-height: 1;
}
.p-consult__duration {
  margin-top: 6px;
  font-size: 0.85rem;
  color: var(--sage);
}
.p-consult__side .btn { margin-top: 16px; }

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
  color: var(--pine);
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
  color: var(--sage);
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

/* ─── Shared note strip ─── */
.p-strip {
  margin-top: clamp(24px, 4vw, 32px);
  padding: 18px 22px;
  border-inline-start: 3px solid var(--honey);
  background: var(--paper-2);
  border-radius: 8px;
  font-size: 0.96rem;
  color: var(--ink-soft);
  line-height: 1.65;
  max-width: 62ch;
}
.p-strip__link {
  color: var(--pine);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* ─── How payment works ─── */
.p-pay { padding: clamp(56px, 9vw, 88px) 0; }
.p-pay__grid {
  margin-top: clamp(24px, 4vw, 36px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(16px, 2.5vw, 24px);
}
/* Flat tinted tiles — informational, visually distinct from the white
   bordered pricing/plan cards so the three grids don't blur together. */
.p-pay__card {
  background: var(--paper-2);
  border-radius: 14px;
  padding: clamp(20px, 2.5vw, 26px);
}
.p-pay__title {
  font-size: 0.98rem;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.4;
}
.p-pay__desc {
  margin-top: 8px;
  font-size: 0.9rem;
  color: var(--ink-soft);
  line-height: 1.6;
}

/* ─── Domain & hosting ─── */
.p-domain {
  background: var(--paper-2);
  padding: clamp(56px, 9vw, 88px) 0;
}
.p-domain__grid {
  margin-top: clamp(24px, 4vw, 36px);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(16px, 2.5vw, 24px);
}
.p-domain__card {
  background: #fff;
  border: 1px solid #DCE1D7;
  border-radius: 14px;
  padding: clamp(24px, 3vw, 32px);
}
.p-domain__title {
  font-size: 1.02rem;
  font-weight: 600;
  color: var(--ink);
}
.p-domain__desc {
  margin-top: 10px;
  font-size: 0.93rem;
  color: var(--ink-soft);
  line-height: 1.65;
}
.p-domain__note { background: #fff; }

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
  color: var(--paper-dim);
  line-height: 1.7;
}
.p-plans__grid {
  margin-top: clamp(28px, 4vw, 40px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(16px, 2.5vw, 24px);
}
.p-plan {
  position: relative;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  padding: clamp(24px, 3vw, 32px);
}
.p-plan--featured { border-color: var(--honey); }
.p-plan__badge {
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
.p-plan__name {
  font-size: 0.98rem;
  font-weight: 600;
  color: var(--paper);
}
.p-plan__price {
  margin-top: 10px;
  font-size: clamp(1.6rem, 2.6vw, 2rem);
  font-weight: 500;
  color: var(--paper);
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
  color: rgba(238, 240, 234, 0.6);
  font-weight: 700;
  font-size: 0.85rem;
}
.p-plans__note {
  margin-top: clamp(24px, 4vw, 32px);
  padding: 16px 20px;
  border-inline-start: 3px solid var(--honey-soft);
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  font-size: 0.94rem;
  color: var(--paper-dim);
  line-height: 1.6;
  max-width: 62ch;
}

/* ─── Content updates ─── */
.p-updates {
  padding: clamp(56px, 9vw, 88px) 0;
  border-bottom: 1px solid #DCE1D7;
}
.p-updates__sub {
  margin-top: 12px;
  max-width: 52ch;
  font-size: 0.98rem;
  color: var(--ink-soft);
  line-height: 1.7;
}
.p-updates__list {
  margin-top: clamp(20px, 3vw, 28px);
  border-top: 1px solid #DCE1D7;
}
.p-updates__row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px 24px;
  align-items: center;
  padding: 20px 4px;
  border-bottom: 1px solid #DCE1D7;
}
.p-updates__name {
  font-size: 1rem;
  font-weight: 600;
  color: var(--ink);
}
.p-updates__desc {
  margin-top: 6px;
  font-size: 0.9rem;
  color: var(--ink-soft);
  line-height: 1.55;
}
.p-updates__side { text-align: end; }
.p-updates__price {
  font-size: clamp(1.2rem, 2vw, 1.45rem);
  font-weight: 500;
  color: var(--pine);
  line-height: 1.1;
}
.p-updates__time {
  margin-top: 4px;
  font-size: 0.8rem;
  color: var(--sage);
}

/* ─── SEO ─── */
.p-seo { padding: clamp(56px, 9vw, 88px) 0; }
.p-seo__layout {
  margin-top: clamp(24px, 4vw, 36px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(32px, 6vw, 72px);
  align-items: start;
}
.p-seo__launch-title {
  font-size: clamp(1.3rem, 2.4vw, 1.6rem);
  font-weight: 400;
  color: var(--pine);
  line-height: 1.3;
}
.p-seo__launch-desc {
  margin-top: 12px;
  font-size: 0.96rem;
  color: var(--ink-soft);
  line-height: 1.7;
  max-width: 52ch;
}
.p-card__period {
  font-size: 0.85rem;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  color: var(--sage);
}
[dir="rtl"] .p-card__period { font-family: 'Cairo', sans-serif; }

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
  background: var(--sage);
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

@media (max-width: 1100px) {
  .p-pay__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 860px) {
  .p-consult__card { grid-template-columns: 1fr; }
  .p-builds__grid { grid-template-columns: 1fr; }
  .p-pay__grid { grid-template-columns: 1fr; }
  .p-domain__grid { grid-template-columns: 1fr; }
  .p-plans__grid { grid-template-columns: 1fr; }
  .p-seo__layout { grid-template-columns: 1fr; }
  .p-notes__layout { grid-template-columns: 1fr; }
}
</style>
