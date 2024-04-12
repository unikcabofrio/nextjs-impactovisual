import styled from "styled-components"

export const DivContainer = styled.div`
    height:100%;
    padding:1rem 3rem;
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

export const DivTable = styled.div`
    width:100%;
    overflow-x: auto;
  
    table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
    }

    table th,
    table td {
        padding: .3rem;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    table th {
        background-color: #f2f2f2;
    }

    table tbody tr:hover {
        background-color: #f5f5f5;
    }

    table button {
        cursor: pointer;
        background-color: transparent;
        border: none;
        color: #007bff;
        margin-right: 5px;
        padding: 5px 10px;
        font-size: 14px;
    }

    table button:hover {
        color: #0056b3;
    }

`