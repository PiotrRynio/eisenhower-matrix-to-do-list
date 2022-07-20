import React from 'react';
import { StyledButton } from './Button.styles';

export type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  isPrimary?: boolean;
  type?: 'button' | 'submit';
};

export const Button = (props: ButtonProps) => {
  return <StyledButton {...props} onSubmit={props.onClick} />;
};
