import React from 'react';
import { StyledInput } from './styles';

interface InputProps {
  type?: 'text' | 'password';
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type = 'text', value, placeholder, onChange }: InputProps) => {
  return (
    <StyledInput
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
