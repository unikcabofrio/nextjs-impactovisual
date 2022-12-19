// CSS Clientes
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

export const carrossel = styled.div`
  overflow: hidden;
  white-space: nowrap;
  list-style: none;
  width: 100%;
  height: 100%;
  padding-top: 1vh;
  transition: 0.6s;
`
export const carrosselItem = styled.div`
  display: inline-block;
  height: auto;
  padding: 0.2vw;
`

export const sliderImg = styled.img`
  width: 100%;
  height: 100%;
`
