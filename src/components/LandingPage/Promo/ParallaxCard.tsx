/** @jsxImportSource react */

import { ScrollParallax } from 'react-just-parallax';
import classes from './ParallaxCard.module.css';

type Image = {
	src: string;
	alt: string;
};

type Props = {
	title: string;
	children: React.ReactNode;
	imageSrc: Image;
	iconSrc: string | undefined;
	direction?: 'childrenLeft' | 'childrenRight';
};

const ParallaxCard = ({
	children,
	imageSrc,
	iconSrc,
	direction = 'childrenLeft',
	title,
}: Props) => {
	const rootElementDirectionCss =
		direction === 'childrenLeft' ? classes.left : classes.right;

	const Icons =
		!!iconSrc &&
		['One', 'Two', 'Three'].map((icon, index) => {
			const iconKey = `icon${icon}`;

			const iconCss = `${classes.icon} ${classes[iconKey]}`;

			return (
				<div className={iconCss} key={index + iconKey}>
					<img src={iconSrc} alt='' aria-hidden='true' />
				</div>
			);
		});

	return (
		<div className={[classes.root, rootElementDirectionCss].join(' ')}>
			<div className={classes.text}>
				<h3>{title}</h3>
				{children}
			</div>
			<div className={classes.imgContainer}>
				<ScrollParallax strength={0.05}>
					<img src={imageSrc.src} alt={imageSrc.alt} />
				</ScrollParallax>
				<ScrollParallax isAbsolutelyPositioned strength={0.1}>
					{iconSrc && Icons}
				</ScrollParallax>
			</div>
		</div>
	);
};
export default ParallaxCard;
