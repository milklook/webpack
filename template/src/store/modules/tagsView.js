const home = {
  name: '/home',
  title: 'Home'
}

const tagsView = {
  namespaced: true,
  state: {
    activedPage: home,
    visitedPages: [],
    allVisitedPages: [ home ]
  },
  getters: {
    allVisitedPages: state => {
      return [ home ].concat(state.visitedPages)
    }
  },
  mutations: {
    SET_ACTIVED_PAGE: (state, activedPage) => {
      state.activedPage = activedPage
    },
    ADD_VISITED_PAGES: (state, addPage) => {
      state.visitedPages.push(addPage)
    },
    REMOVE_PAGE_FROM_VISITED_PAGES: (state, index) => {
      state.visitedPages.splice(index, 1)
    }
  },
  actions: {
    addPage({ getters, commit }, addPage) {
      const isExsit = getters.allVisitedPages.some(el => el.name === addPage.name)
      if (!isExsit) {
        commit('ADD_VISITED_PAGES', addPage)
      }
      commit('SET_ACTIVED_PAGE', addPage)
    },
    setPage({ getters, commit }, setPage) {
      commit('SET_ACTIVED_PAGE', setPage)
    },
    removePage({ getters, commit }, { name, isCurrent }) {
      const index = getters.allVisitedPages.findIndex(el => el.name === name)
      commit('REMOVE_PAGE_FROM_VISITED_PAGES', index - 1)
      if (isCurrent) {
        commit('SET_ACTIVED_PAGE', getters.allVisitedPages[index - 1])
      }
    }
  }
}

export default tagsView