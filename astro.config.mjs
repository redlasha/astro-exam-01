import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://redlasha.github.io',
  base: 'astro-exam-01',
  integrations: [react(), vue()]
});