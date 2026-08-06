<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const { t } = useI18n()
const count = ref(0)
const isEven = computed(() => count.value % 2 === 0)

function increment() {
  count.value++
}
</script>

<template>
  <Card class="w-full">
    <CardHeader>
      <CardTitle>{{ t('counter.title') }}</CardTitle>
      <CardDescription>{{ t('counter.description') }}</CardDescription>
    </CardHeader>
    <CardContent>
      <div class="flex items-center gap-4">
        <Button variant="outline" size="icon" :aria-label="t('counter.decrementAria')" @click="count--">−</Button>
        <span
          class="text-3xl font-semibold tabular-nums min-w-16 text-center"
          :class="isEven ? 'text-primary' : 'text-destructive'"
        >
          {{ count }}
        </span>
        <Button size="icon" :aria-label="t('counter.incrementAria')" @click="increment">+</Button>
      </div>
      <Badge class="mt-4" :variant="isEven ? 'secondary' : 'outline'">
        {{ isEven ? t('counter.even') : t('counter.odd') }}
      </Badge>
    </CardContent>
  </Card>
</template>