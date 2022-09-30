export const SITE = {
	title: 'bewebdev.tech',
	description: 'Web development learning materials',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: '/public/default-og-image.png',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/NowYouKnowProgramming/webdev-learning-materials/tree/astro`;

export const COMMUNITY_INVITE_URL = `https://github.com/NowYouKnowProgramming/webdev-learning-materials`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		Start: [{ text: 'Introduction', link: 'en/introduction' }],
		Common: [
			{ text: 'English', link: 'en/Common/english' },
			{ text: 'HR', link: 'en/Common/hr_recruitment_resources' },
			{ text: 'Job boards', link: 'en/Common/job_boards' },
			{ text: 'Learning to learn', link: 'en/Common/learning_to_learn' },
			{ text: 'Productivity', link: 'en/Common/productivity' },
		],
		Principles: [
			{ text: 'Design patterns', link: 'en/Principles/design_patterns' },
			{ text: 'Clean code', link: 'en/Principles/clean_code' },
			{ text: 'Testing', link: 'en/Principles/testing' },
			{ text: 'UI and UX', link: 'en/Principles/design_ui_ux' },
		],
		Software: [{ text: 'Visual Studio Code', link: 'en/Software/vscode' }],
		Resources: [
			{ text: 'Build your project', link: 'en/Resources/build_your_project' },
			{ text: 'Test your skills', link: 'en/Resources/test_your_skills' },
			{
				text: 'YouTube channels and blogs',
				link: 'en/Resources/youtube_channels_blogs',
			},
			{ text: 'Other resources', link: 'en/Resources/other_resources' },
			{ text: 'Other tutorials', link: 'en/Resources/tutorials' },
		],
		Technologies: [
			{ text: 'CSS', link: 'en/Technologies/css' },
			{ text: 'Git', link: 'en/Technologies/git' },
			{ text: 'HTML', link: 'en/Technologies/html' },
			{ text: 'JavaScript', link: 'en/Technologies/javascript' },
			{ text: 'Next.js', link: 'en/Technologies/nextjs' },
			{ text: 'Node.js', link: 'en/Technologies/nodejs' },
			{ text: 'React', link: 'en/Technologies/react' },
			{ text: 'Redux', link: 'en/Technologies/redux' },
			{ text: 'TypeScript', link: 'en/Technologies/typescript' },
		],
	},
};
