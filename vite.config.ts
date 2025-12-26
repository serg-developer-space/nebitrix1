import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  define: {
    // Предотвращает ошибку "process is not defined" в библиотеках
    'process.env': {},
    // Предотвращает ошибку "global is not defined" (нужно для некоторых SDK)
    'global': 'window',
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false
  }
});