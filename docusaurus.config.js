// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';



/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Prokontik Dokumentacija',
  tagline: 'Korisnička dokumentacija za knjigovodstveni softver Prokontik',
  favicon: 'img/favicon.ico',

  url: 'https://vukbundalo.github.io',
  baseUrl: '/docs-prokontik/',

  organizationName: 'vukbundalo',
  projectName: 'docs-prokontik',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // —— i18n Setup ——  
  i18n: {
    defaultLocale: 'sr-Latn',
    locales: ['sr-Latn', 'sr', 'en', 'de'],
    localeConfigs: {
      'sr-Latn': { label: 'Latinica' },
      sr: { label: 'Ћирилица' },
      en: { label: 'English' },
      de: { label: 'Deutsch' },
    },
  },

  // —— Classic preset with docs enabled ——  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',                  // serve docs at /docs-prokontik/
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // —— Search plugin ——  
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/',
        language: ['en', 'de'],  // stemmers supported
        hashed: true,
      },
    ],
  ],

  // —— Theme config with Locale Dropdown ——  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Prokontik',
        logo: { alt: 'Prokontik Logo', src: 'img/logo.png' },
        items: [
          { type: 'search', position: 'right' },
          { type: 'localeDropdown', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Prokontik',
            items: [{ label: 'Prokontik softver', href: 'https://prokontik.com' }],
          },
          {
            title: 'Kompanija',
            items: [{ label: 'East Code d.o.o', href: 'https://eastcode.net' }],
          },
        ],
        copyright: `© ${new Date().getFullYear()} EastCode.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
