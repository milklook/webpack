const home = {
  fullPath: '/home',
  label: 'Home'
}

const tabViews = {
  namespaced: true,
  state: {
    activedPage: home,
    visitedPages: []
  },
  getters: {
    allVisitedPages: state => {
      return [home].concat(state.visitedPages)
    }
  },
  mutations: {
    SET_PAGE: (state, page) => {
      state.activedPage = page
    },
    ADD_PAGE: (state, page) => {
      state.visitedPages.push(page)
    },
    REMOVE_PAGE: (state, index) => {
      state.visitedPages.splice(index, 1)
    }
  },
  actions: {
    setPage({ state, commit }, { fullPath, label, isIndexed }) {
      const index = state.visitedPages.findIndex(el => el.fullPath === fullPath)
      const isHome = (index === -1 && fullPath === home.fullPath)
      if (!isHome && index === -1) {
        let max = 1
        if (isIndexed) {
          state.visitedPages.forEach(el => {
            if (el.fullPath.split('?')[0] === fullPath.split('?')[0] &&
              el.label.split('_')[0] === label) {
              const value = Number(el.label.split('_')[1])
              max = ((max <= value) ? value + 1 : max)
            }
          })
          label += `_${max}`
        }
        commit('ADD_PAGE', { fullPath, label })
      }
      commit('SET_PAGE', isHome ? home : { fullPath, label })
    },
    removePage({ state, commit }, { fullPath, isCurrent }) {
      const index = state.visitedPages.findIndex(el => el.fullPath === fullPath)
      commit('REMOVE_PAGE', index)
      if (isCurrent) {
        commit('SET_PAGE', index === 0 ? home : state.visitedPages[index - 1])
      }
    },
    removeOtherPages({ state, commit }, { fullPath }) {
      const index = state.visitedPages.findIndex(el => el.fullPath === fullPath)
      for (let i = state.visitedPages.length - 1; i >= 0; i--) {
        if (i === index) {
          continue
        }
        commit('REMOVE_PAGE', i)
      }
      commit('SET_PAGE', index === -1 ? home : state.visitedPages[0])
    },
    removeLeftPages({ state, commit }, { fullPath }) {
      const index = state.visitedPages.findIndex(el => el.fullPath === fullPath)
      for (let i = index - 1; i >= 0; i--) {
        commit('REMOVE_PAGE', i)
      }
      commit('SET_PAGE', index === -1 ? home : state.visitedPages[0])
    },
    removeRightPages({ state, commit }, { fullPath }) {
      const index = state.visitedPages.findIndex(el => el.fullPath === fullPath)
      for (let i = state.visitedPages.length - 1; i > index; i--) {
        commit('REMOVE_PAGE', i)
      }
      commit('SET_PAGE', index === -1 ? home : state.visitedPages[index])
    }
  }
}

export default tabViews