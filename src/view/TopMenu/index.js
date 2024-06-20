'use client'
import './style.css'
import { useState } from 'react'

import Imagem from '@/components/image'
import IconeSVG from '@/components/icon'
import { ListMenu } from '@/utils/settings'

import Logo from '@/assets/logo 02.png'


export default function TopMenu({setFilterProdutos}) {
    const [Menu, setMenu] = useState(false)
    function handleClick(id) {
        setMenu(!Menu)
        const section = document.getElementById(id)
        section.scrollIntoView(true)
    }
    return (
        <nav className="navbar">
            <div className='menuButton'>
                <Imagem src={Logo} />
                <IconeSVG icone={'menu'} onClick={() => { setMenu(!Menu) }} />
            </div>
            <div className='barBusca'>
                <div>
                    <IconeSVG icone="search"/>
                </div>
                <input type="text" onChange={(e)=>{setFilterProdutos(e.target.value)}} placeholder='Digite o nome do produto que deseja buscar'/>
            </div>
            <div className={`menuList ${Menu ? 'show' : ''}`}>
                {
                    ListMenu.map((item, index) => {
                        return <span key={index} onClick={() => { handleClick(item.id) }}>{item.name}</span>
                    })
                }
                <span onClick={() => { window.location.href = '/' }}>Painel</span>
            </div>
        </nav>
    )
}