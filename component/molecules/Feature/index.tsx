import React from 'react';
import tw from 'twin.macro';
import Row from '@/component/templates/Row';
// const Row = tw.div`grid grid-cols-2 gap-8`;
const ColumnLeft = tw.div`flex sm:px-8 my-12 sm:my-0`;
const ColumnRight = tw.div`flex flex-col`;
const Heading = tw.h2`font-bold text-4xl`;
const Caption = tw.p` text-violent-500 mt-6 mb-8 text-lg`;
const FeaturesList = tw.div`grid grid-cols-2 gap-8 w-full`;
const OurFeature = tw.div`flex flex-col`;
const HeadCaption = tw.h6`text-lg font-medium mb-2`;
const CaptionSmall = tw.div`text-xs`;
const ImgIcon = tw.img`h-12 w-12 mb-4`;
const ImgSection = tw.img`w-full`;
const Feature = () => {
  return (
    <Row>
      <ColumnLeft>
        <ImgSection src="/assets/svg/graphs.svg" alt="" />
      </ColumnLeft>
      <ColumnRight>
        <Heading>Landing page template for developers & startups</Heading>
        <Caption>
          Beautifully designed templates using React.js, ant design and
          styled-components! Save weeks of time and build your landing page in
          minutes.
        </Caption>
        <FeaturesList>
          <OurFeature>
            <ImgIcon src="/assets/svg/notes.svg" alt="" />
            <HeadCaption>Why Antd?</HeadCaption>
            <CaptionSmall>
              Ant Design is a React UI library that has a lot of easy-to-use
              components for building elegant UI.
            </CaptionSmall>
          </OurFeature>
          <OurFeature>
            <ImgIcon src="/assets/svg/notes.svg" alt="" />
            <HeadCaption>Why styled-components?</HeadCaption>
            <CaptionSmall>
              Ant Design is a React UI library that has a lot of easy-to-use
              components for building elegant UI.
            </CaptionSmall>
          </OurFeature>
        </FeaturesList>
      </ColumnRight>
    </Row>
  );
};

export default Feature;
