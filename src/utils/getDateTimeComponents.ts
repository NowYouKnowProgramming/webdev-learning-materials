import {
	SECONDS_IN_YEAR,
	SECONDS_IN_MONTH,
	SECONDS_IN_DAY,
	SECONDS_IN_HOUR,
	SECONDS_IN_MINUTE,
} from './timeSince'

export const getDateTimeComponents = (timestamp: number) => {
	const components = {
		year: 0,
		month: 0,
		day: 0,
		hour: 0,
		minute: 0,
		second: 0,
	}
	let remaining: number = timestamp

	components.year = Math.floor(remaining / SECONDS_IN_YEAR)
	remaining -= components.year * SECONDS_IN_YEAR

	components.month = Math.floor(remaining / SECONDS_IN_MONTH)
	remaining -= components.month * SECONDS_IN_MONTH

	components.day = Math.floor(remaining / SECONDS_IN_DAY)
	remaining -= components.day * SECONDS_IN_DAY

	components.hour = Math.floor(remaining / SECONDS_IN_HOUR)
	remaining -= components.hour * SECONDS_IN_HOUR

	components.minute = Math.floor(remaining / SECONDS_IN_MINUTE)
	remaining -= components.minute * SECONDS_IN_MINUTE

	components.second = remaining

	return components
}
