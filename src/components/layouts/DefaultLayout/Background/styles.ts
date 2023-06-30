import styled, { css, keyframes } from 'styled-components'

export const Container = styled.div`
  background-image: url('/assets/backgrounds/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
`

interface IOverlayPort {
  part: number
}
const overlayAnim1 = keyframes`
  0% {
    left: 100%;
    right: -100%;
  }

  100% {
    left: -0.1rem;
    right: -0.1rem;
  }
`
const overlayAnim2 = keyframes`
  0% {
    left: -100%;
    right: 100%;
  }

  100% {
    left: -0.1rem;
    right: -0.1rem;
  }
`

export const OverlayPart = styled.div<IOverlayPort>`
  ${(props) =>
    css`
      background-image: url('/assets/backgrounds/part_${props.part}.png');
    `}
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: -0.1rem;
  left: 100%;
  right: -100%;
  bottom: -0.1rem;

  ${(props) =>
    props.part > 1
      ? css`
          animation: ${overlayAnim1} 1s forwards;
          animation-delay: ${props.part * 0.1}s;
        `
      : css`
          animation: ${overlayAnim2} 0.75s forwards;
        `}
`
