import styled from 'styled-components';

export const StyledButtonDownload = styled.a`
  width: 6rem;
  height: 2.5rem;
  background-color: ${props => props.theme.colors.primary};
  border: none;
  padding: 0.6rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.box.borderRadius};
  box-shadow: ${props => props.theme.box.boxShadow};
  cursor: pointer;
  text-decoration: none;
  text-align: center;
`;
