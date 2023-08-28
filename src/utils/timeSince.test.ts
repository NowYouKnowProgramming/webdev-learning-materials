import { describe, expect, it } from 'vitest'

import { timeSince } from './timeSince'

describe('timeSince', () => {
	it('should return 1 second', () => {
		const date = new Date()
		date.setSeconds(date.getSeconds() - 1)
		expect(timeSince(date)).toBe('1 second')
	})

	it('should return 2 seconds', () => {
		const date = new Date()
		date.setSeconds(date.getSeconds() - 2)
		expect(timeSince(date)).toBe('2 seconds')
	})

	it('should return 1 minute', () => {
		const date = new Date()
		date.setMinutes(date.getMinutes() - 1)
		expect(timeSince(date)).toBe('1 minute')
	})

	it('should return 2 minutes', () => {
		const date = new Date()
		date.setMinutes(date.getMinutes() - 2)
		expect(timeSince(date)).toBe('2 minutes')
	})

	it('should return 1 hour', () => {
		const date = new Date()
		date.setHours(date.getHours() - 1)
		expect(timeSince(date)).toBe('1 hour')
	})

	it('should return 2 hours', () => {
		const date = new Date()
		date.setHours(date.getHours() - 2)
		expect(timeSince(date)).toBe('2 hours')
	})

	it('should return 1 day', () => {
		const date = new Date()
		date.setDate(date.getDate() - 1)
		expect(timeSince(date)).toBe('1 day')
	})

	it('should return 2 days', () => {
		const date = new Date()
		date.setDate(date.getDate() - 2)
		expect(timeSince(date)).toBe('2 days')
	})

	it('should return 1 month', () => {
		const date = new Date()
		date.setMonth(date.getMonth() - 1)
		//to contain because of the difference in days in months
		expect(timeSince(date)).toContain('1 month')
	})

	it('should return 2 months', () => {
		const date = new Date()
		date.setMonth(date.getMonth() - 2)
		//to contain because of the difference in days in months
		expect(timeSince(date)).toContain('2 months')
	})

	it('should return 1 year', () => {
		const date = new Date()
		date.setFullYear(date.getFullYear() - 1)
		expect(timeSince(date)).toBe('1 year')
	})

	it('should return 2 years', () => {
		const date = new Date()
		date.setFullYear(date.getFullYear() - 2)
		expect(timeSince(date)).toBe('2 years')
	})

	it('should return 1 year, 2 months', () => {
		const date = new Date()
		date.setFullYear(date.getFullYear() - 1)
		date.setMonth(date.getMonth() - 2)
		expect(timeSince(date)).toBe('1 year, 2 months')
	})
})
