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
          .then(({ hits, nbPages }) => {
            const errtext = 'No results found. Please enter a different value';
            if (Object.keys(hits).length === 0) {
              commit('packagesListFailure', errtext);
            } else {
              commit('packagesListSuccess', hits);
              commit('updateNbPagesStart', nbPages);
            }
          })
          .catch((err) => {
            console.log(err);
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
    packagesList: (state) => state.packagesList,
    page: (state) => state.page,
    error: (state) => state.error,
    loading: (state) => state.loading,
    nbPages: (state) => state.nbPages,
  },
};
