import Header from '@/component/molecules/Header';
import Hero from '@/component/molecules/Hero';

import Section from '@/component/templates/Section';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head> Adeka </Head>
      <Header />
      <Section>
        <Hero />
      </Section>
      <h5>Hello World Typescript and Emotion</h5>
    </>
  );
}
