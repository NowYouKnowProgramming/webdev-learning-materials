import { expect, test } from '@playwright/test'

test('homepage has title and links to intro page', async ({ page }) => {
	await page.goto('http://localhost:3000/')

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/The best way to learn web/)

	// create a locator
	const getStarted = page.getByText(/Get Started/).first()

	// Click the get started link.
	await getStarted.click()

	// Expects the URL to contain intro.
	await expect(page).toHaveURL(/.*introduction/)
})
