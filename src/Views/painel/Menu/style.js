import styled from "styled-components"

export const DivContainer = styled.div`
    padding:1rem 0;
    background-color:${({ theme }) => { return theme.colors[2] }};
    color:${({ theme }) => { return theme.colors[0] }};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;

    @media (min-width: 768px) and (max-width: 1200px) {
       
    }

    @media (max-width: 768px) {
        padding:1rem 1rem;
    }
`

export const MenuMobol = styled.div`
    display:none;
    width:100%;
    cursor: pointer;
    padding:.5rem 1rem;
    font-size:1.2rem;

    @media (max-width: 768px) {
        display:inline-block;
    }
`