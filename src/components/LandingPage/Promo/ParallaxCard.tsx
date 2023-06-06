/** @jsxImportSource react */

import { ScrollParallax } from 'react-just-parallax'
import { FloatingIcons } from './FloatingIcons/FloatingIcons'
import classes from './ParallaxCard.module.css'
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion'

type Image = {
	src: string
	alt: string
}

type Props = {
	title: string
	children: React.ReactNode
	imageSrc: Image
	iconSrc: string | undefined
	direction?: 'childrenLeft' | 'childrenRight'
}

const ParallaxCard = ({
	children,
	imageSrc,
	iconSrc,
	direction = 'childrenLeft',
	title,
}: Props) => {
	const prefersReducedMotion = usePrefersReducedMotion()
	const rootElementDirectionCss =
		direction === 'childrenLeft' ? classes.left : classes.right

	const hasIcons = !!iconSrc

	const floatingIconClassNames: string[] = [
		classes.iconOne!,
		classes.iconTwo!,
		classes.iconThree!,
	]

	return (
		<div className={[classes.root, rootElementDirectionCss].join(' ')}>
			<div className={classes.text}>
				<h3>{title}</h3>
				{children}
			</div>
			<div className={classes.imgContainer}>
				{prefersReducedMotion ? (
					<img src={imageSrc.src} alt={imageSrc.alt} />
				) : (
					<ScrollParallax lerpEase={0.03} strength={0.03}>
						<img src={imageSrc.src} alt={imageSrc.alt} />
					</ScrollParallax>
				)}
				{hasIcons && (
					<FloatingIcons
						iconSrc={iconSrc}
						classNames={floatingIconClassNames}
					/>
				)}
			</div>
		</div>
	)
}
export default ParallaxCard
