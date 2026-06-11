<script setup>
defineProps({ id: String })
const { t } = useI18n()

const icons = [
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
]

const items = computed(() =>
  [0, 1, 2, 3].map(i => ({
    title: t(`services.items[${i}].title`),
    desc: t(`services.items[${i}].desc`),
    icon: icons[i],
  }))
)

const tiers = computed(() =>
  [0, 1, 2].map(i => ({
    name: t(`services.tiers[${i}].name`),
    desc: t(`services.tiers[${i}].desc`),
    price: t(`services.tiers[${i}].price`),
  }))
)
</script>

<template>
  <section :id="id" class="services">
    <div class="wrap">
      <div class="services__layout">
        <div v-reveal class="services__intro">
          <p class="eyebrow services__eyebrow">{{ t('services.eyebrow') }}</p>
          <h2 class="services__heading serif">
            {{ t('services.heading1') }}<br>
            {{ t('services.heading2') }}
          </h2>
          <p class="services__sub">{{ t('services.sub') }}</p>
        </div>

        <div class="services__grid">
          <div
            v-for="(item, i) in items"
            :key="i"
            v-reveal
            :class="`reveal-d${i + 1}`"
            class="service-item"
          >
            <div class="service-item__icon" v-html="item.icon" aria-hidden="true"></div>
            <h3 class="service-item__title">{{ item.title }}</h3>
            <p class="service-item__desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>

      <div v-reveal class="tiers">
        <p class="eyebrow tiers__label">{{ t('services.tiersLabel') }}</p>
        <div class="tiers__grid">
          <div v-for="(tier, i) in tiers" :key="i" class="tier">
            <p class="tier__name serif">{{ tier.name }}</p>
            <p class="tier__price">{{ tier.price }}</p>
            <p class="tier__desc">{{ tier.desc }}</p>
          </div>
        </div>
        <p class="tiers__note">{{ t('services.tiersNote') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  background: var(--pine);
  color: var(--paper);
  padding: clamp(56px, 9vw, 88px) 0;
}
.services__layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: start;
}
.services__eyebrow { color: var(--honey-soft); }
.services__heading {
  font-size: clamp(1.7rem, 3.2vw, 2.2rem);
  font-weight: 400;
  line-height: 1.2;
  margin-top: 14px;
  color: var(--paper);
}
.services__sub {
  margin-top: 18px;
  font-size: 0.97rem;
  color: #9FB3AB;
  line-height: 1.7;
  max-width: 32ch;
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  overflow: hidden;
}
.service-item {
  background: var(--pine);
  padding: clamp(20px, 3vw, 28px);
  transition: background 0.2s var(--ease);
  cursor: pointer;
}
.service-item:hover { background: var(--pine-deep); }
.service-item__icon { color: var(--honey); margin-bottom: 14px; width: 24px; height: 24px; }
.service-item__icon :deep(svg) { width: 24px; height: 24px; }
.service-item__title { font-size: 0.95rem; font-weight: 600; color: var(--paper); margin-bottom: 8px; }
.service-item__desc { font-size: 0.88rem; color: #9FB3AB; line-height: 1.65; }

/* ─── Monthly care plans ─── */
.tiers {
  margin-top: clamp(32px, 5vw, 48px);
  padding-top: clamp(28px, 4vw, 40px);
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}
.tiers__label { color: var(--honey-soft); margin-bottom: 18px; }
.tiers__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.tier {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: clamp(18px, 2.5vw, 24px);
}
.tier__name { font-size: 1.05rem; font-weight: 600; color: var(--paper); }
.tier__price {
  margin-top: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--honey-soft);
}
.tier__desc {
  margin-top: 12px;
  font-size: 0.86rem;
  color: #9FB3AB;
  line-height: 1.6;
}
.tiers__note {
  margin-top: 16px;
  font-size: 0.78rem;
  font-style: italic;
  color: #7A9A90;
}

@media (max-width: 900px) {
  .services__layout { grid-template-columns: 1fr; }
  .services__sub { max-width: 52ch; }
}
@media (max-width: 640px) {
  .tiers__grid { grid-template-columns: 1fr; }
}
@media (max-width: 560px) {
  .services__grid { grid-template-columns: 1fr; }
}
</style>
