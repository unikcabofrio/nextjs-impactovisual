import styled, { keyframes } from 'styled-components';

export default function Loading() {
  return (
    <DivContainer >
      <Divl_dsRipple >
        <div></div>
        <div></div>
      </Divl_dsRipple>
    </DivContainer>
  )
}


const ldsRipple = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`

const DivContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 999999;
    background: linear-gradient(180deg, #017cb8, #074e82);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Divl_dsRipple = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  > div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation:${ldsRipple} 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  > div:nth-child(2) {
    animation-delay: -1s;
  }
`
