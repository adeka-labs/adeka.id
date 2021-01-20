// @ts-ignore
import tw from 'twin.macro';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick?: (params: any) => any;
}

export default function Button({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      tw="bg-orange-dark text-white  px-8 py-2 font-bold border border-orange-dark rounded-md cursor-pointer outline-none  transition-all hover:-translate-y-2 transform hover:shadow h-16 max-h-44"
    >
      {children}
    </button>
  );
}
