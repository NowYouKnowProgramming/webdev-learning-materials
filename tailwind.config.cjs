/** @type {import('tailwindcss').Config} */

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
			colors: {
				backdrop: '#ffffff6a',
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
					base: withOpacity('--color-text-base'),
					muted: withOpacity('--color-text-muted'),
					inverted: withOpacity('--color-text-inverted'),
				},
			},
			backgroundColor: {
				theme: {
					base: withOpacity('--color-bg-base'),
					'accent-primary': withOpacity('--color-accent-primary'),
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
	plugins: [require('tailwindcss-animated')],
}
