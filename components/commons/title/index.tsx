import React from 'react';
import { TitleContainer, TitleText } from './styles';

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return (
    <TitleContainer>
      <TitleText>{text}</TitleText>
    </TitleContainer>
  );
};

export default Title;
