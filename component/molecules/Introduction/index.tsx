import Button from '@/component/atoms/Button';
import React from 'react';
import tw from 'twin.macro';

const Row = tw.div`max-w-xl mx-auto`;
const ContentWrapper = tw.div`flex flex-col w-full justify-center text-center items-center`;
const Heading = tw.h6`mb-4 font-semibold`;
const Paragraf = tw.p`text-lg py-3 mb-4`;
const Introduction = () => {
  return (
    <Row>
      <ContentWrapper>
        <Heading>Introduce Your Product Quickly & Effectively</Heading>
        <Paragraf>
          Landy comes with multi-lingual support, all of the content is stored
          in the JSON files, so that you can manage the texts without having any
          prior knowledge in developing web applications using React.js.
        </Paragraf>
        <Button>Get Started</Button>
      </ContentWrapper>
    </Row>
  );
};

export default Introduction;
