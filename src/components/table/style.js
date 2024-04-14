import styled from "styled-components"

export const Table = styled.table`
    width: 100%;
    margin-top:1rem;
    border-collapse: collapse;
    border-spacing: 0;

`

export const Thead = styled.thead`

    @media (max-width: 768px) {
        tr{
            :nth-child(1) {
                display:none;
            }
        }
        
    }

`

export const Tbody = styled.tbody`
    tr:hover{
        background-color: #f5f5f5;
    }

    @media (max-width: 768px) {
        font-size:.9rem;
        td:nth-child(1) {
            display:none;
        }
    }
`

export const Tr = styled.tr``

export const Td = styled.td`
    padding: .3rem;
    text-align: left;
    border-bottom: 1px solid #ddd;    
`

export const Th = styled.th`
    padding: .3rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
    background-color:${({ theme }) => { return theme.colors[2] }};
    color:${({ theme }) => { return theme.colors[0] }};
`

export const ButtonIcon = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => { return theme.colors[2] }};
    margin-right: 5px;
    padding: 5px 10px;
    font-size: 1rem;

    &:hover{
        color: ${({ theme }) => { return theme.colors[5] }};
    }

    @media (max-width: 768px) {
        font-size:.8rem;
    }

`

export const DivCotrolPage = styled.div`
    display:flex;
    align-items:center;
    margin-top:1rem;

    span{
        margin:0 1rem;
    }
    @media (max-width: 768px) {
        justify-content: space-around;
    }
    
`

export const ButtonPage = styled.button`
    cursor: pointer;
    background-color:  ${({ theme }) => { return theme.colors[2] }};
    border: none;
    color: ${({ theme }) => { return theme.colors[0] }};
    padding: 0 .5rem;
    padding-top: .4rem;
    font-size: 1.2rem;
    border-radius:.5rem;

    &:hover{
        background-color:  ${({ theme }) => { return theme.colors[5] }};
    }

`