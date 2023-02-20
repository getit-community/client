import React from 'react';
import BookmarkSvg from './bookmark.svg';

interface IconProps {
  width: `${string}rem`;
  height: `${string}rem`;
  color?: string;
}

const BookmarkIcon = ({ width, height, color }: IconProps) => {
  return <BookmarkSvg width={width} height={height} fill={color} />;
};

export default BookmarkIcon;
