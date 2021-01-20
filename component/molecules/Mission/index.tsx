import React from 'react';
import tw from 'twin.macro';

const Row = tw.div`grid grid-cols-2 gap-8`;
const ColumnLeft = tw.div`flex flex-col justify-center`;
const ColumnRight = tw.div`flex w-full px-8`;
const Heading = tw.h6`font-bold text-4xl`;
const Caption = tw.p` text-violent-500 mt-6 mb-8 text-lg`;

const Mission = () => {
  return (
    <Row>
      <ColumnLeft>
        <Heading>Ready made sections</Heading>
        <Caption>
          Landy comes with a set of ready to use sections to help you easily
          create a landing page for your own brand, with all the content your
          startup desires. In order to replace any dummy elements (text, image,
          etc..) all you need to do is go to content folder and input your real
          content.
        </Caption>
      </ColumnLeft>
      <ColumnRight>
        <img src="/assets/svg/product-launch.svg" alt="" />
      </ColumnRight>
    </Row>
  );
};

export default Mission;
