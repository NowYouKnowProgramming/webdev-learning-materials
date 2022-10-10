import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import compress from 'astro-compress'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	integrations: [preact(), react(), mdx(), compress(), sitemap()],
	site: `https://bewebdev.tech/`,
})
