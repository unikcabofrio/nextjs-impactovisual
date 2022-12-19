// CSS Home
import styled from 'styled-components'

export const container = styled.header`
  width: 100vw;
  height: 100vh;
  position: relative;
`
export const carrossel = styled.div`
  white-space: nowrap;
  list-style: none;
  width: 100vw;
  height: 100vh;
  transition: 0.6s;

  @media only screen and (max-width: 800px) {
    padding-top: 5.9vh;
  }
`

export const carrosselItem = styled.div`
  display: inline-block;
`

export const sliderImg = styled.img`
  width: 100vw;
  height: 100vh;
`
