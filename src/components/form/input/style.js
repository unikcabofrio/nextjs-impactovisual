import styled from "styled-components"

export const DisContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    margin:1rem 0;
    transition:all .2s;

    div{
        display:flex;
        align-items: stretch;

        .password{
            border-radius: 6px 0 0 6px;
        }
    }
`

export const Label = styled.label``

export const Input = styled.input`
    width:100%;
    padding: 5px 12px;
    font-size: 14px;
    line-height: 20px;
    color: #24292e;
    vertical-align: middle;
    background-color:${({ theme }) => { return theme.colors[0] }};
    background-repeat: no-repeat;
    background-position: right 8px center;
    border: 1px solid #e1e4e8;
    border-radius: 6px 6px 6px 6px;
    outline: none;
    box-shadow: rgba(225, 228, 232, 0.2) 0px 1px 0px 0px inset;

    &:focus{
        border-color: ${({ theme }) => { return theme.colors[2] }};
        outline: none;
        box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
    }
`
export const Button = styled.i`
    background-color:${({ theme }) => { return theme.colors[0] }};
    vertical-align: middle;
    color: #24292e;
    border-radius: 0 6px 6px 0;
    padding: 2px 12px;
    padding-top:5px;
    background-repeat: no-repeat;
    background-position: right 8px center;
    border-top: 1px solid #e1e4e8;
    border-right: 1px solid #e1e4e8;
    border-bottom: 1px solid #e1e4e8;
    cursor: pointer;

    
`


