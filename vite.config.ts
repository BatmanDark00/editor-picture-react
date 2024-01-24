import million from 'million/compiler';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//Usar font-awesone


// https://vitejs.dev/config/
export default defineConfig({
  base: '/src/',
  plugins: [million.vite({ auto: true }), react()],
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@components': '/src/components'
    }
  }
})
