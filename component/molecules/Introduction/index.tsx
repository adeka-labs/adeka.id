import TextParagraf from "@/component/atoms/TextParagraf";
import TextHeader from "@/component/atoms/TextHeader";
import tw from "twin.macro";

const Row = tw.div`max-w-xl mx-auto`;
const ContentWrapper = tw.div`flex flex-col w-full justify-center text-center items-center`;

const Introduction = () => {
  return (
    <Row>
      <ContentWrapper>
        <TextHeader>What is it that we actually do?</TextHeader>
        <TextParagraf>
          Do we make websites? Yes, of course. Do we make apps and other digital
          products ? Yap, we make a fair amount of those. Sometimes we create
          user interface design, optimize SEO and performance to helping your
          business.
        </TextParagraf>
        {/* <Button isPrimary>Get Started</Button> */}
      </ContentWrapper>
    </Row>
  );
};

export default Introduction;
