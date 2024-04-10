import * as S from './style'
import CardProducts from "@/components/cardProduto"

export default function Index({ products }) {
    return (
        <S.DivContainer>
            {
                products.map((item, index) => {
                    return <CardProducts produto={item} key={index} />
                })
            }
        </S.DivContainer>
    )
}


