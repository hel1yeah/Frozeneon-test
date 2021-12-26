<template>
  <div id="app">
    <v-app>
      <app-modal></app-modal>
      <app-main></app-main>
      <app-footer></app-footer>
    </v-app>
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue';
import AppMain from './components/AppMain.vue';
import AppModal from './components/AppModal.vue';

export default {
  name: 'App',
  components: {
    AppFooter,
    AppMain,
    AppModal,
  },
  data() {
    return {};
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
  box-shadow: 0px 0px 10px var(--blue-clor);
}
</style>
