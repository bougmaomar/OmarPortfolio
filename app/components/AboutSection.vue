<script setup>
defineProps({ id: String })
const { t } = useI18n()
</script>

<template>
  <section :id="id" class="about">
    <div class="wrap">
      <div class="about__inner">
        <p v-reveal class="eyebrow about__eyebrow">{{ t('about.eyebrow') }}</p>
        <h2 v-reveal class="reveal-d1 about__heading serif">{{ t('about.heading') }}</h2>
        <p v-reveal class="reveal-d2 about__body">{{ t('about.body') }}</p>
        <p v-reveal class="reveal-d3 about__sign serif">{{ t('about.signature') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: clamp(56px, 9vw, 88px) 0;
  border-bottom: 1px solid #DCE1D7;
  background: var(--paper);
}
.about__inner { max-width: 60ch; }
.about__eyebrow { margin-bottom: 18px; color: var(--honey); }
.about__heading {
  font-size: clamp(1.6rem, 3.2vw, 2.2rem);
  font-weight: 400;
  color: var(--pine);
  line-height: 1.2;
  margin-bottom: 20px;
}
.about__body {
  font-size: clamp(1.05rem, 1.8vw, 1.2rem);
  color: var(--ink-soft);
  line-height: 1.75;
}
.about__sign {
  margin-top: 22px;
  font-style: italic;
  font-size: 1.1rem;
  color: var(--pine);
}
[dir="rtl"] .about__sign { font-style: normal; font-weight: 600; }
</style>
