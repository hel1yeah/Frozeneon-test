<template>
  <div class="text-center app-pagination">
    <v-pagination
      :value="page"
      @input="setPage($event)"
      :length="15"
      :total-visible="10"
    ></v-pagination>
  </div>
</template>

<script>
// import { mapState } from 'vuex';

export default {
  data() {
    return {
      // page: '',
    };
  },
  methods: {
    setPage(value) {
      this.$store.dispatch('packages/updatePage', value);
      this.$store.dispatch('packages/searchPackages');
    },
  },
  computed: {
    // ...mapState({
    //   page: (state) => state.packages.page,
    // }),
    page() {
      return this.$store.state.packages.page;
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.app-pagination {
  margin: 20px 0 0;
}
</style>
