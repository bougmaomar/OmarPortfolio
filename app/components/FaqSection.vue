<script setup>
defineProps({ id: String })
const { t } = useI18n()

const items = computed(() =>
  [0, 1, 2, 3, 4].map(i => ({
    q: t(`faq.items[${i}].q`),
    a: t(`faq.items[${i}].a`),
  }))
)
</script>

<template>
  <section :id="id" class="faq">
    <div class="wrap">
      <div class="faq__layout">
        <div v-reveal class="faq__head">
          <p class="eyebrow">{{ t('faq.eyebrow') }}</p>
          <h2 class="faq__title serif">{{ t('faq.title') }}</h2>
        </div>

        <div class="faq__list">
          <details
            v-for="(f, i) in items"
            :key="i"
            v-reveal
            :class="`reveal-d${i + 1}`"
            class="faq__item"
          >
            <summary class="faq__q">
              <span>{{ f.q }}</span>
              <span class="faq__icon" aria-hidden="true"></span>
            </summary>
            <p class="faq__a">{{ f.a }}</p>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  padding: clamp(56px, 9vw, 88px) 0;
  background: var(--paper-2);
  border-bottom: 1px solid #D4DAD0;
}
.faq__layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: clamp(32px, 6vw, 72px);
  align-items: start;
}
.faq__title {
  font-size: clamp(1.7rem, 3.2vw, 2.2rem);
  font-weight: 400;
  color: var(--pine);
  margin-top: 12px;
  line-height: 1.2;
}
.faq__list { display: flex; flex-direction: column; }
.faq__item {
  border-top: 1px solid #D4DAD0;
  padding: 6px 0;
}
.faq__item:last-child { border-bottom: 1px solid #D4DAD0; }
.faq__q {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 0;
  cursor: pointer;
  font-family: 'Fraunces', serif;
  font-size: 1.08rem;
  font-weight: 500;
  color: var(--ink);
  list-style: none;
}
[dir="rtl"] .faq__q { font-family: 'Cairo', sans-serif; font-weight: 600; }
.faq__q::-webkit-details-marker { display: none; }
.faq__icon {
  position: relative;
  flex-shrink: 0;
  width: 14px;
  height: 14px;
}
.faq__icon::before,
.faq__icon::after {
  content: '';
  position: absolute;
  background: var(--honey);
  transition: transform 0.25s var(--ease);
}
.faq__icon::before { top: 6px; left: 0; width: 14px; height: 2px; }
.faq__icon::after { top: 0; left: 6px; width: 2px; height: 14px; }
.faq__item[open] .faq__icon::after { transform: scaleY(0); }
.faq__a {
  padding: 0 0 18px;
  font-size: 0.96rem;
  color: var(--ink-soft);
  line-height: 1.7;
  max-width: 60ch;
}

@media (max-width: 760px) {
  .faq__layout { grid-template-columns: 1fr; gap: 24px; }
}
</style>
