import React from 'react';
import ProfileSvg from './profile.svg';

interface IconProps {
  width: `${string}rem`;
  height: `${string}rem`;
  color?: string;
}

const ProfileIcon = ({ width, height, color }: IconProps) => {
  return <ProfileSvg width={width} height={height} fill={color} />;
};

export default ProfileIcon;
