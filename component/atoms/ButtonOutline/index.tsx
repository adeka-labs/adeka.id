import tw, { css } from 'twin.macro';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick?: (params: any) => any;
}

export default function ButtonOutline({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      tw="bg-transparent text-violent-500 px-8 py-2 font-bold border border-violent-500 rounded-md cursor-pointer outline-none"
      css={`
        height: 60px;
        max-width: 180px;
      `}
    >
      {children}
    </button>
  );
}
