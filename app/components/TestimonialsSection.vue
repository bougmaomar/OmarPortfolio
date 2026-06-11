<script setup>
defineProps({ id: String })
const { t } = useI18n()
</script>

<template>
  <section :id="id" class="tm">
    <div class="wrap">
      <p v-reveal class="eyebrow tm__eyebrow">{{ t('testimonials.eyebrow') }}</p>
      <h2 v-reveal class="reveal-d1 tm__title serif">{{ t('testimonials.title') }}</h2>

      <div v-reveal class="reveal-d2 tm__placeholder">
        <span class="tm__quote serif" aria-hidden="true">&ldquo;</span>
        <p class="tm__soon">{{ t('testimonials.comingSoon') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tm {
  padding: clamp(56px, 9vw, 88px) 0;
  border-bottom: 1px solid #DCE1D7;
  background: var(--paper);
}
.tm__eyebrow { color: var(--honey); }
.tm__title {
  font-size: clamp(1.7rem, 3.2vw, 2.2rem);
  font-weight: 400;
  color: var(--pine);
  margin-top: 12px;
  margin-bottom: clamp(24px, 4vw, 36px);
  line-height: 1.2;
}
.tm__placeholder {
  position: relative;
  border: 1.5px dashed #b9c2b5;
  border-radius: 12px;
  background: var(--paper-2);
  padding: clamp(28px, 5vw, 44px);
  max-width: 56ch;
  overflow: hidden;
}
.tm__quote {
  position: absolute;
  top: -8px;
  left: 14px;
  font-size: 5rem;
  color: rgba(217, 138, 54, 0.22);
  line-height: 1;
}
[dir="rtl"] .tm__quote { left: auto; right: 14px; }
.tm__soon {
  position: relative;
  color: var(--ink-soft);
  font-size: 1.02rem;
  line-height: 1.6;
}
</style>
