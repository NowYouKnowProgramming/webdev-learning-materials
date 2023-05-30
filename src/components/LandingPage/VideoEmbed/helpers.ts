export const getUserIsFromPoland = (): boolean => {
	const isPolishTimezone =
		Intl.DateTimeFormat().resolvedOptions().timeZone === 'Europe/Warsaw'

	const isPolishLocale = navigator.languages.some((language) =>
		language.includes('pl')
	)

	return isPolishTimezone || isPolishLocale
}
