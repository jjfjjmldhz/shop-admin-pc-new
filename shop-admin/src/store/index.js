import { createStore } from 'vuex'

import { SET_USERINFO } from './mutations-type'
import { login, getInfo } from '@/api/manage'
import { setToken, removeToken } from '@/composables/auth'

export const store = createStore({
  state: () => ({
    // 用户信息
    userInfo: {}
  }),
  mutations: {
    // 设置用户信息
    [SET_USERINFO](state, paylod) {
      state.userInfo = paylod
    }
  },
  actions: {
    // 登录
    async loginActions({ commit }, { username, password }) {
      const res = await login(username, password)
      // 设置token
      setToken(res.token)
      return res
    },
    // 获取用户信息
    async getInfoActions({ commit }) {
      const res = await getInfo()
      commit(SET_USERINFO, res)
      return res
    },
    // 退出登录
    logoutActions({ commit }) {
      // 清除token
      removeToken()
      // 清除当前用户信息
      commit(SET_USERINFO, {})
    }
  }
})