import React from 'react';
import { IconContainer, InputContainer, InputText } from './style';
import { ReactNode } from 'react';

interface InputProps {
  leftIcon?: ReactNode;
  name?: string;
  placeholder: string;
  type?: string;
}

export const Input = ({ leftIcon, name, placeholder, type, ...rest }: InputProps) => {
  return (
    <InputContainer>
      {leftIcon && (
        <IconContainer>
          {leftIcon}
        </IconContainer>
      )}
      <InputText name={name} placeholder={placeholder} type={type} {...rest} />
    </InputContainer>
  );
};
