import mdx from '@astrojs/mdx'
import preact from '@astrojs/preact'
import react from '@astrojs/react'
import compress from 'astro-compress'
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), react(), mdx(), compress(), sitemap(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  })],
  site: `https://bewebdev.tech/`
});