import { defineConfig } from 'vite';
import { externalizeDeps } from 'vite-plugin-externalize-deps'
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import classNames from 'classnames';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.js'),
      name: 'Rivet React',
      fileName: 'rivet-react'
    },
    rollupOptions: {
      external: [ 'react', 'react-dom', 'classNames' ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          classnames: 'classNames'
        }
      }
    }
  },
  plugins: [react(), externalizeDeps() ]
})
