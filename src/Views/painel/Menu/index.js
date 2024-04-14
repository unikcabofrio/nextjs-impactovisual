import * as S from './style'

import Button from '@/components/painel/menu/button'

import Produtos from '@/Views/painel/products'
import Shirts from '@/Views/painel/shirts'
import Cups from '@/Views/painel/cups'

export default function Index({setSreen,setIsPreload}) {
    return (
        <S.DivContainer>
            <Button
                name={"Produtos"}
                onClick={()=>{ setSreen(<Produtos setIsPreload={setIsPreload}/>)}}
                icone={"fi fi-sr-edit"}
            />
            <Button
                name={"Rel. Camisas"}
                onClick={()=>{ setSreen(<Shirts setIsPreload={setIsPreload}/>)}}
                icone={"fi fi-sr-shirt-long-sleeve"}
            />
             <Button
                name={"Rel. Copos"}
                onClick={()=>{ setSreen(<Cups setIsPreload={setIsPreload}/>)}}
                icone={"fi fi-sr-wine-glass-crack"}
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


