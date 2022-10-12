import type { StarsInStorage } from './getStarFromLocalStorage'

export const getStarCount = async (): Promise<number> => {
	const response = await fetch(
		'https://api.github.com/repos/nowyouknowprogramming/webdev-learning-materials'
	)

	if (!response.ok) throw new Error('Could not fetch stars')

	const data = await response.json()

	const stargazers = data.stargazers_count

	const starObj: StarsInStorage = {
		starCount: parseInt(stargazers),
		timestamp: Date.now(),
	}
	localStorage.setItem('starCount', JSON.stringify(starObj))
	return data.stargazers_count
}
