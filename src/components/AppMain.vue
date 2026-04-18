<template>
  <div class="main">
    <div class="container">
      <app-search></app-search>

      <div class="section-header" v-if="!loading && !error">
        <h2 class="section-header__title">
          <v-icon v-if="isDefaultView" color="#ff5627" class="mr-2"
            >mdi-fire</v-icon
          >
          <v-icon v-else color="#ff5627" class="mr-2"
            >mdi-package-variant</v-icon
          >
          {{ headerTitle }}
        </h2>
        <span class="section-header__hint" v-if="isDefaultView">
          Start typing to search for any npm package
        </span>
      </div>

      <app-loader v-if="loading"></app-loader>
      <app-error v-if="error">{{ error }}</app-error>

      <transition name="fade">
        <div class="wrapper" v-if="packagesList && !loading">
          <app-card
            v-for="item in packagesList"
            :key="`${item.name}@${item.version}`"
            :user="item"
          >
          </app-card>
        </div>
      </transition>

      <app-pagination
        v-if="packagesList && nbPages && nbPages > 1"
      ></app-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import AppCard from './AppCard.vue';
import AppPagination from './UI/AppPagination.vue';
import AppSearch from './AppSearch.vue';

export default {
  name: 'AppMain',
  components: {
    AppSearch,
    AppCard,
    AppPagination,
  },
  computed: {
    ...mapGetters({
      packagesList: 'packages/packagesList',
      loading: 'packages/loading',
      error: 'packages/error',
      nbPages: 'packages/nbPages',
      searchText: 'packages/searchText',
      isDefaultView: 'packages/isDefaultView',
    }),
    headerTitle() {
      if (this.isDefaultView) return 'Popular packages';
      return `Results for "${this.searchText}"`;
    },
  },
  mounted() {
    if (!this.packagesList) {
      this.$store.dispatch('packages/searchPackages');
    }
  },
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  flex-grow: 1;
  padding: 40px 0 0;
}

.section-header {
  margin: 24px 0 8px;
  display: flex;
  flex-direction: column;

  &__title {
    display: flex;
    align-items: center;
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    color: var(--black-color);
  }

  &__hint {
    margin-top: 4px;
    font-size: 13px;
    color: #6b7680;
  }
}

.wrapper {
  margin: 10px 0 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
