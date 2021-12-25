import Vue from 'vue';
import Vuex from 'vuex';
import packages from './modules/packages';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { packages },
});
