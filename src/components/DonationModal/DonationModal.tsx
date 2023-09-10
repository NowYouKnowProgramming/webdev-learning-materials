/** @jsxImportSource react */

import * as Dialog from '@radix-ui/react-dialog'

import { Cross2Icon } from '@radix-ui/react-icons'
import { AnimatePresence, motion } from 'framer-motion'
import { usePersistedState } from '../../hooks/usePersistedState'
import { DonationButton } from './DonationButton'

const DonationModal = () => {
	const [donationDismissed, setDonationDismissed] = usePersistedState(
		false,
		'donationDismissed',
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
				<DonationButton onClick={announcementButtonClickHandler} />
			</Dialog.Trigger>
			<Dialog.Portal forceMount>
				<AnimatePresence>
					{!donationDismissed && (
						<>
							<Dialog.Overlay key='backdrop' asChild>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									className='bg-backdrop/40 fixed inset-0 z-[5000]'
								></motion.div>
							</Dialog.Overlay>
							<Dialog.Content asChild key='modal'>
								<motion.div
									key='modal'
									initial={{ opacity: 0, scale: 0.8, y: '-40%', x: '-50%' }}
									animate={{ opacity: 1, scale: 1, y: '-50%', x: '-50%' }}
									exit={{ opacity: 0, scale: 0.5, y: '-40%', x: '-50%' }}
									transition={{
										delay: 0.1,
									}}
									className='will-change-transform ring-1 ring-basetext/10 shadow-xl z-[6000] bg-theme-base fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-3xl max-h-[85vh] p-6 overflow-hidden flex flex-col rounded-md align-baseline'
								>
									<Dialog.Title className='m-0 font-bold text-lg xl:text-3xl pb-1 text-theme-base w-full max-w-none'>
										We need{' '}
										<span className={'gradient-text font-extrabold'}>
											your help
										</span>
									</Dialog.Title>
									<div className='relative overflow-auto'>
										<Dialog.Description className='text-theme-base m-0 leading-6 text-sm xl:mb-6'>
											Hello! If you find value in our platform, please consider
											making a small donation to help us cover the costs. Even a
											few dollars can make a big difference in ensuring our
											website stays accessible to everyone. Thank you for your
											support!
										</Dialog.Description>
										<h3
											className={
												'p-0 gradient-text font-extrabold mt-2 mb-1 text-lg xl:text-2xl'
											}
										>
											Why we need funding to keep our project alive
										</h3>
										<ol className='text-theme-base pl-5 list-decimal mb-3 text-sm xl:mb-6'>
											<li className='mb-1'>
												We need to pay for our domain $40 each year (sadly it
												turns out that .tech domain reneval is expensive 💔)
											</li>
											<li className='mb-1'>
												We plan to add features that will require backend
												hosting: comments inside bewebdev.tech, user feedback of
												invalid links and more
											</li>
										</ol>
										<p className='text-sm text-theme-base mb-4'>
											We would be very happy if we could cover at least half of
											the cost of domain renewal with donations from users 💕.
										</p>
										<iframe
											id='kofiframe'
											src='https://ko-fi.com/prplblck/?hidefeed=true&widget=true&embed=true&preview=true'
											className='md:min-w-[400px] m-auto max-w-full border-none h-[750px] rounded-md bg-[#ffffff] p-1 overflow-hidden'
                      title='prplblck'
                      loading='lazy'
										></iframe>
									</div>
									<Dialog.Close asChild>
										<button
											className='rounded-full h-10 w-10 inline-flex items-center justify-center text-theme-base bg-theme-base absolute top-[10px] right-[10px] cursor-pointer shadow-md motion-safe:hover:scale-125 transition ease-out p-2 hover:shadow-lg group ring-1 ring-basetext/20 motion-reduce:hover:ring-basetext/60'
											aria-label='Close'
										>
											<Cross2Icon
												width='100%'
												height='100%'
												className='motion-safe:group-hover:rotate-90 transition duration-700'
											/>
										</button>
									</Dialog.Close>
								</motion.div>
							</Dialog.Content>
						</>
					)}
				</AnimatePresence>
			</Dialog.Portal>
		</Dialog.Root>
	)
}

export default DonationModal
