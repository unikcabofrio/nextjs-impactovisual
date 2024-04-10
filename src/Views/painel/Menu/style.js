import styled from "styled-components"

export const DivContainer = styled.div`
    padding:1rem 3rem;
    background-color:${({ theme }) => { return theme.colors[2] }};
    color:${({ theme }) => { return theme.colors[0] }};
    display:flex;
    align-items:center;
    justify-content:flex-start;

    @media (min-width: 768px) and (max-width: 1200px) {
       
    }

    @media (max-width: 768px) {
        padding:1rem 1rem;
        justify-content:center
    }
`