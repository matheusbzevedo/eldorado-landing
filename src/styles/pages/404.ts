import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 5.4rem;
    color: ${props => props.theme.colors.primary};
    margin-top: 4.0rem;
  }

  p {
    margin-top: 2.4rem;
    font-size: 2.4rem;
    line-height: 3.2rem;
  }

  svg {
    width: 250rem;
  }
`;
