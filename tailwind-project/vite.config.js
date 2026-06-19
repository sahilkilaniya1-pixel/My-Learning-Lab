import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Yeh default plugin hai jo install hua tha
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Aapka base path bilkul sahi hai
  base: '/My-Learning-Lab/tailwind-project/dist/',
})