<script setup lang="ts">
//
// 全局样式与路由出口。
// LoginView 使用 scoped 变量锁定品牌色，全局层只负责背景与字体基调。
//
</script>

<template>
  <RouterView />
</template>

<style>
:root {
  /* Linear 风格深色基调 */
  --lp-bg: #0e0e10;
  --lp-card: #161618;
  --lp-border: #26262b;
  --lp-border-strong: #333338;
  --lp-text: #e6e6e6;
  --lp-text-secondary: #9c9ca6;
  --lp-text-dim: #6f6f78;
  --lp-accent: #5e6ad2;
  --lp-accent-hover: #4f5ab8;
  --lp-accent-soft: #2a2d56;
  --lp-danger: #f2555a;
  --lp-radius: 6px;

  color-scheme: dark;
}

* {
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
  margin: 0;
}

body {
  background: var(--lp-bg);
  color: var(--lp-text);
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'PingFang SC',
    'Microsoft YaHei',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
</style>