import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'


export default defineConfig({
  base: '/',
  build: {
    target: 'esnext', // or 'es2022'
  },
  server: {
    host: true, // Expose the server on your local network
    port: 3000, // Optional: Specify a custom port (default is 5173)
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
    },
  },
})
