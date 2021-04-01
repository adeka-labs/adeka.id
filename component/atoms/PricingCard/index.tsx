import React, { FC } from 'react';
import { useRouter } from 'next/router';
import tw from 'twin.macro';
import TextHeader from '../TextHeader';
import TextParagraf from '../TextParagraf';
import Button from '../Button';

type Props = {
  className?: string;
};

const Dots: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="6"
    height="6"
    stroke="currentColor"
    fill="#10b981"
    viewBox="0 0 1792 1792"
  >
    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
  </svg>
);
const ContainerCard = tw.div`col-span-full md:col-span-4`;
const Card = tw.div`shadow-lg rounded-2xl w-full bg-white px-4 py-12 sm:(px-6 py-12) h-full flex items-start flex-col justify-center text-center`;
const Pricing = tw.p`text-yellow-600 text-xl font-bold text-center mx-auto`;
// const Payment = tw.span`text-gray-300 text-sm`;
// const PricingCaption = tw.p`text-gray-600   text-xs mt-4`;
const ListFeature = tw.ul`text-sm text-gray-600 w-full my-auto py-6 ml-6`;
const ItemFeature = tw.li`mb-3 flex items-center `;
// const Button = tw.button`py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg `;
const Icons = tw(Dots)`h-6 w-6 mr-2`;
const WrapButton = tw.div`flex items-center justify-center w-full mt-auto`;

const PricingCard: FC<{
  listPricing: any[];
  // listPricing: any;
}> = ({ listPricing }) => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push('https://s.id/xj4xO');
  };
  return (
    <>
      {listPricing.map((listPricings, index) => (
        <ContainerCard key={index}>
          <Card>
            <TextHeader addClass={tw`mb-4 text-center text-3xl mx-auto`}>
              {listPricings.heading}
            </TextHeader>
            <Pricing>
              {listPricings.pricing}
              {/* <Payment>/ month</Payment> */}
            </Pricing>
            <TextParagraf addClass={tw`mb-4 text-center`}>
              {listPricings.subtitle}
            </TextParagraf>
            <ListFeature>
              {listPricings.feature.map((features: any, index: any) => (
                <ItemFeature key={index}>
                  <Icons />
                  {features}
                </ItemFeature>
              ))}
            </ListFeature>
            <WrapButton>
              <Button isPrimary onClick={handleOnClick}>
                Choose plan
              </Button>
            </WrapButton>
          </Card>
        </ContainerCard>
      ))}
    </>
  );
};

export default PricingCard;
