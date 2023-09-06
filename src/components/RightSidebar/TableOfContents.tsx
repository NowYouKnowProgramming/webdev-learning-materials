/** @jsxImportSource preact */

import type { FunctionalComponent } from 'preact'
import { useState, useEffect, useRef } from 'preact/hooks'
import type { MarkdownHeading } from 'astro'
import type { ReactNode } from 'react'

type ItemOffsets = {
	id: string
	topOffset: number
}

type ListLinkProps = {
	href: string
	children: ReactNode
	depth?: number
}

const ListLink = ({
	children,
	href,
	depth = 0,
}: ListLinkProps) => {

	return (
		<li className='p-1 border-b-2 border-b-basetext/10 last:border-0'>
			<a
				style={{
					paddingLeft: `${depth * 8}px`,
				}}
				className='hover:bg-basetext/10 rounded-md group-hover:border-b-transparent block px-4 py-1 text-sm scroll-mt-32 md:whitespace-nowrap'
				href={href}
			>
				{children}
			</a>
		</li>
	)
}

const TableOfContents: FunctionalComponent<{ headings: MarkdownHeading[] }> = ({
	headings = [],
}) => {
	const [isVisible, setIsVisible] = useState(true)
	const [width, setWidth] = useState<number>(0)
	const itemOffsets = useRef<ItemOffsets[]>([])
	// FIXME: Not sure what this state is doing. It was never set to anything truthy.
	const listRef = useRef<HTMLHeadingElement>(null)
	useEffect(() => {
		const getItemOffsets = () => {
			setWidth(window.innerWidth)
			const titles = document.querySelectorAll('article :is(h1, h2, h3, h4)')
			itemOffsets.current = Array.from(titles).map((title) => ({
				id: title.id,
				topOffset: title.getBoundingClientRect().top + window.scrollY,
			}))
		}

		getItemOffsets()
		window.addEventListener('resize', getItemOffsets)

		return () => {
			window.removeEventListener('resize', getItemOffsets)
		}
	}, [])

	const setSummaryVisibleHandler = () => {
		setIsVisible(true)
		setTimeout(() => {
			listRef.current?.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		}, 50)
	}

	const setSummaryHiddenHandler = () => {
		setIsVisible(false)
		setTimeout(() => {
			const h2 =
				document.querySelector<HTMLHeadingElement>('h2.heading-wrapper')
			if (!h2) return
			h2.style.scrollMarginTop = '100px'
			h2?.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}, 50)
	}

	if (!isVisible)
		return (
			<button className='text-theme-base motion-safe:transition cursor-pointer flex items-center justify-center rounded-md ring-1 ring-basetext/10 min-h-[40px] px-3 bg-theme-elevated/30' onClick={setSummaryVisibleHandler}>
				Show summary
			</button>
		)

	return (
		<>
			{width <= 769 && (
				<button className='text-theme-base motion-safe:transition cursor-pointer flex items-center justify-center rounded-md ring-1 ring-basetext/10 min-h-[40px] px-3 bg-theme-elevated/30' onClick={setSummaryHiddenHandler}>
					Hide summary
				</button>
			)}
			<h2
				ref={listRef}
				style={{ scrollMargin: '100px' }}
				className='mt-1 font-bold'
			>
				On this page
			</h2>
			<ul className='ring-1 ring-basetext/10 p-1 m-1 px-2 rounded-md'>
				<ListLink href='#overview'>Overview</ListLink>
				{headings
					.filter(({ depth }) => depth > 1 && depth < 5)
					.map((heading) => (
						<ListLink key={`#${heading.slug}`} depth={heading.depth} href={`#${heading.slug}`}>
							{heading.text}
						</ListLink>
					))}
			</ul>
		</>
	)
}

export default TableOfContents
