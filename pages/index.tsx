import Styles from '@/styles/index';

import Header from '@/component/molecules/Header';
import Hero from '@/component/molecules/Hero';

import Section from '@/component/templates/Section';
import Head from 'next/head';
import Introduction from '@/component/molecules/Introduction';
import Feature from '@/component/molecules/Feature';
import Mission from '@/component/molecules/Mission';
import About from '@/component/molecules/About';
import Footer from '@/component/templates/Footer';
import ContentFooter from '@/component/molecules/ContentFooter';

export default function Home() {
  return (
    <>
      <Styles />
      <Head> Adeka </Head>
      <Header />
      <Section>
        <Hero />
      </Section>
      <Section>
        <Introduction />
      </Section>
      <Section>
        <Feature />
      </Section>
      <Section>
        <Mission />
      </Section>
      <Section>
        <About />
      </Section>
      <Footer>
        <ContentFooter />
      </Footer>
    </>
  );
}
