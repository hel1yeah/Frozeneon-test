<template>
  <div class="search">
    <v-text-field
      placeholder="Search npm packages (e.g. vue, lodash, axios)"
      prepend-inner-icon="mdi-magnify"
      :append-icon="searchText ? 'mdi-close-circle' : ''"
      @click:append="clearSearch"
      color="#ff5627"
      hide-details
      solo
      flat
      class="v-custom-input"
      :value="searchText"
      :loading="loading"
      @input="updateSearchText"
      autofocus
    >
    </v-text-field>
  </div>
</template>

<script>
import { debounce } from 'lodash';
import { mapGetters } from 'vuex';

export default {
  name: 'AppSearch',
  methods: {
    setUrl(value) {
      const target = value
        ? { path: '/search', query: { q: value } }
        : { path: '/' };
      this.$router.push(target).catch((err) => {
        if (err.name !== 'NavigationDuplicated') throw err;
      });
    },
    updateSearchText(value) {
      this.$store.dispatch('packages/updateSearchText', value);
      this.$store.dispatch('packages/updatePage', 1);
      this.getPackageList(value);
    },
    getPackageList: debounce(function (value) {
      this.$store.dispatch('packages/searchPackages');
      this.setUrl(value);
    }, 400),
    clearSearch() {
      this.updateSearchText('');
    },
  },
  mounted() {
    const isSearch = this.$route.path === '/search';
    const query = this.$route.query.q;
    if (isSearch && typeof query === 'string' && query.length > 0) {
      this.updateSearchText(query);
    }
  },
  computed: {
    ...mapGetters({
      searchText: 'packages/searchText',
      loading: 'packages/loading',
    }),
  },
};
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  padding: 4px 8px;
  border: 2px solid var(--red-color);
  border-radius: 8px;
  background-color: var(--white-color);
  transition: box-shadow 0.2s ease;

  &:focus-within {
    box-shadow: 0 4px 16px rgba(255, 86, 39, 0.15);
  }
}
</style>
