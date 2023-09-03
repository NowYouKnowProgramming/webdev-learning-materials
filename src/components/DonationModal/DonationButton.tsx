import { HeartFilledIcon } from '@radix-ui/react-icons'

const GradientGlow = () => (
	<div className='scale-0 group-hover:scale-100 transition-transform motion-reduce:duration-0 ease-in-out select-none absolute w-full h-full  bg-gradient-to-r to-grad-start from-grad-end top-0 left-0s motion-safe:animate-pulse blur-md duration-700 pointer-events-none'></div>
)

type Props = {
	onClick: () => void
}

export const DonationButton = ({ onClick }: Props) => {
	return (
		<button
			className='select-none group fixed bottom-5 right-5 z-50 transition-transform motion-safe:hover:scale-105 ease-out shadow-lg'
			onClick={onClick}
		>
			<GradientGlow />
			<span className='relative font-bold bg-gradient-to-r from-grad-start to-grad-end rounded-md motion-reduce:hover:bg-white motion-reduce:hover:bg-none text-white motion-reduce:hover:text-black flex gap-2 py-3 px-8 hover:shadow-2xl items-center'>
				<div className='select-none pointer-events-none relative motion-safe:group-hover:translate-x-11 motion-safe:group-hover:scale-[2.3] transition-transform ease-out'>
					<HeartFilledIcon className='absolute top-1/5 animate-ping motion-reduce:hidden' />
					<HeartFilledIcon />
				</div>
				<div className='motion-safe:group-hover:opacity-0 transition-opacity'>
					Support us
				</div>
			</span>
		</button>
	)
}
