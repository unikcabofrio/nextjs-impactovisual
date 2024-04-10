import * as S from './style'

import Button from '@/components/painel/menu/button'

export default function Index({setSheet}) {
    return (
        <S.DivContainer>
            <Button
                name={"Produtos"}
                onClick={()=>{ setSheet("products")}}
            />
             <Button
                name={"Contato"}
                onClick={()=>{ setSheet("contact")}}
            />
        </S.DivContainer>
    )
}


