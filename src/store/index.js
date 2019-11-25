import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: ''
  },
  mutations: {
    // 通过 mutation 改变状态
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
  },
  modules: {
  }
})
