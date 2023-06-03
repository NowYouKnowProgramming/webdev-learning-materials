import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

export const usePrefersReducedMotion = () => {
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(true)
	useEffect(() => {
		const mediaQueryList = window.matchMedia(QUERY)

		setPrefersReducedMotion(window.matchMedia(QUERY).matches)

		const listener = (event: MediaQueryListEvent) => {
			setPrefersReducedMotion(event.matches)
		}
		mediaQueryList.addEventListener('change', listener)

		return () => {
			mediaQueryList.removeEventListener('change', listener)
		}
	}, [])

	return prefersReducedMotion
}
