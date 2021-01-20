import Button from '@/component/atoms/Button';
import ButtonOutline from '@/component/atoms/ButtonOutline';
import React from 'react';
import tw from 'twin.macro';

const Row = tw.div`grid grid-cols-2 gap-8`;
const ColumnLeft = tw.div`flex flex-col`;
const ColumnRight = tw.div`flex w-full px-8`;
const Heading = tw.h6`font-bold text-4xl`;
const Caption = tw.p` text-violent-500 mt-6 mb-8 text-lg`;
const ButtonAction = tw.div`flex justify-between max-w-xs`;

const Hero = () => {
  return (
    <Row>
      <ColumnLeft>
        <Heading>Light, Fast & Responsive</Heading>
        <Caption>
          This template is ready to use, so you don't need to change anything at
          a component level, unless you want to customize the default styling.
        </Caption>
        <ButtonAction>
          <Button>Explore</Button>
          <ButtonOutline>Learn More</ButtonOutline>
        </ButtonAction>
      </ColumnLeft>
      <ColumnRight>
        <img src="/assets/svg/developer.svg" alt="" />
      </ColumnRight>
    </Row>
  );
};

export default Hero;
