import { useState } from 'react'

export const useStarsHover = () => {
	const [isHoveredOver, setIsHoveredOver] = useState(false)

	const handleHoverOver = () => {
		setIsHoveredOver(true)
	}

	const handleHoverOut = () => {
		setIsHoveredOver(false)
	}

	return {
		isHoveredOver,
		handleHoverOut,
		handleHoverOver,
	}
}
