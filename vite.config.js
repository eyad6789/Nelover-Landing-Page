import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsm-x9",
    project: "javascript-react"
  })],
  
  // Add this base path for GitHub Pages (replace 'apple_website' with your repo name)
  base: '/apple_website/',
  
  build: {
    sourcemap: true,
    outDir: 'dist'
  }
})