<template>
  <div id="app">
    <v-app>
      <app-modal></app-modal>
      <router-view></router-view>
      <app-footer></app-footer>
    </v-app>
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue';
import AppModal from './components/AppModal.vue';

export default {
  name: 'App',
  components: {
    AppFooter,
    AppModal,
  },
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
  box-shadow: 0px 0px 10px var(--blue-color);
}
</style>
