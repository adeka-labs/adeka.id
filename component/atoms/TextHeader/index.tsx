import React from 'react';
import tw from 'twin.macro';

const Heading = tw.h6`mb-4 font-semibold text-4xl`;

interface Props {
  children: React.ReactNode;
}

const TextHeader = ({ children }: Props) => {
  return (
    <>
      <Heading>{children}</Heading>
    </>
  );
};

export default TextHeader;
