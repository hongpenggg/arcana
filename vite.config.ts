import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/arcana/',
  define: {
    'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(process.env.VITE_GEMINI_API_KEY)
  }
})
// Note: Ensure that the .env.local file is included in .gitignore to prevent exposing sensitive information.