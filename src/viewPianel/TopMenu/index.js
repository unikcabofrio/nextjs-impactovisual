'use client'
import './style.css'
import IconeSVG from '@/components/icon'


export default function TopMenu({ setMenuAtivo }) {
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
                    <span id={'produtos'} className={'ativo'} onClick={() => { handleClick('produtos') }}>Produtos</span>
                    <span id={'perguntas'} onClick={() => { handleClick('perguntas') }}>Perguntas</span>
                    <span id={'contato'} onClick={() => { handleClick('contato') }}>Lojas</span>
                </div>
                <div className={`menuList`}>
                    <h6>Relatório - Jardim</h6>
                    <span id={'listCamisas_JD'} onClick={() => { handleClick('listCamisas_JD') }}>Camisas</span>
                    <span id={'listCopos_JD'} onClick={() => { handleClick('listCopos_JD') }}>Copos</span>
                </div>
                <div className={`menuList`}>
                    <h6>Relatório - Cabo Frio</h6>
                    <span id={'listCamisas_CF'} onClick={() => { handleClick('listCamisas_CF') }}>Camisas</span>
                    <span id={'listCopos_CF'} onClick={() => { handleClick('listCopos_CF') }}>Copos</span>
                </div>
            </div>

            <div className={`menuList exitBtn`}>
                <span onClick={() => { window.location.href = '/' }}>
                    <IconeSVG icone={"logout"} /><>Sair</>
                </span>
            </div>
        </nav>
    )
}