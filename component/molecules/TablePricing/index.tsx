import PricingCard from '@/component/atoms/PricingCard';
import React from 'react';
import tw from 'twin.macro';

const Row = tw.div`flex w-full my-24`;
const Wrapper = tw.div`w-full gap-y-12 sm:(w-10/12 gap-y-0 gap-x-8) mx-auto grid grid-cols-12 `;

const TablePricing = () => {
  const listPricing = [
    {
      heading: 'Landingpage',
      pricing: 'Rp 330.000',
      subtitle: 'Paket  katalog dan pengenalan produk secara online',
      feature: ['Design', 'Web Server', 'Responsive Design', '1 Page'],
    },
    {
      heading: 'Company Profile',
      pricing: 'Rp 750.000',
      subtitle: 'Paket katalog produk dan branding perusahaan secara online',
      feature: ['Design', 'Web Server', 'Responsive Design', ' 5 Page'],
    },
    {
      heading: 'Custom',
      pricing: 'Negosiasi',
      subtitle: 'Paket khusus untuk membangun website custom sesuai kebutuhan',
      feature: ['Bergantung Kesepakatan'],
    },
  ];
  return (
    <Row>
      <Wrapper>
        <PricingCard listPricing={listPricing} />
      </Wrapper>
    </Row>
  );
};

export default TablePricing;
