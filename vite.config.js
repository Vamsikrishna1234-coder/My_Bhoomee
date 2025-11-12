import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/My_Bhoomee/",  // ⚠️ exact repo name (case-sensitive)
  build: {
    chunkSizeWarningLimit: 1000,
  },
})
