export type StarsInStorage = {
	starCount: number
	timestamp: number
}
const HOUR_IN_MILLISECONDS = 3600000
const MAX_DATA_OLD_MILLISECONDS = HOUR_IN_MILLISECONDS / 2

const verifyStarObject = (starData: any): boolean => {
	const starCountExist = Object.hasOwn(starData, 'starCount')
	const timestampExist = Object.hasOwn(starData, 'timestamp')
	const starIsValidValue = typeof starData.starCount === 'number'
	const timestampIsValidValue = typeof starData.timestamp === 'number'
	return (
		starCountExist &&
		timestampExist &&
		starIsValidValue &&
		timestampIsValidValue
	)
}

const verifyTimestamp = (timestamp: number): boolean =>
	Date.now() - timestamp < MAX_DATA_OLD_MILLISECONDS

export const getStarFromLocalStorage = (): null | StarsInStorage => {
	const savedStars = localStorage.getItem('starCount')
	if (savedStars === null) return null
	const starObject = JSON.parse(savedStars)
	if (!verifyStarObject(starObject)) {
		localStorage.removeItem('starCount')
		return null
	}
	if (!verifyTimestamp(parseInt(starObject.timestamp))) {
		localStorage.removeItem('starCount')
		return null
	}

	return starObject
}
