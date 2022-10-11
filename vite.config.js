import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  server: {
    https: false, //本地环境不用https
    hrm: true,
    host: '0.0.0.0',
  },
})
