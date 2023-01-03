import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 7rem 12rem;
  p {
    font-size: 1.4rem;
    font-weight: 500;

    margin-bottom: 3rem;
  }

  @media (min-width: 900px) and (max-width: 1080px) {
    padding: 7rem 5rem;
  }
  @media (min-width: 300px) and (max-width: 900px) {
    padding: 6rem 2rem;
  }

  @media (max-width: 500px) {
    padding: 4rem 1rem;
    p {
      font-size: 1.1rem;
    }
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 4.8rem;
  margin-bottom: 0.4rem;
  span {
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: 500px) {
    font-size: 4rem;
  }
`;

export const GeneratedCustom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: ${props => props.theme.colors.secondary};
  padding: 2rem;
  width: 45rem;
  height: 27rem;
  margin-top: 3rem;
  border-radius: 10px;

  img {
    margin-bottom: 1rem;
    width: 14rem;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    min-height: 38rem;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`;

export const CustomLeft = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.box.borderRadius};
  padding: 0.7rem;
  min-width: 4.5rem;
  margin: 1rem;

  @media (max-width: 500px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    flex-direction: row;
  }
`;

export const CustomRight = styled(CustomLeft)`
  @media (max-width: 500px) {
    min-width: 70%;
  }
`;

export const CodeGenerated = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 1.2rem;
    font-weight: 300;
    color: ${props => props.theme.colors.primary};
    margin: 1rem 0;
    span {
      font-weight: 500;
    }
  }
`;
