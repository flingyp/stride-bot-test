<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Languages } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { setAppLocale, type AppLocale } from '@/i18n'

const { locale } = useI18n()

/** Cycle between the two supported locales. */
function toggleLocale() {
  const next: AppLocale = locale.value === 'zh-CN' ? 'en-US' : 'zh-CN'
  setAppLocale(next)
}
</script>

<template>
  <Button
    variant="ghost"
    size="sm"
    class="gap-1.5"
    :aria-label="$t('lang.switchAria')"
    :title="$t('lang.switchAria')"
    @click="toggleLocale"
  >
    <Languages class="h-4 w-4" />
    <span>{{ $t('app.langLabel') }}</span>
  </Button>
</template>