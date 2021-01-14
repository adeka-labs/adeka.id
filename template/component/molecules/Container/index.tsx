import React from 'react';

import * as S from './style';

const Container = (props: any) => (
  <S.Container {...props}>{props.children}</S.Container>
);

export default Container;
