/** @jsxImportSource react */

import classes from './ParallaxPuzzle.module.css'

import { ScrollParallax } from 'react-just-parallax'

const src = 'https://freesvg.org/img/1396902006.png'

export const ParallaxPuzzle = () => {
	return (
		<ScrollParallax isAbsolutelyPositioned strength={0.01}>
			<img className={classes.puzzle} src={src} alt='' />
		</ScrollParallax>
	)
}
