// CSS Cursos
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

  > button {
    cursor: pointer;
    position: relative;
    margin-top: 6vh;
    left: 39vw;
    font-weight: 600;
    font-size: 1vw;
    -webkit-text-decoration: none;
    text-decoration: none;
    text-align: center;
    background-color: #fff;
    color: #dd262b;
    border: 1px solid #dd262b;
    padding: 1vh 3vw;
    border-radius: 5px;
    width: auto;

    :hover {
      background-color: #dd262b;
      color: #fff;
      border: 1px solid #dd262b;
    }
  }

  @media only screen and (max-width: 800px) {
    > button {
      margin-top: 3vh;
      left: 33vw;
      font-size: 4vw;
    }
  }
`

export const BoxGrid = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
`

export const Boxs = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  text-align: center;
  padding: 10px;
  margin: 10px 20px;

  > img {
    width: 100%;
  }

  > h3 > strong {
    display: none;
  }

  > p {
    padding: 10px 0;
    font-size: 0.9vw;
  }

  :hover {
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
  }

  @media only screen and (max-width: 800px) {
    > p {
      font-size: 5vw;
    }
  }
`

export const Table = styled.div`
  width: 100%;
  height: 100%;
`
export const TitleTable = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.1vw;

  font-size: 1vw;
  font-weight: 500;

  @media only screen and (max-width: 800px) {
    font-size: 5vw;
    font-weight: 500;
  }
`

export const InfoTable = styled.div`
  width: 100%;
  padding-top: 1vh;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1vw;
    text-align: left;

    .price {
      width: 30%;
      color: #dd262b;
      text-align: right;
    }
  }

  @media only screen and (max-width: 800px) {
    > div {
      font-size: 5vw;
    }
  }
`

export const Contatos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > a {
    text-decoration: none;
    text-align: center;
    font-size: 0.9vw;
    background-color: #dd262b;
    color: #fff;
    border: 1px solid #dd262b;
    padding: 5px 25px;
    border-radius: 5px;

    :hover {
      background-color: #fff;
      color: #dd262b;
      border: 1px solid #dd262b;
    }
  }

  @media only screen and (max-width: 800px) {
    > a {
      font-size: 4vw;
    }
  }
`
