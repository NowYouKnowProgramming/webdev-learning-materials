import { useEffect, useState } from 'react'
import { getStarCount } from './getStarCount'
import { getStarFromLocalStorage } from './getStarFromLocalStorage'

export const useGitStars = () => {
	const [starCount, setStarCount] = useState(0)

	useEffect(() => {
		try {
			const localStorageStarCount = getStarFromLocalStorage()
			if (localStorageStarCount !== null) {
				setStarCount(localStorageStarCount.starCount)
				return
			}

			getStarCount().then((count) => {
				setStarCount(count)
			})
		} catch (error) {
			setStarCount(0)
		}
	}, [])

	const hasStarsToDisplay = starCount !== 0 && Number.isFinite(starCount)

	return {
		starCount,
		hasStars: hasStarsToDisplay,
	}
}
