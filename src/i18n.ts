import { createI18n } from 'vue-i18n'
import zhCN from './locales/zh-CN.json'
import enUS from './locales/en-US.json'

export type AppLocale = 'zh-CN' | 'en-US'

const STORAGE_KEY = 'stride-bot-test-locale'

/** Resolve initial locale: explicit storage -> browser language -> default zh-CN */
function getInitialLocale(): AppLocale {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'zh-CN' || stored === 'en-US') return stored

  const navLang = navigator.language?.toLowerCase()
  if (navLang?.startsWith('zh')) return 'zh-CN'
  if (navLang?.startsWith('en')) return 'en-US'
  return 'zh-CN'
}

export const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS,
  },
})

/** Persist and apply the current locale, and keep <html lang> in sync. */
export function setAppLocale(locale: AppLocale) {
  i18n.global.locale.value = locale
  localStorage.setItem(STORAGE_KEY, locale)
  document.documentElement.setAttribute('lang', locale)
}