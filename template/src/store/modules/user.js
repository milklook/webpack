const user = {
  namespaced: true,
  state: {
    token: localStorage.getItem('sys_token') || undefined,
    userInfo: JSON.parse(localStorage.getItem('user')) || {}
  },
  getters: {
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo
    }
  },
  actions: {
    setToken({ commit }, { token }) {
      commit('SET_TOKEN', token)
    },
    setUserInfo({ commit }, { userInfo }) {
      commit('SET_USER_INFO', userInfo)
    },
  }
}

export default user