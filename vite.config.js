import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/demo-pages/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        santa: resolve(__dirname, 'santa.html'),
        tinder: resolve(__dirname, 'tinder.html'),
        omoda: resolve(__dirname, 'omoda.html'),
        "chinese-new-year": resolve(__dirname, 'chinese-new-year.html'),
      }
    }
  }
})
