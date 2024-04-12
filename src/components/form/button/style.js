import styled, { keyframes } from "styled-components"

const ldsEllipsis1 = keyframes`
    0% {transform: scale(0);}
    100% {transform: scale(1);}
`

const ldsEllipsis2 = keyframes`
    0% {transform: translate(0, 0);}
    100% {transform: translate(24px, 0);}
`

const ldsEllipsis3 = keyframes`
    0% {transform: scale(1);}
    100% {transform: scale(0);}
`

export const Button = styled.div`
    width:100%;
    padding:.5rem 1rem;
    text-align:center;
    background-color:${({ theme }) => { return theme.colors[5] }};
    color:${({ theme }) => { return theme.colors[0] }};
    border:2px solid ${({ theme }) => { return theme.colors[5] }};
    cursor: pointer;
    border-radius:.8rem;
    transition:all .2s;
`

export const DivLoading = styled.div`
    display: inline-block;
    position: relative;
    top:-25px;
    left:-30px;
    width:20px;
    height: 20px;
    color:${({ theme }) => { return theme.colors[0] }};

    div{
        box-sizing: border-box;
        position: absolute;
        top: 33.33333px;
        width: 13.33333px;
        height: 13.33333px;
        border-radius: 50%;
        background: currentColor;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }

    div:nth-child(1) {
        left: 8px;
        animation: ${ldsEllipsis1} 0.6s infinite;
    }
    div:nth-child(2) {
        left: 8px;
        animation: ${ldsEllipsis2} 0.6s infinite;
    }
    div:nth-child(3) {
        left: 32px;
        animation: ${ldsEllipsis2} 0.6s infinite;
    }
    div:nth-child(4) {
        left: 56px;
        animation: ${ldsEllipsis3} 0.6s infinite;
    }
`
