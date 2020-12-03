import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;

  > a {
    display: block;
    width: 90%;

    svg {
      width: 100%;
      height: 200px;
    }
  }

  > h1 {
    color: ${props => props.theme.colors.primary};
    font-size: 40px;
  }

  p {
    font-size: 16px;

    a {
      color: ${props => props.theme.colors.primary};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`
