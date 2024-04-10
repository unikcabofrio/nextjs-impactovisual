import styled from "styled-components"

export const DivContainer = styled.div`
    width:80%;
    padding:0 2rem;

    @media (min-width: 768px) and (max-width: 1200px) {
        width:100%;
    }

    @media (max-width: 767px) {
        width:100%;
        padding:0 1rem;
        margin-bottom:2rem;
    }
`

export const H2Title = styled.h2`
    border-bottom:1px solid ${({ theme }) => { return theme.colors[0] }};
    margin-bottom:1rem;
    padding-bottom:.5rem;
`

export const DiListNumber = styled.div`
    display:flex;
    font-size:1.5rem;
    font-weight:600;

    a{padding-right:.5rem;}

    @media (max-width: 767px) {
        flex-direction:column;
    }
`

export const DivNumber = styled.div``

export const Icon = styled.i`
    color:${({ theme }) => { return theme.colors[5] }};
    padding-right:.5rem;
`

export const ALink = styled.a``

export const DivUrlSocial = styled.div`
    padding-top:1rem;
    display:grid;
    grid-template-columns: .1fr .1fr;
    gap: 2px;

    a{
        font-size:1.8rem;
        i{color:${({ theme }) => { return theme.colors[0] }};}

        &:hover{
            i{color:${({ theme }) => { return theme.colors[5] }};}
        }
    }
`

export const PText = styled.p``