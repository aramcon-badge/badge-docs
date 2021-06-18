/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'ARAMCON Badge',
  tagline: 'Hack it.',
  url: 'https://badge.a-combinator.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'aramcon-badge',
  projectName: 'badge-docs',
  themeConfig: {
    image: 'img/cover-photo.jpg',
    navbar: {
      title: 'ARAMCON Badge',
      logo: {
        alt: 'ARAMCON',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Badge Docs',
        },
        {
          href: 'https://github.com/aramcon-badge',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/badge/getting-started',
            },
            {
              label: 'Python REPL',
              to: '/badge/repl',
            },
            {
              label: 'Programming Guide',
              to: '/programming/getting-started',
            },
            {
              label: 'Add-ons',
              to: '/addons/addons',
            },
          ],
        },
        {
          title: 'Github',
          items: [
            {
              label: 'Main firmware (python)',
              to: 'https://github.com/aramcon-badge/aramcon-firmware',
            },
            {
              label: 'Hardware files',
              to: 'https://github.com/aramcon-badge/aramcon-hardware',
            },
            {
              label: 'Apps',
              to: 'https://github.com/aramcon-badge/badge-examples',
            },
            {
              label: 'Docs repo',
              to: 'https://github.com/aramcon-badge/badge-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ARAMCON Badge Team. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/aramcon-badge/badge-docs/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
