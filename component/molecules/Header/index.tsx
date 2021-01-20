import Button from '@/component/atoms/Button';
import React from 'react';
import tw from 'twin.macro';

const Head = tw.header`w-full relative max-w-screen-xl mx-auto px-12 py-8 overflow-hidden`;
const Menu = tw.nav`flex w-full items-center justify-between`;
const MenuWrapper = tw.div`flex min-w-min items-center`;
const NavLink = tw.a`px-4 mx-3 pb-2 text-violent-500 transition-all `;
const LogoLink = tw.a``;
const LogoImg = tw.img`h-24 w-24`;
const MenuLeft = tw.div`ml-8`;
const Header = () => {
  return (
    <Head>
      <Menu>
        <LogoLink href="adek.com">
          <LogoImg src="/assets/svg/adeka-logo.svg" />
        </LogoLink>
        <MenuWrapper>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Product</NavLink>
          <NavLink href="#">Pricing</NavLink>
          <MenuLeft>
            <Button> Contact us</Button>
          </MenuLeft>
        </MenuWrapper>
      </Menu>
    </Head>
  );
};

export default Header;
