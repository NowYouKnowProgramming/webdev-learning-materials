/** @jsxImportSource react */

import { Star } from './Star'

type Props = {
	shouldGlow: boolean
}

export const Stars = ({ shouldGlow }: Props) => {
	return (
		<>
			<Star
				style={{
					top: '10%',
					left: '10%',
				}}
				strength={0.05}
				shouldGlow={shouldGlow}
			/>
			<Star
				style={{
					top: '20%',
					left: '60%',
				}}
				strength={0.03}
				shouldGlow={shouldGlow}
			/>
			<Star
				style={{
					top: '70%',
					left: '50%',
				}}
				strength={0.05}
				shouldGlow={shouldGlow}
			/>
			<Star
				style={{
					top: '80%',
					left: '15%',
				}}
				strength={0.05}
				shouldGlow={shouldGlow}
			/>
			<Star
				style={{
					top: '50%',
					left: '55%',
				}}
				strength={0.05}
				shouldGlow={shouldGlow}
			/>
			<Star
				style={{
					left: '90%',
					top: '68%',
				}}
				strength={0.18}
				shouldGlow={shouldGlow}
			/>
			<Star
				style={{
					left: '30%',
					top: '80%',
				}}
				strength={0.14}
				shouldGlow={shouldGlow}
			/>
			<Star
				style={{
					left: '30%',
					top: '30%',
				}}
				strength={0.07}
				shouldGlow={shouldGlow}
			/>
			<Star
				style={{
					left: '70%',
					top: '70%',
				}}
				strength={0.03}
				shouldGlow={shouldGlow}
			/>
			<Star
				style={{
					left: '70%',
					top: '50%',
				}}
				strength={0.09}
				shouldGlow={shouldGlow}
			/>
			<Star
				style={{
					left: '90%',
					top: '10%',
				}}
				strength={0.03}
				shouldGlow={shouldGlow}
			/>
		</>
	)
}
