<template>
  <div id="app">
    <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
// import { mapState } from 'vuex';
import AppFooter from './components/AppFooter.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'App',
  components: {
    AppFooter,
    AppMain,
  },
  data() {
    return {};
  },
  // methods: {
  //   getPackages() {
  //     this.$store.dispatch('packages/getPackagesList');
  //   },
  // },
  // computed: mapState({
  //   packagesList: (state) => state.packages.packagesList,
  //   loading: (state) => state.packages.loading,
  // }),
  // created() {
  //   this.getPackages();
  // },
};
</script>

<style lang="scss">
.inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 300px;
  border-radius: 5px;
  height: 120px;
  padding: 20px 10px;
  margin: 9px;
  box-shadow: 0px 0px 10px var(--blue-clor);
}
</style>

<!-- <div class="loading" v-if="loading">{{ loading }}</div> -->
<!-- <div class="inner" v-else>
    <div class="card" v-for="(pack, index) in packagesList" :key="index">
      <div class="card__title">{{ pack.name }}</div>
      <div class="card__sub-title">{{ pack.hits }}</div>
      <div class="card__text">{{ pack.type }}</div>
    </div>
  </div> -->
<!-- <v-row justify="center">
    <v-col cols="8">
      <v-container class="max-width">
        <v-pagination
          v-model="page"
          class="my-4"
          :length="limit"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </v-container>
    </v-col>
  </v-row> -->
