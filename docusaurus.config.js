// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MV Sistemas',
  tagline: 'public health systems',
  url: 'https://mv-sistemas.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mv-sistemas', // Usually your GitHub org/user name.
  projectName: 'mv-sistemas', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/mv-sistemas/mv-sistemas.github.io/tree/main/',
        },
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
        title: 'MV Sistemas',
        logo: {
          alt: 'MV Sistemas',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/mv-sistemas/amestris',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'amestris/amestris',
            label: 'Amestris'
          }
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} MV Sistemas. Built with Docusaurus. Proudly hosted at Github.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
