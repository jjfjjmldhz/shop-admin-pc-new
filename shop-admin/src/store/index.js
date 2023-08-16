import { createStore } from 'vuex'

import { SET_USERINFO } from '@/store/mutations-type'

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
  }
})