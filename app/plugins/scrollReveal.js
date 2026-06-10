export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    getSSRProps() {
      return {}
    },
    mounted(el, binding) {
      el.classList.add('reveal')
      if (binding.arg) {
        el.classList.add(`reveal-d${binding.arg}`)
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.disconnect()
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
      )

      observer.observe(el)
      el._revealObserver = observer
    },
    unmounted(el) {
      el._revealObserver?.disconnect()
    }
  })
})
