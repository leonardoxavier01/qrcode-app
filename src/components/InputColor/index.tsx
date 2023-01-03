import React, { InputHTMLAttributes } from 'react';

import { RiAddCircleFill } from 'react-icons/ri';

import { StyledInputColor } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const InputColor: React.FC<IProps> = ({ name, ...rest }) => {
  return (
    <StyledInputColor>
      <input name={name} type="color" id="color-input" {...rest} />
      <label htmlFor="color-input" id="pseudo-color-input">
        <RiAddCircleFill size={30} color={'white'} />
      </label>
    </StyledInputColor>
  );
};

export default InputColor;
