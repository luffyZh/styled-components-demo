import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/styled-components-demo/',
  build: {
    outDir: 'docs'
  }
})
