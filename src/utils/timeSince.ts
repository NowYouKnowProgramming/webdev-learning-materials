const addPluralFormEnding = (number: number) => (number > 1 ? 's' : '')

const timeSince = (date: Date) => {
	const dateDiff = +new Date() - +date

	const seconds = Math.floor(dateDiff / 1000)

	//seconds to biggest two time units
	const year = Math.floor(seconds / 31536000)
	const month = Math.floor((seconds % 31536000) / 2592000)
	const day = Math.floor(((seconds % 31536000) % 2592000) / 86400)
	const hour = Math.floor((((seconds % 31536000) % 2592000) % 86400) / 3600)
	const minute = Math.floor(
		((((seconds % 31536000) % 2592000) % 86400) % 3600) / 60
	)
	const second = Math.floor(
		((((seconds % 31536000) % 2592000) % 86400) % 3600) % 60
	)
	const timeObj = {
		year,
		month,
		day,
		hour,
		minute,
		second,
	}

	const timeToDisplay = []
	for (const [key, value] of Object.entries(timeObj)) {
		if (timeToDisplay.length > 1) break
		if (value > 0) {
			timeToDisplay.push(`${value} ${key}${addPluralFormEnding(value)}`)
		}
	}
	return timeToDisplay.join(', ')
}

export default timeSince
