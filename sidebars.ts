import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Sidebars configuration for SowTempo documentation.
 *
 * Structure:
 * - Getting Started: Installation, first garden, quick tour
 * - Features: All app features with detailed documentation
 * - Guides: How-to guides for common workflows
 * - Reference: Keyboard shortcuts, troubleshooting, etc.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        title: 'Getting Started',
        description: 'Learn how to install and get started with SowTempo.',
        slug: '/category/getting-started',
      },
      items: [
        'getting-started/installation',
        'getting-started/first-garden',
        'getting-started/quick-tour',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      link: {
        type: 'generated-index',
        title: 'Features',
        description: 'Explore all the features SowTempo has to offer.',
        slug: '/category/features',
      },
      items: [
        'features/dashboard',
        'features/garden-layout',
        'features/planting-schedule',
        'features/vegetables-database',
        'features/season-management',
        'features/harvest-tracking',
        'features/garden-journal',
        'features/seed-inventory',
        'features/analytics',
        'features/settings',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'generated-index',
        title: 'Guides',
        description: 'Step-by-step guides for common gardening workflows.',
        slug: '/category/guides',
      },
      items: [
        'guides/planning-your-garden',
        'guides/understanding-frost-dates',
        'guides/gdd-tracking',
        'guides/succession-planting',
        'guides/companion-planting',
        'guides/crop-rotation',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      link: {
        type: 'generated-index',
        title: 'Reference',
        description: 'Quick reference materials and troubleshooting.',
        slug: '/category/reference',
      },
      items: [
        'reference/keyboard-shortcuts',
        'reference/data-management',
        'reference/troubleshooting',
        'reference/faq',
      ],
    },
  ],
};

export default sidebars;
