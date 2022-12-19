// CSS Buttons
import styled from 'styled-components'

export const Button = styled.button`
  display: inline-block;
  margin: 0.2vw 0;
  cursor: pointer;
  padding: 8px 30px;
  border-radius: 5px;
  border: none;
  box-shadow: 2px 5px 20px -5px rgb(0 0 0 / 10%);
  transition: 0.5s;
`

export const Whatsapp = styled.div`
  position: fixed;
  z-index: 10000;
  bottom: 0;
  right: 0;
  background-color: #228c22;
  border: 1px solid rgba(34, 140, 34, 0);
  border-radius: 5px 0 0 5px;
  margin-bottom: 1vw;
  animation: sk-foldCubeAngleZap 5s linear infinite both;

  > a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    padding: 5px 10px;

    > svg {
      fill: #fff;
      width: 2vw;
    }

    > p {
      font-size: 1.2vw;
      margin-left: 1vw;
    }

    @media screen and (min-width: 0px) and (max-width: 800px) {
      padding: 3vw;

      > svg {
        width: 12vw;
      }

      > p {
        display: none;
      }
    }

    @keyframes sk-foldCubeAngleZap {
      0% {
        transform: translateY(0);
      }
      90% {
        transform: translateY(0);
      }
      92% {
        transform: translateY(-5px);
      }
      94% {
        transform: translateY(5px);
      }
      96% {
        transform: translateY(-5px);
      }
      98% {
        transform: translateY(5px);
      }
      100% {
        transform: translateY(-5px);
      }
    }
  }
`
