import React from 'react';
import { IconContainer, InputContainer, InputText } from './style';
import { ReactNode, ChangeEvent } from 'react';

interface InputProps {
  leftIcon?: ReactNode;
  name?: string;
  placeholder: string;
  onChange: (newValue: string) => void;
  type?: string;
}

export const Input = ({ leftIcon, name, placeholder, onChange, type }: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <InputContainer>
      {leftIcon && (
        <IconContainer>
          {leftIcon}
        </IconContainer>
      )}
      <InputText 
        name={name} 
        placeholder={placeholder} 
        onChange={handleChange} 
        type={type} 
      />
    </InputContainer>
  );
};
