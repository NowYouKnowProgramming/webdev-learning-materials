import type { FunctionalComponent } from 'preact'
import { useState, useEffect, useRef } from 'preact/hooks'
import type { MarkdownHeading } from 'astro'
import classes from './TableOfContents.module.scss'

type ItemOffsets = {
	id: string
	topOffset: number
}

const TableOfContents: FunctionalComponent<{ headings: MarkdownHeading[] }> = ({
	headings = [],
}) => {
	const [isVisible, setIsVisible] = useState(true)
	const [width, setWidth] = useState<number>(0)
	const itemOffsets = useRef<ItemOffsets[]>([])
	// FIXME: Not sure what this state is doing. It was never set to anything truthy.
	const listRef = useRef<HTMLHeadingElement>(null)
	const [activeId] = useState<string>('')
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
			console.log(listRef.current)
			listRef.current?.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		}, 50)
	}

	const setSummaryHiddenHandler = () => {
		setIsVisible(false)
		setTimeout(() => {
			const h2 = document.querySelector(
				'h2.heading-wrapper'
			) as HTMLHeadingElement
			h2.style.scrollMarginTop = '100px'
			h2?.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}, 50)
	}

	if (!isVisible)
		return (
			<button className={classes.toggle} onClick={setSummaryVisibleHandler}>
				Show summary
			</button>
		)

	return (
		<>
			{width <= 769 && (
				<button className={classes.toggle} onClick={setSummaryHiddenHandler}>
					Hide summary
				</button>
			)}
			<h2 ref={listRef} style={{ scrollMargin: '100px' }} className='heading'>
				On this page
			</h2>
			<ul>
				<li
					className={`heading-link ${
						activeId === 'overview' ? 'active' : ''
					}`.trim()}
				>
					<a href='#overview'>Overview</a>
				</li>
				{headings
					.filter(({ depth }) => depth > 1 && depth < 5)
					.map((heading) => (
						<li
							className={`heading-link depth-${heading.depth} ${
								activeId === heading.slug ? 'active' : ''
							}`.trim()}
						>
							<a href={`#${heading.slug}`}>{heading.text}</a>
						</li>
					))}
			</ul>
		</>
	)
}

export default TableOfContents
