type PromoData = {
	imageSrc: {
		src: string
		alt: string
	}
	title: string
	iconSrc?: string
	description: string
}

export const data: PromoData[] = [
	{
		title: 'Are you tired of wrong answers?',
		iconSrc: '/images/promo/emoji/exclamation-question.webp',
		imageSrc: {
			alt: 'Person with a laptop holding their head with left hand with a sore expression on their face',
			src: '/images/promo/Headache.webp',
		},
		description:
			'When starting out with web development, it can be difficult to know where to start. When searching JavaScript problem solutions online, you often are faced with a sea of jQuery code, which is a library that is no longer used in modern web development.',
	},
	{
		title: 'Find what you need to learn',

		iconSrc: '/images/promo/emoji/brain.webp',
		imageSrc: {
			alt: 'person programming',
			src: '/images/promo/Programming-amico.webp',
		},
		description:
			'The knowledge you need to build a website is out there, but it’s scattered across the internet. You have to know where to look, and how to find the information you need. We’ve done the work for you. We’ve collected the best resources and put them in one place.',
	},
	{
		title: 'Together we can build a better web',
		iconSrc: '/images/promo/emoji/cog.webp',
		imageSrc: {
			alt: 'Two people with a laptop, computer and a smartphone and a globe in the center surrounded by a net of icons',
			src: '/images/promo/online.webp',
		},
		description:
			'Use materials from this site to learn how to build a website. You can contribute to our project by adding new resources, or by helping us improve the site. Go to our GitHub page to learn more.',
	},
]
