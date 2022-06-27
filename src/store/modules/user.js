import User from '../../api/user'
export default {
  namespaced: true,
  state: () => ({
    token: JSON.parse(localStorage.getItem('token')) || ''
  }),
  mutations: {
    handleSetToken(state, response) {
      console.log(response)
      state.token = JSON.stringify(response.token)
      localStorage.setItem('token', state.token)
    }
  },
  actions: {
    async handleToken({ commit }, formData) {
      const response = await User.userGet(formData)
      commit('handleSetToken', response)
    }
  }
}
