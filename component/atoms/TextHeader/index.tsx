import React from 'react';
import tw, { TwStyle } from 'twin.macro';

interface Props {
  children: React.ReactNode;
  addClass?: TwStyle;
}

const Heading = tw.h6`mb-4 font-semibold text-4xl`;

const TextHeader = ({ children, addClass }: Props) => {
  return (
    <>
      <Heading css={[addClass]}>{children}</Heading>
    </>
  );
};

export default TextHeader;
