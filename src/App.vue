<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import AppHeader from './components/AppHeader.vue'
import Counter from './components/Counter.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const { t } = useI18n()
const featureCount = 4

const value = ref('')
const skills = ref<string[]>(['shadcn-vue', 'tailwindcss', 'typescript'])

function addSkill() {
  const v = value.value.trim()
  if (v) {
    skills.value.push(v)
    value.value = ''
  }
}
</script>

<template>
  <div class="bg-muted/40 min-h-screen font-sans">
    <AppHeader />
    <main class="mx-auto max-w-2xl space-y-6 px-6 py-12">
      <div class="text-center">
        <h1 class="text-3xl font-semibold tracking-tight">{{ t('hero.title') }}</h1>
        <p class="text-muted-foreground mt-2">{{ t('hero.subtitle') }}</p>
        <div class="mt-3 flex flex-wrap justify-center gap-2">
          <Badge v-for="i in featureCount" :key="i" variant="secondary">{{ t(`features.items[${i - 1}]`) }}</Badge>
        </div>
      </div>

      <Card class="w-full">
        <CardHeader>
          <CardTitle>{{ t('card.title') }}</CardTitle>
          <CardDescription>{{ t('card.description') }}</CardDescription>
          <CardAction>
            <Button variant="outline" :disabled="skills.length === 0" @click="skills = []">
              {{ t('card.clear') }}
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent class="space-y-4">
          <div class="flex gap-2">
            <Input v-model="value" :placeholder="t('card.placeholder')" @keydown.enter="addSkill" />
            <Button @click="addSkill">{{ t('card.add') }}</Button>
          </div>
          <div class="flex flex-wrap gap-2">
            <Badge v-for="item in skills" :key="item" variant="secondary">{{ item }}</Badge>
          </div>
        </CardContent>
      </Card>

      <Counter />

      <p class="text-muted-foreground text-sm">
        {{ t('footer.editHint1') }}
        <code class="rounded bg-muted px-1.5 py-0.5">src/App.vue</code>
        {{ t('footer.editHint2') }}
        <code class="rounded bg-muted px-1.5 py-0.5">src/components/Counter.vue</code>
        {{ t('footer.editHint3') }}
      </p>
    </main>
  </div>
</template>