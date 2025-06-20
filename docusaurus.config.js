// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Prokontik Dokumentacija',
  tagline: 'Korisnička dokumentacija za knjigovodstveni softver Prokontik',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.prokontik.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs-prokontik/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vukbundalo', // Usually your GitHub org/user name.
  projectName: 'docs-prokontik', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['sr'],
  },

presets: [
  [
    'classic',
    /** @type {import('@docusaurus/preset-classic').Options} */
    ({
      docs: {
        routeBasePath: '/', // 👈 this makes docs available at root
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/vukbundalo/docs-prokontik',
      },
      blog: false, // 👈 turn off blog completely
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
    }),
  ],
],
plugins: [
  [
    require.resolve('@easyops-cn/docusaurus-search-local'),
    {
      indexDocs: true,
      indexBlog: false,
      indexPages: false,
      language: ["en"],
      hashed: true,
    },
  ],
],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Prokontik',
        logo: {
          alt: 'Prokontik Logo',
          src: 'img/logo.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Uputstvo',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
          {
  type: 'search',
  position: 'right',
}
        ],
      },
footer: {
  style: 'dark',
  links: [
    {
      title: 'Prokontik',
      items: [
        {
          label: 'Prokontik softver',
          href: 'https://prokontik.com',
        },
      ],
    },
    {
      title: 'Kompanija',
      items: [
        {
          label: 'East Code d.o.o',
          href: 'https://eastcode.net',
        },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} EastCode. Sva prava zadržana.`,
},

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
