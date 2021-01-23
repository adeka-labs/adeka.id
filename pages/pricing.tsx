import Header from '@/component/molecules/Header';
import Head from 'next/head';
import React from 'react';
import Introduction from '@/component/molecules/Introduction';
import Section from '@/component/templates/Section';
import TablePricing from '@/component/molecules/TablePricing';

const Pricing = () => {
  return (
    <>
      <Head>Adeka | Pricing</Head>
      <Header />
      <Section>
        <Introduction />
      </Section>
      <Section>
        <TablePricing />
      </Section>
    </>
  );
};

export default Pricing;
