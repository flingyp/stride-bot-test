<script setup lang="ts">
import LanguageToggle from './LanguageToggle.vue'
import ThemeToggle from './ThemeToggle.vue'
</script>

<template>
  <header
    class="sticky top-0 z-10 border-b bg-background/80 backdrop-blur"
  >
    <div class="mx-auto flex h-14 max-w-2xl items-center justify-between px-6">
      <span class="font-semibold tracking-tight">{{ $t('app.name') }}</span>
      <div class="flex items-center gap-1">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>