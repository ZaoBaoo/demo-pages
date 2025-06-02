import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/your-repo-name/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        santa: resolve(__dirname, 'santa.html'), // <-- вторая страница
      }
    }
  }
})
