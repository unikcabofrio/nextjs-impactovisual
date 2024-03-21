import styled from "styled-components"

export const DivContainer = styled.div`
    padding:1rem;
    padding-top:5rem;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 8px;

    @media (min-width: 768px) and (max-width: 1200px) {
        grid-template-columns: repeat(auto-fit, minmax(350px, 2fr));
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(100%, 2fr));
    }
`