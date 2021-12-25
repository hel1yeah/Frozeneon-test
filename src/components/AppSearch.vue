<template>
  <div class="search">
    <v-text-field
      placeholder="Enter package name"
      prepend-icon="mdi-search-web"
      color="#000"
      height="40"
      class="v-custom-input"
      :value="serchText"
      @input="updateSerchText"
    >
    </v-text-field>
  </div>
</template>

<script>
import { debounce } from 'lodash';

export default {
  name: 'AppSearch',
  data() {
    return {};
  },
  methods: {
    setUrl(value) {
      this.$router.push({ path: 'search', query: { q: value } });
    },
    updateSerchText(value) {
      this.$store.dispatch('packages/updateSerchText', value);
      this.getPackageList(value);
    },
    getPackageList: debounce(function (value) {
      this.$store.dispatch('packages/searchPackages');
      this.setUrl(value);
    }, 500),
  },
  mounted() {
    const isSearch = this.$route.path === '/search';
    const isQuery = this.$route.query.q;

    if (isSearch && isQuery.length > 0) {
      this.updateSerchText(isQuery);
    }
  },
  computed: {
    serchText() {
      return this.$store.state.packages.serchText;
    },
  },
  watch: {
    // serchText: debounce(function (valueNew) {
    //   this.getPackageFiles(valueNew);
    //   this.setUrl(valueNew);
    // }, 500),
  },
};
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  display: block;
  padding: 10px 20px;
  border: 1px solid #ff5627;
  border-radius: 3px;
  outline: 0;

  .v-custom-input {
    align-items: center;
  }
}
</style>
