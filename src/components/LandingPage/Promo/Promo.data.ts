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
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Red_x.svg/480px-Red_x.svg.png',
		imageSrc: {
			alt: 'jquery code example',
			src: 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2018/07/Screen-Shot-2019-06-25-at-3.51.26-PM.png',
		},
		description:
			'When starting out with web development, it can be difficult to know where to start. When searching JavaScript problem solutions online, you often are faced with a sea of jQuery code, which is a library that is no longer used in modern web development.',
	},
	{
		title: 'Learn only what you need to',
		iconSrc:
			'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/81/smiling-face-with-heart-shaped-eyes_1f60d.png',
		imageSrc: {
			alt: 'jquery code example',
			src: 'https://images.unsplash.com/photo-1462536943532-57a629f6cc60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
		},
		description:
			'The knowledge you need to build a website is out there, but it’s scattered across the internet. You have to know where to look, and how to find the information you need. We’ve done the work for you. We’ve collected the best resources and put them in one place.',
	},
	{
		title: 'Together we can build a better web',
		iconSrc:
			'https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/star_2b50.png',
		imageSrc: {
			alt: 'jquery code example',
			src: 'https://images.unsplash.com/photo-1561570541-aaba21a3ecf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
		},
		description:
			'Use materials from this site to learn how to build a website. You can contribute to our project by adding new resources, or by helping us improve the site. Go to our GitHub page to learn more.',
	},
];
