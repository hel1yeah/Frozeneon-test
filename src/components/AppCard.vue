<template>
  <div class="app-card">
    <div class="row">
      <v-card-title @click="getFile(user)" class="app-card-title">{{
        user.name
      }}</v-card-title>
    </div>
    <div class="col-xs-12 app-card--inner">
      <v-avatar size="20" tile class="avatar">
        <img :src="user.owner.avatar" :alt="user.name" height="100%" />
      </v-avatar>
      <v-card-text>{{ user.owner.name }}</v-card-text>
      <v-chip label outlined v-if="user.version">
        <v-icon size="14">mdi-tag</v-icon>
        <span class="chip-margin">{{ user.version }}</span>
      </v-chip>
      <v-chip label outlined v-if="user.license">
        <v-icon size="20">mdi-scale-balance</v-icon>
        <span class="chip-margin">{{ user.license }}</span>
      </v-chip>
    </div>

    <v-card-subtitle class="app-keywords-subtile">
      {{ user.description }}
    </v-card-subtitle>

    <div class="keywords-wrapper">
      <v-chip
        label
        outlined
        class="keywords"
        v-for="(key, index) in user.keywords"
        :key="index"
      >
        {{ key }}
      </v-chip>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      require: true,
    },
  },
  methods: {
    getFile(user) {
      this.$store.dispatch('modal/getFile', user);
    },
  },
};
</script>

<style lang="scss">
.app-card {
  border-bottom: 1px solid #e5e5e5;
  padding: 25px 0 10px;
}
.app-card-title {
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
}
.keywords-wrapper {
  margin-top: 10px;
}
.keywords {
  margin: 0 15px 10px 0;
}

.avatar {
  border-radius: 0 !important;
}
.chip-margin {
  margin-left: 5px;
}

.app-card .v-card__text {
  width: auto;
}

.app-card--inner {
  display: flex;
  align-items: center;

  .v-chip {
    margin-right: 15px;
  }
}

.app-card .app-keywords-subtile {
  padding: 0;
  font-weight: 700;
  opacity: 0.7;
}

.app-card .v-chip.v-size--default.keywords {
  padding: 2px 8px;
  font-size: 14px;
  height: auto;
}
</style>

'description', 'homepage', 'keywords', 'license', // 'name', // 'owner', //
'version',
