import Styles from '@/styles/index';

import Header from '@/component/molecules/Header';
import Hero from '@/component/molecules/Hero';

import Section from '@/component/templates/Section';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Styles />
      <Head> Adeka </Head>
      <Header />
      <Section>
        <Hero />
      </Section>
    </>
  );
}
