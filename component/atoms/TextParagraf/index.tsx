import React from 'react';
import tw from 'twin.macro';

const Paragraf = tw.p`text-lg py-3 mb-4`;

interface Props {
  children: React.ReactNode;
}

const TextHeader = ({ children }: Props) => {
  return (
    <>
      <Paragraf>{children}</Paragraf>
    </>
  );
};

export default TextHeader;
