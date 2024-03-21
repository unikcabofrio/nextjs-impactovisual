import styled from "styled-components";

export const DivContainer = styled.div`
    width:100%;
    position:fixed;
    

    div{
        padding:.5rem 1rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        background-color:${({ theme }) => { return theme.colors[2] }};
    }
`

export const Input = styled.input`
    width:100%;
    height:100%;
    border:0;
    border-radius:1rem;
    padding:1rem 0;
    background-color:transparent;
    color:${({ theme }) => { return theme.colors[0] }};

    &:focus-visible {
        outline: -webkit-focus-ring-color auto 0px;
    }

    &::placeholder {
        color: ${({ theme }) => { return theme.colors[3] }};
    }
`

export const Button = styled.i`
    color:${({ theme }) => { return theme.colors[0] }};
    font-size:1.5rem;
    cursor: pointer;
`