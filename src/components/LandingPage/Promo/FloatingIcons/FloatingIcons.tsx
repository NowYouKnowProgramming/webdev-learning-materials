/** @jsxImportSource react */

import { ScrollParallax } from 'react-just-parallax'
import { ParallaxCardIcon } from '../ParallaxCardIcon'
import classes from './FloatingIcons.module.css'

type Props = {
	classNames: string[]
	iconSrc: string
}
export const FloatingIcons = ({ classNames, iconSrc }: Props) => {
	return (
		<ScrollParallax
			shouldPause
			lerpEase={0.02}
			isAbsolutelyPositioned
			strength={0.07}
		>
			{classNames.map((className, index) => {
				const iconKey = `icon${className}${index}`
				const iconCss = `${classes.icon} ${className}`
				return (
					<ParallaxCardIcon iconCss={iconCss} iconSrc={iconSrc} key={iconKey} />
				)
			})}
		</ScrollParallax>
	)
}
