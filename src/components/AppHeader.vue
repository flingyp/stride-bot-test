<script setup lang="ts">
import LanguageToggle from './LanguageToggle.vue'
import ThemeToggle from './ThemeToggle.vue'
import GithubIcon from './GithubIcon.vue'

const githubUrl = 'https://github.com/flingyp/stride-bot-test'
</script>

<template>
  <header
    class="sticky top-0 z-10 border-b bg-background/80 backdrop-blur"
  >
    <div class="mx-auto flex h-14 max-w-2xl items-center justify-between px-6">
      <span class="font-semibold tracking-tight">{{ $t('app.name') }}</span>
      <div class="flex items-center gap-1">
        <a
          :href="githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          :aria-label="$t('app.githubAria')"
          :title="$t('app.githubAria')"
        >
          <GithubIcon :size="18" />
        </a>
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>
