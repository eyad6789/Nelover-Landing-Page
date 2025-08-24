import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsm-x9",
    project: "javascript-react"
  })],
  
  // Add this base path for GitHub Pages - MUST match your repo name exactly
  base: '/Nelover-Landing-Page/',
  
  build: {
    sourcemap: true,
    outDir: 'dist'
  },
  
  css: {
    postcss: './postcss.config.js', // Tailwind will be processed through PostCSS
  }
})