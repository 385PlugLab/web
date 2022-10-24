import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  }; 

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/F0950D88-C74F-434D-A8F2-EED101F95C77.jpeg'}
        title={'Not plugged in?'}
        subtitle={'If you wish to access the Plug-Lab Network, you must complete the onboarding process.'}
        ctaText={'Get Plugged In'}
        ctaAction={goToShop}
      />

      /* Message Contaier */
      <div className={styles.messageContainer}>
        <p>THIS WEBSITE IS A PROP TO A MOTION PICTURE.</p> 
         <span className={styles.gold}>PLEASE READ THE AGREEMENT TO LEARN MORE.</span></div>

      {/* Collection Container */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'Services'} />
          <ProductCollectionGrid />
        </Container>
      </div>

      {/* New Arrivals */}
      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'Products'} link={'/shop'} textLink={'view all'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
          />
        </Container>
      </div>

      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/secure.jpg'}
            altImage={'secure image'}
            miniImage={'/secure.jpg'}
            miniImageAlt={'mini secure image'}
            title={'Secure Transactions.'}
            description={`Plug-Lab serves as a broker during transactions. This protects our plugs and serves as a safety-net for the community.`}
            textLink={'learn more'}
            link={'/shop'}
          />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.promotionContainer}>
        <Hero image={'/habit.png'} title={`What is your habit?`} />
        <div className={styles.linkContainers}>
          <Link to={'/shop'}>Amphetamines</Link>
          <Link to={'/shop'}>Cannabis</Link>
          <Link to={'/shop'}>Cocaine</Link>
<Link to={'/shop'}>Ketamine</Link>
<Link to={'/shop'}>Heroin</Link>
          <Link to={'/shop'}>MDMA</Link>
          <Link to={'/shop'}>Pills</Link>

        </div>
      </div>

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'Loss Prevention & Crime Reduction '}
        quote={"Our process has proven to lower crime rates by providing access to drugs- even when you can't afford it."}
      />

      {/* Blog Grid */}
      <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Terms'} subtitle={'making plug-lab a reality.'} />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.sustainableContainer}>
        <Hero
          image={'/free_drugs.png'}
          title={'Free Drugs?'}
          subtitle={'If you need something and you cannot afford it... we are here to help. Plug-Lab VIPs receive a daily "get well" package.'}
          ctaText={'read more'}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div>

      {/* Social Media */}
      <div className={styles.socialContainer}>
        <Title
          name={'Get Known'}
          subtitle={'Tag @plug-lab to be featured.'}
        />
        <div className={styles.socialContentGrid}>
          <img src={`/social/socialMedia1.png`} alt={'social media 1'} />
          <img src={`/social/socialMedia2.png`} alt={'social media 2'} />
          <img src={`/social/socialMedia3.png`} alt={'social media 3'} />
          <img src={`/social/socialMedia4.png`} alt={'social media 4'} />
        </div>
      </div>
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
