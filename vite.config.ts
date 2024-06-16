/// <reference types="vitest" />
/// <reference types="vitest" />

import million from 'million/compiler';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


//Usar font-awesone


// https://vitejs.dev/config/
export default defineConfig({
  base: '/picshur',
  plugins: [million.vite({ auto: true }), react()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
  resolve: {
    alias: {
      '@': '/src/',     
    }
  },
})
