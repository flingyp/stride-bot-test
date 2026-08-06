<script setup lang="ts">
import { computed, ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const count = ref(0)
const isEven = computed(() => count.value % 2 === 0)

function increment() {
  count.value++
}
</script>

<template>
  <Card class="w-full">
    <CardHeader>
      <CardTitle>计数器示例</CardTitle>
      <CardDescription>使用 shadcn-vue Button 组件 + Tailwind 样式</CardDescription>
    </CardHeader>
    <CardContent>
      <div class="flex items-center gap-4">
        <Button variant="outline" size="icon" aria-label="减一" @click="count--">−</Button>
        <span
          class="text-3xl font-semibold tabular-nums min-w-16 text-center"
          :class="isEven ? 'text-primary' : 'text-destructive'"
        >
          {{ count }}
        </span>
        <Button size="icon" aria-label="加一" @click="increment">+</Button>
      </div>
      <Badge class="mt-4" :variant="isEven ? 'secondary' : 'outline'">
        {{ isEven ? '偶数' : '奇数' }}
      </Badge>
    </CardContent>
  </Card>
</template>
