import React from 'react';
import { CloseIcon } from 'assets/Icons';
import {
  NormalBtnContainer,
  ContentContainer,
  Text,
  SubmitBtnContainer,
  CloseBtnContainer,
  CloseIconContainer,
  DisabledBtnContainer,
} from './styles';

interface ButtonProps {
  type: 'normal' | 'close' | 'submit' | 'bottom' | 'disabled';
  onClick?: (event: React.MouseEvent) => void;
  text?: string;
  icon?: React.ReactNode;
  name?: string;
  width?: `${string}rem`;
  isMobile?: null | boolean;
}

const Button = ({
  type,
  text,
  icon,
  name,
  width,
  onClick,
  isMobile,
}: ButtonProps) => {
  switch (type) {
    case 'normal':
      return (
        <NormalBtnContainer data-name={name} onClick={onClick}>
          <ContentContainer>
            {icon}
            <Text color={'black'}>{text}</Text>
          </ContentContainer>
        </NormalBtnContainer>
      );
    case 'submit':
      return (
        <SubmitBtnContainer onClick={onClick}>
          <Text color={'white'}>{text}</Text>
        </SubmitBtnContainer>
      );
    case 'close':
      return (
        <CloseBtnContainer>
          <CloseIconContainer
            onClick={onClick}
            isMobile={isMobile ? true : false}
          >
            <CloseIcon />
          </CloseIconContainer>
        </CloseBtnContainer>
      );
    case 'disabled':
      return (
        <DisabledBtnContainer>
          <ContentContainer>
            <Text color={'white'}>{text}</Text>
          </ContentContainer>
        </DisabledBtnContainer>
      );

    case 'bottom':
      return <div></div>;
    default:
      break;
  }
  return <div>Button</div>;
};

export default Button;
