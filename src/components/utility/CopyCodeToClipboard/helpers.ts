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
	const buttonTextsAfterClick = ['Copied', 'Error']
	const buttonCurrentText = button.innerText
	if (buttonTextsAfterClick.includes(buttonCurrentText)) return

	try {
		await navigator.clipboard.writeText(text)
		button.innerText = 'Copied'
		button.classList.add('success')
	} catch (error) {
		button.innerText = 'Error'
	} finally {
		setTimeout(() => {
			button.classList.remove('success')
			button.innerText = 'Copy'
		}, 1000)
	}
}
