<template>
  <article class="app-card" @click="getFile(user)" tabindex="0" role="button">
    <header class="app-card__header">
      <h3 class="app-card__title">{{ user.name }}</h3>
      <div class="app-card__badges">
        <span
          class="app-card__badge app-card__badge--popular"
          v-if="user.popular"
        >
          <v-icon size="14" color="#ff5627">mdi-fire</v-icon>
          Popular
        </span>
        <span class="app-card__badge" v-if="user.humanDownloadsLast30Days">
          <v-icon size="14">mdi-download</v-icon>
          {{ user.humanDownloadsLast30Days }}/mo
        </span>
      </div>
    </header>

    <div class="app-card__meta">
      <div class="app-card__owner" v-if="user.owner">
        <v-avatar size="20" tile class="app-card__avatar">
          <img :src="user.owner.avatar" :alt="user.name" height="100%" />
        </v-avatar>
        <a
          target="_blank"
          rel="noopener"
          class="app-card__owner-link"
          :href="user.owner.link"
          @click.stop
          >{{ user.owner.name }}</a
        >
      </div>
      <v-chip label outlined small v-if="user.version" class="app-card__chip">
        <v-icon size="14">mdi-tag</v-icon>
        <span class="chip-margin">{{ user.version }}</span>
      </v-chip>
      <v-chip label outlined small v-if="user.license" class="app-card__chip">
        <v-icon size="14">mdi-scale-balance</v-icon>
        <span class="chip-margin">{{ user.license }}</span>
      </v-chip>
    </div>

    <p class="app-card__description" v-if="user.description">
      {{ user.description }}
    </p>

    <div class="keywords-wrapper" v-if="user.keywords && user.keywords.length">
      <v-chip
        label
        outlined
        small
        class="keywords"
        v-for="key in user.keywords"
        :key="key"
      >
        {{ key }}
      </v-chip>
    </div>

    <footer class="app-card__footer">
      <code class="app-card__install">
        <v-icon size="14" class="mr-1">mdi-console</v-icon>
        npm install {{ user.name }}
      </code>
      <button
        type="button"
        class="app-card__copy"
        @click.stop="copyInstall"
        :title="copied ? 'Copied!' : 'Copy install command'"
      >
        <v-icon size="16">{{
          copied ? 'mdi-check' : 'mdi-content-copy'
        }}</v-icon>
      </button>
    </footer>
  </article>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      copied: false,
    };
  },
  methods: {
    getFile(user) {
      this.$store.dispatch('modal/getFile', user);
    },
    async copyInstall() {
      const cmd = `npm install ${this.user.name}`;
      try {
        await navigator.clipboard.writeText(cmd);
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 1500);
      } catch (err) {
        this.copied = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.app-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 20px;
  margin: 10px 0;
  border: 1px solid #e8ecef;
  border-radius: 8px;
  background-color: var(--white-color);
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
  outline: none;

  &:hover,
  &:focus-visible {
    border-color: var(--red-color);
    box-shadow: 0 4px 16px rgba(255, 86, 39, 0.12);
    transform: translateY(-1px);
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__title {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    color: var(--black-color);
    word-break: break-word;
  }

  &__badges {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }

  &__badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
    background-color: #f4f6f8;
    color: #4a5560;

    &--popular {
      background-color: rgba(255, 86, 39, 0.1);
      color: var(--red-color);
      font-weight: 600;
    }
  }

  &__meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }

  &__owner {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__avatar {
    border-radius: 3px !important;
  }

  &__owner-link {
    font-size: 13px;
    color: #4a5560;
    text-decoration: none;

    &:hover {
      color: var(--red-color);
      text-decoration: underline;
    }
  }

  &__chip {
    font-size: 12px !important;
  }

  &__description {
    margin: 0;
    font-size: 14px;
    color: #4a5560;
    line-height: 1.5;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-top: 4px;
    padding-top: 8px;
    border-top: 1px dashed #e8ecef;
  }

  &__install {
    flex: 1;
    display: inline-flex;
    align-items: center;
    padding: 6px 10px;
    background-color: #1d262c;
    color: #8ca4d8;
    border-radius: 4px;
    font-family: 'Monaco', 'Menlo', monospace;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__copy {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    border: 1px solid #e8ecef;
    background-color: var(--white-color);
    cursor: pointer;
    transition:
      background-color 0.15s ease,
      border-color 0.15s ease;

    &:hover {
      background-color: #f4f6f8;
      border-color: var(--red-color);
    }
  }
}

.chip-margin {
  margin-left: 4px;
}

.keywords-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.keywords {
  font-size: 12px !important;
}
</style>
