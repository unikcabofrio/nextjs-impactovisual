import styled from "styled-components"


export const DivContainer = styled.div`
    padding:1rem;
    margin: .5rem 0;
    display:flex;
    flex-direction: column;
    border:1px solid ${({ theme }) => { return theme.colors[3] }};
    border-radius:.5rem;
    color:${({ theme }) => { return theme.colors[4] }};

    .top{
        display:flex;
        flex-direction:row;
        justify-content: space-between;
        align-items: center;

        div{
            display:flex;
            flex-direction:column;
            font-size: 1.2rem;
            padding-right:.5rem;

            h5{
                line-height: 1rem;
            }

            p{
                font-size: 0.8rem;
            }
        }

        img {
            width:30%;
        }
    }

    .price{
        display:flex;
        flex-direction:column;
        justify-content: space-between;
        font-size: 0.8rem;
        margin-top:1rem;

        div{
            width:100%;
            display:flex;
            justify-content: space-between;
            align-items: center;
            color:${({ theme }) => { return theme.colors[4] }};

            .red{
                color:${({ theme }) => { return theme.colors[5] }};
            }
        }
    }
`