import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  plugins: [
    checker({
      vueTsc: true,
    }),
    vanillaExtractPlugin(),
    vue(),
  ],
});
