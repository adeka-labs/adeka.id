import React from 'react';
import tw from 'twin.macro';

interface ComponentProps {
  children: React.ReactNode;
  addClass?: any;
}

// interface PropsParagraf {
//   className?: string;
// }

const Paragraf = tw.p`text-lg py-3 mb-4 `;

const TextHeader = ({ children, addClass }: ComponentProps) => {
  return (
    <>
      <Paragraf css={[addClass]}>{children}</Paragraf>
    </>
  );
};

export default TextHeader;
