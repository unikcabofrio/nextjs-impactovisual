import styled from "styled-components"

export const Button = styled.div`
    width:100%;
    cursor: pointer;
    padding:.5rem 1rem;
    display:flex;
    align-items:center;
    /* 
    margin: 0 .5rem;
    background-color:${({ theme }) => { return theme.colors[0] }};
    color:${({ theme }) => { return theme.colors[5] }};
    
    border-radius:.8rem;
    transition:all .2s;*/

    &:hover{
        background-color:#024769;
        color:${({ theme }) => { return theme.colors[0] }};
    } 

    @media (max-width: 768px) {
        display:none;
    }
`

export const icone = styled.i`
    padding-top:.3rem;
    padding-right:.5rem;
`