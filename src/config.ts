export const SITE = {
  title: 'bewebdev.tech',
  description: 'The best way to learn web development',
  defaultLanguage: 'en_US',
}

export const OPEN_GRAPH = {
	twitter: 'bewebdev.tech',
}

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string
  description: string
  layout: string
  image?: { src: string; alt: string }
  dir?: 'ltr' | 'rtl'
  ogLocale?: string
  lang?: string
  filePath?: string
  lastModified?:  string
}

export const GITHUB_EDIT_URL = `https://github.com/NowYouKnowProgramming/webdev-learning-materials/tree/main`

export const COMMUNITY_INVITE_URL = `https://github.com/NowYouKnowProgramming/webdev-learning-materials`

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: import.meta.env.PUBLIC_INDEX_NAME ?? '',
  appId: import.meta.env.PUBLIC_APP_ID ?? '',
  apiKey: import.meta.env.PUBLIC_API_KEY ?? '',
}

export type Sidebar = Record<string, { text: string; link: string }[]>

export const SIDEBAR: Sidebar = {
  Start: [{ text: 'Introduction', link: 'introduction' }],
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
  Common: [
    { text: 'English', link: 'common/english' },
    {
      text: 'HR and job seeking tips',
      link: 'common/hr_recruitment_resources',
    },
    { text: 'Job boards', link: 'common/job_boards' },
    { text: 'Learning to learn', link: 'common/learning_to_learn' },
    { text: 'Programmer POV', link: 'common/programmer_pov' },
    { text: 'Productivity', link: 'common/productivity' },
  ],
  Principles: [
    { text: 'Design patterns', link: 'principles/design_patterns' },
    { text: 'Clean code', link: 'principles/clean_code' },
    { text: 'Testing', link: 'principles/testing' },
    { text: 'UI and UX', link: 'principles/design_ui_ux' },
    { text: 'How web works', link: 'principles/how_web_works' },
    { text: 'Frontend development', link: 'principles/frontend' },
  ],
  Software: [
    { text: 'Visual Studio Code', link: 'software/vscode' },
    { text: 'Vim', link: 'software/vim' },
    { text: 'Other tools', link: 'software/other_tools' },
    { text: 'Development setup', link: 'software/development_setup' },
    { text: 'Repository tools', link: 'software/repository_tools' },
  ],
  Resources: [
    {
      text: 'Project ideas and planning',
      link: 'resources/build_your_project',
    },
    { text: 'Build a complete project', link: 'resources/complete_project' },
    { text: 'Test your skills', link: 'resources/test_your_skills' },
    {
      text: 'Content creators',
      link: 'resources/content_creators',
    },
    { text: 'Other resources', link: 'resources/other_resources' },
  ],
}
