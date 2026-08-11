<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useAuthStore } from '@/stores/auth'

//
// 后台管理框架主布局：左侧导航 + 顶部栏 + 内容区路由出口。
// 沿用登录页的 Stride 深色基调与 --lp-* token，未引入额外 UI 库。
//

const route = useRoute()
const router = useRouter()
const auth = useAuthStore()

const navItems = [
  { to: '/admin/dashboard', label: '概览', icon: 'dashboard' },
  { to: '/admin/users', label: '用户管理', icon: 'users' },
  { to: '/admin/settings', label: '系统设置', icon: 'gear' },
]

const pageTitle = computed(() => (route.meta.title as string | undefined) ?? '后台')
const activeNav = computed(() => navItems.find((item) => route.path.startsWith(item.to))?.to)

function handleLogout(): void {
  auth.logout()
  router.push({ name: 'login' })
}
</script>

<template>
  <div class="admin">
    <aside class="sidebar">
      <div class="sidebar__logo">
        <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
          <defs>
            <linearGradient id="adminBrand" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#45e0a0" />
              <stop offset="1" stop-color="#2fce89" />
            </linearGradient>
          </defs>
          <rect x="1.5" y="1.5" width="29" height="29" rx="7" fill="url(#adminBrand)" />
          <path d="M10.5 9.5v11" stroke="#0e0e10" stroke-width="2.4" stroke-linecap="round" />
          <path
            d="M21.5 22.5v-7a3 3 0 0 0-3-3H10.5"
            stroke="#0e0e10"
            stroke-width="2.4"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
          />
        </svg>
        <span class="sidebar__brand">Stride Admin</span>
      </div>

      <nav class="sidebar__nav">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          :class="{ 'nav-link--active': activeNav === item.to }"
        >
          <svg
            v-if="item.icon === 'dashboard'"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
          <svg
            v-else-if="item.icon === 'users'"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="9" cy="8" r="3.5" />
            <path d="M3.5 20c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
            <path d="M16 5.5a3.5 3.5 0 0 1 0 6.8" />
            <path d="M17.5 14.6c2 .8 3.5 2.6 3.5 5.4" />
          </svg>
          <svg
            v-else
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="3.2" />
            <path
              d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1.11-1.55 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.55-1.11 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34h.09a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87v.09a1.7 1.7 0 0 0 1.55 1H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.55 1Z"
            />
          </svg>
          <span>{{ item.label }}</span>
        </RouterLink>
      </nav>

      <div class="sidebar__footer">v0.0.1 · 框架模版</div>
    </aside>

    <div class="main">
      <header class="topbar">
        <div class="topbar__title">
          <h1 class="topbar__page">{{ pageTitle }}</h1>
        </div>
        <div class="topbar__user">
          <span class="topbar__dot" aria-hidden="true"></span>
          <span class="topbar__name">{{ auth.loggedIn ? '管理员' : '访客' }}</span>
          <button class="topbar__logout" type="button" @click="handleLogout">退出登录</button>
        </div>
      </header>

      <main class="content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.admin {
  display: flex;
  height: 100%;
  background: var(--lp-bg);
  color: var(--lp-text);
}

/* 侧边栏 */
.sidebar {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 216px;
  padding: 18px 12px;
  background: var(--lp-card);
  border-right: 1px solid var(--lp-border);
}
.sidebar__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 8px 18px;
  border-bottom: 1px solid var(--lp-border);
}
.sidebar__brand {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.sidebar__nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 0;
  flex: 1;
}
.nav-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  font-size: 13.5px;
  color: var(--lp-text-secondary);
  text-decoration: none;
  border-radius: var(--lp-radius);
  transition:
    color 0.15s ease,
    background 0.15s ease;
}
.nav-link:hover {
  color: var(--lp-text);
  background: rgba(255, 255, 255, 0.04);
}
.nav-link--active {
  color: var(--lp-text);
  background: var(--lp-accent-soft);
}
.nav-link--active svg,
.nav-link:hover svg {
  color: var(--lp-accent);
}

.sidebar__footer {
  padding: 8px 10px 0;
  font-size: 11.5px;
  color: var(--lp-text-dim);
  border-top: 1px solid var(--lp-border);
}

/* 主区 */
.main {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 24px;
  background: rgba(14, 14, 16, 0.72);
  border-bottom: 1px solid var(--lp-border);
}
.topbar__page {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
}
.topbar__user {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--lp-text-secondary);
}
.topbar__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--lp-accent);
}
.topbar__name {
  color: var(--lp-text);
}
.topbar__logout {
  margin-left: 8px;
  padding: 5px 10px;
  font-size: 12.5px;
  color: var(--lp-text-secondary);
  background: transparent;
  border: 1px solid var(--lp-border);
  border-radius: var(--lp-radius);
  cursor: pointer;
  transition:
    color 0.15s ease,
    border-color 0.15s ease;
}
.topbar__logout:hover {
  color: var(--lp-text);
  border-color: var(--lp-border-strong);
}

.content {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
}

@media (max-width: 720px) {
  .sidebar {
    width: 60px;
  }
  .sidebar__brand,
  .nav-link span,
  .sidebar__footer {
    display: none;
  }
}
</style>