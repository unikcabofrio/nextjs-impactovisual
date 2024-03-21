import { useState } from "react";
import styled from "styled-components";

export default function SearchBar({products,setProductsFilter}) {

    const [valueSearch,setValueSearch] = useState('')
    
    return (
        <DivContainer>
            <div>
                <Input 
                    placeholder="Digite o nome do produto aqui"
                    value={valueSearch}
                    onChange={(e) =>{
                        setValueSearch(e.target.value)

                        const Filter = products.filter(function (products) {
                            return products.name_product
                              .toLowerCase()
                              .includes(e.target.value.toLowerCase().trimEnd())
                          })
                        setProductsFilter(Filter)
                    }}
                />
                <Button 
                    className={valueSearch.length > 0 ? "fi fi-rr-trash" :"fi fi-br-search" }
                    onClick={()=>{
                        if( valueSearch.length > 0){
                            setValueSearch('')
                            setProductsFilter(Filter)
                        }

                    }}
                />
            </div>

        </DivContainer>
    )
}

const DivContainer = styled.div`
    width:100%;
    position:fixed;
    

    div{
        padding:.5rem 1rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        background-color:${({ theme }) => { return theme.colors[2] }};
    }
`

const Input = styled.input`
    width:100%;
    height:100%;
    border:0;
    border-radius:1rem;
    padding:1rem 0;
    background-color:transparent;
    color:${({ theme }) => { return theme.colors[0] }};

    &:focus-visible {
        outline: -webkit-focus-ring-color auto 0px;
    }

    &::placeholder {
        color: ${({ theme }) => { return theme.colors[3] }};
    }
`

const Button = styled.i`
    color:${({ theme }) => { return theme.colors[0] }};
    font-size:1.5rem;
    cursor: pointer;
`