// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import alpinejs from '@astrojs/alpinejs';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs(), tailwind({ applyBaseStyles: false })],

  experimental: {
    svg:true
  },

  output: 'server',
    adapter: netlify({
      imageCDN: false,
    }),
    image: {
      domains: ['192.168.0.117'],
    },
});
