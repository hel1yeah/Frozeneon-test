<template>
  <div class="main">
    <div class="container">
      <app-search></app-search>
      <div class="wrapper">
        <app-card
          v-for="(item, index) in packagesList"
          :key="index"
          :user="item"
        ></app-card>
      </div>
      <app-pagination></app-pagination>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import AppCard from './AppCard.vue';
import AppPagination from './AppPagination.vue';
import AppSearch from './AppSearch.vue';
export default {
  components: {
    AppSearch,
    AppCard,
    AppPagination,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      packagesList: (state) => state.packages.packagesList,
    }),
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 40px 0 0;
}

.wrapper {
  margin: 10px 0 0;
}
</style>
