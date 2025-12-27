import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SowTempo',
  tagline: 'Privacy-focused vegetable garden planning for thoughtful gardeners',
  favicon: 'img/favicon.ico',

  // Production URL - update when deployed
  url: 'https://sowtempo.com',
  baseUrl: '/',

  // For GitHub Pages deployment (if used)
  organizationName: 'mattnudi',
  projectName: 'SowTempo',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Remove edit URL for now - can add later if docs are open source
          // editUrl: 'https://github.com/mattnudi/SowTempo/tree/main/docs/user-manual/',
        },
        blog: false, // Disable blog for now
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Social card for sharing
    image: 'img/sowtempo-social-card.png',

    navbar: {
      title: 'SowTempo',
      logo: {
        alt: 'SowTempo Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/docs/category/features',
          label: 'Features',
          position: 'left',
        },
        {
          to: '/docs/category/guides',
          label: 'Guides',
          position: 'left',
        },
        {
          href: 'https://github.com/mattnudi/SowTempo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started/installation',
            },
            {
              label: 'Features',
              to: '/docs/category/features',
            },
            {
              label: 'Guides',
              to: '/docs/category/guides',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Keyboard Shortcuts',
              to: '/docs/reference/keyboard-shortcuts',
            },
            {
              label: 'Troubleshooting',
              to: '/docs/reference/troubleshooting',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mattnudi/SowTempo',
            },
            {
              label: 'Privacy Policy',
              to: '/privacy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SowTempo. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    // Color mode configuration
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    // Announcement bar (optional - can be enabled for updates)
    // announcementBar: {
    //   id: 'beta_announcement',
    //   content: 'SowTempo is currently in beta. We appreciate your feedback!',
    //   backgroundColor: '#4ade80',
    //   textColor: '#1a1a1a',
    //   isCloseable: true,
    // },
  } satisfies Preset.ThemeConfig,
};

export default config;
