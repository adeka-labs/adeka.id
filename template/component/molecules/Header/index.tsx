import Button from '@/component/atoms/Button';
import React from 'react';
import tw from 'twin.macro';

const Head = tw.header`w-full relative max-w-screen-xl mx-auto px-12 py-8 overflow-hidden`;
const Menu = tw.nav`flex w-full items-center justify-end `;
const NavLink = tw.a`px-4 mx-3 pb-2 text-violent-500 transition-all `;
const MenuLeft = tw.div`ml-8`;
const Header = () => {
  return (
    <Head>
      <Menu>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Product</NavLink>
        <NavLink href="#">Pricing</NavLink>
        <MenuLeft>
          <Button> Contact us</Button>
        </MenuLeft>
      </Menu>
    </Head>
  );
};

export default Header;
