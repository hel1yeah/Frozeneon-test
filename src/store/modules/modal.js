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
    resetState(state) {
      state.fileInfo = null;
      state.error = null;
      state.loading = false;
    },
  },
  actions: {
    async getFile({ commit }, user) {
      commit('fileInfoStart');
      try {
        const { data } = await getFileInfo(user);
        commit('fileInfoSuccess', { ...user, ...data });
      } catch (err) {
        const message =
          (err && err.message) || 'Failed to load package details';
        commit('fileInfoFailure', message);
      }
    },
  },
  getters: {
    fileInfo: (state) => state.fileInfo,
    error: (state) => state.error,
    loading: (state) => state.loading,
  },
};
