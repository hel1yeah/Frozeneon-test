import { getPackageList } from './../../api/algoliasearch';

export default {
  namespaced: true,
  state() {
    return {
      packagesList: null,
      page: 1,
      searchText: '',
      error: null,
      loading: false,
      nbPages: null,
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
    updateNbPagesStart(state, payload) {
      state.nbPages = payload;
    },
    updateSearchTextStart(state, payload) {
      state.searchText = payload;
    },

    updatePageStart(state, payload) {
      state.page = payload;
    },
  },
  actions: {
    async searchPackages({ commit, state }) {
      commit('packagesListStart');
      try {
        const { hits, nbPages } = await getPackageList(
          state.searchText,
          state.page - 1
        );
        if (!hits || hits.length === 0) {
          commit(
            'packagesListFailure',
            'No results found. Please enter a different value'
          );
          return;
        }
        commit('packagesListSuccess', hits);
        commit('updateNbPagesStart', nbPages);
      } catch (err) {
        const message = (err && err.message) || 'Failed to load packages';
        commit('packagesListFailure', message);
      }
    },
    updateSearchText({ commit }, payload) {
      commit('updateSearchTextStart', payload);
    },
    updatePage({ commit }, payload) {
      commit('updatePageStart', payload);
    },
  },
  getters: {
    searchText: (state) => state.searchText,
    packagesList: (state) => state.packagesList,
    page: (state) => state.page,
    error: (state) => state.error,
    loading: (state) => state.loading,
    nbPages: (state) => state.nbPages,
    isDefaultView: (state) =>
      !state.searchText || state.searchText.length === 0,
  },
};
