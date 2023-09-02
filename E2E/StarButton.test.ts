import { test, expect } from '@playwright/test'

const githubRepoLink =
	'https://github.com/NowYouKnowProgramming/webdev-learning-materials'

test.beforeEach(async ({ page }) => {
	await page.goto('http://localhost:3000/')
})

test('Button that is a CTA to star project is in the docs page', async ({
	page,
}) => {
	const docsButton = page.getByText(/Start learning/).first()

	await docsButton.click()

	await expect(page).toHaveURL(/.*introduction/)

	const starButton = page.getByRole('link', { name: /Star/ }).first()

	await expect(starButton).toBeVisible()
	await expect(starButton).toHaveAttribute('href', githubRepoLink)
})

test('CTA button to star project is visible on the landing page', async ({
	page,
}) => {
	const starButtonLink = page.getByRole('link', { name: /Star \w*/ })

	await expect(starButtonLink).toBeVisible()
	await expect(starButtonLink).toHaveAttribute('href', githubRepoLink)
})
