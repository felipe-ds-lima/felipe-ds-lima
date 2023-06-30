import styled, { css } from 'styled-components'

interface IContainerProps {
  format?: 'primary' | 'secondary'
}

export const Container = styled.button<IContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  text-align: center;
  background-color: var(--white);
  border: 2px solid var(--white);
  color: var(--black);
  font-weight: 500;
  cursor: pointer;
  opacity: 0.9;
  transition: 0.2s;

  ${(props) =>
    props.format === 'secondary' &&
    css`
      background-color: unset;
      color: var(--white);
    `}

  &:hover {
    opacity: 1;
  }

  &:active {
    opacity: 0.5;
  }
`
