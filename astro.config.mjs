//@ts-check

import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import compress from 'astro-compress';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), react(), mdx(), compress(), sitemap(), tailwind()],
  site: `https://bewebdev.tech/`
});