import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { BlendingModeIcon } from '@radix-ui/react-icons'
import { AnimatePresence, motion } from 'framer-motion'

type Theme = {
	name: string
	icon: JSX.Element
	description: string
}

export const themesData: Theme[] = [
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
					fillRule='evenodd'
					clipRule='evenodd'
				></path>
			</svg>
		),
		description: 'OLED theme',
	},
]

export const themesClassNames = {
	light: 'theme-light',
	dark: '',
	oled: 'theme-oled',
}

const ThemeToggle = () => {
	const [mobilePickerOpen, setMobilePickerOpen] = useState(false)
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
			setTheme('light')
		} else if (theme === 'dark') {
			root.classList.remove(themesClassNames.light)
			root.classList.remove(themesClassNames.oled)
			setTheme('dark')
		} else {
			root.classList.remove(themesClassNames.light)
			root.classList.add(themesClassNames.oled)
			setTheme('oled')
		}
	}, [theme])

	return (
		<>
			<button
				onClick={() => setMobilePickerOpen((open) => !open)}
				className='desktop-ui:hidden text-theme-base motion-safe:transition cursor-pointer flex items-center justify-center rounded-md bg-theme-base/30 ring-1 ring-basetext/10 min-h-[40px] px-3'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					height='22'
					viewBox='0 -960 960 960'
					width='22'
				>
					<defs>
						<linearGradient id='my-cool-gradient'>
							<stop offset='0%' stop-color='rgb(190, 100, 0)' />
							<stop offset='100%' stop-color='rgb(0, 100, 190)' />
						</linearGradient>
					</defs>
					<g fill='url(#my-cool-gradient)'>
						<path d='M440-80q-33 0-56.5-23.5T360-160v-160H240q-33 0-56.5-23.5T160-400v-280q0-66 47-113t113-47h480v440q0 33-23.5 56.5T720-320H600v160q0 33-23.5 56.5T520-80h-80ZM240-560h480v-200h-40v120q0 17-11.5 28.5T640-600q-17 0-28.5-11.5T600-640v-120h-40v40q0 17-11.5 28.5T520-680q-17 0-28.5-11.5T480-720v-40H320q-33 0-56.5 23.5T240-680v120Zm0 160h480v-80H240v80Zm0-80v80-80Z' />
					</g>
				</svg>
			</button>
			<AnimatePresence>
				{mobilePickerOpen && (
					<motion.div
						initial={{ opacity: 0, y: '-200%' }}
						animate={{ opacity: 1, y: '0%' }}
						exit={{ opacity: 0, y: '100%' }}
						data-open={mobilePickerOpen}
						className='data-[open=true]:desktop-ui:hidden hidden items-center gap-[0.25em] py-1-[6px] rounded-md bg-theme-base ring-1 ring-basetext/10 min-h-[40px] data-[open=true]:flex fixed right-[79px] px-2 min-w-[130px] justify-between shadow-2xl shadow-basetext/20'
					>
						{themesData.map(({ icon, name }) => {
							const checked = name === theme
							return (
								<label
									key={name + icon}
									className={clsx(
										checked && 'text-theme-base',
										!checked &&
											'text-theme-muted/50 hover:text-theme-muted motion-safe:hover:scale-125  motion-safe:transition cursor-pointer',
										'relative flex items-center justify-center p-1 ease-out',
									)}
								>
									{icon}
									<input
										className='sr-only'
										type='radio'
										name='theme-toggle'
										checked={checked}
										value={name}
										title={`Use ${name} theme`}
										aria-label={`Use ${name} theme`}
										onChange={() => {
											localStorage.setItem('theme', name)
											setTheme(name)
											setMobilePickerOpen(false)
										}}
									/>
								</label>
							)
						})}
					</motion.div>
				)}
			</AnimatePresence>
			<div className='hidden desktop-ui:inline-flex max-w-[40px] desktop-ui:max-w-none overflow-auto items-center gap-[0.25em] py-1 desktop-ui:px-3 px-[6px] rounded-md bg-theme-base/30 ring-1 ring-basetext/10 min-h-[40px]'>
				{themesData.map(({ icon, name }) => {
					const checked = name === theme
					return (
						<label
							key={name + icon}
							className={clsx(
								checked && 'text-theme-base',
								!checked &&
									'text-theme-muted/50 hover:text-theme-muted motion-safe:hover:scale-125  motion-safe:transition cursor-pointer',
								'relative flex items-center justify-center p-1 ease-out',
							)}
						>
							{icon}
							<input
								className='sr-only'
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
		</>
	)
}

export default ThemeToggle
