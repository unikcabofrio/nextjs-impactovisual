import styled from "styled-components"

export const DivContainer = styled.div`
    padding:1rem;
    display:flex;
    justify-content:space-around;
    flex-direction: row;
    background-color:${({ theme }) => { return theme.colors[2] }};
    color:${({ theme }) => { return theme.colors[0] }};

    i{
        color:${({ theme }) => { return theme.colors[5] }};
        padding-right:.5rem;
    }

    .contact{
        width:80%;
        padding:0 2rem;
    }

    h2{
        border-bottom:1px solid ${({ theme }) => { return theme.colors[0] }};
        margin-bottom:1rem;
        padding-bottom:.5rem;
    }

    .listNumber{
        display:flex;
        font-size:1.5rem;
        font-weight:600;

        a{
            padding-right:.5rem;
        }
    }

    .urlSocial{
        padding-top:1rem;
        display:grid;
        grid-template-columns: .1fr .1fr;
        gap: 2px;

        a{
            font-size:1.8rem;
            i{
                color:${({ theme }) => { return theme.colors[0] }};
            }

            &:hover{
                i{
                    color:${({ theme }) => { return theme.colors[5] }};
                }
            }
        }
       
    }

    @media (min-width: 768px) and (max-width: 1200px) {
        justify-content:space-around;
        flex-direction: column;
        align-items: center;

        .contact{
            width:100%;
        }
    }

    @media (max-width: 767px) {
        justify-content:space-around;
        flex-direction: column;
        align-items: center;

        .contact{
            width:100%;
            padding:0 1rem;
            margin-bottom:2rem;
        }

        .listNumber{
            flex-direction:column;
        }
    }
`