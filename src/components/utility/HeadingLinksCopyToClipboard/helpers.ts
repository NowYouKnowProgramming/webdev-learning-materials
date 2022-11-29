import { copyIcon } from './copyIconSVG'

export const getHeadingsFromDocument = () => {
	const mainArticleContainerSelector = '.main-section'
	const headingsSelectors = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(
		(heading) => `${mainArticleContainerSelector} ${heading}`
	)

	const headings = document.querySelectorAll<HTMLHeadingElement>(
		headingsSelectors.join(', ')
	)
	return headings
}

const copyButtonClickHandler = async (headingId: string) => {
	try {
		window.location.hash = headingId
		await navigator.clipboard.writeText(window.location.href)
	} catch (err) {
		console.error('Failed to copy: ', err)
	}
}

const createCopyButton = (headingId: string) => {
	const copyButton = document.createElement('button')
	copyButton.classList.add('heading-copy')
	copyButton.innerHTML = copyIcon
	copyButton.setAttribute('aria-hidden', 'true')
	copyButton.title = 'Copy heading to clipboard'
	copyButton.addEventListener('click', () => copyButtonClickHandler(headingId))
	return copyButton
}

export const createHeadingWithButton = (heading: HTMLHeadingElement) => {
	const wrapper = document.createElement(heading.tagName)
	wrapper.classList.add('heading-wrapper')
	wrapper.textContent = heading.textContent
	const headingId = heading.id
	wrapper.id = headingId

	if (headingId) {
		wrapper.append(createCopyButton(headingId))
	}

	return wrapper
}
