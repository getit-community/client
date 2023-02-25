import React from 'react';
import { StyledInput } from './styles';

interface InputProps {
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, placeholder, onChange }: InputProps) => {
  return (
    <StyledInput
      type='text'
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
