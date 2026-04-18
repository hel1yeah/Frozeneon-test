<template>
  <div class="text-center app-pagination">
    <v-pagination
      :value="page"
      @input="setPage($event)"
      :length="nbPages"
      :total-visible="10"
    >
    </v-pagination>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppPagination',
  methods: {
    setPage(value) {
      this.$store.dispatch('packages/updatePage', value);
      this.$store.dispatch('packages/searchPackages');
    },
  },
  computed: {
    ...mapGetters({
      page: 'packages/page',
      nbPages: 'packages/nbPages',
    }),
  },
};
</script>

<style lang="scss">
.app-pagination {
  margin: 20px 0 0;
}
</style>
