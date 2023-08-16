import { createStore } from 'vuex'

import { SET_USERINFO } from '@/store/mutations-type'
import { setToken, removeToken } from '@/composables/auth'
import { getInfo, login } from '@/api/manage'

export const store = createStore({
  state: () => ({
    // 用户信息
    user: {}
  }),
  mutations: {
    // 设置用户信息
    [SET_USERINFO](state, payload) {
      state.user = payload
    }
  },
  actions: {
    async getInfoActions({ commit }) {
      const res = await getInfo()
      commit(SET_USERINFO, res)
    },
    async loginActions({ commit }, { username, password }) {
      const res = await login(username, password)
      setToken(res.token)
      return res
    },
    logoutActions({ commit }) {
      // 清除token
      removeToken()

      commit(SET_USERINFO, {})
      // 清空vuex中user
      // const res = await login(username, password)
      // setToken(res.token)
      // return res
    }
  }
})