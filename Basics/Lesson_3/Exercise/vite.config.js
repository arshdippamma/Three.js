// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',              // Tell Vite to treat 'src/' as the project root
  build: {
    outDir: '../dist',      // Output built files to a clean 'dist/' folder at root level
    emptyOutDir: true       // Clean the output folder before each build
  },
  server: {
    open: true              // Automatically open the browser on `npm run dev`
  }
})