import React from 'react';
import tw from 'twin.macro';
import Button from '@/component/atoms/Button';

const Container = tw.div`h-screen fixed left-0 right-0 z-20 top-0 bottom-0`;
const Overlay = tw.div`w-full h-full absolute bg-black opacity-50`;
const Sidebar = tw.aside`h-screen w-72 bg-white py-8 z-30 fixed right-0 flex flex-col`;
const Head = tw.div`flex justify-between px-6 mb-12`;
const Header = tw.h4`font-medium text-2xl pb-1 px-3 border-b-4 border-violent-500`;
const ButtonClose = tw.button`px-1 py-1 w-8 h-8 text-orange-dark font-semibold`;
const MenuList = tw.nav`flex flex-col items-center justify-center`;
const MenuItem = tw.a`px-8 py-2 my-3 font-medium `;

interface Props {
  handleClick: any;
}

const SidebarMobile = ({ handleClick }: Props) => {
  return (
    <Container>
      <Overlay />
      <Sidebar>
        <Head>
          <Header> Menu </Header>
          <ButtonClose>
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </ButtonClose>
        </Head>
        <MenuList>
          <MenuItem href="https://github.com/adeka-factory/">Github</MenuItem>
          <MenuItem href="https://www.instagram.com/adeka.io/">
            Instagram
          </MenuItem>
          <MenuItem>
            <Button onClick={handleClick}>Plan a Product </Button>
          </MenuItem>
        </MenuList>
      </Sidebar>
    </Container>
  );
};

export default SidebarMobile;
