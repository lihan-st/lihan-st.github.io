import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Reliable Validation',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        I validate software with an engineering mindset - structured tests,
        robust coverage, and clear documentation.
      </>
    ),
  },
  {
    title: 'Focus on Automation',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Building scalable UI and API automation with Python, Playwright, 
        and PyTest—covering core user flows, regression suites, and CI-ready runs.
      </>
    ),
  },
  {
    title: 'Powered by Continuous Learning',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        I write clear, friendly documentation and test notes that make systems easier 
        to use, maintain, and improve.
      </>
    ),
  },

];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
