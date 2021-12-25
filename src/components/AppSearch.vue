<template>
  <div class="search">
    <v-text-field
      placeholder="Enter package name"
      prepend-icon="mdi-search-web"
      color="#000"
      height="40"
      class="v-custom-input"
      v-model="serchText"
    >
    </v-text-field>
  </div>
</template>

<script>
import { debounce } from 'lodash';

export default {
  name: 'AppSearch',
  data() {
    return {
      serchText: '',
    };
  },
  methods: {
    getPackageFiles(value) {
      this.$store.dispatch('packages/searchPackages', value);
    },
  },
  watch: {
    serchText: debounce(function (valueNew) {
      this.getPackageFiles(valueNew);
    }, 500),
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
