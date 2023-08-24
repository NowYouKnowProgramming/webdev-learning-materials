import { addPluralFormEnding } from './addPluralFormEnding'
import { millisecondsToTimeUnits } from './millisecondsToTimeUnits'

export const SECONDS_IN_YEAR = 31536000
export const SECONDS_IN_MONTH = 2592000
export const SECONDS_IN_DAY = 86400
export const SECONDS_IN_HOUR = 3600

export const SECONDS_IN_MINUTE: number = 60

export const timeSince = (date: Date): string => {
	const dateDiff = +new Date() - +date

	const timeObj = millisecondsToTimeUnits(dateDiff)

	const timeToDisplay = []
	for (const [key, value] of Object.entries(timeObj)) {
		if (timeToDisplay.length > 1) break
		if (value > 0) {
			timeToDisplay.push(`${value} ${key}${addPluralFormEnding(value)}`)
		}
	}
	return timeToDisplay.join(', ')
}
