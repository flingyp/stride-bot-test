<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { Moon, Sun } from '@lucide/vue'
import { Button } from '@/components/ui/button'

const isDark = useDark()
</script>

<template>
  <Button
    variant="ghost"
    size="icon"
    aria-label="切换主题"
    :title="isDark ? '切换到浅色模式' : '切换到深色模式'"
    @click="isDark = !isDark"
  >
    <Sun class="dark:hidden" />
    <Moon class="hidden dark:block" />
  </Button>
</template>