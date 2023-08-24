import { getDateTimeComponents } from './getDateTimeComponents'
import { millisecondsToSeconds } from './millisecondsToSeconds'

export const millisecondsToTimeUnits = (milliseconds: number) => {
	const seconds = millisecondsToSeconds(milliseconds)
	return getDateTimeComponents(seconds)
}
