<template>
  <div class="modal__wrapper">
    <app-loader v-if="loading"></app-loader>
    <app-error v-if="error">{{ error }}</app-error>
    <div v-if="fileInfo">
      <v-dialog :value="fileInfo" width="500">
        <v-card class="modal-card">
          <v-card-title class="app-card-title modal-header">
            <div class="modal-header--item">
              <a
                target="_blank"
                :href="
                  fileInfo
                    ? `https://www.npmjs.com/package/${fileInfo.name}`
                    : '#'
                "
                ><h2>{{ fileInfo.name }}</h2></a
              >
            </div>
            <div class="modal-header--item">
              <v-chip label outlined v-if="fileInfo.version">
                <v-icon size="14">mdi-tag</v-icon>
                <span class="chip-margin">{{ fileInfo.version }}</span>
              </v-chip>
            </div>
            <div class="modal-header--item">
              <v-chip label outlined v-if="fileInfo.license">
                <v-icon size="20">mdi-scale-balance</v-icon>
                <span class="chip-margin">{{ fileInfo.license }}</span>
              </v-chip>
            </div>
          </v-card-title>
          <div class="modal__owner">
            <v-avatar size="20" tile class="avatar">
              <img
                :src="fileInfo.owner.avatar"
                :alt="fileInfo.name"
                height="100%"
              />
            </v-avatar>
            <a
              target="_blank"
              class="modal__owner--name"
              :href="fileInfo.owner.link"
              >{{ fileInfo.owner.name }}</a
            >
          </div>
          <div class="modal-header-subtile">
            {{ fileInfo.description }}
          </div>
          <div class="keywords-wrapper modal-header__keywords">
            <v-chip
              label
              outlined
              class="keywords"
              v-for="(key, index) in fileInfo.keywords"
              :key="index"
            >
              {{ key }}
            </v-chip>
          </div>
          <div class="modal-main__header">
            <h4>{{ fileInfo.files.length }} Files</h4>
            <span>v{{ fileInfo.version }} </span>
          </div>

          <div class="modal-main">
            <div
              class="modal-main__files"
              v-for="(file, index) in fileInfo.files"
              :key="index"
            >
              <div class="modal-main__files-name">{{ file.name }}</div>
              <div class="modal-main__files-size" v-if="file.size">
                {{ file.size }} kb
              </div>
            </div>
          </div>
          <v-divider></v-divider>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppError from './UI/AppError.vue';

import AppLoader from './UI/AppLoader.vue';

export default {
  components: { AppLoader, AppError },
  name: 'AppModal',
  data() {
    return {
      // dialog: true,
    };
  },
  computed: {
    ...mapGetters({
      fileInfo: 'modal/fileInfo',
      error: 'modal/error',
      loading: 'modal/loading',
    }),
  },
};
</script>

<style lang="scss">
.app-card-title {
}
.modal-card > h4 {
  margin: 16px 24px;
}
.modal__owner {
  margin: 5px 24px;
  display: flex;
  align-items: center;
}
.modal__owner--name {
  margin: 0 0 0 10px;
  font-size: 18px;
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid var(--red-color);
}
.modal-main__header {
  display: flex;
  justify-content: space-between;
  margin: 5px 24px;
}
.modal-header--item {
  margin: 0 15px 0 0;
}

.modal-header-subtile {
  margin: 10px 24px;
  font-size: 16px;
}
.modal-header__keywords {
  margin: 16px 24px;
}
.modal-main {
  border: 1px solid var(--red-color);
  border-radius: 5px;
  margin: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  overflow: auto;
  max-height: 300px;
}
.modal-main__files {
  box-sizing: border-box;
  width: 100%;
  padding: 5px 10px 0;
  display: flex;

  justify-content: space-between;
  align-items: center;
}
.modal-main__files-name {
}
</style>
