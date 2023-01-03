import styled from 'styled-components';

export const StyledInputColor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border-radius: 50px;
  border: 2px solid transparent;

  input {
    position: absolute;
    opacity: 0;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    width: 3.3rem;
    height: 2.8rem;
    background-image: linear-gradient(
      to right top,
      #d61382,
      #f5385a,
      #fb6c30,
      #ea9c00,
      #c6c800,
      #95d64a,
      #60de7f,
      #00e3b0,
      #00c9db,
      #00a9ff,
      #007fff,
      #002dff
    );
    border-radius: ${props => props.theme.box.borderRadius};
    background-color: ${props => props.color};
    box-shadow: ${props => props.theme.box.boxShadow};
    cursor: pointer;
  }

  :hover {
    border: 2px solid ${props => props.theme.colors.primary};
  }
`;
