<template>
  <div class="main">
    <div class="container">
      <app-search></app-search>

      <app-loader v-if="loading"></app-loader>
      <app-error v-if="error">{{ error }}</app-error>
      <div class="wrapper" v-if="packagesList">
        <app-card
          v-for="(item, index) in packagesList"
          :key="index"
          :user="item"
        >
        </app-card>
      </div>
      <app-pagination v-if="packagesList"></app-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import AppCard from './AppCard.vue';
import AppError from './UI/AppError.vue';
import AppLoader from './UI/AppLoader.vue';

import AppPagination from './UI/AppPagination.vue';
import AppSearch from './AppSearch.vue';
export default {
  components: {
    AppSearch,
    AppCard,
    AppPagination,
    AppLoader,
    AppError,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      packagesList: 'packages/packagesList',
      loading: 'packages/loading',
      error: 'packages/error',
    }),
  },
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  flex-grow: 1;
  padding: 40px 0 0;
}

.wrapper {
  margin: 10px 0 0;
}
</style>
