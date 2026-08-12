<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

import { useAuthStore } from '@/stores/auth'

//
// Stride 风格登录界面（演示项目，未接入后端）。
// 提交时校验固定账号/密码，匹配后才进入后台管理框架。
//

const router = useRouter()
const auth = useAuthStore()

const form = reactive<{ email: string; password: string; remember: boolean }>({
  email: '',
  password: '',
  remember: true,
})

const showPassword = ref(false)
const submitting = ref(false)
const error = ref('')

const emailError = computed(() => {
  if (!form.email) return '请输入邮箱'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return '邮箱格式不正确'
  return ''
})

const passwordValid = computed(() => form.password.length > 0)

function handleSubmit(): void {
  error.value = ''

  if (emailError.value) {
    // 聚焦行为交给输入框，这里仅提示
    return
  }
  if (!passwordValid.value) {
    error.value = '请输入密码'
    return
  }

  submitting.value = true
  window.setTimeout(() => {
    submitting.value = false
    const ok = auth.login(form.email, form.password)
    if (!ok) {
      error.value = '账号或密码不正确'
      return
    }
    router.push({ name: 'dashboard' })
  }, 900)
}
</script>

<template>
  <main class="login-page">
    <!-- 背景氛围光 -->
    <div class="glow glow--top" aria-hidden="true"></div>
    <div class="glow glow--bottom" aria-hidden="true"></div>

    <div class="card">
      <!-- 品牌区 -->
      <div class="brand">
        <div class="brand__logo" aria-hidden="true">
          <svg viewBox="0 0 32 32" width="40" height="40">
            <defs>
              <linearGradient id="strideBrand" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#45e0a0" />
                <stop offset="1" stop-color="#2fce89" />
              </linearGradient>
            </defs>
            <rect x="1.5" y="1.5" width="29" height="29" rx="7" fill="url(#strideBrand)" />
            <path
              d="M10.5 9.5v11"
              stroke="#0e0e10"
              stroke-width="2.4"
              stroke-linecap="round"
            />
            <path
              d="M21.5 22.5v-7a3 3 0 0 0-3-3H10.5"
              stroke="#0e0e10"
              stroke-width="2.4"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
            />
          </svg>
        </div>
        <h1 class="brand__name">Stride</h1>
        <p class="brand__tagline">登录以继续使用 Stride</p>
      </div>

      <!-- 表单区 -->
      <form class="form" novalidate @submit.prevent="handleSubmit">
        <label class="field">
          <span class="field__label">邮箱</span>
          <input
            v-model="form.email"
            class="field__input"
            type="email"
            name="email"
            autocomplete="email"
            placeholder="name@company.com"
            spellcheck="false"
            @input="error = ''"
          />
        </label>

        <label class="field">
          <span class="field__label">密码</span>
          <div class="field__control">
            <input
              v-model="form.password"
              class="field__input field__input--with-action"
              :type="showPassword ? 'text' : 'password'"
              name="password"
              autocomplete="current-password"
              placeholder="请输入密码"
              @input="error = ''"
            />
            <button
              type="button"
              class="field__toggle"
              :aria-pressed="showPassword"
              :aria-label="showPassword ? '隐藏密码' : '显示密码'"
              @click="showPassword = !showPassword"
            >
              {{ showPassword ? '隐藏' : '显示' }}
            </button>
          </div>
        </label>

        <p v-if="emailError" class="form__error">{{ emailError }}</p>
        <p v-else-if="error" class="form__error">{{ error }}</p>

        <div class="form__row">
          <label class="checkbox">
            <input v-model="form.remember" type="checkbox" />
            <span class="checkbox__mark" aria-hidden="true"></span>
            <span>记住我</span>
          </label>
          <a class="link" href="#" @click.prevent>忘记密码？</a>
        </div>

        <button class="submit" type="submit" :disabled="submitting">
          <span v-if="submitting" class="submit__spinner" aria-hidden="true"></span>
          <span>{{ submitting ? '登录中…' : '继续' }}</span>
        </button>
      </form>

      <!-- 页脚 -->
      <p class="footer">
        还没有账号？<a class="link" href="#" @click.prevent>创建账号</a>
      </p>
      <p class="legal">
        <a class="link" href="#" @click.prevent>隐私政策</a>
        <span class="legal__dot">·</span>
        <a class="link" href="#" @click.prevent>服务条款</a>
      </p>
    </div>
  </main>
</template>

<style scoped>
.login-page {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding: 24px;
  overflow: hidden;
  background: var(--lp-bg);
}

/* 氛围光 */
.glow {
  position: absolute;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
}
.glow--top {
  top: -220px;
  right: -120px;
  background: radial-gradient(circle, rgba(47, 206, 137, 0.16), transparent 70%);
}
.glow--bottom {
  bottom: -240px;
  left: -140px;
  background: radial-gradient(circle, rgba(69, 224, 160, 0.1), transparent 70%);
}

/* 卡片 */
.card {
  position: relative;
  width: 100%;
  max-width: 400px;
  background: var(--lp-card);
  border: 1px solid var(--lp-border);
  border-radius: 10px;
  padding: 40px 36px 28px;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.2),
    0 16px 48px rgba(0, 0, 0, 0.45);
}

/* 品牌区 */
.brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 28px;
}
.brand__logo {
  margin-bottom: 16px;
}
.brand__name {
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.01em;
}
.brand__tagline {
  margin: 6px 0 0;
  font-size: 13px;
  color: var(--lp-text-secondary);
}

/* 表单 */
.form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.field__label {
  font-size: 12px;
  font-weight: 500;
  color: var(--lp-text-secondary);
}

.field__control {
  position: relative;
}

.field__input {
  width: 100%;
  height: 38px;
  padding: 0 12px;
  font-size: 14px;
  color: var(--lp-text);
  background: var(--lp-card);
  border: 1px solid var(--lp-border);
  border-radius: var(--lp-radius);
  outline: none;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;
}
.field__input::placeholder {
  color: var(--lp-text-dim);
}
.field__input:hover {
  border-color: var(--lp-border-strong);
}
.field__input:focus {
  border-color: var(--lp-accent);
  box-shadow: 0 0 0 3px var(--lp-accent-soft);
}

.field__input--with-action {
  padding-right: 72px;
}
.field__toggle {
  position: absolute;
  top: 50%;
  right: 6px;
  transform: translateY(-50%);
  padding: 6px 8px;
  font-size: 12px;
  color: var(--lp-text-secondary);
  background: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.field__toggle:hover {
  color: var(--lp-text);
  background: rgba(255, 255, 255, 0.06);
}

.form__error {
  margin: 0;
  font-size: 12.5px;
  color: var(--lp-danger);
}
.form__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

/* 复选 */
.checkbox {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--lp-text-secondary);
  cursor: pointer;
  user-select: none;
}
.checkbox input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.checkbox__mark {
  width: 16px;
  height: 16px;
  border: 1px solid var(--lp-border-strong);
  border-radius: 4px;
  background: var(--lp-card);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition:
    background 0.15s ease,
    border-color 0.15s ease;
}
.checkbox input:checked + .checkbox__mark {
  background: var(--lp-accent);
  border-color: var(--lp-accent);
}
.checkbox input:checked + .checkbox__mark::after {
  content: '';
  width: 8px;
  height: 5px;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: translateY(-1px) rotate(-45deg);
}
.checkbox input:focus-visible + .checkbox__mark {
  box-shadow: 0 0 0 3px var(--lp-accent-soft);
}

/* 主按钮 */
.submit {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 38px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background: var(--lp-accent);
  border: none;
  border-radius: var(--lp-radius);
  cursor: pointer;
  transition: background 0.15s ease;
}
.submit:hover:not(:disabled) {
  background: var(--lp-accent-hover);
}
.submit:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px var(--lp-accent-soft);
}
.submit:disabled {
  opacity: 0.7;
  cursor: default;
}
.submit__spinner {
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

/* 链接 / 页脚 */
.link {
  color: var(--lp-text-secondary);
  text-decoration: none;
  transition: color 0.15s ease;
}
.link:hover {
  color: var(--lp-accent);
}

.footer {
  margin: 22px 0 0;
  text-align: center;
  font-size: 13px;
  color: var(--lp-text-secondary);
}

.legal {
  margin: 14px 0 0;
  text-align: center;
  font-size: 12px;
  color: var(--lp-text-dim);
}
.legal__dot {
  margin: 0 6px;
}

@media (max-width: 480px) {
  .card {
    padding: 32px 24px 24px;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>