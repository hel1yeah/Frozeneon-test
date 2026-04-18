import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  envPrefix: ['VITE_', 'VUE_APP_'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 8080,
    open: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/_vars.scss";`,
      },
    },
  },
  build: {
    target: 'es2018',
    sourcemap: false,
    chunkSizeWarningLimit: 1500,
  },
});
