/** @jsxImportSource react */

import classes from './DonationModal.module.scss'

import * as Dialog from '@radix-ui/react-dialog'

import { Cross2Icon, HeartFilledIcon } from '@radix-ui/react-icons'
import { usePersistedState } from '../../hooks/usePersistedState'

const GradientGlow = () => (
	<div className='scale-0 group-hover:scale-100 transition-transform ease-in-out select-none absolute w-full h-full  bg-gradient-to-r from-grad-start to-grad-end top-0 left-0s motion-safe:animate-pulse blur-md duration-700'></div>
)

const DonationModal = () => {
	const [donationDismissed, setDonationDismissed] = usePersistedState(
		false,
		'donationDismissed'
	)

	const handleOpenChange = (isOpen: boolean) => {
		if (!isOpen) {
			setDonationDismissed(true)
		}
	}

	const announcementButtonClickHandler = () => {
		setDonationDismissed(false)
	}

	return (
		<Dialog.Root
			defaultOpen={!donationDismissed}
			open={!donationDismissed}
			onOpenChange={handleOpenChange}
		>
			<Dialog.Trigger asChild>
				<button
					className='group fixed bottom-5 right-5 z-50 transition-transform motion-safe:hover:scale-105 ease-out shadow-lg'
					onClick={announcementButtonClickHandler}
				>
					<GradientGlow />
					<span className='relative font-bold bg-gradient-to-r from-grad-start to-grad-end rounded-md motion-reduce:hover:bg-white motion-reduce:hover:bg-none text-white motion-reduce:hover:text-black flex gap-2 py-3 px-8 hover:shadow-2xl items-center'>
						<div className='relative motion-safe:group-hover:translate-x-11 motion-safe:group-hover:scale-[2.3] transition-transform ease-out'>
							<HeartFilledIcon className='absolute top-1/5 animate-ping motion-reduce:hidden' />
							<HeartFilledIcon />
						</div>
						<div className='group-hover:opacity-0 transition-opacity'>
							Support us
						</div>
					</span>
				</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className='bg-backdrop/20 fixed inset-0 z-[5000] motion-safe:animate-fade' />
				<Dialog.Content className='shadow-xl z-[6000] bg-theme-base fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-3xl max-h-[85vh] p-6 overflow-hidden flex flex-col rounded-md align-baseline motion-safe:animate-fade animate-once animate-ease-out'>
					<Dialog.Title className='font-[nunito] m-0 font-bold text-lg xl:text-3xl pb-1 text-theme-base w-full max-w-none'>
						We need{' '}
						<span className={'gradient-text font-extrabold'}>your help</span>
					</Dialog.Title>
					<div className={classes.circle}></div>
					<div className={classes.circle2}></div>
					<div className={classes.scroll}>
						<Dialog.Description className='text-theme-base m-0 leading-6 text-sm xl:mb-6'>
							Hello! If you find value in our platform, please consider making a
							small donation to help us cover the costs. Even a few dollars can
							make a big difference in ensuring our website stays accessible to
							everyone. Thank you for your support!
						</Dialog.Description>
						<h3
							className={
								'font-[nunito] p-0 gradient-text font-extrabold mt-2 mb-1 text-lg xl:text-2xl'
							}
						>
							Why we need funding to keep our project alive
						</h3>
						<ol className='text-theme-base pl-5 list-decimal mb-3 text-sm xl:mb-6'>
							<li className='mb-1'>
								We need to pay for our domain $40 each year (sadly it turns out
								that .tech domain reneval is expensive 💔)
							</li>
							<li className='mb-1'>
								We plan to add features that will require backend hosting:
								comments inside bewebdev.tech, user feedback of invalid links
								and more
							</li>
						</ol>
						<p className='text-sm text-theme-base mb-4'>
							We would be very happy if we could cover at least half of the cost
							of domain renewal with donations from users 💕.
						</p>
						<iframe
							id='kofiframe'
							src='https://ko-fi.com/prplblck/?hidefeed=true&widget=true&embed=true&preview=true'
							className='md:min-w-[400px] m-auto max-w-full border-none h-[750px] rounded-md bg-[#ffffff] p-1 overflow-hidden'
							title='prplblck'
						></iframe>
					</div>
					<Dialog.Close asChild>
						<button
							className='rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-theme-base bg-theme-base absolute top-[10px] right-[10px] cursor-pointer shadow-md hover:scale-125 transition ease-out xl:h-[35px] xl:w-[35px] p-2 hover:shadow-lg group ring-1 ring-basetext/20'
							aria-label='Close'
						>
							<Cross2Icon
								width='100%'
								height='100%'
								className='group-hover:rotate-90 transition duration-700'
							/>
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}

export default DonationModal
