export const SITE = {
	title: 'bewebdev.tech',
	description: 'The best way to learn web development',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: '/public/default-og-image.png',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'bewebdev.tech',
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

export const GITHUB_EDIT_URL = `https://github.com/NowYouKnowProgramming/webdev-learning-materials/tree/main`;

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
		Start: [{ text: 'Introduction', link: 'introduction' }],
		Common: [
			{ text: 'English', link: 'common/english' },
			{ text: 'HR', link: 'common/hr_recruitment_resources' },
			{ text: 'Job boards', link: 'common/job_boards' },
			{ text: 'Learning to learn', link: 'common/learning_to_learn' },
			{ text: 'Productivity', link: 'common/productivity' },
		],
		Principles: [
			{ text: 'Design patterns', link: 'principles/design_patterns' },
			{ text: 'Clean code', link: 'principles/clean_code' },
			{ text: 'Testing', link: 'principles/testing' },
			{ text: 'UI and UX', link: 'principles/design_ui_ux' },
		],
		Software: [{ text: 'Visual Studio Code', link: 'software/vscode' }],
		Resources: [
			{ text: 'Build your project', link: 'resources/build_your_project' },
			{ text: 'Test your skills', link: 'resources/test_your_skills' },
			{
				text: 'YouTube channels and blogs',
				link: 'resources/youtube_channels_blogs',
			},
			{ text: 'Other resources', link: 'resources/other_resources' },
			{ text: 'Other tutorials', link: 'resources/tutorials' },
		],
		Technologies: [
			{ text: 'HTML', link: 'technologies/html' },
			{ text: 'CSS', link: 'technologies/css' },
			{ text: 'JavaScript', link: 'technologies/javascript' },
			{ text: 'TypeScript', link: 'technologies/typescript' },
			{ text: 'React', link: 'technologies/react' },
			{ text: 'Git', link: 'technologies/git' },
			{ text: 'Node.js', link: 'technologies/nodejs' },
			{ text: 'Next.js', link: 'technologies/nextjs' },
			{ text: 'Redux', link: 'technologies/redux' },
		],
	},
};
