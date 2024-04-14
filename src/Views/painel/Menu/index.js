import * as S from './style'

import Button from '@/components/painel/menu/button'

import Produtos from '@/Views/painel/products'
import Shirts from '@/Views/painel/shirts'
import Cups from '@/Views/painel/cups'

export default function Index({ setSreen, setIsPreload }) {
    const toggleMenu = () => {
        const buttons = document.getElementsByClassName("buttonMenu");
        for (let index = 0; index < buttons.length; index++) {
            const element = buttons[index];
            const computedStyle = window.getComputedStyle(element);
            const isHidden = computedStyle.display === "none";
    
            element.style.display = isHidden ? "flex" : "none";
        }
    };
    return (
        <S.DivContainer>
            <S.MenuMobol onClick={() => { toggleMenu() }}>
                <i className="fi fi-sr-apps"></i>
            </S.MenuMobol>
            <Button
                name={"Produtos"}
                onClick={() => { setSreen(<Produtos setIsPreload={setIsPreload} />) }}
                icone={"fi fi-sr-edit"}
            />
            <Button
                name={"Rel. Camisas"}
                onClick={() => { setSreen(<Shirts setIsPreload={setIsPreload} />) }}
                icone={"fi fi-sr-shirt-long-sleeve"}
            />
            <Button
                name={"Rel. Copos"}
                onClick={() => { setSreen(<Cups setIsPreload={setIsPreload} />) }}
                icone={"fi fi-sr-wine-glass-crack"}
            />
            <Button
                name={"WebSite"}
                onClick={() => { setSreen("website") }}
                icone={"fi fi-br-browser"}
            />
            <Button
                name={"Configuração"}
                onClick={() => { setSreen("config") }}
                icone={"fi fi-sr-settings"}
            />
        </S.DivContainer>
    )
}


