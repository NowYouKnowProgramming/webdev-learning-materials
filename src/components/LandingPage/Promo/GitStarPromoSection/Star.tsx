/** @jsxImportSource react */

import { ScrollParallax } from 'react-just-parallax'
import classes from './Star.module.css'

type Props = {
	style: React.CSSProperties
	strength: number
	shouldGlow: boolean
}

export const Star = ({ style, strength = 0.05, shouldGlow }: Props) => {
	const starScale = shouldGlow ? strength * 10 : strength * 5

	return (
		<ScrollParallax
			isAbsolutelyPositioned
			strength={strength / 2}
			enableOnTouchDevice={false}
			shouldPause={true}
		>
			<img
				className={`${classes.root} ${shouldGlow ? classes.strongGlow : ''}`}
				style={{ ...style, scale: starScale.toString() }}
				src='/images/starButton/star-icon.svg'
				alt=''
				aria-hidden='true'
			/>
		</ScrollParallax>
	)
}
