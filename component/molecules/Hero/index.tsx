import Button from '@/component/atoms/Button';
import { useRouter } from 'next/router';
import React from 'react';
import tw from 'twin.macro';
import { motion } from 'framer-motion';

const Row = tw.div`grid grid-cols-1 sm:grid-cols-2 grid-flow-row sm:grid-rows-1 gap-8`;
const ColumnLeft = tw(motion.div)`flex flex-col my-12 sm:my-0`;
const ColumnRight = tw(motion.div)`flex w-full sm:px-8 row-start-1`;
const Heading = tw.h6`font-bold text-4xl`;
const Caption = tw.p` text-violent-500 mt-6 mb-8 text-lg`;
const ButtonAction = tw.div`flex justify-between max-w-xs`;

const Hero = () => {
  const router = useRouter();
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    router.push('https://s.id/xj4xO');
  };
  return (
    <Row>
      <ColumnLeft
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: '0%' }}
        transition={{ duration: 1, type: 'spring' }}
      >
        <Heading>Have an awesome idea and want to make it real?</Heading>
        <Caption>
          let’s brief of your idea and see the magic work to solving your
          problems to make the great project real for you.
        </Caption>
        <ButtonAction>
          <Button isPrimary onClick={handleClick}>
            Plan a Product
          </Button>
        </ButtonAction>
      </ColumnLeft>
      <ColumnRight
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: 1, x: '0%' }}
        transition={{ duration: 1, type: 'spring' }}
      >
        <img src="/assets/svg/developer.svg" alt="" />
      </ColumnRight>
    </Row>
  );
};

export default Hero;
