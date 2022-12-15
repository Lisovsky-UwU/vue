import Vue from 'vue'
import Vuex from 'vuex'
import groups from '@/store/modules/groups'
import authentication from '@/store/modules/authentication'
import entries from '@/store/modules/entries'
import ads from '@/store/modules/ads'
import news from '@/store/modules/news'

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
  modules: { groups, authentication, entries, ads, news }
})
