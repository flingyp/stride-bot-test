import { ref } from 'vue'
import { defineStore } from 'pinia'

//
// 轻量登录态（演示项目，未接后端）。
// 后台框架模版的鉴权骨架：登录置位、登出清空，路由守卫据此控制访问。
//

export const useAuthStore = defineStore('auth', () => {
  const loggedIn = ref(false)

  /** 模拟登录，成功后置位登录态。 */
  function login(): void {
    loggedIn.value = true
  }

  /** 登出，清空登录态。 */
  function logout(): void {
    loggedIn.value = false
  }

  return { loggedIn, login, logout }
})