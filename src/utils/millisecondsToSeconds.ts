export const MILLISECONDS_TO_SECONDS: number = 0.001

export const millisecondsToSeconds = (milliseconds: number): number => {
	return Math.floor(milliseconds * MILLISECONDS_TO_SECONDS)
}
