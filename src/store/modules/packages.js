import { getPackageList } from './../../api/algoliasearch';

export default {
  namespaced: true,
  state() {
    return {
      packagesList: null,
      page: 1,
      serchText: '',
      error: null,
      loading: false,
    };
  },
  mutations: {
    packagesListStart(state) {
      state.packagesList = null;
      state.error = null;
      state.loading = true;
    },
    packagesListSuccess(state, payload) {
      state.packagesList = payload;
      state.error = null;
      state.loading = false;
    },
    packagesListFailure(state, payload) {
      state.packagesList = null;
      state.error = payload;
      state.loading = false;
    },
    updateSerchTextStart(state, payload) {
      state.serchText = payload;
    },
    updatePageStart(state, payload) {
      state.page = payload;
    },
  },
  actions: {
    searchPackages({ commit, state }) {
      return new Promise(() => {
        commit('packagesListStart');
        getPackageList(state.serchText, state.page - 1)
          .then(({ hits }) => {
            commit('packagesListSuccess', hits);
          })
          .catch((err) => {
            commit('packagesListFailure', err);
          });
      });
    },
    updateSerchText({ commit }, payload) {
      commit('updateSerchTextStart', payload);
    },
    updatePage({ commit }, payload) {
      commit('updatePageStart', payload);
    },
  },
  getters: {
    serchText: (state) => state.serchText,
    page: (state) => state.page,
  },
};
