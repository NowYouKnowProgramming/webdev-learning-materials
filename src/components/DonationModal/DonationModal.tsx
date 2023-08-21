/** @jsxImportSource react */

import classes from './DonationModal.module.scss'

import * as Dialog from '@radix-ui/react-dialog'

import { Cross2Icon } from '@radix-ui/react-icons'

const DonationModal = () => {
	const shouldNotOpen = localStorage.getItem('donationDismissed')

	const handleOpenChange = (isOpen: boolean) => {
		if (!isOpen) {
			localStorage.setItem('donationDismissed', 'true')
		}
	}

	if (shouldNotOpen === 'true') return null

	return (
		<Dialog.Root defaultOpen onOpenChange={handleOpenChange}>
			<Dialog.Portal>
				<Dialog.Overlay className={classes.dialogOverlay} />
				<Dialog.Content className={classes.dialogContent}>
					<Dialog.Title className={classes.dialogTitle}>
						We need <span className={classes.textEmphasis}>your help</span>
					</Dialog.Title>
					<div className={classes.circle}></div>
					<div className={classes.circle2}></div>
					<div className={classes.scroll}>
						<Dialog.Description className={classes.dialogDescription}>
							Hello! If you find value in our platform, please consider making a
							small donation to help us cover the costs. Even a few dollars can
							make a big difference in ensuring our website stays accessible to
							everyone. Thank you for your support!
							<h3 className={classes.subtitle}>
								Why we need funding to keep our project alive
							</h3>
							<ul className={classes.list}>
								<li>
									We need to pay for our domain $40 each year (sadly it turns
									out that .tech domain reneval is expensive 💔)
								</li>
								<li>
									We plan to add features that will require backend hosting:
									comments inside bewebdev.tech, user feedback of invalid links
									and more
								</li>
							</ul>
							We would be very happy if we could cover at least half of the cost
							of domain renewal with donations from users 💕.
						</Dialog.Description>
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
