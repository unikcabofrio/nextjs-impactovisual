import styled from "styled-components"

export const DivContainer = styled.div`
    height:100%;
    padding:1rem;
    background-color:${({ theme }) => { return theme.colors[0] }};
    color:${({ theme }) => { return theme.colors[1] }};
   

    @media (min-width: 768px) and (max-width: 1200px) {
       
    }

    @media (max-width: 768px) {
        padding:1rem 1rem;
    }
`

export const DivContent = styled.div`
    display:flex;
`
export const Title = styled.h3`
    color:${({ theme }) => { return theme.colors[4] }};
`

export const DivTable = styled.div`
    width:100%;
    overflow-x: auto;
`