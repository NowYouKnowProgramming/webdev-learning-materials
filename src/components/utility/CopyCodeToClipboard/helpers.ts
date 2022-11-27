export const createCopyButton = () => {
	const button = document.createElement('button')
	button.classList.add('copy-button')
	button.innerHTML = 'Copy'
	return button
}

export const createCopyButtonWrapper = () => {
	const wrapper = document.createElement('div')
	wrapper.classList.add('code-wrapper')
	return wrapper
}

export const handleCopyButtonClick = async (
	button: HTMLButtonElement,
	text: string
) => {
	try {
		await navigator.clipboard.writeText(text)
		button.innerText = 'Copied'
		button.classList.add('success')
		setTimeout(() => {
			button.innerText = 'Copy'
			button.classList.remove('success')
		}, 1000)
	} catch (error) {
		button.innerText = 'Error'
		setTimeout(() => {
			button.innerText = 'Copy'
		}, 1000)
	}
}
