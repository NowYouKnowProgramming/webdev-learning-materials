/** @jsxImportSource react */

import ParallaxCard from './ParallaxCard'
import { ParallaxPuzzle } from './ParallaxPuzzle'
import { data } from './Promo.data'
import classes from './Promo.module.css'

export const Promo = () => {
	const Cards = data.map((card, index) => {
		const cardKey = `card${index + card.title}`

		const direction = index % 2 === 0 ? 'childrenLeft' : 'childrenRight'

		return (
			<ParallaxCard
				key={cardKey}
				title={card.title}
				imageSrc={card.imageSrc}
				iconSrc={card?.iconSrc}
				direction={direction}
			>
				<p>{card.description}</p>
			</ParallaxCard>
		)
	})

	return (
		<div className={classes.root}>
			<ParallaxPuzzle />
			{Cards}
		</div>
	)
}
