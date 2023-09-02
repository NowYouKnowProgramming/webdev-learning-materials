export const createCopyButton = () => {
	const button = document.createElement('button')
	const classes =
		'px-4 py-2 text-theme-inverted bg-basetext rounded-md hover:bg-theme-base hover:text-basetext'
	classes.split(' ').forEach((className) => button.classList.add(className))
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
	text: string,
) => {
	const textsAfterClick = ['Copied', 'Error']
	const currentText = button.innerText
	if (textsAfterClick.includes(currentText)) return

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
