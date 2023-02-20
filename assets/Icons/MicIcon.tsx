import React from 'react';
import MicSvg from './mic.svg';

interface IconProps {
  width: `${string}rem`;
  height: `${string}rem`;
  color?: string;
}

const MicIcons = ({ width, height, color }: IconProps) => {
  return <MicSvg width={width} height={height} fill={color} />;
};

export default MicIcons;
