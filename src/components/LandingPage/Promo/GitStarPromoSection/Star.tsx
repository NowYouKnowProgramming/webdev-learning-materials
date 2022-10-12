/** @jsxImportSource react */

import { MouseParallax } from 'react-just-parallax'
import classes from './Star.module.css'

type Props = {
	style: React.CSSProperties
	strength: number
}

export const Star = ({ style, strength = 0.05 }: Props) => {
	return (
		<MouseParallax
			isAbsolutelyPositioned
			strength={strength / 4}
			enableOnTouchDevice={false}
			shouldPause={true}
			shouldResetPosition={true}
		>
			<img
				className={classes.root}
				style={{ ...style, scale: (strength * 10).toString() }}
				src='/images/starButton/star.png'
				alt=''
				aria-hidden='true'
			/>
		</MouseParallax>
	)
}
