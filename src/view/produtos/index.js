import './style.css'
import ProdutosCard from './produtosCard'
import LoudCard from './loudCard'

export default function Produtos({ filterProdutos, produtos }) {
    return (
        <section id={'produtos'} className='produtos'>
            <div className='listprodutos'>
                {
                    !produtos ? <LoudCard /> :
                        produtos
                            .filter(item => item.nome.toUpperCase().includes(filterProdutos.toUpperCase()))
                            .map((item, index) => {
                                return <ProdutosCard
                                    key={index}
                                    id={index}
                                    item={item}
                                />
                            })
                }
            </div>

        </section>
    )
}