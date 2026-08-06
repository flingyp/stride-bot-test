<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

const value = ref('')
const items = ref<string[]>(['shadcn-vue', 'tailwindcss', 'typescript'])

function addItem() {
  const v = value.value.trim()
  if (v) {
    items.value.push(v)
    value.value = ''
  }
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-muted/40 p-6">
    <Card class="w-full max-w-md">
      <CardHeader>
        <CardTitle>Vue 3 + shadcn-vue</CardTitle>
        <CardDescription>使用 Vite + TypeScript + TailwindCSS v4 构建</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="flex gap-2">
          <Input v-model="value" placeholder="添加一个技能..." @keydown.enter="addItem" />
          <Button @click="addItem">添加</Button>
        </div>
        <div class="flex flex-wrap gap-2">
          <Badge v-for="item in items" :key="item" variant="secondary">{{ item }}</Badge>
        </div>
      </CardContent>
      <CardFooter class="justify-end">
        <Button variant="outline" @click="items = []">清空</Button>
      </CardFooter>
    </Card>
  </div>
</template>
