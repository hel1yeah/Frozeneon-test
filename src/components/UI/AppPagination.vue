<template>
  <div class="text-center app-pagination">
    <v-pagination
      :value="page"
      @input="setPage($event)"
      :length="3"
      :total-visible="10"
    >
    </v-pagination>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
    ...mapGetters({
      page: 'packages/page',
      packagesList: 'packages/packagesList',
    }),
    allPages() {
      console.log(this.packagesList);
      console.log(Math.ceil(this.packagesList / 10));
      return Math.ceil(this.packagesList / 10);
    },
    // page() {
    //   return this.$store.state.packages.page;
    // },
  },
  mounted() {},
};
</script>

<style lang="scss">
.app-pagination {
  margin: 20px 0 0;
}
</style>
