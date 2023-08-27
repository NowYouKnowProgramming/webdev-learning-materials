import type { FunctionalComponent } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import './ThemeToggleButton.css'
import clsx from 'clsx'

type Theme = {
	name: string
	icon: JSX.Element
	description: string
}

const themesData: Theme[] = [
	{
		name: 'light',
		icon: (
			<svg
				aria-hidden='true'
				xmlns='http://www.w3.org/2000/svg'
				width='20'
				height='20'
				viewBox='0 0 20 20'
				fill='currentColor'
			>
				<path
					fillRule='evenodd'
					d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
					clipRule='evenodd'
				/>
			</svg>
		),
		description: 'Light theme',
	},
	{
		name: 'dark',
		icon: (
			<svg
				aria-hidden='true'
				xmlns='http://www.w3.org/2000/svg'
				width='20'
				height='20'
				viewBox='0 0 20 20'
				fill='currentColor'
			>
				<path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
			</svg>
		),
		description: 'Dark theme',
	},
	{
		name: 'oled',
		icon: (
			<svg
				aria-hidden='true'
				width='20'
				height='20'
				viewBox='0 0 15 15'
				fill='currentColor'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM7.49988 1.82689C4.36688 1.8269 1.82707 4.36672 1.82707 7.49972C1.82707 10.6327 4.36688 13.1725 7.49988 13.1726V1.82689Z'
					fill='currentColor'
					fill-rule='evenodd'
					clip-rule='evenodd'
				></path>
			</svg>
		),
		description: 'OLED theme',
	},
]

const themesClassNames = {
	light: 'theme-light',
	dark: '',
	oled: 'theme-oled',
}

const ThemeToggle: FunctionalComponent = () => {
	const [theme, setTheme] = useState(() => {
		if (import.meta.env.SSR) {
			return undefined
		}
		if (typeof localStorage !== undefined && localStorage.getItem('theme')) {
			return localStorage.getItem('theme')
		}
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark'
		}
		return 'light'
	})

	useEffect(() => {
		const root = document.documentElement
		if (theme === 'light') {
			root.classList.remove(themesClassNames.oled)
			root.classList.add(themesClassNames.light)
		} else if (theme === 'dark') {
			root.classList.remove(themesClassNames.light)
			root.classList.remove(themesClassNames.oled)
		} else {
			root.classList.remove(themesClassNames.light)
		}
	}, [theme])

	return (
		<div className='inline-flex items-center gap-[0.25em] py-1 px-2 rounded-md bg-theme-base shadow-md'>
			{themesData.map(({ icon, name }) => {
				const checked = name === theme
				return (
					<label
						className={clsx(
							checked && 'text-theme-base',
							!checked && 'text-theme-muted',
							'relative flex items-center justify-center p-1 hover:scale-125 cursor-pointer motion-safe:transition-transform ease-out'
						)}
					>
						{icon}
						<input
							type='radio'
							name='theme-toggle'
							checked={checked}
							value={name}
							title={`Use ${name} theme`}
							aria-label={`Use ${name} theme`}
							onChange={() => {
								localStorage.setItem('theme', name)
								setTheme(name)
							}}
						/>
					</label>
				)
			})}
		</div>
	)
}

export default ThemeToggle
