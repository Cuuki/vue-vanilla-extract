import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vanillaExtractPlugin(), vue()],
});
