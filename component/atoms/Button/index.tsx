import tw, { css } from 'twin.macro';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick?: (params: any) => any;
}

export default function Button({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      tw="bg-violent-500 text-white px-8 py-2 font-bold border border-violent-500 rounded-md cursor-pointer outline-none"
      css={`
        height: 60px;
        max-width: 180px;
      `}
    >
      {children}
    </button>
  );
}
