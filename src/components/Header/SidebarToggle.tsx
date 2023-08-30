/** @jsxImportSource preact */
import type { FunctionalComponent } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


const MenuToggle: FunctionalComponent = () => {
	const [sidebarShown, setSidebarShown] = useState(false)

	useEffect(() => {
		const sidebarElement = document.querySelector('#toggleable-sidebar')!
		if (sidebarShown) {
			sidebarElement.setAttribute('data-sidebar-shown', 'true')
			disableBodyScroll(sidebarElement)
		} else {
			sidebarElement.setAttribute('data-sidebar-shown', 'false')
			enableBodyScroll(sidebarElement)
		}
		return () => {
			clearAllBodyScrollLocks()
		}
	}, [sidebarShown])

	return (
		<button
			type='button'
			aria-pressed={sidebarShown ? 'true' : 'false'}
			id='menu-toggle'
			onClick={() => setSidebarShown(!sidebarShown)}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='1em'
				height='1em'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
			>
				<path
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='2'
					d='M4 6h16M4 12h16M4 18h16'
				/>
			</svg>
			<span className='sr-only'>Toggle sidebar</span>
		</button>
	)
}

export default MenuToggle
