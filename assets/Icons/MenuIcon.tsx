import React from 'react';
import MenuSvg from './menu.svg';

interface IconProps {
  width: `${string}rem`;
  height: `${string}rem`;
  color?: string;
}

const MenuIcons = ({ width, height, color }: IconProps) => {
  return <MenuSvg width={width} height={height} fill={color} />;
};

export default MenuIcons;
