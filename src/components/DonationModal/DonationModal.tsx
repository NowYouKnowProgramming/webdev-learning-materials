/** @jsxImportSource react */

import classes from './DonationModal.module.scss'

import * as Dialog from '@radix-ui/react-dialog'

import { Cross2Icon } from '@radix-ui/react-icons'
import { usePersistedState } from '../../hooks/usePersistedState'

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
		<Dialog.Root open={!donationDismissed} onOpenChange={handleOpenChange}>
			<Dialog.Trigger asChild>
				<button
					className='fixed bottom-5 right-5 z-50 motion-safe:hover:-translate-y-1 transition-transform'
					onClick={announcementButtonClickHandler}
				>
					<div className='select-none rounded-full absolute w-full h-full  bg-gradient-to-r from-[#ed4264] to-[#a824b6] top-0 left-0s motion-safe:animate-pulse blur-md'></div>
					<span className='relative font-bold bg-gradient-to-r from-[#ed4264] to-[#a824b6] py-2 px-4 rounded-full motion-reduce:hover:bg-white motion-reduce:hover:bg-none text-white motion-reduce:hover:text-black font-[nunito]'>
						Support us
					</span>
				</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className='bg-backdrop fixed inset-0 z-[5000] motion-safe:animate-fade' />
				<Dialog.Content className='z-[6000] bg-[#14071a] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md max-h-[85vh] p-6 overflow-hidden flex flex-col rounded-md align-baseline motion-safe:animate-fade animate-once animate-ease-out'>
					<Dialog.Title className='font-[nunito] m-0 font-bold text-lg pb-1 text-white w-full max-w-none'>
						We need{' '}
						<span
							className={
								'bg-clip-text text-transparent bg-gradient-to-r from-[#ed4264] to-[#a824b6] font-extrabold'
							}
						>
							your help
						</span>
					</Dialog.Title>
					<div className={classes.circle}></div>
					<div className={classes.circle2}></div>
					<div className={classes.scroll}>
						<Dialog.Description className='text-white m-0 leading-6 text-sm'>
							Hello! If you find value in our platform, please consider making a
							small donation to help us cover the costs. Even a few dollars can
							make a big difference in ensuring our website stays accessible to
							everyone. Thank you for your support!
						</Dialog.Description>
						<h3
							className={
								'font-[nunito] p-0 bg-clip-text text-transparent bg-gradient-to-r from-[#ed4264] to-[#a824b6] font-extrabold mt-2 mb-1 text-lg'
							}
						>
							Why we need funding to keep our project alive
						</h3>
						<ol className='text-white pl-5 list-decimal mb-3 text-sm'>
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
						<p className='text-sm text-white mb-4'>
							We would be very happy if we could cover at least half of the cost
							of domain renewal with donations from users 💕.
						</p>
						<iframe
							id='kofiframe'
							src='https://ko-fi.com/prplblck/?hidefeed=true&widget=true&embed=true&preview=true'
							className={classes.donationWidget}
							title='prplblck'
						></iframe>
					</div>
					<Dialog.Close asChild>
						<button className={classes.iconButton} aria-label='Close'>
							<Cross2Icon />
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}

export default DonationModal
