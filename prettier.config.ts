/** @type {import("prettier").Config} */

import { type Config } from 'prettier'

module.exports = {
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
} satisfies Config
