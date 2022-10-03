type PromoData = {
	imageSrc: {
		src: string;
		alt: string;
	};
	title: string;
	iconSrc?: string;
	description: string;
};

export const data: PromoData[] = [
	{
		title: 'Are you tired of wrong answers?',
		iconSrc:
			'https://img.icons8.com/emoji/12x/exclamation-question-mark-emoji.png',
		imageSrc: {
			alt: 'jquery code example',
			src: 'https://ouch-cdn2.icons8.com/7VvFyC515Y1E1JaSOZBcvEq2iUjaKaojSlBhtCHHmRA/rs:fit:608:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzU2/LzdjYjEyM2Q1LWQz/NjItNDI3NS1iYjk5/LWNiMDE2Zjk3ODQ3/ZS5zdmc.png',
		},
		description:
			'When starting out with web development, it can be difficult to know where to start. When searching JavaScript problem solutions online, you often are faced with a sea of jQuery code, which is a library that is no longer used in modern web development.',
	},
	{
		title: 'Find what you need to learn',
		iconSrc: 'https://images.emojiterra.com/google/android-11/512px/1f9e0.png',
		imageSrc: {
			alt: 'jquery code example',
			src: 'https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f4da.png',
		},
		description:
			'The knowledge you need to build a website is out there, but it’s scattered across the internet. You have to know where to look, and how to find the information you need. We’ve done the work for you. We’ve collected the best resources and put them in one place.',
	},
	{
		title: 'Together we can build a better web',
		iconSrc: 'https://images.emojiterra.com/google/android-10/512px/2699.png',
		imageSrc: {
			alt: 'jquery code example',
			src: 'https://www.mrwebsmith.com/wp-content/uploads/2021/02/OSM-dev-top-updated-img.png',
		},
		description:
			'Use materials from this site to learn how to build a website. You can contribute to our project by adding new resources, or by helping us improve the site. Go to our GitHub page to learn more.',
	},
];
