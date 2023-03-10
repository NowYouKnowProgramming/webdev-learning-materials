import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
	await page.goto('http://localhost:3000/')

	const docsButton = page.getByText(/Start learning/).first()

	await docsButton.click()

	await expect(page).toHaveURL(/.*introduction/)
})

test('JavaScript article is possible to reach', async ({ page }) => {
	const javascriptArticleLink = page.getByText(/JavaScript/).first()

	await javascriptArticleLink.click()

	await expect(page).toHaveURL(/.*javascript/)
})

test('React article is possible to reach', async ({ page }) => {
	const reactArticleLink = page.getByText(/React/).first()

	await reactArticleLink.click()

	await expect(page).toHaveURL(/.*react/)
})
