export const unknownToError = (maybeError: unknown) => {
	if (maybeError instanceof Error) {
		return maybeError
	}

	if (typeof maybeError === 'string') {
		return new Error(maybeError)
	}

	return new Error(String(maybeError))
}
