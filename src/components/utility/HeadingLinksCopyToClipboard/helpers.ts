import { copyIcon } from './copyIconSVG'

export const getHeadingsFromDocument = () => {
	const mainArticleContainerSelector = '.main-section'
	const headingsSelectors = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
	headingsSelectors.forEach(
		(heading, index) =>
			(headingsSelectors[index] = mainArticleContainerSelector + ' ' + heading)
	)
	const headings = document.querySelectorAll<HTMLHeadingElement>(
		headingsSelectors.join(', ')
	)
	return headings
}

const copyButtonClickHandler = (headingId: string) => {
	try {
		window.location.hash = headingId
		navigator.clipboard.writeText(window.location.href)
	} catch (err) {
		console.error('Failed to copy: ', err)
	}
}

const createCopyButton = (headingId: string) => {
	const copyButton = document.createElement('button')
	copyButton.classList.add('heading-copy')
	copyButton.innerHTML = copyIcon
	copyButton.title = 'Copy heading to clipboard'
	copyButton.addEventListener('click', () => copyButtonClickHandler(headingId))
	return copyButton
}

export const createHeadingWrapper = (heading: HTMLHeadingElement) => {
	const wrapper = document.createElement('div')
	wrapper.classList.add('heading-wrapper')

	const headingId = heading.id
	if (headingId) {
		const headingCopy = heading.cloneNode(true)
		wrapper.append(headingCopy, createCopyButton(headingId))
	}

	return wrapper
}
