/** @jsxImportSource react */

import { useEffect, useState } from 'react'
import { getStarCount } from './getStarCount'
import { getStarFromLocalStorage } from './getStarFromLocalStorage'
import classes from './GitStarPromoSection.module.css'
import { Stars } from './Stars'

//TODO add stars floating moving on mouse move

export const GitStarPromoSection = () => {
	const [starCount, setStarCount] = useState(0)

	useEffect(() => {
		const stars = getStarFromLocalStorage()
		if (stars !== null) {
			setStarCount(stars.starCount)
		}
		if (stars === null) {
			getStarCount().then((count) => {
				setStarCount(count)
			})
		}
	}, [])

	return (
		<div className={classes.root}>
			<div className={classes.textContainer}>
				<h2 className={classes.sectionTitle}>Give us a ⭐ on GitHub</h2>
				<a
					className={classes.button}
					href='https://github.com/NowYouKnowProgramming/webdev-learning-materials'
				>
					<span className={classes.textInButton}>Star</span>
					{!!starCount && (
						<>
							<span className={classes.separator} aria-hidden='true' />

							<span className={classes.textInButton}>{starCount}</span>
						</>
					)}
				</a>
			</div>
			<Stars />
		</div>
	)
}
