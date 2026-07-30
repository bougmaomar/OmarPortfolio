<script setup>
defineProps({ id: String })
const { t } = useI18n()
const localePath = useLocalePath()

// Media keyed by the locale item index (0 BlueSky, 1 MeinLedger, 2 Fintbib,
// 3 Artist). `slug` anchors the matching section on the detailed /projects page.
const media = {
  0: { img: '/projects/bluesky.jpeg', link: '', slug: 'bluesky' },
  1: { img: '/projects/meinledger.jpeg', link: 'https://meinledger.com', slug: 'meinledger' },
  2: { img: '/projects/fintbib.jpeg', link: '', slug: 'fintbib' },
  3: { img: '/projects/artist.jpeg', link: 'https://abdellahbougma.com', slug: 'artisan' },
}

// Order: BlueSky, MeinLedger, Fintbib, then the artisan portfolio
// (kept in sync with the /projects page).
const order = [0, 1, 2, 3]

const items = computed(() =>
  order.map(i => ({
    name: t(`projects.items[${i}].name`),
    tag: t(`projects.items[${i}].tag`),
    problem: t(`projects.items[${i}].problem`),
    outcome: t(`projects.items[${i}].outcome`),
    img: media[i].img,
    link: media[i].link,
    slug: media[i].slug,
    detail: `${localePath('/projects')}#${media[i].slug}`,
  }))
)
const allProjectsPath = computed(() => localePath('/projects'))

// Carousel: one project shows at a time; prev/next slide the track horizontally
// (right-to-left when advancing).
const active = ref(0)
const count = computed(() => items.value.length)
const go = (n) => { active.value = (n + count.value) % count.value }
const next = () => go(active.value + 1)
const prev = () => go(active.value - 1)
const failed = reactive({})
</script>

<template>
  <section :id="id" class="projects">
    <div class="wrap">
      <div v-reveal class="projects__head">
        <p class="eyebrow">{{ t('projects.eyebrow') }}</p>
        <h2 class="projects__title serif">{{ t('projects.title') }}</h2>
        <p class="projects__intro">{{ t('projects.intro') }}</p>
      </div>

      <div
        v-reveal
        class="pc"
        aria-roledescription="carousel"
        :aria-label="t('projects.title')"
        tabindex="0"
        @keydown.left.prevent="prev"
        @keydown.right.prevent="next"
      >
        <div class="pc__stage">
          <button
            type="button"
            class="pc__arrow pc__arrow--prev"
            :aria-label="t('projectsPage.prev')"
            @click="prev"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <div class="pc__viewport">
            <div class="pc__track" :style="{ transform: `translateX(${-active * 100}%)` }">
              <article
                v-for="(p, idx) in items"
                :key="p.slug"
                class="pc__slide"
                role="group"
                aria-roledescription="slide"
                :aria-label="p.name"
                :inert="idx !== active || undefined"
              >
                <div class="pc__media">
                  <div class="pc__frame">
                    <img
                      v-if="!failed[p.slug]"
                      :src="p.img"
                      :alt="p.name"
                      class="pc__img"
                      width="720"
                      height="450"
                      loading="lazy"
                      @error="failed[p.slug] = true"
                    />
                    <div v-else class="placeholder-img pc__ph">{{ t('projects.imagePlaceholder') }}</div>
                  </div>
                </div>

                <div class="pc__body">
                  <p class="eyebrow pc__tag">{{ p.tag }}</p>
                  <h3 class="pc__name serif">{{ p.name }}</h3>
                  <p class="pc__problem">{{ p.problem }}</p>
                  <p class="pc__outcome">{{ p.outcome }}</p>
                  <div class="pc__actions">
                    <NuxtLink :to="p.detail" class="pc__more">{{ t('projects.more') }}</NuxtLink>
                    <a
                      v-if="p.link"
                      :href="p.link"
                      target="_blank"
                      rel="noopener"
                      class="pc__visit"
                    >{{ t('projects.visit') }}</a>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <button
            type="button"
            class="pc__arrow pc__arrow--next"
            :aria-label="t('projectsPage.next')"
            @click="next"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <div class="pc__dots">
          <button
            v-for="(p, idx) in items"
            :key="p.slug"
            type="button"
            class="pc__dot"
            :class="idx === active && 'is-active'"
            :aria-label="p.name"
            :aria-current="idx === active ? 'true' : undefined"
            @click="go(idx)"
          />
        </div>
      </div>

      <div v-reveal class="projects__foot">
        <NuxtLink :to="allProjectsPath" class="projects__all">{{ t('projects.viewAll') }}</NuxtLink>
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
.projects__head { margin-bottom: clamp(32px, 5vw, 46px); max-width: 56ch; }
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

/* ─── Carousel: one project at a time ─── */
.pc { outline: none; }
/* Arrows flank the slide as flex items, so they never overlap image or text.
   Forced LTR so prev stays left and next right in every locale. */
.pc__stage {
  display: flex;
  align-items: center;
  gap: clamp(6px, 1.6vw, 20px);
  direction: ltr;
}
.pc__viewport { flex: 1 1 0; min-width: 0; overflow: hidden; }
.pc__track {
  display: flex;
  direction: ltr;
  transition: transform 0.5s var(--ease);
  will-change: transform;
}
.pc__slide {
  flex: 0 0 100%;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: clamp(28px, 4vw, 56px);
  align-items: center;
  padding: 4px;
}

.pc__frame {
  position: relative;
  aspect-ratio: 16 / 10;
  border: 1px solid var(--hairline);
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
}
.pc__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}
.pc__ph {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0;
}

.pc__tag { color: var(--honey); margin-bottom: 12px; }
.pc__name {
  font-size: clamp(1.5rem, 2.8vw, 2.1rem);
  font-weight: 500;
  color: var(--pine);
  line-height: 1.2;
  margin-bottom: 16px;
}
.pc__problem {
  font-size: clamp(1.02rem, 1.6vw, 1.15rem);
  color: var(--ink);
  line-height: 1.6;
  margin-bottom: 16px;
}
.pc__outcome {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--pine);
  border-inline-start: 3px solid var(--honey);
  padding-inline-start: 14px;
}
.pc__actions {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 24px;
  flex-wrap: wrap;
}
.pc__more {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--honey);
  transition: color 0.2s var(--ease);
}
.pc__more:hover { color: var(--honey-soft); }
.pc__visit {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--sage);
  transition: color 0.2s var(--ease);
}
.pc__visit:hover { color: var(--pine); }

/* Arrows */
.pc__arrow {
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid var(--hairline);
  background: #fff;
  color: var(--pine);
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: border-color 0.2s var(--ease), color 0.2s var(--ease), transform 0.2s var(--ease);
}
.pc__arrow:hover { border-color: var(--honey); color: var(--honey); transform: translateY(-1px); }
.pc__arrow:focus-visible { outline: 2px solid var(--honey); outline-offset: 3px; }

/* Dots (equal weight) */
.pc__dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: clamp(22px, 4vw, 34px);
}
.pc__dot {
  width: 10px;
  height: 10px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: #C4CEC6;
  cursor: pointer;
  transition: background 0.2s var(--ease);
}
.pc__dot:hover { background: var(--sage); }
.pc__dot.is-active { background: var(--honey); }
.pc__dot:focus-visible { outline: 2px solid var(--honey); outline-offset: 3px; }

.projects__foot { margin-top: clamp(28px, 4vw, 40px); }
.projects__all {
  font-size: 0.98rem;
  font-weight: 600;
  color: var(--pine);
  border-bottom: 1px solid rgba(23, 58, 51, 0.25);
  padding-bottom: 3px;
  transition: color 0.2s var(--ease), border-color 0.2s var(--ease);
}
.projects__all:hover { color: var(--honey); border-color: var(--honey); }

@media (max-width: 820px) {
  .pc__slide {
    grid-template-columns: 1fr;
    gap: clamp(20px, 5vw, 32px);
    align-items: start;
  }
}
@media (max-width: 560px) {
  .pc__arrow { width: 38px; height: 38px; }
}
</style>
