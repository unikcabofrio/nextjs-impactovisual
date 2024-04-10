import styled from "styled-components"

export const DivContainer = styled.div`
    height:100%;
    padding:1rem 3rem;
    background: linear-gradient(180deg, #017cb8, #074e82);
    display:flex;
    justify-content:center;
    align-items:center;

    @media (min-width: 768px) and (max-width: 1200px) {
       
    }

    @media (max-width: 768px) {
        padding:1rem 1rem;
    }
`

export const DivLogin = styled.div`
    width:30rem;
    background-color:${({ theme }) => { return theme.colors[0] }};
    padding:2.5rem;
    border-radius:1.5rem;
`