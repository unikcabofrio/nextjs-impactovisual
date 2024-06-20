'use client'
import { useState } from 'react'
import './style.css'
import IconeSVG from '@/components/icon'


export default function TopMenu({ setMenuAtivo }) {
    const [listMenuSite] = useState([
        { name: "Produtos", icone: "dataset", id: "produtos", class: "ativo" },
        { name: "Perguntas", icone: "quiz", id: "perguntas", class: "" },
        { name: "Lojas", icone: "store", id: "contato", class: "" }
    ])

    const [listMenuJd] = useState([
        { name: "Camisas", icone: "laundry", id: "listCamisas_JD", class: "" },
        { name: "Copos", icone: "water_full", id: "listCopos_JD", class: "" },
    ])

    const [listMenuCf] = useState([
        { name: "Camisas", icone: "laundry", id: "listCamisas_CF", class: "" },
        { name: "Copos", icone: "water_full", id: "listCopos_CF", class: "" },
    ])

    function handleClick(id) {
        const spanlist = document.getElementsByTagName('span')
        for (let index = 0; index < spanlist.length; index++) {
            const element = spanlist[index];
            element.classList.remove('ativo')
        }
        document.getElementById(id).classList.add('ativo')
        setMenuAtivo(id)
    }
    return (
        <nav className="navbar">
            {/* <div className='menuImage'>
                <Imagem src={Logo} />
            </div> */}
            <div className='buttons'>
                <div className={`menuList`}>
                    <h6>Configuração Site</h6>
                    {
                        listMenuSite &&
                        listMenuSite.map((item, index) => {
                            return (
                                <span
                                    key={index}
                                    id={item.id}
                                    className={item.class}
                                    onClick={() => { handleClick(item.id) }}>
                                    <IconeSVG icone={item.icone} />
                                    <>{item.name}</>
                                </span>
                            )
                        })
                    }
                </div>
                <div className={`menuList`}>
                    <h6>Relatório - Jardim</h6>
                    {
                        listMenuJd &&
                        listMenuJd.map((item, index) => {
                            return (
                                <span
                                    key={index}
                                    id={item.id}
                                    className={item.class}
                                    onClick={() => { handleClick(item.id) }}>
                                    <IconeSVG icone={item.icone} />
                                    <>{item.name}</>
                                </span>
                            )
                        })
                    }
                </div>
                <div className={`menuList`}>
                    <h6>Relatório - Cabo Frio</h6>
                    {
                        listMenuCf &&
                        listMenuCf.map((item, index) => {
                            return (
                                <span
                                    key={index}
                                    id={item.id}
                                    className={item.class}
                                    onClick={() => { handleClick(item.id) }}>
                                    <IconeSVG icone={item.icone} />
                                    <>{item.name}</>
                                </span>
                            )
                        })
                    }
                </div>
            </div>

            <div className={`menuList exitBtn`}>
                <span onClick={() => { window.location.href = '/' }}>
                    <IconeSVG icone={"logout"} />
                    <>Sair</>
                </span>
            </div>
        </nav>
    )
}