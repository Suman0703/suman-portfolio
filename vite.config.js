import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // This tells Vite to stop caching lucide-react, fixing the export error permanently
    exclude: ['lucide-react'] 
  }
})