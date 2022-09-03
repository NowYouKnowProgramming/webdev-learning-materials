// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Web Development Learning Materials',
  tagline: 'A list of GOOD learning materials for Web Development.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NowYouKnowProgramming', // Usually your GitHub org/user name.
  projectName: 'webdev-learning-materials', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Web Development Learning Materials',
        logo: {
          alt: 'Web Development Learning Materials Logo',
          src: 'img/nukp-logo.png',
        },
        items: [
          {
            href: 'https://github.com/NowYouKnowProgramming/webdev-learning-materials',
            label: 'GitHub',
            position: 'left',
            activeBaseRegex: 'docs/(next|v8)',
            target: '_blank',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Creators',
            items: [
              {
                label: 'Will4_U',
                href: 'https://github.com/Willaiem/',
              },
              {
                label: 'Purple Black',
                href: 'https://github.com/goodideagiver',
              },
            ],
          },
          {
            title: "Our organization!",
            items: [
              {
                label: "Now You Know Programming",
                href: "https://github.com/NowYouKnowProgramming"
              },
              {
                label: "Profile picture provided by Lorenzo Herrera",
                href: "https://unsplash.com/photos/yP89apz2TAA"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Now You Know Programming Inc. - built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  staticDirectories: ["static", "./docs/assets"]
};

module.exports = config;
