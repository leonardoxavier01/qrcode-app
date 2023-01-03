import React from 'react';

import { StyledButton } from './styles';

interface IProps {
  children?: React.ReactNode;
  onClick: () => void;
  color: string;
}
const CircleButton: React.FC<IProps> = props => {
  const { children, onClick, color } = props;

  return (
    <StyledButton color={color} onClick={onClick}>
      <button>{children}</button>
    </StyledButton>
  );
};

export default CircleButton;
