import tw from "twin.macro";
import Row from "@/component/templates/Row";
// const Row = tw.div`grid grid-cols-2 gap-8`;
const ColumnLeft = tw.div`flex sm:px-8 my-12 sm:my-0`;
const ColumnRight = tw.div`flex flex-col`;
const Heading = tw.h2`font-bold text-4xl`;
const Caption = tw.p` text-violent-500 mt-6 mb-8 text-lg`;
const ImgSection = tw.img`w-full`;
const Feature = () => {
  return (
    <Row>
      <ColumnLeft>
        <ImgSection src="/assets/svg/graphs.svg" alt="" />
      </ColumnLeft>
      <ColumnRight>
        <Heading>We make digital products functional and beautiful</Heading>
        <Caption>
          Technology is now at the heart of every modern company, and as far as
          we can tell that isn’t changing. To build digital products that
          enhance people’s lives, help them navigate the world, help them
          communicate with each other, and solve their problems faster.
        </Caption>
      </ColumnRight>
    </Row>
  );
};

export default Feature;
