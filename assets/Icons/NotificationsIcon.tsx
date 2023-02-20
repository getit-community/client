import React from 'react';
import NotificationSvg from './notifications.svg';

interface IconProps {
  width: `${string}rem`;
  height: `${string}rem`;
  color?: string;
}

const NotificationsIcon = ({ width, height, color }: IconProps) => {
  return <NotificationSvg width={width} height={height} fill={color} />;
};

export default NotificationsIcon;
