// vite.config.js
import {resolve} from 'path'
import {defineConfig} from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        progress: resolve(__dirname, 'progress/index.html'),
        settings: resolve(__dirname, 'settings/index.html'),
        community: resolve(__dirname, 'community/index.html'),
        'add-goal': resolve(__dirname, 'add-goal/index.html'),
        login: resolve(__dirname, 'login/index.html'),
        'create-account': resolve(__dirname, 'create-account/index.html'),
      },
    },
  },
})
