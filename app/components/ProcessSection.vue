<script setup>
defineProps({ id: String })
const { t } = useI18n()
const principles = computed(() =>
  [0, 1, 2, 3, 4].map(i => t(`process.principles[${i}]`))
)
</script>

<template>
  <section :id="id" class="process">
    <div class="wrap">
      <div class="process__layout">
        <div v-reveal class="process__intro">
          <p class="eyebrow">{{ t('process.eyebrow') }}</p>
          <h2 class="process__heading serif">
            {{ t('process.heading1') }}<br>
            {{ t('process.heading2') }}
          </h2>
        </div>

        <div class="process__content">
          <ul class="principles" role="list">
            <li
              v-for="(p, i) in principles"
              :key="i"
              v-reveal
              :class="`reveal-d${i + 1}`"
              class="principles__item"
            >
              <span class="principles__dot" aria-hidden="true"></span>
              <span>{{ p }}</span>
            </li>
          </ul>

          <div v-reveal class="reveal-d6 audit" v-html="t('process.audit')"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process {
  background: var(--paper-2);
  padding: clamp(56px, 9vw, 88px) 0;
  border-top: 1px solid #D4DAD0;
  border-bottom: 1px solid #D4DAD0;
}
.process__layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: start;
}
.process__heading {
  font-size: clamp(1.6rem, 3vw, 2.1rem);
  font-weight: 400;
  line-height: 1.2;
  color: var(--pine);
  margin-top: 14px;
}
.principles { display: flex; flex-direction: column; gap: 14px; }
.principles__item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  font-size: 1rem;
  color: var(--ink);
  line-height: 1.55;
}
.principles__dot {
  flex-shrink: 0;
  width: 9px;
  height: 9px;
  margin-top: 8px;
  border-radius: 50%;
  background: var(--honey);
  box-shadow: 0 0 0 3px rgba(217, 138, 54, 0.2);
}
.audit {
  margin-top: 28px;
  padding: 18px 22px;
  border-left: 3px solid var(--honey);
  background: var(--paper);
  border-radius: 0 8px 8px 0;
  font-size: 0.96rem;
  color: var(--ink-soft);
  line-height: 1.65;
}
.audit :deep(strong) { color: var(--ink); font-weight: 600; }

@media (max-width: 768px) {
  .process__layout { grid-template-columns: 1fr; }
}
</style>
