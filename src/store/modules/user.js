import User from '../../api/user'
import { set, get } from '../../untils/storage'
export default {
  namespaced: true,
  state: () => ({
    token: get('token') || ''
  }),
  mutations: {
    handleSetToken(state, token) {
      state.token = token
      set('token', token)
    }
  },
  actions: {
    async handleToken({ commit }, formData) {
      const response = await User.userGet(formData)
      commit('handleSetToken', response.token)
    }
  }
}
