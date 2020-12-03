import styled from 'styled-components'

export const Container = styled.div`
  > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    ul {
      list-style: none;
    }
  }

  .avatar {
    width: 200px;
    height: 200px;
    background-color: #333;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 32px auto;
    overflow: hidden;

    img {
      opacity: 0;
    }

    img.active {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 1;
    }
  }
`
