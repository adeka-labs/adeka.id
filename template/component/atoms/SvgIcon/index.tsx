import React, { FC } from 'react';
import { ReactSVG } from 'react-svg';
interface SvgIconProps {
  props: any;
}
const SvgIcon: FC<SvgIconProps> = ({ props }) => (
  <ReactSVG {...props} src={`/img/svg/${props.src}`} />
);

export default SvgIcon;
