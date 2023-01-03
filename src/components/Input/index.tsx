import React, { InputHTMLAttributes } from 'react';

import { StyledInput } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<IProps> = props => {
  const { name, ...rest } = props;

  return (
    <StyledInput>
      <input id={name} type="text" {...rest} />
    </StyledInput>
  );
};

export default Input;
