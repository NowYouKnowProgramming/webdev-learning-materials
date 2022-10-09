/** @jsxImportSource react */

type Props = {
	iconSrc: string
	iconCss: string
}

export const ParallaxCardIcon = ({ iconSrc, iconCss }: Props) => {
	return (
		<div aria-hidden='true' className={iconCss}>
			<img src={iconSrc} alt='' aria-hidden='true' />
		</div>
	)
}
