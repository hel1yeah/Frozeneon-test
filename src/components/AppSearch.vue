<template>
  <div class="search">
    <v-text-field
      label="Enter package name"
      hide-details="auto"
      v-model="serchText"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'AppSearch',
  data() {
    return {
      serchText: '',
    };
  },
  methods: {
    getPackageFiles(value) {
      this.$store.dispatch('packages/getPackageList', value);
    },
  },
  watch: {
    serchText: function (valueNew) {
      this.getPackageFiles(valueNew);
    },
  },
};
</script>

<style lang="scss" scoped></style>
