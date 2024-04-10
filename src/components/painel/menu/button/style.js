import styled from "styled-components"

export const Button = styled.div`
    padding:.5rem 1rem;
    margin: 0 .5rem;
    background-color:${({ theme }) => { return theme.colors[0] }};
    color:${({ theme }) => { return theme.colors[5] }};
    cursor: pointer;
    border-radius:.8rem;
    transition:all .2s;

    &:hover{
        background-color:${({ theme }) => { return theme.colors[5] }};
        color:${({ theme }) => { return theme.colors[0] }};
    }
`