<script setup>
const { locale, locales } = useI18n()

const currentLocale = computed(() =>
  locales.value.find(l => l.code === locale.value)
)

useHead({
  htmlAttrs: {
    lang: () => locale.value,
    dir: () => currentLocale.value?.dir ?? 'ltr',
  },
})
</script>

<template>
  <div>
    <AppNav />
    <main>
      <HeroSection />
      <ReframeSection />
      <LazyWorkSection id="work" hydrate-on-visible />
      <LazyServicesSection id="services" hydrate-on-visible />
      <LazyProcessSection id="process" hydrate-on-visible />
      <LazyAboutSection id="about" hydrate-on-visible />
      <LazyContactSection id="contact" hydrate-on-visible />
    </main>
    <WhatsAppFab />
  </div>
</template>
