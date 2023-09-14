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
                  className='fixed inset-0 z-[5000] bg-backdrop/40'
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
                  className='fixed left-1/2 top-1/2 z-[6000] flex max-h-[85vh] w-[90vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-md bg-theme-base p-6 align-baseline shadow-xl ring-1 ring-basetext/10 will-change-transform'
                >
                  <Dialog.Title className='m-0 w-full max-w-none pb-1 text-lg font-bold text-theme-base xl:text-3xl'>
                    We need{' '}
                    <span className={'gradient-text font-extrabold'}>
                      your help
                    </span>
                  </Dialog.Title>
                  <div className='relative overflow-auto'>
                    <Dialog.Description className='m-0 text-sm leading-6 text-theme-base xl:mb-6'>
                      Hello! If you find value in our platform, please consider
                      making a small donation to help us cover the costs. Even a
                      few dollars can make a big difference in ensuring our
                      website stays accessible to everyone. Thank you for your
                      support!
                    </Dialog.Description>
                    <h3
                      className={
                        'gradient-text mb-1 mt-2 p-0 text-lg font-extrabold xl:text-2xl'
                      }
                    >
                      Why we need funding to keep our project alive
                    </h3>
                    <ol className='mb-3 list-decimal pl-5 text-sm text-theme-base xl:mb-6'>
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
                    <p className='mb-4 text-sm text-theme-base'>
                      We would be very happy if we could cover at least half of
                      the cost of domain renewal with donations from users 💕.
                    </p>
                    <iframe
                      id='kofiframe'
                      src='https://ko-fi.com/prplblck/?hidefeed=true&widget=true&embed=true&preview=true'
                      className='m-auto h-[750px] max-w-full overflow-hidden rounded-md border-none bg-[#ffffff] p-1 md:min-w-[400px]'
                      title='prplblck'
                      loading='lazy'
                    ></iframe>
                  </div>
                  <Dialog.Close asChild>
                    <button
                      className='group absolute right-[10px] top-[10px] inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-theme-base p-2 text-theme-base shadow-md ring-1 ring-basetext/20 transition ease-out hover:shadow-lg motion-safe:hover:scale-125 motion-reduce:hover:ring-basetext/60'
                      aria-label='Close'
                    >
                      <Cross2Icon
                        width='100%'
                        height='100%'
                        className='transition duration-700 motion-safe:group-hover:rotate-90'
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
