import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface IFeatureList {
  title: string;
  description: React.ReactElement;
  Svg: React.ElementType<{}>
}

type FeatureProps = IFeatureList

const FeatureList: IFeatureList[] = [
  {
    title: 'Good resources are hard to find',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The Internet is filled with many outdated, confusing tutorials and articles
        that are learning bad practices, which make you harder to hire.
        <p><b>Our docs contains verified, high-quality content worth your time and energy.</b></p>
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Don't waste time learning obsolete technologies, that won't be relevant in today's job market.
        <p>This list contains only those languages and frameworks that are in demand.</p>
      </>
    ),
  },
  {
    title: `Programming doesn't end with technologies`,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Our source contains also videos and articles about HR, recruitment,
        principles, patterns and more!
      </>
    ),
  },
];



const Feature = ({ Svg, title, description }: FeatureProps) => {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export const HomepageFeatures = () => {
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
