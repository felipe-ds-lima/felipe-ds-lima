import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding-left: 56px;
`

export const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: min-content;
  margin-top: 104px;

  h1 {
    font-size: 90px;
    text-transform: uppercase;
    font-weight: 900;
    line-height: 85px;
    white-space: nowrap;

    span {
      font-size: 88px;
      color: #0e1231;
      display: block;
      text-shadow: -1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff,
        -1px -1px 0 #fff;
    }
  }

  p {
    text-align: justify;
    margin: 16px 0;
    opacity: 0.6;
  }

  .button-container {
    display: flex;
    gap: 16px;
    flex: 1;

    button {
      flex: 1;
      white-space: nowrap;
    }
  }
`

export const AccountButtons = styled.section`
  position: absolute;
  top: 48px;
  right: 48px;

  display: flex;
  gap: 16px;

  button {
    opacity: 0.4;
    min-width: 150px;

    &:hover {
      opacity: 0.7;
    }
  }
`
