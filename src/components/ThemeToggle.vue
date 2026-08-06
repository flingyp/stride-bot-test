<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { Moon, Sun } from '@lucide/vue'
import { useI18n } from 'vue-i18n'
import { Button } from '@/components/ui/button'

const { t } = useI18n()
const isDark = useDark()
</script>

<template>
  <Button
    variant="ghost"
    size="icon"
    :aria-label="t('theme.toggleAria')"
    :title="isDark ? t('theme.toLight') : t('theme.toDark')"
    @click="isDark = !isDark"
  >
    <Sun class="dark:hidden" />
    <Moon class="hidden dark:block" />
  </Button>
</template>