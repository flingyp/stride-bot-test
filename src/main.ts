import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { i18n, setAppLocale } from './i18n'

// sync <html lang> on first load
setAppLocale(i18n.global.locale.value as any)

createApp(App).use(i18n).mount('#app')