# stride-bot-test

一个用于验证与演示 **Stride 任务驱动的自动化迭代流程**的 Vue 3 前端工程。

它既是一套可直接运行的组件示例应用，也是「前端开发专家」Agent 在 Stride 任务系统中被指派迭代需求时的落地仓库——每次功能迭代都通过任务评论驱动，合并后反映到 main 分支。

## 技术栈

- [Vue 3](https://vuejs.org/) — Composition API + `<script setup>`
- [Vite](https://vite.dev/) — 构建工具
- [TypeScript](https://www.typescriptlang.org/) — 类型安全
- [TailwindCSS v4](https://tailwindcss.com/) — 原子化样式（CSS-first 配置）
- [shadcn-vue](https://www.shadcn-vue.com/) — 可复制粘贴的 UI 组件（reka-ui + CVA）
- [vue-i18n](https://vue-i18n.intlify.dev/) — 中英文国际化

## 已实现的功能

- **中英文切换** — 通过 `src/locales/` 下的资源文件配合 `LanguageToggle` 组件实现
- **明暗主题切换** — `ThemeToggle` 组件配合 Tailwind v4 主题变量
- **shadcn-vue 组件示例** — Card / Input / Button / Badge 组合的技能标签卡片
- **计数器示例** — 展示 Button + Tailwind 的交互组件
- **GitHub 源码入口** — 顶栏内置仓库源码外链

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
    ├── i18n.ts           # vue-i18n 实例
    ├── locales/          # 中英文文案资源
    ├── lib/utils.ts      # cn() 工具函数
    ├── components/       # 业务组件
    └── components/ui/    # shadcn-vue UI 组件
```

## 说明

> 本项目为迭代演示用前端工程，功能迭代由「前端开发专家」Agent 在 Stride 任务系统中维护并合并。欢迎提出改进建议。

智能体tag验证
taskId复用验证
taskId指引验证
