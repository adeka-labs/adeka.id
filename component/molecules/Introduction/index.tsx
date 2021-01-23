import Button from '@/component/atoms/Button';
import TextParagraf from '@/component/atoms/TextParagraf';
import TextHeader from '@/component/atoms/TextHeader';
import React from 'react';
import tw from 'twin.macro';

const Row = tw.div`max-w-xl mx-auto`;
const ContentWrapper = tw.div`flex flex-col w-full justify-center text-center items-center`;

const Introduction = () => {
  return (
    <Row>
      <ContentWrapper>
        <TextHeader>Introduce Your Product Quickly & Effectively</TextHeader>
        <TextParagraf>
          Landy comes with multi-lingual support, all of the content is stored
          in the JSON files, so that you can manage the texts without having any
          prior knowledge in developing web applications using React.js.
        </TextParagraf>
        <Button>Get Started</Button>
      </ContentWrapper>
    </Row>
  );
};

export default Introduction;
