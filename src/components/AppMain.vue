<template>
  <div class="main">
    <div class="container">
      <app-search></app-search>
    </div>
  </div>
</template>

<script>
import AppSearch from './AppSearch.vue';
export default {
  components: {
    AppSearch,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1270px;
}
</style>
