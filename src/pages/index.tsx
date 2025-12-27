import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import {
  MapIcon,
  CalendarIcon,
  SeedlingIcon,
  ThermometerIcon,
  CarrotIcon,
  LockIcon,
} from '../components/icons/FeatureIcons';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/">
            Get Started
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/category/features">
            Explore Features
          </Link>
        </div>
      </div>
    </header>
  );
}

type FeatureItem = {
  title: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Visual Garden Layout',
    Icon: MapIcon,
    description:
      'Design your garden with an intuitive canvas. Create beds of any shape, place plants with proper spacing, and visualize your entire garden at a glance.',
    link: '/docs/features/garden-layout',
  },
  {
    title: 'Smart Planting Schedule',
    Icon: CalendarIcon,
    description:
      'Get personalized planting dates based on your location and frost dates. Track your plantings from seed to harvest with an interactive calendar.',
    link: '/docs/features/planting-schedule',
  },
  {
    title: 'Comprehensive Plant Database',
    Icon: SeedlingIcon,
    description:
      'Browse nearly 4,000 vegetable varieties with detailed growing information. Find the perfect plants for your climate and growing conditions.',
    link: '/docs/features/vegetables-database',
  },
  {
    title: 'Growing Degree Days',
    Icon: ThermometerIcon,
    description:
      'Track heat accumulation to predict plant maturity more accurately than counting calendar days. Integrated weather data keeps you informed.',
    link: '/docs/guides/gdd-tracking',
  },
  {
    title: 'Harvest Tracking',
    Icon: CarrotIcon,
    description:
      'Record your harvests with quantity, quality, and notes. Analyze your yields over time to improve your garden planning.',
    link: '/docs/features/harvest-tracking',
  },
  {
    title: 'Privacy-First Design',
    Icon: LockIcon,
    description:
      'Your data stays on your device. No accounts required, no tracking, no data harvesting. Your garden, your business.',
    link: '/docs/reference/data-management',
  },
];

function Feature({ title, Icon, description, link }: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <Link to={link} className={styles.featureLink}>
        <div className="feature-card">
          <div className="feature-icon">
            <Icon size={40} />
          </div>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text-center mb-4">
          <Heading as="h2">Everything you need to grow</Heading>
          <p className={styles.featuresSubtitle}>
            SowTempo brings together all the tools you need for successful vegetable gardening in
            one beautiful, privacy-respecting application.
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageScreenshot() {
  return (
    <section className={styles.screenshotSection}>
      <div className="container">
        <div className="text-center">
          <Heading as="h2">See it in action</Heading>
          <p className={styles.featuresSubtitle}>
            A clean, intuitive interface designed for gardeners, not software engineers.
          </p>
        </div>
        <div className={styles.screenshotContainer}>
          {/* Placeholder for app screenshot */}
          <div className="screenshot-placeholder">
            <div className="screenshot-placeholder__label">Application Screenshot</div>
            <div className="screenshot-placeholder__dimensions">Recommended: 1200 x 800px</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomepageCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className="text-center">
          <Heading as="h2">Ready to plan your best garden yet?</Heading>
          <p className={styles.ctaSubtitle}>
            Download SowTempo for free and start planning your vegetable garden today.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/getting-started/installation"
            >
              Download Now
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/getting-started/quick-tour"
            >
              Take a Tour
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.ReactElement {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Vegetable Garden Planner`}
      description="Privacy-focused vegetable garden planning and management application. Plan your garden layout, track plantings, and grow more food."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageScreenshot />
        <HomepageCTA />
      </main>
    </Layout>
  );
}
