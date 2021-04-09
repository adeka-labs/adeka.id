import React from "react";
import tw from "twin.macro";
import Row from "@/component/templates/Row";

const ColumnLeft = tw.div`flex px-8 my-12 sm:my-0`;
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
          Ok, you’ve made it to the last section, Chakzz. A digital experience
          could be a website. Like a straight up normal website for your
          company, one that has an “about” page, and maybe some info about your
          services. Sort of like the page you are on right now.
        </Caption>
        <Caption>
          It doesn’t really matter. As long as combines digital technology with
          emotion, we do it. Anyway, that’s enough about us. How are you doing?
        </Caption>
      </ColumnRight>
    </Row>
  );
};

export default About;
