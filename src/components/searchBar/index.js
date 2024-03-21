import { useState } from "react";
import * as S from './style'

export default function SearchBar({products,setProductsFilter}) {

    const [valueSearch,setValueSearch] = useState('')
    
    return (
        <S.DivContainer>
            <div>
                <S.Input 
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
                <S.Button 
                    className={valueSearch.length > 0 ? "fi fi-rr-trash" :"fi fi-br-search" }
                    onClick={()=>{
                        if( valueSearch.length > 0){
                            setValueSearch('')
                            setProductsFilter(Filter)
                        }

                    }}
                />
            </div>

        </S.DivContainer>
    )
}