import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Youtube-Clone/', // Set the base path for the application
  plugins: [react()],
   // Set the base path for the application
})
