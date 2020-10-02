import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url('/eldorado.svg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  h1 {
    font-size: 8.4rem;
    color: ${props => props.theme.colors.primary};
    margin-top: 4rem;
    text-align: center;

  }

  p {
    text-align: center;
    margin-top: 2.4rem;
    font-size: 2.4rem;
    line-height: 3.2rem;
  }

  svg {
    width: 50rem;
  }
`;
