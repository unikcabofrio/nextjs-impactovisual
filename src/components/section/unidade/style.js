// CSS Unidade
import styled from 'styled-components'

export const container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #fff;
  color: #5a5a5a;
  overflow: hidden;
  padding: 20vh 6vw;
  padding-bottom: 0vh !important;

  @media only screen and (max-width: 800px) {
    padding: 20px 10px;
    padding-top: 10vh !important;
  }

  @media only screen and (max-width: 760px) {
    padding-top: 15vh !important;
  }
`

export const containerBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  justify-content: center;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`

export const Boxs = styled.div`
  cursor: pointer;
  padding: 20px 0;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 80%;
    height: 40%;
    object-fit: cover;
    object-position: 50% 80%;
    transition: 0.3s;
    filter: grayscale(100%);

    :hover {
      filter: none;
    }
  }

  > p {
    text-align: center;
    font-size: 1vw;
    padding: 3vh 3vw;
  }

  :hover {
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
  }

  @media only screen and (max-width: 800px) {
    margin: 0;

    > p {
      font-size: 5vw;
      padding: 3vh 3vw;
    }
  }
`
