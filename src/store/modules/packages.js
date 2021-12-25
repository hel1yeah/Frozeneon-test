import { getPackageList } from './../../api/algoliasearch';

export default {
  namespaced: true,
  state() {
    return {
      packagesList: null,
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
  },
  actions: {
    searchPackages({ commit }, value) {
      return new Promise(() => {
        commit('packagesListStart');
        getPackageList(value)
          .then(({ hits }) => {
            console.log(hits);
            commit('packagesListSuccess', hits);
          })
          .catch((err) => {
            commit('packagesListFailure', err);
          });
      });
    },
  },
};
