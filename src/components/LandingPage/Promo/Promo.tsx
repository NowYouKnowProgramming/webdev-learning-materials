/** @jsxImportSource react */

import { useEffect, useState } from 'react';
import { ScrollParallax } from 'react-just-parallax';
import classes from './Promo.module.css';

const Component = () => <h2 className={classes.paragraph}>hello</h2>;

export const Promo = () => {
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<ScrollParallax isAbsolutelyPositioned>
					<Component />
				</ScrollParallax>
			</div>
			<p>Siema</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi harum
				quasi quibusdam beatae quis deserunt similique magnam ex. Corporis qui
				sit sed optio fuga iusto asperiores nobis officiis harum explicabo!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi harum
				quasi quibusdam beatae quis deserunt similique magnam ex. Corporis qui
				sit sed optio fuga iusto asperiores nobis officiis harum explicabo!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi harum
				quasi quibusdam beatae quis deserunt similique magnam ex. Corporis qui
				sit sed optio fuga iusto asperiores nobis officiis harum explicabo!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi harum
				quasi quibusdam beatae quis deserunt similique magnam ex. Corporis qui
				sit sed optio fuga iusto asperiores nobis officiis harum explicabo!
			</p>
		</div>
	);
};
