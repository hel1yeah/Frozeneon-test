import Vue from 'vue';
import Vuex from 'vuex';
import packages from './modules/packages';
import modal from './modules/modal';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { packages, modal },
});
