/** @jsxImportSource react */

import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import React from 'react'

type Props = {
	items: {
		title: string
		content: string
	}[]
}

export const AccordionFAQ = ({ items }: Props) => {
	return (
		<Accordion.Root
			className='w-full flex flex-col gap-5'
			type='single'
			collapsible
		>
			{items.map((item, index) => (
				<AccordionItem key={index} value={`item-${index}`}>
					<AccordionTrigger>{item.title}</AccordionTrigger>
					<AccordionContent>{item.content}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion.Root>
	)
}

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof Accordion.Item>,
	React.ComponentProps<typeof Accordion.Item>
>(({ children, className, onClick, ...props }, forwardedRef) => (
	<Accordion.Item
		className={'w-full'}
		onClick={onClick}
		{...props}
		ref={forwardedRef}
	>
		{children}
	</Accordion.Item>
))

type AccordionTriggerPrimitiveProps = React.ComponentProps<
	typeof Accordion.Trigger
>
type AccordionTriggerProps = AccordionTriggerPrimitiveProps

const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof Accordion.Trigger>,
	AccordionTriggerProps
>(({ children, className, ...props }, forwardedRef) => (
	<Accordion.Header className='flex p-[2px] bg-gradient-to-r from-grad-start/30 to-grad-end/30 data-[state=closed]:rounded-lg data-[state=open]:rounded-t-lg shadow-xl'>
		<Accordion.Trigger
			className={clsx(
				'bg-theme-base p-6 rounded-md w-full justify-between group flex items-center',
				className,
			)}
			{...props}
			ref={forwardedRef}
		>
			<div>{children}</div>
			<ChevronDownIcon
				className='text-theme-base ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 motion-reduce:duration-0 group-data-[state=open]:rotate-180'
				aria-hidden
			/>
		</Accordion.Trigger>
	</Accordion.Header>
))

const AccordionContent = React.forwardRef<
	React.ElementRef<typeof Accordion.Content>,
	React.ComponentProps<typeof Accordion.Content>
>(({ children, className, ...props }, forwardedRef) => (
	<Accordion.Content
		className={clsx(
			'bg-gradient-to-r from-grad-start/30 rounded-b-md to-grad-end/30 overflow-hidden text-theme-base bg-theme-base',
			className,
		)}
		{...props}
		ref={forwardedRef}
	>
		<div className='py-[15px] px-5'>{children}</div>
	</Accordion.Content>
))
