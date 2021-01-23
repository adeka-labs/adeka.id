import PricingCard from '@/component/atoms/PricingCard';
import React from 'react';
import tw from 'twin.macro';

const Row = tw.div`grid grid-cols-12 gap-8`;
const Wrapper = tw.div`col-span-6 mx-auto flex items-center`;

const TablePricing = () => {
  return (
    <Row>
      <Wrapper>
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </Wrapper>
    </Row>
  );
};

export default TablePricing;
