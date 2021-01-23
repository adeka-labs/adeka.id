import React from 'react';
import tw from 'twin.macro';

const Wrapper = tw.div`grid grid-cols-11 gap-8 `;
const ListBig = tw.div`flex flex-col col-span-full sm:col-span-5 justify-start items-start `;
const ListSmall = tw.div`flex flex-col col-span-5 sm:col-span-3`;
const Heading = tw.h5`font-medium text-lg mb-4 uppercase`;
const Paragraf = tw.p`mb-2 text-base max-w-sm`;
const Email = tw.a`pb-0.5 border-b border-violent-400 text-lg mt-3 hover:border-yellow-500`;
const Wrap = tw.hr`my-4 w-full border-b border-t-0 border-gray-300 col-span-full`;
const Footnote = tw.div`col-span-full grid grid-cols-12 gap-8 items-center`;
const LogoContainer = tw.div`col-span-3 flex items-start`;
const LogoLink = tw.a``;
const LogoImg = tw.img`h-24 w-24`;
const SocialContainer = tw.div`col-span-6 sm:col-span-2 col-end-13 flex justify-evenly`;
const SocialLink = tw.a``;
const SocialImg = tw.img`h-6 w-6`;

const ContentFooter = () => {
  return (
    <Wrapper>
      <ListBig>
        <Heading> Contact</Heading>
        <Paragraf>
          Do you have any question regarding the project? Feel free to reach
          out.
        </Paragraf>
        <Email href="mailto:adeka@gmail.com"> Let's Chat</Email>
      </ListBig>
      <ListSmall>
        <Heading> Company </Heading>
        <Paragraf>About</Paragraf>
        <Paragraf>Portofolio</Paragraf>
        <Paragraf>Contact</Paragraf>
      </ListSmall>
      <ListSmall>
        <Heading> Address </Heading>
        <Paragraf>Malang City</Paragraf>
      </ListSmall>
      <Wrap />
      <Footnote>
        <LogoContainer>
          <LogoLink href="adek.com">
            <LogoImg src="/assets/svg/adeka-logo.svg" />
          </LogoLink>
        </LogoContainer>
        <SocialContainer>
          <SocialLink href="instagram.com">
            <SocialImg src="/assets/svg/instagram.svg" />
          </SocialLink>
          <SocialLink href="github.com">
            <SocialImg src="/assets/svg/github.svg" />
          </SocialLink>
        </SocialContainer>
      </Footnote>
    </Wrapper>
  );
};

export default ContentFooter;
