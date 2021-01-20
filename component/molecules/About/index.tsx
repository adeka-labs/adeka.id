import React from 'react';
import tw from 'twin.macro';

const Row = tw.div`grid grid-cols-2 gap-8`;
const ColumnLeft = tw.div`flex px-8`;
const ColumnRight = tw.div`flex flex-col justify-center `;
const Heading = tw.h6`font-bold text-4xl`;
const Caption = tw.p` text-violent-500 mt-6 mb-8 text-lg`;

const About = () => {
  return (
    <Row>
      <ColumnLeft>
        <img src="/assets/svg/waving.svg" alt="" />
      </ColumnLeft>
      <ColumnRight>
        <Heading>That's about it!</Heading>
        <Caption>
          If you are familiar with React, or SPA frameworks in general, there
          shouldn't be any confusing part about this template, if not, you can
          always reach out to me and I'll try me best to answer your question.
        </Caption>
      </ColumnRight>
    </Row>
  );
};

export default About;
