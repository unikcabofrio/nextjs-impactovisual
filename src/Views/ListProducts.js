import styled from "styled-components"

import CardProducts from "@/components/cardProduto"

export default function ListProducts({ products }) {
    return (
        <DivContainer>
            {
                products.map((item, index) => {
                    return <CardProducts produto={item} key={index} />
                })
            }
        </DivContainer>
    )
}


const DivContainer = styled.div`
    padding:1rem;
    padding-top:5rem;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 2fr));
    gap: 8px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(100%, 2fr));
  }
`