import Button from '@/component/atoms/Button';
import React from 'react';
import { useRouter } from 'next/router';
import tw from 'twin.macro';

const Head = tw.header`w-full relative max-w-screen-xl mx-auto px-12 py-8 overflow-hidden`;
const Menu = tw.nav`flex w-full items-center justify-between`;
const MenuWrapper = tw.div`flex min-w-min items-center`;
const NavLink = tw.a`px-4 mx-3 pb-2 text-violent-500 transition-all `;
const LogoLink = tw.a``;
const LogoImg = tw.img`h-24 w-24`;
const MenuLeft = tw.div`ml-8`;

const Header = () => {
  const router = useRouter();
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    router.push('https://s.id/xj4xO');
  };
  return (
    <Head>
      <Menu>
        <LogoLink href="adek.com">
          <LogoImg src="/assets/svg/adeka-logo.svg" />
        </LogoLink>
        <MenuWrapper>
          <NavLink href="https://github.com/adeka-factory/">Github</NavLink>
          <NavLink href="https://www.instagram.com/adeka.io/">
            Instagram
          </NavLink>
          <MenuLeft>
            <Button onClick={handleClick}> Contact us</Button>
          </MenuLeft>
        </MenuWrapper>
      </Menu>
    </Head>
  );
};

export default Header;
