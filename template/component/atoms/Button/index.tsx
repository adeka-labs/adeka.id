import React, { FC } from 'react';

import * as S from './styles';
interface ButtonProps {
  props: any;
}
const Button: FC<ButtonProps> = ({ props }) => (
  <S.Button {...props}>{props.children}</S.Button>
);

export default Button;
