import Button from '@/component/atoms/Button';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';
import tw from 'twin.macro';
import SidebarMobile from '@/component/atoms/SidebarMobile';

const Head = tw.header`w-full relative max-w-screen-xl mx-auto px-8 sm:px-12 py-8 overflow-hidden`;
const Menu = tw.nav`flex w-full items-center justify-between`;
const MenuWrapper = tw.div`flex min-w-min items-center`;
const NavLink = tw.a`px-4 mx-3 pb-2 text-violent-500 transition-all `;
const LogoLink = tw.a``;
const LogoImg = tw.img`h-24 w-24`;
const MenuLeft = tw.div`ml-8`;
const MenuMobile = tw.div`px-2 py-1 text-orange-dark w-12 h-12 flex items-center`;

const Header = () => {
  const isMobile = useMediaQuery({ query: '(min-width: 450px)' });
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
        {isMobile ? (
          <MenuWrapper>
            <NavLink href="https://github.com/adeka-factory/">Github</NavLink>
            <NavLink href="https://www.instagram.com/adeka.io/">
              Instagram
            </NavLink>
            <MenuLeft>
              <Button onClick={handleClick}> Contact us</Button>
            </MenuLeft>
          </MenuWrapper>
        ) : (
          <MenuMobile>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </MenuMobile>
        )}
      </Menu>
      <SidebarMobile handleClick={handleClick} />
    </Head>
  );
};

export default Header;
