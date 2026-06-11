<script setup>
defineProps({ id: String })
const { t } = useI18n()

const items = computed(() =>
  [0, 1, 2, 3].map(i => ({
    name: t(`projects.items[${i}].name`),
    tag: t(`projects.items[${i}].tag`),
    problem: t(`projects.items[${i}].problem`),
    built: t(`projects.items[${i}].built`),
    tech: t(`projects.items[${i}].tech`),
    outcome: t(`projects.items[${i}].outcome`),
    note: t(`projects.items[${i}].note`),
  }))
)

// Real screenshots — drop the files into public/projects/ with these names.
const images = [
  '/projects/bluesky.jpeg',
  '/projects/meinledger.jpeg',
  '/projects/fintbib.jpeg',
  '/projects/artist.jpeg',
]
const failed = reactive({})

// Live URLs — index matches `images` above (0 Bluesky, 1 MeinLedger, 2 Fintbib,
// 3 Artist). Empty string = no link shown on that card.
const links = ['', 'https://meinledger.com', '', 'https://abdellahbougma.com']
</script>

<template>
  <section :id="id" class="projects">
    <div class="wrap">
      <div v-reveal class="projects__head">
        <p class="eyebrow">{{ t('projects.eyebrow') }}</p>
        <h2 class="projects__title serif">{{ t('projects.title') }}</h2>
        <p class="projects__intro">{{ t('projects.intro') }}</p>
      </div>

      <div class="cases">
        <article
          v-for="(p, i) in items"
          :key="i"
          v-reveal
          class="case"
        >
          <div class="case__media">
            <img
              v-if="!failed[i]"
              :src="images[i]"
              :alt="p.name"
              class="case__img"
              loading="lazy"
              @error="failed[i] = true"
            />
            <div v-else class="placeholder-img case__ph">{{ t('projects.imagePlaceholder') }}</div>
          </div>

          <div class="case__body">
            <p class="eyebrow case__tag">{{ p.tag }}</p>
            <h3 class="case__name serif">{{ p.name }}</h3>
            <p class="case__problem">{{ p.problem }}</p>
            <p class="case__line">{{ p.built }}</p>
            <p class="case__line case__tech">{{ p.tech }}</p>
            <p class="case__outcome">{{ p.outcome }}</p>
            <p v-if="p.note" class="case__note">{{ p.note }}</p>
            <a
              v-if="links[i]"
              :href="links[i]"
              target="_blank"
              rel="noopener"
              class="case__link"
              @click.stop
            >{{ t('projects.visit') }}</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: clamp(56px, 9vw, 88px) 0;
  border-bottom: 1px solid #DCE1D7;
  background: var(--paper);
}
.projects__head { margin-bottom: clamp(36px, 6vw, 52px); max-width: 56ch; }
.projects__title {
  font-size: clamp(1.7rem, 3.5vw, 2.3rem);
  font-weight: 400;
  color: var(--pine);
  margin-top: 12px;
  line-height: 1.2;
}
.projects__intro {
  margin-top: 14px;
  color: var(--ink-soft);
  font-size: 1rem;
  line-height: 1.7;
}

.cases {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(20px, 3vw, 30px);
}
.case {
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #D8DDD4;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.2s var(--ease), box-shadow 0.2s var(--ease), transform 0.2s var(--ease);
}
.case:hover {
  border-color: #C8CFC4;
  box-shadow: 0 12px 36px rgba(23, 58, 51, 0.1);
  transform: translateY(-3px);
}
.case__media {
  border-bottom: 1px solid #E8EDE4;
  background: var(--paper-2);
}
.case__img { width: 100%; height: auto; display: block; }
.case__ph { width: 100%; aspect-ratio: 16 / 10; border: none; border-radius: 0; }
.case__body { padding: clamp(20px, 2.5vw, 28px); }

.case__tag { color: var(--honey); margin-bottom: 10px; }
.case__name {
  font-size: clamp(1.3rem, 2.4vw, 1.7rem);
  font-weight: 500;
  color: var(--ink);
  line-height: 1.2;
  margin-bottom: 14px;
}
.case__problem {
  font-size: 1.02rem;
  color: var(--ink);
  line-height: 1.6;
  margin-bottom: 10px;
}
.case__line {
  font-size: 0.95rem;
  color: var(--ink-soft);
  line-height: 1.6;
  margin-bottom: 6px;
}
.case__tech { color: #5E7A6E; }
.case__outcome {
  margin-top: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--pine);
  border-left: 3px solid var(--honey);
  padding-left: 12px;
}
[dir="rtl"] .case__outcome {
  border-left: none;
  border-right: 3px solid var(--honey);
  padding-left: 0;
  padding-right: 12px;
}
.case__note {
  margin-top: 12px;
  font-size: 0.82rem;
  font-style: italic;
  color: #8A968F;
  line-height: 1.55;
}
.case__link {
  display: inline-block;
  margin-top: 14px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--honey);
  transition: color 0.2s var(--ease);
}
.case__link:hover { color: var(--honey-soft); }

@media (max-width: 760px) {
  .cases { grid-template-columns: 1fr; }
}
</style>
