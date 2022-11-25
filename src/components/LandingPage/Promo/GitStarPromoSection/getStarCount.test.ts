import { describe, expect, it, vi } from 'vitest'
import { getStarCount } from './getStarCount'

global.fetch = vi.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve({ stargazers_count: 100 }),
		ok: true,
	})
)

global.localStorage = {
	setItem: vi.fn(),
}

describe('getStarCount', () => {
	it('should return a number', async () => {
		const result = await getStarCount()
		expect(typeof result).toBe('number')
		expect(result).toBe(100)
	})

	it('should call fetch', async () => {
		await getStarCount()
		expect(fetch).toHaveBeenCalled()
	})

	it('should call localStorage.setItem', async () => {
		await getStarCount()
		expect(localStorage.setItem).toHaveBeenCalled()
	})

	it('should throw an error on bad response', async () => {
		fetch.mockImplementationOnce(() =>
			Promise.resolve({
				ok: false,
			})
		)

		await expect(getStarCount()).rejects.toThrow('Could not fetch stars')
	})
})
