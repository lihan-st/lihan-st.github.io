import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

//import React from 'react';  /* add by lihan */
import HeroSection from '../components/HeroFeatures/HeroSection';  /* add by lihan */
import ExperienceSection from '../components/ExperienceSection/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';



/* Add by Amy Han in 2025/12/04 */
export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Li Han - Software Test Engineer Portfolio"
    >
      <main>
        <HeroSection />

        <ExperienceSection />

        <ProjectsSection />

        <section className={styles.featuresSection}>
          {/* <div className="container">
            <HomepageFeatures />
          </div> */}
        </section>
      </main>
    </Layout>
  );
}