/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				backdrop: '#ffffff6a',
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
			},
			animation: {
				fade: 'fade 2s cubic-bezier(0.16, 1, 0.3, 1)',
			},
		},
	},
	plugins: [require('tailwindcss-animated')],
}
