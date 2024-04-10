import styled from "styled-components"

export const DivContainer = styled.div`
    padding:1rem;
    display:flex;
    justify-content:space-around;
    flex-direction: row;
    background-color:${({ theme }) => { return theme.colors[2] }};
    color:${({ theme }) => { return theme.colors[0] }};


    @media (min-width: 768px) and (max-width: 1200px) {
        justify-content:space-around;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 767px) {
        justify-content:space-around;
        flex-direction: column;
        align-items: center;
    }
`