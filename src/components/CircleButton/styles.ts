import styled from 'styled-components';

interface IPropsStyled {
  color?: string;
}

export const StyledButton = styled.div<IPropsStyled>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border-radius: 50px;
  border: 2px solid transparent;

  button {
    width: 3.3rem;
    height: 2.8rem;
    border-radius: ${props => props.theme.box.borderRadius};
    background-color: ${props => props.color};
    border: none;
    box-shadow: ${props => props.theme.box.boxShadow};
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
  }

  :hover {
    border: 2px solid ${props => props.theme.colors.primary};
  }
`;
