import React from 'react';
import { CloseIcon } from 'assets/Icons';
import {
  NormalBtn,
  ContentContainer,
  Text,
  SubmitBtn,
  CloseBtnContainer,
  CloseIconContainer,
} from './styles';

interface ButtonProps {
  type: 'normal' | 'close' | 'submit' | 'bottom';
  onClick: (event: React.MouseEvent) => void;
  text?: string;
  icon?: React.ReactNode;
  name?: string;
  width?: `${string}rem`;
  color?: 'black' | 'gray' | 'white';
}

const Button = ({
  type,
  text,
  icon,
  name,
  width,
  onClick,
  color = 'black',
}: ButtonProps) => {
  switch (type) {
    case 'normal':
      return (
        // onClick 적용하기
        <NormalBtn onClick={onClick}>
          <ContentContainer>
            {icon}
            <Text color={color}>{text}</Text>
          </ContentContainer>
        </NormalBtn>
      );
    case 'submit':
      return (
        <SubmitBtn onClick={onClick}>
          <Text color={color}>{text}</Text>
        </SubmitBtn>
      );
    case 'close':
      return (
        <CloseBtnContainer>
          <CloseIconContainer onClick={onClick}>
            <CloseIcon />
          </CloseIconContainer>
        </CloseBtnContainer>
      );
    case 'bottom':
      return <div></div>;
    default:
      break;
  }
  return <div>Button</div>;
};

export default Button;
