import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'vue-widget',
      fileName: 'vue-widget',
      formats: ['es']
    },
    minify: false 
  },
  define: {
    'process.env': {
      NODE_ENV: 'production'
    }
  }
})
