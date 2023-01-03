import styled from 'styled-components';

export const StyledInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 2px solid ${props => props.theme.box.borderColor};
  border-radius: ${props => props.theme.box.borderRadius};
  box-shadow: ${props => props.theme.box.boxShadow};

  width: 35rem;
  height: 3.5rem;

  input {
    width: 100%;
    font-size: 1rem;
    border: none;
    outline: none;
    background: transparent;
  }

  @media (max-width: 700px) {
    width: 100%;
    height: 3rem;
    input {
      font-size: 0.9rem;
    }
  }
`;
