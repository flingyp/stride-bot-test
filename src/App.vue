<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import Counter from './components/Counter.vue'
import { Badge } from '@/components/ui/badge'
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

const title = ref('Vue 3 项目已就绪 🎉')
const features = ['Vite 7 构建', 'TypeScript 类型安全', 'TailwindCSS v4 样式', 'shadcn-vue 组件']

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
        <h1 class="text-3xl font-semibold tracking-tight">{{ title }}</h1>
        <p class="text-muted-foreground mt-2">stride-bot-test 已初始化为 Vue 3 前端项目</p>
        <div class="mt-3 flex flex-wrap justify-center gap-2">
          <Badge v-for="item in features" :key="item" variant="secondary">{{ item }}</Badge>
        </div>
      </div>

      <Card class="w-full">
        <CardHeader>
          <CardTitle>shadcn-vue 组件</CardTitle>
          <CardDescription>输入技能后点击添加，试试 Card / Input / Button / Badge</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <div class="flex gap-2">
            <Input v-model="value" placeholder="添加一个技能..." @keydown.enter="addSkill" />
            <Button @click="addSkill">添加</Button>
          </div>
          <div class="flex flex-wrap gap-2">
            <Badge v-for="item in skills" :key="item" variant="secondary">{{ item }}</Badge>
          </div>
        </CardContent>
        <CardFooter class="justify-end">
          <Button variant="outline" @click="skills = []">清空</Button>
        </CardFooter>
      </Card>

      <Counter />

      <p class="text-muted-foreground text-sm">
        编辑 <code class="rounded bg-muted px-1.5 py-0.5">src/App.vue</code> 或
        <code class="rounded bg-muted px-1.5 py-0.5">src/components/Counter.vue</code> 开始开发
      </p>
    </main>
  </div>
</template>
