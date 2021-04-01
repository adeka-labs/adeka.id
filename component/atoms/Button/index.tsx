// @ts-ignore
import tw, { styled } from 'twin.macro';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick?: (params: any) => any;
  isPrimary?: Boolean;
  isOutline?: Boolean;
}

interface StyleProps {
  isPrimary?: Boolean;
  isOutline?: Boolean;
}

const Btn = styled.button(({ isPrimary, isOutline }: StyleProps) => [
  tw`  px-8 py-2 font-bold border  rounded-md cursor-pointer outline-none  transition-all hover:-translate-y-2 transform hover:shadow h-16 max-h-44`,
  isPrimary && tw`bg-orange-dark text-white border-orange-dark`,
  isOutline && tw`border-transparent bg-white text-orange-dark`,
]);

export default function Button({
  children,
  onClick,
  isPrimary,
  isOutline,
}: Props) {
  return (
    <Btn isPrimary={isPrimary} isOutline={isOutline} onClick={onClick}>
      {children}
    </Btn>
  );
}
