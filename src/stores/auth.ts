import { ref } from 'vue'
import { defineStore } from 'pinia'

//
// 轻量登录态（演示项目，未接后端）。
// 固定账号/密码登录：仅当账号与密码均匹配时置位登录态。
// 路由守卫据此控制访问。
//

/** 固定登录账号。 */
export const LOGIN_ACCOUNT = 'admin@stride.local'
/** 固定登录密码。 */
export const LOGIN_PASSWORD = 'admin123'

export const useAuthStore = defineStore('auth', () => {
  const loggedIn = ref(false)

  /**
   * 校验固定账号/密码并登录。
   * @returns 是否登录成功。
   */
  function login(account: string, password: string): boolean {
    if (account.trim() === LOGIN_ACCOUNT && password === LOGIN_PASSWORD) {
      loggedIn.value = true
      return true
    }
    return false
  }

  /** 登出，清空登录态。 */
  function logout(): void {
    loggedIn.value = false
  }

  return { loggedIn, login, logout }
})