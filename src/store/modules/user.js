import User from '../../api/user'
import { set, get, removeAllItem } from '../../untils/storage'
export default {
  namespaced: true,
  state: () => ({
    token: get('token') || '',
    userInfo: get('userInfo') || []
  }),
  mutations: {
    handleSetToken(state, token) {
      state.token = token
      set('token', token)
    },
    handleSetUserInfo(state, userInfo) {
      state.userInfo = userInfo
      set('userInfo', userInfo)
    }
  },
  actions: {
    async handleToken({ commit }, formData) {
      const response = await User.userGet(formData)
      commit('handleSetToken', response.token)
    },
    async handleUserInfo({ commit }) {
      const response = await User.getUserInfo()
      commit('handleSetUserInfo', response)
      return response
    },
    loging({ commit }) {
      commit('handleSetToken', '')
      commit('handleSetUserInfo', '')
      removeAllItem()
    }
  }
}
