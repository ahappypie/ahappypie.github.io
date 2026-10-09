import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ahappypie.github.io',
  trailingSlash: 'never',
  outDir: './docs',

  vite: {
    plugins: [tailwindcss()]
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: ['200 900']
    }
  ]
});
