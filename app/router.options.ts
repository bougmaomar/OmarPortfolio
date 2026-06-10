import type { RouterConfig } from '@nuxt/schema'

// Custom scroll handling so switching language does NOT jump back to the top.
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // Anchor links (#about, #work, …) → smooth scroll, offset for the fixed nav.
    if (to.hash) {
      return { el: to.hash, top: 72, behavior: 'smooth' }
    }
    // Browser back / forward → restore where the user was.
    if (savedPosition) {
      return savedPosition
    }
    // Locale switch keeps the same single page but a different path prefix
    // (e.g. "/" → "/fr/"). Keep the current scroll position instead of resetting.
    if (to.path !== from.path) {
      return false
    }
    return { top: 0 }
  },
}
