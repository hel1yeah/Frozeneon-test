<template>
  <div class="warapper">
    <div class="loading" v-if="loading">{{ loading }}</div>
    <div class="inner" v-else>
      <v-card
        elevation="9"
        v-for="(pack, index) in packagesList"
        :key="index"
        >{{ pack }}</v-card
      >
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  methods: {
    getPackages() {
      this.$store.dispatch('packages/getPackagesList');
    },
  },
  computed: mapState({
    packagesList: (state) => state.packages.packagesList,
    loading: (state) => state.packages.loading,
  }),
  created() {
    this.getPackages();
  },
};
</script>

<style lang="scss"></style>
