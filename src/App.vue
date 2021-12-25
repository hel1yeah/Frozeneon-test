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
