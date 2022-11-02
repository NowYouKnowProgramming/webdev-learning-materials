//@ts-check

import mdx from '@astrojs/mdx'
import preact from '@astrojs/preact'
import react from '@astrojs/react'
import compress from 'astro-compress'
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'

export default defineConfig({
  integrations: [preact(), react(), mdx(), compress(), sitemap()],
  site: `https://bewebdev.tech/`,
})
