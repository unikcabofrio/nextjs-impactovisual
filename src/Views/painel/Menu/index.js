import * as S from './style'

import Button from '@/components/painel/menu/button'

export default function Index({setSreen}) {
    return (
        <S.DivContainer>
            <Button
                name={"Produtos"}
                onClick={()=>{ setSreen("products")}}
                icone={"fi fi-sr-edit"}
            />
            <Button
                name={"WebSite"}
                onClick={()=>{ setSreen("website")}}
                icone={"fi fi-br-browser"}
            />
            <Button
                name={"Configuração"}
                onClick={()=>{ setSreen("config")}}
                icone={"fi fi-sr-settings"}
            />
        </S.DivContainer>
    )
}


