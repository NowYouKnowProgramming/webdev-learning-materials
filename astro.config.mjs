//@ts-check

import mdx from '@astrojs/mdx'
import preact from '@astrojs/preact'
import react from '@astrojs/react'
import compress from 'astro-compress'
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { modifiedTime } from './src/utils/modifiedTime.mjs'
import { filePath } from './src/utils/filePath.mjs'

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact({
      include: ['**/preact/*'],
    }),
    react({
      include: ['**/react/*'],
    }),
    mdx(),
    compress(),
    sitemap(),
    tailwind(),
  ],
  markdown: {
    remarkPlugins: [modifiedTime, filePath],
  },
  site: `https://bewebdev.tech/`,
})
