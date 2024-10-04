import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow connections from outside the container
    port: 5173, // Optional, this is the default port for Vite
  },
})
