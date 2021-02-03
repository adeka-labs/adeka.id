import PricingCard from '@/component/atoms/PricingCard';
import React from 'react';
import tw from 'twin.macro';

const Row = tw.div`flex w-full mt-12`;
const Wrapper = tw.div`w-10/12 mx-auto grid grid-cols-12 gap-x-8`;

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
