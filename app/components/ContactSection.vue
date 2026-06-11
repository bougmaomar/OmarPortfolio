<script setup>
defineProps({ id: String })
const { t } = useI18n()
const questions = computed(() =>
  [0, 1, 2].map(i => t(`contact.questions[${i}]`))
)
const EMAIL = 'contact@omarbougma.com'
const PHONE = '0629071889'
const WHATSAPP = '212629071889'
</script>

<template>
  <footer :id="id" class="contact">
    <div class="wrap">
      <div class="contact__top">
        <div v-reveal class="contact__intro">
          <p class="eyebrow contact__eyebrow">{{ t('contact.eyebrow') }}</p>
          <h2 class="contact__heading serif">
            {{ t('contact.heading1') }}<br>
            {{ t('contact.heading2') }}
          </h2>
          <p class="contact__sub">{{ t('contact.sub') }}</p>
          <a :href="`mailto:${EMAIL}`" class="btn btn-primary contact__cta">
            {{ t('contact.cta') }}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>

          <p class="contact__direct">
            {{ t('contact.orEmail') }}
            <a :href="`mailto:${EMAIL}`" class="contact__direct-link">{{ EMAIL }}</a>
          </p>
          <p class="contact__direct">
            {{ t('contact.orWhatsapp') }}
            <a
              :href="`https://wa.me/${WHATSAPP}`"
              target="_blank"
              rel="noopener"
              class="contact__direct-link contact__direct-link--wa"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z"/>
              </svg>
              {{ PHONE }}
            </a>
          </p>
        </div>

        <div v-reveal class="reveal-d2 contact__discovery">
          <p class="contact__discovery-label eyebrow">{{ t('contact.discoveryLabel') }}</p>
          <ul class="contact__qs" role="list">
            <li v-for="q in questions" :key="q" class="contact__q">
              <span class="contact__q-dot" aria-hidden="true"></span>
              <span>{{ q }}</span>
            </li>
          </ul>
          <p class="contact__tip" v-html="t('contact.tip')"></p>
        </div>
      </div>

      <div v-reveal class="reveal-d3 contact__bottom">
        <p class="contact__note serif">{{ t('contact.closingNote') }}</p>
        <div class="contact__info">
          <strong class="contact__name">Omar Bougma</strong>
          <a :href="`mailto:${EMAIL}`" class="contact__email">{{ EMAIL }}</a>
          <span class="contact__location">{{ t('contact.location') }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.contact {
  background: var(--pine-deep);
  color: var(--paper);
  padding: clamp(56px, 9vw, 88px) 0 clamp(40px, 7vw, 64px);
}
.contact__eyebrow { color: var(--honey-soft); }
.contact__top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 72px);
  padding-bottom: clamp(40px, 7vw, 60px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}
.contact__heading {
  font-size: clamp(1.9rem, 4vw, 2.8rem);
  font-weight: 400;
  line-height: 1.15;
  margin-top: 14px;
  color: var(--paper);
}
.contact__sub {
  margin-top: 16px;
  font-size: 0.98rem;
  color: #9FB3AB;
  max-width: 40ch;
  line-height: 1.7;
}
.contact__cta { margin-top: 28px; }
.contact__direct {
  margin-top: 18px;
  font-size: 0.92rem;
  color: #9FB3AB;
}
.contact__direct-link {
  color: var(--honey-soft);
  font-weight: 500;
  border-bottom: 1px solid rgba(233, 181, 103, 0.35);
  transition: border-color 0.2s var(--ease);
  word-break: break-word;
}
.contact__direct-link:hover { border-color: var(--honey-soft); }
.contact__direct-link--wa {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  gap: 5px;
  border-bottom: none;
  direction: ltr;
}
.contact__direct-link--wa svg { flex-shrink: 0; }
.contact__direct-link--wa svg { color: #25D366; }
.contact__direct-link--wa:hover { color: var(--honey); }

.contact__discovery-label { color: var(--honey-soft); margin-bottom: 18px; }
.contact__qs { display: flex; flex-direction: column; gap: 12px; margin-bottom: 22px; }
.contact__q {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  font-family: 'Fraunces', serif;
  font-size: 1.05rem;
  color: var(--paper);
  line-height: 1.4;
}
[dir="rtl"] .contact__q { font-family: 'Cairo', sans-serif; font-weight: 500; }
.contact__q-dot {
  flex-shrink: 0;
  width: 7px;
  height: 7px;
  margin-top: 8px;
  border-radius: 50%;
  background: var(--honey-soft);
}
.contact__tip { font-size: 0.9rem; color: #7A9A90; line-height: 1.6; max-width: 40ch; }
.contact__tip :deep(strong) { color: var(--honey-soft); font-weight: 600; }

.contact__bottom {
  margin-top: clamp(28px, 5vw, 44px);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 20px;
}
.contact__note {
  font-style: italic;
  font-weight: 400;
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #CBD8D1;
  max-width: 30ch;
  line-height: 1.4;
}
[dir="rtl"] .contact__note { font-style: normal; font-weight: 600; }
.contact__info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  font-size: 0.88rem;
  line-height: 1.8;
  color: #7A9A90;
  text-align: right;
}
.contact__name { color: var(--paper); font-weight: 600; }
.contact__email { color: #9FB3AB; transition: color 0.2s var(--ease); }
.contact__email:hover { color: var(--honey-soft); }
.contact__location { color: #5A7068; }

@media (max-width: 768px) {
  .contact__top { grid-template-columns: 1fr; }
  .contact__info { align-items: flex-start; text-align: left; }
}
</style>
