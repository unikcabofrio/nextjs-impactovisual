import styled from "styled-components"

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

    &:hover{
        background-color:${({ theme }) => { return theme.colors[0] }};
        color:${({ theme }) => { return theme.colors[5] }};
        border:2px solid ${({ theme }) => { return theme.colors[5] }};
    }
`