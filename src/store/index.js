import Vue from 'vue'
import Vuex from 'vuex'
import groups from '@/store/modules/groups'
import authentication from '@/store/modules/authentication'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: { groups, authentication }
})
