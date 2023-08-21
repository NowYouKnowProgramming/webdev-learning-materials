import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type PersistedState<T> = [T, Dispatch<SetStateAction<T>>]

export const usePersistedState = <StateValue>(
	defaultValue: StateValue,
	key: string
): PersistedState<StateValue> => {
	const [value, setValue] = useState<StateValue>(() => {
		const value = window.localStorage.getItem(key)

		return value ? (JSON.parse(value) as StateValue) : defaultValue
	})

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value))
	}, [key, value])

	return [value, setValue]
}
