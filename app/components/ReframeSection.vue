<script setup>
const { t } = useI18n()
const points = computed(() => [
  t('reframe.point1'),
  t('reframe.point2'),
  t('reframe.point3'),
])
</script>

<template>
  <div class="reframe">
    <div class="wrap">
      <ul class="trust" role="list">
        <li
          v-for="(p, i) in points"
          :key="i"
          v-reveal
          :class="`reveal-d${i + 1}`"
          class="trust__item"
        >
          <svg
            class="trust__check"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          <span>{{ p }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.reframe {
  background: var(--paper-2);
  border-bottom: 1px solid #D4DAD0;
  padding: clamp(22px, 4vw, 30px) 0;
}
.trust {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(14px, 3.5vw, 40px);
  align-items: center;
}
.trust__item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
  font-weight: 500;
  color: var(--pine);
}
.trust__check {
  color: var(--honey);
  flex-shrink: 0;
}
</style>
