import React, {CSSProperties}  from 'react'
import { ButtonContainer } from './style'

interface ButtonProps {
  title: string;
  variant?: string;
  onClick?: () => void;
  style?:CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ title, variant = "primary", onClick, style }) => {
  return (
    <ButtonContainer
      variant={variant}
      onClick={onClick}
      style={style}
    >
      {title}
    </ButtonContainer>
  )
}

export default Button;
