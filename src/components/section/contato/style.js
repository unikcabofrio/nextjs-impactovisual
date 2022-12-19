// CSS Contato
import styled from 'styled-components'

export const container = styled.footer`
  width: 100vw;
  height: 100%;
  bottom: 0;
  z-index: 1;
  overflow: hidden;
  padding-bottom: 3vh !important;
  background: linear-gradient(180deg, #007db9, #074e82);
  color: #fff;

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

export const middle = styled.div`
  padding: 4vh 0;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: stretch;

  > .social {
    width: 100%;
    padding-bottom: 1vw;
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`

export const bottom = styled.div`
  padding: 1vh 0;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`
export const imgSelos = styled.div`
  width: 30%;
  > span {
    position: relative !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 10px 0;
  }
`

export const socialContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  > svg {
    fill: #fff;
    margin: 0 2%;
    width: 2.5vw;

    :hover {
      fill: #dd262b;
    }
  }

  @media only screen and (max-width: 600px) {
    justify-content: center;

    > svg {
      margin: 0 5%;
      width: 10vw;
    }
  }
`

export const copy = styled.div`
  border-top: 1px solid hsla(0, 0%, 100%, 0.2);
  font-size: 1vw;
  text-align: center;
  padding-top: 20px;

  > p > a {
    margin-left: 5px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 3vw;
  }
`
