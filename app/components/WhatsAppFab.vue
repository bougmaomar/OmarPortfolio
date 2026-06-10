<script setup>
const { t } = useI18n()
const WHATSAPP = '212629071889'
</script>

<template>
  <a
    :href="`https://wa.me/${WHATSAPP}`"
    target="_blank"
    rel="noopener"
    class="wa-fab"
    :aria-label="t('contact.whatsappAria')"
  >
    <span class="wa-fab__icon" aria-hidden="true">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z"/>
      </svg>
    </span>
    <span class="wa-fab__label">{{ t('contact.whatsappLabel') }}</span>
  </a>
</template>

<style scoped>
.wa-fab {
  position: fixed;
  bottom: clamp(18px, 4vw, 28px);
  right: clamp(18px, 4vw, 28px);
  z-index: 90;
  display: inline-flex;
  align-items: center;
  height: 56px;
  background: #25D366;
  color: #fff;
  border-radius: 28px;
  box-shadow: 0 6px 22px rgba(37, 211, 102, 0.42);
  overflow: hidden;
  transition: box-shadow 0.25s var(--ease), transform 0.25s var(--ease);
  animation: wa-pop 0.45s var(--ease) 0.6s both;
}
.wa-fab__icon {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}
.wa-fab__label {
  max-width: 0;
  white-space: nowrap;
  font-weight: 600;
  font-size: 0.92rem;
  opacity: 0;
  transition: max-width 0.32s var(--ease), opacity 0.25s var(--ease), padding 0.32s var(--ease);
}
.wa-fab:hover,
.wa-fab:focus-visible {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(37, 211, 102, 0.52);
}
.wa-fab:hover .wa-fab__label,
.wa-fab:focus-visible .wa-fab__label {
  max-width: 200px;
  opacity: 1;
  padding-right: 22px;
}

/* RTL: anchor to the left so it doesn't clash with the hero scroll cue */
[dir="rtl"] .wa-fab {
  right: auto;
  left: clamp(18px, 4vw, 28px);
}
[dir="rtl"] .wa-fab:hover .wa-fab__label,
[dir="rtl"] .wa-fab:focus-visible .wa-fab__label {
  padding-right: 0;
  padding-left: 22px;
}

@keyframes wa-pop {
  from { transform: scale(0.4); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
}
@media (prefers-reduced-motion: reduce) {
  .wa-fab { animation: none; }
  .wa-fab__label { transition: none; }
}
</style>
