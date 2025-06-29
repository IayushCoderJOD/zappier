import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 8080,
    host: true,
  },
  server: {
    port: 8080,
    host: true,
    allowedHosts: ['zapier.dev.com'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
});
