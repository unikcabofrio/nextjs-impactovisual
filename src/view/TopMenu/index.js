'use client'
import './style.css'
import { useState } from 'react'
import CryptoJS from 'crypto-js';

import Imagem from '@/components/image'
import IconeSVG from '@/components/icon'
import { ListMenu } from '@/utils/settings'

import Logo from '@/assets/logo 02.png'


export default function TopMenu({ setFilterProdutos }) {
    const [Menu, setMenu] = useState(false)
    const handleCheckPassword = () => {
        const correctHash = 'f6c330bf954b97c6d958f49f77b157a33a526d36af836cba65ccb22da6a3780c';
        const password = prompt("Digite a senha correta");
        const passwordHash = CryptoJS.SHA256(password).toString();
        console.log(passwordHash)
        
        if (passwordHash === correctHash) {
          window.location.href = '/painel'
        } else {
          window.location.href = '/'
        }
      };
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
                    <IconeSVG icone="search" />
                </div>
                <input type="text" onChange={(e) => { setFilterProdutos(e.target.value) }} placeholder='Digite o nome do produto que deseja buscar' />
            </div>
            <div className={`menuList ${Menu ? 'show' : ''}`}>
                {
                    ListMenu.map((item, index) => {
                        return <span key={index} onClick={() => { handleClick(item.id) }}>{item.name}</span>
                    })
                }
                <span onClick={() => {handleCheckPassword()}}>Painel</span>
            </div>
        </nav>
    )
}