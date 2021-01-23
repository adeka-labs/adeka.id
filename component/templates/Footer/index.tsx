import tw from 'twin.macro';

const FooterWrapper = tw.footer`w-full py-4 px-0 sm:px-12 bg-violent-50`;
const FooterSection = tw.section`max-w-screen-xl mx-auto px-8 sm:px-12 pt-12 pb-6 w-full`;
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Footer = ({ children }: Props) => {
  return (
    <FooterWrapper>
      <FooterSection>{children}</FooterSection>
    </FooterWrapper>
  );
};

export default Footer;
