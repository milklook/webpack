import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import tabViews from './modules/tab-views'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    tabViews
  }
})

export default store