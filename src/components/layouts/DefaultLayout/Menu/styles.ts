import styled from 'styled-components'

export const Container = styled.aside`
  width: calc(58px + 48px + 58px);
  height: 100vh;
  display: flex;
`

export const MenuContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  flex: 1;
  padding: 48px 0 48px 29px;

  .menu-button {
    width: 48px;
    height: 48px;
    font-size: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    transition: 0.2s;

    span {
      display: flex;
      width: 48px;
      height: 1px;
      background-color: #fff;
      position: relative;
      margin-top: -25px;
      opacity: 0.7;
      transition: 0.2s;

      &::before {
        content: '';
        display: flex;
        width: 32px;
        height: 1px;
        background-color: #fff;
        position: absolute;
        bottom: -12px;
        opacity: 0.7;
        transition: 0.2s;
        transition-delay: 0.05s;
      }
      &::after {
        content: '';
        display: flex;
        width: 16px;
        height: 1px;
        background-color: #fff;
        position: absolute;
        bottom: -25px;
        opacity: 0.4;
        transition: 0.2s;
        transition-delay: 0.1s;
      }
    }

    &:hover {
      span {
        width: 48px;
        opacity: 1;

        &::before {
          width: 48px;
          opacity: 1;
        }
        &::after {
          width: 48px;
          opacity: 1;
        }
      }
    }
  }

  .social-media {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;

      a {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
        opacity: 0.7;
        transition: 0.2s;

        &:hover {
          opacity: 1;
        }
      }
    }

    li + li {
      margin-top: 8px;
    }
  }
`

export const ScrollSpy = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  .line {
    flex: 1;
    margin: 48px 0 32px;
    width: 1px;
    background-color: #fff;

    & ~ .line {
      margin: 32px 0 48px;
    }
  }
`

interface IMenuItem {
  size: number
}

export const MenuItem = styled.button<IMenuItem>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  height: 11px;
  cursor: pointer;
  position: relative;
  width: 48px;

  &::after {
    content: '';
    background-color: #fff;
    width: ${(props) => props.size * 16}px;
    opacity: ${(props) => props.size / 3};
    height: 1px;
    position: absolute;
    transition: 0.2s;
  }

  &:hover {
    &::after {
      width: ${(props) => props.size * 16 + 5}px;
      opacity: 1;
    }
  }
`
