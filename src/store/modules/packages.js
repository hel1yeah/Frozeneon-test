import { getPackages } from './../../api/packages';

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
    getPackagesList({ commit }) {
      return new Promise(() => {
        commit('packagesListStart');
        getPackages()
          .then(({ data }) => {
            console.log(data);
            commit('packagesListSuccess', data);
          })
          .catch((err) => {
            commit('packagesListFailure', err);
          });
      });
    },
  },
};