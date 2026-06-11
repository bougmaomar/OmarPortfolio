<script setup>
defineProps({ id: String })
const { t } = useI18n()

const highlights = computed(() =>
  [0, 1, 2].map(i => ({
    label: t(`work.highlights[${i}].label`),
    desc: t(`work.highlights[${i}].desc`),
    metric: t(`work.highlights[${i}].metric`),
  }))
)
const skills = computed(() =>
  [0, 1, 2, 3, 4, 5].map(i => t(`work.skills[${i}]`))
)
</script>

<template>
  <section :id="id" class="work">
    <div class="wrap">
      <div v-reveal class="work__head">
        <p class="eyebrow">{{ t('work.eyebrow') }}</p>
        <h2 class="work__title serif">{{ t('work.title') }}</h2>
      </div>

      <div class="work__body">
        <aside v-reveal class="exp-card">
          <p class="exp-card__duration serif">{{ t('work.duration') }}</p>
          <p class="exp-card__role">{{ t('work.role') }}</p>

          <div class="exp-card__skills">
            <p class="exp-card__skills-label eyebrow">{{ t('work.skillsLabel') }}</p>
            <ul class="exp-card__tags" role="list">
              <li v-for="(s, i) in skills" :key="i" class="exp-card__tag">{{ s }}</li>
            </ul>
          </div>
        </aside>

        <div class="exp-detail">
          <p v-reveal class="exp-detail__intro serif">{{ t('work.intro') }}</p>

          <ul class="exp-highlights" role="list">
            <li
              v-for="(h, i) in highlights"
              :key="i"
              v-reveal
              :class="`reveal-d${i + 1}`"
              class="exp-highlight"
            >
              <span class="exp-highlight__dot" aria-hidden="true"></span>
              <div>
                <h3 class="exp-highlight__label">{{ h.label }}</h3>
                <p class="exp-highlight__desc">{{ h.desc }}</p>
                <p class="exp-highlight__metric">{{ h.metric }}</p>
              </div>
            </li>
          </ul>

          <p v-reveal class="exp-detail__note">{{ t('work.note') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.work {
  padding: clamp(56px, 9vw, 88px) 0;
  border-bottom: 1px solid #DCE1D7;
}
.work__head { margin-bottom: clamp(36px, 6vw, 52px); }
.work__title {
  font-size: clamp(1.7rem, 3.5vw, 2.3rem);
  font-weight: 400;
  color: var(--pine);
  margin-top: 12px;
  line-height: 1.2;
  max-width: 20ch;
}

.work__body {
  display: grid;
  grid-template-columns: minmax(240px, 320px) 1fr;
  gap: clamp(28px, 5vw, 56px);
  align-items: start;
}

/* ─── Role card ─── */
.exp-card {
  background: var(--pine);
  color: var(--paper);
  border-radius: 16px;
  padding: clamp(28px, 4vw, 40px);
  position: sticky;
  top: 92px;
}
.exp-card__duration {
  font-size: clamp(2.4rem, 5vw, 3.2rem);
  font-weight: 500;
  line-height: 1;
  color: var(--honey-soft);
  letter-spacing: -0.01em;
}
[dir="rtl"] .exp-card__duration { font-weight: 700; }
.exp-card__role {
  margin-top: 16px;
  font-size: 1.02rem;
  font-weight: 600;
  color: var(--paper);
  line-height: 1.4;
}
.exp-card__skills {
  margin-top: 26px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}
.exp-card__skills-label { color: var(--honey-soft); margin-bottom: 14px; }
.exp-card__tags { display: flex; flex-wrap: wrap; gap: 8px; }
.exp-card__tag {
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--paper);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 6px 12px;
  border-radius: 20px;
  line-height: 1.3;
}

/* ─── Detail ─── */
.exp-detail__intro {
  font-size: clamp(1.15rem, 2.1vw, 1.42rem);
  font-weight: 400;
  font-style: italic;
  line-height: 1.55;
  color: var(--pine);
  max-width: 44ch;
}
[dir="rtl"] .exp-detail__intro { font-style: normal; font-weight: 600; }

.exp-highlights {
  margin-top: clamp(28px, 4vw, 40px);
  display: flex;
  flex-direction: column;
  gap: 22px;
}
.exp-highlight { display: flex; gap: 16px; align-items: flex-start; }
.exp-highlight__dot {
  flex-shrink: 0;
  width: 10px;
  height: 10px;
  margin-top: 7px;
  border-radius: 50%;
  background: var(--honey);
  box-shadow: 0 0 0 3px rgba(217, 138, 54, 0.2);
}
.exp-highlight__label {
  font-size: 1.02rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 5px;
}
.exp-highlight__desc {
  font-size: 0.95rem;
  color: var(--ink-soft);
  line-height: 1.65;
  max-width: 54ch;
}
.exp-highlight__metric {
  margin-top: 8px;
  display: inline-block;
  font-size: 0.8rem;
  font-style: italic;
  color: #8A968F;
  border: 1px dashed #c2cabd;
  border-radius: 6px;
  padding: 3px 10px;
}

.exp-detail__note {
  margin-top: clamp(28px, 4vw, 40px);
  padding: 18px 22px;
  border-left: 3px solid var(--honey);
  background: var(--paper-2);
  border-radius: 0 8px 8px 0;
  font-size: 0.96rem;
  color: var(--ink-soft);
  line-height: 1.65;
  max-width: 58ch;
}
[dir="rtl"] .exp-detail__note {
  border-left: none;
  border-right: 3px solid var(--honey);
  border-radius: 8px 0 0 8px;
}

@media (max-width: 820px) {
  .work__body { grid-template-columns: 1fr; }
  .exp-card { position: static; }
}
</style>
