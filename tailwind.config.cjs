/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`
		}
		return `rgb(var(${variableName}))`
	}
}

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
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
			backgroundImage: {
				'theme-gradient': `linear-gradient(to right, ${withOpacity(
					'--color-gradient-start'
				)}, ${withOpacity('--color-gradient-end')})`,
			},
			textColor: {
				theme: {
					base: 'rgba(var(--color-text-base), <alpha-value>)',
					muted: withOpacity('--color-text-muted'),
					inverted: withOpacity('--color-text-inverted'),
				},
			},
			backgroundColor: {
				theme: {
					base: withOpacity('--color-bg-base'),
					elevated: 'rgba(var(--color-bg-elevated), <alpha-value>)',
					'accent-primary': 'rgba(var(--color-accent-primary), <alpha-value>)',
					'accent-secondary': withOpacity('--color-accent-secondary'),
					'grad-start': withOpacity('--color-gradient-start'),
					'grad-end': withOpacity('--color-gradient-end'),
					'button-accent': withOpacity('--color-button-accent'),
					'button-accent-hover': withOpacity('--color-button-accent-hover'),
					'button-muted': withOpacity('--color-button-muted'),
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
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				slideUp: {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
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
}
