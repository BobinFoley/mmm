import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    host: '0.0.0.0',
    port: 3000
  },

  integrations: [react()]
});