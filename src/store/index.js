import Vue from 'vue'
import Vuex from 'vuex'
import * as localStorageTool from '@/Utils/loaclstorage.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: localStorageTool.getItem('user')
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
