<script setup>
const { t } = useI18n()
</script>

<template>
  <section class="hero" aria-label="Introduction">
    <svg class="hero__ripple" viewBox="0 0 200 200" aria-hidden="true">
      <circle class="r1" cx="100" cy="100" r="28"/>
      <circle class="r2" cx="100" cy="100" r="54"/>
      <circle class="r3" cx="100" cy="100" r="80"/>
      <circle class="r4" cx="100" cy="100" r="108"/>
      <circle cx="100" cy="100" r="6" fill="var(--honey)" stroke="none"/>
    </svg>

    <div class="hero__content wrap">
      <p class="eyebrow hero__eyebrow">{{ t('hero.eyebrow') }}</p>

      <h1 class="hero__heading serif">
        {{ t('hero.heading') }} <em>{{ t('hero.headingEm') }}</em>.
      </h1>

      <p class="hero__sub">{{ t('hero.sub') }}</p>

      <div class="hero__actions">
        <a href="#work" class="btn btn-primary">{{ t('hero.cta1') }}</a>
        <a href="#contact" class="btn btn-outline">{{ t('hero.cta2') }}</a>
      </div>
    </div>

    <div class="hero__scroll" aria-hidden="true">
      <span>Scroll</span>
      <div class="hero__scroll-line"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  background: var(--pine);
  color: var(--paper);
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: clamp(100px, 15vh, 140px);
  padding-bottom: clamp(64px, 10vh, 100px);
}

.hero__ripple {
  position: absolute;
  top: -28%;
  right: -14%;
  width: min(660px, 85%);
  aspect-ratio: 1;
  opacity: 0.42;
  pointer-events: none;
  will-change: transform;
  transform: translateZ(0);
}
.hero__ripple circle {
  fill: none;
  stroke: var(--honey-soft);
  stroke-width: 1.1;
  transform-origin: center;
  will-change: opacity;
}
.r1 { animation: ripple 7s ease-in-out infinite; }
.r2 { animation: ripple 7s ease-in-out 0.9s infinite; }
.r3 { animation: ripple 7s ease-in-out 1.8s infinite; }
.r4 { animation: ripple 7s ease-in-out 2.7s infinite; }

@keyframes ripple {
  0%, 100% { opacity: 0.15; }
  50%       { opacity: 0.55; }
}

.hero__content {
  position: relative;
  z-index: 2;
}

.hero__eyebrow {
  color: var(--honey-soft);
  animation: fade-up 0.8s var(--ease) both;
}

.hero__heading {
  font-size: clamp(2.1rem, 5.5vw, 3.6rem);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--paper);
  margin-top: clamp(24px, 4vw, 36px);
  max-width: 22ch;
  animation: fade-up 0.9s var(--ease) 0.12s both;
}
.hero__heading em {
  font-style: italic;
  color: var(--honey-soft);
}

.hero__sub {
  margin-top: clamp(18px, 3vw, 26px);
  max-width: 52ch;
  font-size: clamp(0.98rem, 1.6vw, 1.07rem);
  color: #CBD8D1;
  line-height: 1.7;
  animation: fade-up 0.9s var(--ease) 0.25s both;
}

.hero__actions {
  margin-top: clamp(28px, 5vw, 44px);
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  animation: fade-up 0.9s var(--ease) 0.38s both;
}

.hero__scroll {
  position: absolute;
  bottom: clamp(22px, 4vh, 38px);
  left: clamp(24px, 6vw, 72px);
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #7A9A90;
  animation: fade-up 0.9s var(--ease) 0.6s both;
  font-family: 'Inter', sans-serif;
}
.hero__scroll-line {
  width: 40px;
  height: 1px;
  background: currentColor;
  transform-origin: left;
  animation: line-in 1.1s var(--ease) 1.1s both;
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes line-in {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

@media (max-width: 560px) {
  .hero__scroll { display: none; }
}
@media (prefers-reduced-motion: reduce) {
  .r1, .r2, .r3, .r4 { animation: none; opacity: 0.28; }
  .hero__eyebrow, .hero__heading, .hero__sub,
  .hero__actions, .hero__scroll, .hero__scroll-line { animation: none; }
}
</style>
