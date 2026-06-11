<script setup>
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const scrolled = ref(false)
const menuOpen = ref(false)

const SECTION_IDS = ['work', 'projects', 'services', 'process', 'about', 'faq', 'contact']
const NAV_OFFSET = 80

onMounted(() => {
  const onScroll = () => { scrolled.value = window.scrollY > 60 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})

// Switching language navigates to a different path, which would otherwise
// move the reader. Remember the section currently under the nav, then restore
// it to the same spot once the new locale's content has rendered.
let anchor = null

function rememberAnchor() {
  if (typeof window === 'undefined') return
  anchor = { y: window.scrollY }
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id)
    if (!el) continue
    const { top, bottom } = el.getBoundingClientRect()
    if (top <= NAV_OFFSET + 1 && bottom > NAV_OFFSET) {
      anchor = { id, offset: top }
      break
    }
  }
}

watch(locale, async () => {
  if (typeof window === 'undefined' || !anchor) return
  const a = anchor
  anchor = null
  await nextTick()
  requestAnimationFrame(() => requestAnimationFrame(() => {
    if (a.id) {
      const el = document.getElementById(a.id)
      if (el) window.scrollTo({ top: window.scrollY + el.getBoundingClientRect().top - a.offset })
    } else {
      window.scrollTo({ top: a.y })
    }
  }))
})

const links = computed(() => [
  { label: t('nav.work'), href: '#work' },
  { label: t('nav.projects'), href: '#projects' },
  { label: t('nav.services'), href: '#services' },
  { label: t('nav.process'), href: '#process' },
  { label: t('nav.faq'), href: '#faq' },
])

function close() { menuOpen.value = false }
function onLocaleSwitch() { rememberAnchor(); close() }
</script>

<template>
  <nav :class="['nav', scrolled && 'nav--scrolled']" aria-label="Main navigation">
    <div class="nav__inner wrap">
      <a href="#" class="nav__logo" @click="close">
        <span class="serif">Omar</span> Bougma
      </a>

      <ul :class="['nav__links', menuOpen && 'is-open']" role="list">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" @click="close">{{ link.label }}</a>
        </li>
        <li class="nav__lang-mobile">
          <div class="lang-switcher">
            <NuxtLink
              v-for="loc in locales"
              :key="loc.code"
              :to="switchLocalePath(loc.code)"
              :class="['lang-btn', locale === loc.code && 'is-active']"
              @click="onLocaleSwitch"
            >
              {{ loc.code.toUpperCase() }}
            </NuxtLink>
          </div>
        </li>
      </ul>

      <div class="nav__right">
        <div class="lang-switcher lang-switcher--desktop">
          <NuxtLink
            v-for="loc in locales"
            :key="loc.code"
            :to="switchLocalePath(loc.code)"
            :class="['lang-btn', locale === loc.code && 'is-active']"
            @click="onLocaleSwitch"
          >
            {{ loc.code === 'ar' ? 'ع' : loc.code.toUpperCase() }}
          </NuxtLink>
        </div>

        <a href="#contact" class="btn btn-primary nav__cta" @click="close">
          {{ t('nav.cta') }}
        </a>

        <button
          class="nav__burger"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="String(menuOpen)"
          @click="menuOpen = !menuOpen"
        >
          <span :class="menuOpen && 'open'"></span>
          <span :class="menuOpen && 'open'"></span>
          <span :class="menuOpen && 'open'"></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background 0.3s var(--ease), box-shadow 0.3s var(--ease);
  will-change: transform;
  transform: translateZ(0);
}
.nav--scrolled {
  background: rgba(238, 240, 234, 0.97);
  box-shadow: 0 1px 0 rgba(26, 36, 31, 0.1);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  height: 68px;
}

.nav__logo {
  font-size: 1rem;
  font-weight: 500;
  color: var(--paper);
  letter-spacing: -0.01em;
  flex-shrink: 0;
  transition: color 0.3s var(--ease);
}
.nav__logo .serif { font-weight: 500; font-size: 1.05rem; }
.nav--scrolled .nav__logo { color: var(--ink); }

.nav__links {
  display: flex;
  align-items: center;
  gap: 28px;
}
.nav__links a {
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(238, 240, 234, 0.75);
  transition: color 0.2s var(--ease);
}
.nav__links a:hover { color: var(--paper); }
.nav--scrolled .nav__links a { color: var(--ink-soft); }
.nav--scrolled .nav__links a:hover { color: var(--ink); }
.nav__lang-mobile { display: none; }

.nav__right {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.lang-switcher {
  display: flex;
  align-items: center;
  gap: 2px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 3px;
}
.nav--scrolled .lang-switcher { background: rgba(0, 0, 0, 0.06); }

.lang-btn {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: rgba(238, 240, 234, 0.6);
  padding: 5px 8px;
  border-radius: 4px;
  transition: all 0.18s var(--ease);
  text-decoration: none;
  font-family: 'Inter', sans-serif;
}
.lang-btn:hover { color: var(--paper); }
.lang-btn.is-active {
  background: var(--honey);
  color: #fff;
}
.nav--scrolled .lang-btn { color: var(--ink-soft); }
.nav--scrolled .lang-btn:hover { color: var(--ink); }
.nav--scrolled .lang-btn.is-active { color: #fff; }

.nav__cta {
  padding: 10px 20px;
  font-size: 0.88rem;
}

.nav__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 6px;
  cursor: pointer;
}
.nav__burger span {
  display: block;
  width: 22px;
  height: 1.5px;
  background: var(--paper);
  border-radius: 2px;
  transition: all 0.25s var(--ease);
  transform-origin: center;
}
.nav--scrolled .nav__burger span { background: var(--ink); }
.nav__burger span.open:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.nav__burger span.open:nth-child(2) { opacity: 0; transform: scaleX(0); }
.nav__burger span.open:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

@media (max-width: 768px) {
  .lang-switcher--desktop { display: none; }
  .nav__lang-mobile { display: block; padding: 14px clamp(24px, 6vw, 72px); border-bottom: 1px solid rgba(255,255,255,0.07); }
  .nav__lang-mobile .lang-switcher { background: rgba(255,255,255,0.08); width: fit-content; }
  .nav__lang-mobile .lang-btn { color: rgba(238,240,234,0.6); }
  .nav__lang-mobile .lang-btn.is-active { color: #fff; }

  .nav__links {
    position: fixed;
    top: 68px;
    left: 0;
    right: 0;
    background: var(--pine-deep);
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    padding-bottom: 16px;
    transform: translateY(-110%);
    opacity: 0;
    transition: transform 0.35s var(--ease), opacity 0.3s var(--ease);
    pointer-events: none;
  }
  .nav__links.is-open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }
  .nav__links li { width: 100%; }
  .nav__links a {
    display: block;
    padding: 14px clamp(24px, 6vw, 72px);
    color: var(--paper) !important;
    font-size: 1rem;
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }
  .nav__cta { display: none; }
  .nav__burger { display: flex; }
}
</style>
