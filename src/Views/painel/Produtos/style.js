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

    table{
        width:100%;
        display:flex;
        flex-direction:column;

        thead{
            background-color:${({ theme }) => { return theme.colors[2] }};
            color:${({ theme }) => { return theme.colors[0]}};

            tr{
                padding: 0.2rem .5rem;
                display:flex;

                td{ width:100%;}
                td:last-child { 
                    width:25%;
                    border-left:1px solid ${({ theme }) => { return theme.colors[0] }};
                    padding-left:.5rem;
                }
            }
        }

        tbody{
            background-color:${({ theme }) => { return theme.colors[3] }};

            tr{
                padding: 0.2rem .5rem;
                border-bottom:1px solid ${({ theme }) => { return theme.colors[1] }};
                display:flex;

                td{ width:100%;}
                td:last-child { 
                    width:25%;
                    border-left:1px solid ${({ theme }) => { return theme.colors[4] }};
                    padding-left:.5rem;
                }
            }
        }
    }
`

export const DivEdit = styled.div`
    width:50%;
`