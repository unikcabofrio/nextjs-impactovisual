// CSS Preload
import styled from 'styled-components'

export const Preload = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #030a8c 0, #031740);
  z-index: 9999999;
`

export const containerCube = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -20px auto 20px -20px;
  transform: rotate(45deg);

  > div {
    float: left;
    width: 50%;
    height: 50%;
    position: relative;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);

    :before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #ffffff;
      -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
      animation: sk-foldCubeAngle 2.4s infinite linear both;
      -webkit-transform-origin: 100% 100%;
      transform-origin: 100% 100%;
    }

    @-webkit-keyframes sk-foldCubeAngle {
      0%,
      10% {
        -webkit-transform: perspective(140px) rotateX(-180deg);
        transform: perspective(140px) rotateX(-180deg);
        opacity: 0;
      }
      25%,
      75% {
        -webkit-transform: perspective(140px) rotateX(0deg);
        transform: perspective(140px) rotateX(0deg);
        opacity: 1;
      }
      90%,
      100% {
        -webkit-transform: perspective(140px) rotateY(180deg);
        transform: perspective(140px) rotateY(180deg);
        opacity: 0;
      }
    }

    @keyframes sk-foldCubeAngle {
      0%,
      10% {
        -webkit-transform: perspective(140px) rotateX(-180deg);
        transform: perspective(140px) rotateX(-180deg);
        opacity: 0;
      }
      25%,
      75% {
        -webkit-transform: perspective(140px) rotateX(0deg);
        transform: perspective(140px) rotateX(0deg);
        opacity: 1;
      }
      90%,
      100% {
        -webkit-transform: perspective(140px) rotateY(180deg);
        transform: perspective(140px) rotateY(180deg);
        opacity: 0;
      }
    }
  }
`
export const Cube1 = styled.div``

export const Cube2 = styled.div`
  -webkit-transform: scale(1.1) rotateZ(90deg) !important;
  transform: scale(1.1) rotateZ(90deg) !important;

  :before {
    -webkit-animation-delay: 0.5s !important;
    animation-delay: 0.5s !important;
  }
`
export const Cube3 = styled.div`
  -webkit-transform: scale(1.1) rotateZ(270deg) !important;
  transform: scale(1.1) rotateZ(270deg) !important;

  :before {
    -webkit-animation-delay: 2s !important;
    animation-delay: 2s !important;
  }
`
export const Cube4 = styled.div`
  -webkit-transform: scale(1.1) rotateZ(180deg) !important;
  transform: scale(1.1) rotateZ(180deg) !important;

  :before {
    -webkit-animation-delay: 1s !important;
    animation-delay: 1s !important;
  }
`
