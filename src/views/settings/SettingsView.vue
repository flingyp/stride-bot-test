<script setup lang="ts">
import { reactive, ref } from 'vue'

//
// 系统设置页：演示表单 + 开关。数据为 mock，未接后端。
//

const form = reactive({
  siteName: 'Stride Admin',
  fromEmail: 'noreply@example.com',
})

const toggles = ref([
  { key: 'notifyLogin', label: '登录提醒', desc: '新设备登录时发送邮件通知', on: true },
  { key: 'notifyTransfer', label: '工单提醒', desc: '工单有更新时通知处理人', on: true },
  { key: 'maintenance', label: '维护模式', desc: '开启后仅管理员可访问', on: false },
])

const saved = ref(false)

function handleSave(): void {
  saved.value = true
  window.setTimeout(() => {
    saved.value = false
  }, 2000)
}

function toggle(key: string): void {
  const item = toggles.value.find((t) => t.key === key)
  if (item) item.on = !item.on
}
</script>

<template>
  <div class="page">
    <div class="page__head">
      <h2 class="page__title">系统设置</h2>
      <p class="page__sub">配置站点基本信息与通知偏好。</p>
    </div>

    <div class="card">
      <h3 class="card__title">基本信息</h3>
      <div class="field">
        <label class="field__label" for="siteName">站点名称</label>
        <input id="siteName" v-model="form.siteName" class="input" type="text" spellcheck="false" />
      </div>
      <div class="field">
        <label class="field__label" for="fromEmail">通知邮箱</label>
        <input id="fromEmail" v-model="form.fromEmail" class="input" type="email" />
      </div>
    </div>

    <div class="card">
      <h3 class="card__title">通知偏好</h3>
      <ul class="toggles">
        <li
          v-for="item in toggles"
          :key="item.key"
          class="toggle"
          @click="toggle(item.key)"
        >
          <div class="toggle__text">
            <span class="toggle__label">{{ item.label }}</span>
            <span class="toggle__desc">{{ item.desc }}</span>
          </div>
          <button
            type="button"
            role="switch"
            :aria-checked="item.on"
            class="switch"
            :class="{ 'switch--on': item.on }"
          >
            <span class="switch__knob" aria-hidden="true"></span>
          </button>
        </li>
      </ul>
    </div>

    <div class="actions">
      <span v-if="saved" class="actions__saved">✓ 已保存</span>
      <button class="btn" type="button" @click="handleSave">保存设置</button>
    </div>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 720px;
  margin: 0 auto;
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

.card {
  background: var(--lp-card);
  border: 1px solid var(--lp-border);
  border-radius: 10px;
  padding: 18px 20px;
}
.card__title {
  margin: 0 0 16px;
  font-size: 14px;
  font-weight: 600;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 14px;
}
.field__label {
  font-size: 12.5px;
  color: var(--lp-text-secondary);
}
.input {
  height: 36px;
  padding: 0 12px;
  font-size: 13.5px;
  color: var(--lp-text);
  background: var(--lp-bg);
  border: 1px solid var(--lp-border);
  border-radius: var(--lp-radius);
  outline: none;
}
.input:focus {
  border-color: var(--lp-accent);
}

.toggles {
  margin: 0;
  padding: 0;
  list-style: none;
}
.toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid var(--lp-border);
  cursor: pointer;
}
.toggle:last-child {
  border-bottom: none;
}
.toggle__text {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.toggle__label {
  font-size: 13.5px;
  color: var(--lp-text);
  font-weight: 500;
}
.toggle__desc {
  font-size: 12.5px;
  color: var(--lp-text-dim);
}

.switch {
  position: relative;
  width: 40px;
  height: 22px;
  flex-shrink: 0;
  border: 1px solid var(--lp-border-strong);
  border-radius: 999px;
  background: #26262b;
  cursor: pointer;
  transition: background 0.15s ease;
}
.switch__knob {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #9c9ca6;
  transition:
    transform 0.15s ease,
    background 0.15s ease;
}
.switch--on {
  background: var(--lp-accent);
  border-color: var(--lp-accent);
}
.switch--on .switch__knob {
  transform: translateX(18px);
  background: #fff;
}

.actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
}
.actions__saved {
  font-size: 13px;
  color: #7cd87c;
}
.btn {
  height: 36px;
  padding: 0 18px;
  font-size: 13.5px;
  font-weight: 500;
  color: #fff;
  background: var(--lp-accent);
  border: none;
  border-radius: var(--lp-radius);
  cursor: pointer;
  transition: background 0.15s ease;
}
.btn:hover {
  background: var(--lp-accent-hover);
}
</style>