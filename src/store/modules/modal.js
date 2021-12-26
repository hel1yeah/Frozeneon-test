import { getFileInfo } from '../../api/getInfo';

export default {
  namespaced: true,
  state() {
    return {
      fileInfo: null,
      error: null,
      loading: false,
    };
  },
  mutations: {
    fileInfoStart(state) {
      state.fileInfo = null;
      state.error = null;
      state.loading = true;
    },
    fileInfoSuccess(state, payload) {
      state.fileInfo = payload;
      state.error = null;
      state.loading = false;
    },
    fileInfoFailure(state, payload) {
      state.fileInfo = null;
      state.error = payload;
      state.loading = false;
    },
  },
  actions: {
    getFile({ commit }, user) {
      return new Promise(() => {
        commit('fileInfoStart');
        getFileInfo(user)
          .then(({ data }) => {
            // console.log(data);
            let newFile = { ...user, ...data };
            commit('fileInfoSuccess', newFile);
          })
          .catch((err) => {
            commit('fileInfoFailure', err);
          });
      });
    },
  },
  getters: {
    fileInfo: (state) => state.fileInfo,
  },
};
