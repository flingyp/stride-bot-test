# stride-bot-test

Vue 3 前端项目，基于 Vite 7 + TypeScript + TailwindCSS v4 + shadcn-vue。

## 技术栈

- [Vue 3](https://vuejs.org/) — Composition API + `<script setup>`
- [Vite](https://vite.dev/) — 构建工具
- [TypeScript](https://www.typescriptlang.org/) — 类型安全
- [TailwindCSS v4](https://tailwindcss.com/) — 原子化样式（CSS-first 配置）
- [shadcn-vue](https://www.shadcn-vue.com/) — 可复制粘贴的 UI 组件（reka-ui + CVA）

## 快速开始

```bash
npm install       # 安装依赖
npm run dev       # 启动开发服务器 (http://localhost:5173)
npm run build     # 类型检查 + 生产构建 (输出到 dist/)
npm run preview   # 本地预览生产构建
```

## 添加 shadcn-vue 组件

```bash
npx shadcn-vue@latest add <component-name>
# 例如：npx shadcn-vue@latest add button dialog
```

组件会生成到 `src/components/ui/` 下，可直接修改源码，不引入额外运行时依赖。

## 目录结构

```
├── index.html            # HTML 入口
├── vite.config.ts        # Vite 配置（含 @ 别名与 Tailwind 插件）
├── tsconfig*.json        # TypeScript 配置
├── components.json       # shadcn-vue 配置
├── public/               # 静态资源
└── src/
    ├── main.ts           # 应用入口
    ├── App.vue           # 根组件
    ├── style.css         # Tailwind v4 入口 + 主题变量
    ├── lib/utils.ts      # cn() 工具函数
    ├── components/       # 业务组件
    └── components/ui/    # shadcn-vue UI 组件
```
