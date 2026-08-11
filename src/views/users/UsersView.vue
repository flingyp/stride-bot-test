<script setup lang="ts">
import { computed, ref } from 'vue'

//
// 用户管理页：演示列表 + 搜索 + 状态圆点。数据为 mock，未接后端。
//

interface User {
  id: number
  name: string
  email: string
  role: '管理员' | '成员'
  status: '在线' | '离线'
  lastSeen: string
}

const users = ref<User[]>([
  { id: 1, name: '李婷', email: 'liging@example.com', role: '管理员', status: '在线', lastSeen: '刚刚' },
  { id: 2, name: '王一哲', email: 'wangyizhe@example.com', role: '成员', status: '离线', lastSeen: '2 小时前' },
  { id: 3, name: '赵敏', email: 'zhaomin@example.com', role: '成员', status: '在线', lastSeen: '5 分钟前' },
  { id: 4, name: '陈晨', email: 'chenchen@example.com', role: '成员', status: '离线', lastSeen: '昨天' },
  { id: 5, name: '孙志强', email: 'sunzhiqiang@example.com', role: '管理员', status: '在线', lastSeen: '1 分钟前' },
])

const keyword = ref('')
const roleFilter = ref<'全部' | '管理员' | '成员'>('全部')

const filtered = computed(() =>
  users.value.filter((user) => {
    const matchKeyword =
      !keyword.value ||
      user.name.includes(keyword.value) ||
      user.email.toLowerCase().includes(keyword.value.toLowerCase())
    const matchRole = roleFilter.value === '全部' || user.role === roleFilter.value
    return matchKeyword && matchRole
  }),
)
</script>

<template>
  <div class="page">
    <div class="page__head">
      <div>
        <h2 class="page__title">用户管理</h2>
        <p class="page__sub">共 {{ users.length }} 位用户，支持按姓名 / 邮箱 / 角色筛选。</p>
      </div>
      <button class="btn btn--primary" type="button">新增用户</button>
    </div>

    <div class="filters">
      <input
        v-model="keyword"
        class="search"
        type="search"
        placeholder="搜索姓名或邮箱…"
        spellcheck="false"
      />
      <select v-model="roleFilter" class="select">
        <option>全部</option>
        <option>管理员</option>
        <option>成员</option>
      </select>
    </div>

    <div class="table-wrap">
      <table class="table">
        <thead>
          <tr>
            <th>用户</th>
            <th>角色</th>
            <th>状态</th>
            <th>最近活跃</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filtered" :key="user.id">
            <td>
              <div class="cell-user">
                <span class="avatar" aria-hidden="true">{{ user.name.slice(0, 1) }}</span>
                <div class="cell-meta">
                  <span class="cell-name">{{ user.name }}</span>
                  <span class="cell-email">{{ user.email }}</span>
                </div>
              </div>
            </td>
            <td><span class="cell-dim">{{ user.role }}</span></td>
            <td>
              <span class="status">
                <span
                  class="status__dot"
                  :class="user.status === '在线' ? 'status__dot--on' : 'status__dot--off'"
                  aria-hidden="true"
                />
                {{ user.status }}
              </span>
            </td>
            <td><span class="cell-dim">{{ user.lastSeen }}</span></td>
          </tr>
        </tbody>
      </table>
      <p v-if="filtered.length === 0" class="empty">没有匹配的用户</p>
    </div>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 1080px;
  margin: 0 auto;
}
.page__head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
}
.page__title {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.page__sub {
  margin: 6px 0 0;
  font-size: 13.5px;
  color: var(--lp-text-secondary);
}

.btn--primary {
  height: 36px;
  padding: 0 16px;
  font-size: 13.5px;
  font-weight: 500;
  color: #fff;
  background: var(--lp-accent);
  border: none;
  border-radius: var(--lp-radius);
  cursor: pointer;
  transition: background 0.15s ease;
}
.btn--primary:hover {
  background: var(--lp-accent-hover);
}

.filters {
  display: flex;
  gap: 10px;
}
.search {
  flex: 1;
  max-width: 320px;
  height: 36px;
  padding: 0 12px;
  font-size: 13.5px;
  color: var(--lp-text);
  background: var(--lp-card);
  border: 1px solid var(--lp-border);
  border-radius: var(--lp-radius);
  outline: none;
}
.search:focus {
  border-color: var(--lp-accent);
}
.select {
  height: 36px;
  padding: 0 12px;
  font-size: 13.5px;
  color: var(--lp-text);
  background: var(--lp-card);
  border: 1px solid var(--lp-border);
  border-radius: var(--lp-radius);
  outline: none;
}

.table-wrap {
  background: var(--lp-card);
  border: 1px solid var(--lp-border);
  border-radius: 10px;
  overflow: hidden;
}
.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13.5px;
}
.table th {
  text-align: left;
  padding: 12px 18px;
  font-size: 12px;
  font-weight: 500;
  color: var(--lp-text-dim);
  border-bottom: 1px solid var(--lp-border);
  background: rgba(255, 255, 255, 0.02);
}
.table td {
  padding: 13px 18px;
  border-bottom: 1px solid var(--lp-border);
}
.table tbody tr:last-child td {
  border-bottom: none;
}
.table tbody tr:hover {
  background: rgba(255, 255, 255, 0.02);
}

.cell-user {
  display: flex;
  align-items: center;
  gap: 10px;
}
.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--lp-accent);
  background: rgba(47, 206, 137, 0.12);
  flex-shrink: 0;
}
.cell-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.cell-name {
  color: var(--lp-text);
  font-weight: 500;
}
.cell-email {
  font-size: 12px;
  color: var(--lp-text-dim);
}
.cell-dim {
  color: var(--lp-text-secondary);
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--lp-text-secondary);
}
.status__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.status__dot--on {
  background: var(--lp-accent);
}
.status__dot--off {
  background: #6f6f78;
}

.empty {
  padding: 24px;
  text-align: center;
  font-size: 13.5px;
  color: var(--lp-text-dim);
}
</style>