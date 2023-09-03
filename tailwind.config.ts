import type { Config } from 'tailwindcss'

import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			maxWidth: {
				docs: '2560px',
			},
			screens: {
				'desktop-ui': '50em',
			},
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
				serious: ['Inter', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				backdrop: 'rgba(var(--color-backdrop), <alpha-value>)',
				basetext: 'rgba(var(--color-text-base), <alpha-value>)',
				'grad-start': 'rgba(var(--color-gradient-start), <alpha-value>)',
				'grad-end': 'rgba(var(--color-gradient-end), <alpha-value>)',
			},
			textColor: {
				theme: {
					base: 'rgba(var(--color-text-base), <alpha-value>)',
					muted: 'rgba(var(--color-text-muted), <alpha-value>)',
					inverted: 'rgba(var(--color-text-inverted), <alpha-value>)',
				},
			},
			backgroundColor: {
				theme: {
					base: 'rgba(var(--color-bg-base), <alpha-value>)',
					elevated: 'rgba(var(--color-bg-elevated), <alpha-value>)',
					'accent-primary': 'rgba(var(--color-accent-primary), <alpha-value>)',
					'accent-secondary':
						'rgba(var(--color-accent-secondary), <alpha-value>)',
					'grad-start': 'rgba(var(--color-gradient-start), <alpha-value>)',
					'grad-end': 'rgba(var(--color-gradient-end), <alpha-value>)',
				},
			},
			keyframes: {
				fade: {
					'0%': {
						opacity: '0%',
					},
					'100%': {
						opacity: '100%',
					},
				},
				slideDown: {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				slideUp: {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				fade: 'fade 2s cubic-bezier(0.16, 1, 0.3, 1)',
				slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
				slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
			},
		},
	},
	plugins: [],
} satisfies Config
