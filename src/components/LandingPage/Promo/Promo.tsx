/** @jsxImportSource react */

import { Parallax } from 'react-scroll-parallax';
import classes from './Promo.module.css';

export const Promo = () => {
	return (
		<div className={classes.root}>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos hic
				voluptatem exercitationem quis nulla veritatis sapiente deleniti ex
				recusandae, aut commodi dolores at? Cupiditate qui quo sapiente? Enim,
				voluptate iure!
			</p>
			<Parallax speed={100}>
				<main>
					<h2>hello</h2>
				</main>
			</Parallax>
		</div>
	);
};
