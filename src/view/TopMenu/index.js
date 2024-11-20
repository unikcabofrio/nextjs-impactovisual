'use client'
import './style.css'
import { useState } from 'react'

import Imagem from '@/components/image'
import IconeSVG from '@/components/icon'
import { ListMenu } from '@/utils/settings'

import Logo from '@/assets/logo 02.png'

export default function TopMenu({ setFilterProdutos }) {
    const [menuOpen, setMenuOpen] = useState(false)

    // Alterna o estado do menu e rola até a seção correspondente
    const handleClick = (id) => {
        setMenuOpen(prev => !prev)  // Alterna o estado do menu de forma mais clara
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' }) // Rolagem suave para a seção
        }
    }

    return (
        <nav className="navbar">
            <div className="menuButton">
                <Imagem src={Logo} />
                <IconeSVG icone="menu" onClick={() => setMenuOpen(prev => !prev)} />
            </div>

            <div className="barBusca">
                <div>
                    <IconeSVG icone="search" />
                </div>
                <input
                    type="text"
                    onChange={(e) => setFilterProdutos(e.target.value)}
                    placeholder="Digite o nome do produto que deseja buscar"
                />
            </div>

            {/* Menu com transição suave */}
            <div className={`menuList ${menuOpen ? 'show' : ''}`}>
                {ListMenu.map((item) => (
                    <span key={item.id} onClick={() => handleClick(item.id)}>
                        {item.name}
                    </span>
                ))}
            </div>
        </nav>
    )
}
