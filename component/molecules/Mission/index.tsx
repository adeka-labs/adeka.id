import React from 'react';
import tw from 'twin.macro';
import Row from '@/component/templates/Row';
import Link from 'next/link'

// const Row = tw.div`grid grid-cols-2 gap-8`;
const ColumnLeft = tw.div`flex flex-col justify-center my-12 sm:my-0 order-2 sm:order-1`;
const ColumnRight = tw.div`flex w-full px-8 order-1 sm:order-2`;
const Heading = tw.h6`font-bold text-4xl`;
const Caption = tw.p` text-violent-500 mt-6 mb-8 text-lg`;

const Mission = () => {
  return (
    <Row>
      <ColumnLeft>
        <Heading>We ❤️ open source</Heading>
        <Caption>
        Some of the products we build use open source libraries such as nextjs as the frontend with wordpress, strapi, ghost as the backend. Why nextjs? we have ABON principle: Alaways Bet On Nextjs. Check out our experiments at our <Link href="https://github.com/adeka-factory">Github</Link>
        </Caption>
      </ColumnLeft>
      <ColumnRight>
        <img src="/assets/svg/product-launch.svg" alt="" />
      </ColumnRight>
    </Row>
  );
};

export default Mission;
