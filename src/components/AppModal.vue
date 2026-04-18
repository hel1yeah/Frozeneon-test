<template>
  <div class="modal__wrapper">
    <app-loader v-if="loading"></app-loader>
    <app-error v-if="error">{{ error }}</app-error>
    <v-dialog
      v-if="fileInfo"
      :value="!!fileInfo"
      width="640"
      scrollable
      @input="close"
    >
      <v-card class="modal-card">
        <header class="modal-header">
          <div class="modal-header__top">
            <a
              target="_blank"
              rel="noopener"
              class="modal-header__name"
              :href="`https://www.npmjs.com/package/${fileInfo.name}`"
            >
              <h2>{{ fileInfo.name }}</h2>
              <v-icon size="18" color="#4a5560">mdi-open-in-new</v-icon>
            </a>
            <button
              type="button"
              class="modal-header__close"
              @click="close"
              aria-label="Close"
            >
              <v-icon>mdi-close</v-icon>
            </button>
          </div>
          <div class="modal-header__badges">
            <v-chip label outlined small v-if="fileInfo.version">
              <v-icon size="14">mdi-tag</v-icon>
              <span class="chip-margin">{{ fileInfo.version }}</span>
            </v-chip>
            <v-chip label outlined small v-if="fileInfo.license">
              <v-icon size="14">mdi-scale-balance</v-icon>
              <span class="chip-margin">{{ fileInfo.license }}</span>
            </v-chip>
            <v-chip
              label
              outlined
              small
              v-if="fileInfo.humanDownloadsLast30Days"
            >
              <v-icon size="14">mdi-download</v-icon>
              <span class="chip-margin"
                >{{ fileInfo.humanDownloadsLast30Days }}/mo</span
              >
            </v-chip>
          </div>
        </header>

        <section class="modal-body">
          <div class="modal__owner" v-if="fileInfo.owner">
            <v-avatar size="24" tile class="avatar">
              <img
                :src="fileInfo.owner.avatar"
                :alt="fileInfo.name"
                height="100%"
              />
            </v-avatar>
            <a
              target="_blank"
              rel="noopener"
              class="modal__owner--name"
              :href="fileInfo.owner.link"
              >{{ fileInfo.owner.name }}</a
            >
          </div>

          <p class="modal-description" v-if="fileInfo.description">
            {{ fileInfo.description }}
          </p>

          <div class="install-row">
            <code class="install-row__cmd">
              <v-icon size="14" color="#8ca4d8" class="mr-1"
                >mdi-console</v-icon
              >
              npm install {{ fileInfo.name }}
            </code>
            <button
              type="button"
              class="install-row__copy"
              @click="copyInstall"
              :title="copied ? 'Copied!' : 'Copy install command'"
            >
              <v-icon size="16">{{
                copied ? 'mdi-check' : 'mdi-content-copy'
              }}</v-icon>
            </button>
          </div>

          <div
            class="keywords-wrapper"
            v-if="fileInfo.keywords && fileInfo.keywords.length"
          >
            <v-chip
              label
              outlined
              small
              class="keywords"
              v-for="key in fileInfo.keywords"
              :key="key"
            >
              {{ key }}
            </v-chip>
          </div>

          <div v-if="fileInfo.files">
            <div class="modal-main__header">
              <h4>
                <v-icon size="18" class="mr-1">mdi-folder-open-outline</v-icon>
                {{ fileInfo.files.length }} files
              </h4>
              <span class="modal-main__version">v{{ fileInfo.version }}</span>
            </div>

            <ul class="modal-main">
              <li
                class="modal-main__files"
                v-for="file in fileInfo.files"
                :key="file.name"
              >
                <span class="modal-main__files-name">
                  <v-icon size="14" color="#6b7680">mdi-file-outline</v-icon>
                  {{ file.name }}
                </span>
                <span class="modal-main__files-size" v-if="file.size">
                  {{ formatSize(file.size) }}
                </span>
              </li>
            </ul>
          </div>
        </section>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppModal',
  data() {
    return {
      copied: false,
    };
  },
  computed: {
    ...mapGetters({
      fileInfo: 'modal/fileInfo',
      error: 'modal/error',
      loading: 'modal/loading',
    }),
  },
  methods: {
    close() {
      this.$store.commit('modal/resetState');
    },
    formatSize(bytes) {
      if (bytes < 1024) return `${bytes} B`;
      if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
      return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    },
    async copyInstall() {
      const cmd = `npm install ${this.fileInfo.name}`;
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

<style lang="scss">
.modal-card {
  padding: 0 !important;
}
.modal-header {
  padding: 20px 24px 12px;
  border-bottom: 1px solid var(--red-color);

  &__top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
  }

  &__name {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    color: var(--black-color);

    h2 {
      margin: 0;
      font-size: 22px;
      word-break: break-word;
    }

    &:hover {
      color: var(--red-color);
    }
  }

  &__close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: background-color 0.15s ease;

    &:hover {
      background-color: #f4f6f8;
    }
  }

  &__badges {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 12px;
  }
}

.modal-body {
  padding: 16px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.modal__owner {
  display: flex;
  align-items: center;
  gap: 10px;
}
.modal__owner--name {
  font-size: 14px;
  color: #4a5560;
  text-decoration: none;

  &:hover {
    color: var(--red-color);
    text-decoration: underline;
  }
}

.modal-description {
  margin: 0;
  font-size: 14px;
  color: #4a5560;
  line-height: 1.55;
}

.install-row {
  display: flex;
  align-items: stretch;
  gap: 8px;

  &__cmd {
    flex: 1;
    display: inline-flex;
    align-items: center;
    padding: 8px 12px;
    background-color: #1d262c;
    color: #8ca4d8;
    border-radius: 4px;
    font-family: 'Monaco', 'Menlo', monospace;
    font-size: 12px;
    overflow-x: auto;
    white-space: nowrap;
  }

  &__copy {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    border-radius: 4px;
    border: 1px solid #e8ecef;
    background-color: var(--white-color);
    cursor: pointer;
    transition: background-color 0.15s ease, border-color 0.15s ease;

    &:hover {
      background-color: #f4f6f8;
      border-color: var(--red-color);
    }
  }
}

.modal-main__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  h4 {
    display: flex;
    align-items: center;
    margin: 0;
    font-size: 14px;
    color: var(--black-color);
  }
}

.modal-main__version {
  font-size: 12px;
  color: #6b7680;
}

.modal-main {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #e8ecef;
  border-radius: 6px;
  max-height: 260px;
  overflow: auto;
}

.modal-main__files {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  font-size: 13px;
  border-bottom: 1px solid #f4f6f8;

  &:last-child {
    border-bottom: none;
  }

  &:nth-child(odd) {
    background-color: #fafbfc;
  }
}

.modal-main__files-name {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--black-color);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.modal-main__files-size {
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 12px;
  color: #6b7680;
  white-space: nowrap;
}

.keywords-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.chip-margin {
  margin-left: 4px;
}
</style>
