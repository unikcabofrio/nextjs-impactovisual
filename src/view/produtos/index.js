import './style.css'
import ProdutosCard from './produtosCard'
import LoudCard from './loudCard'

export default function Produtos({ filterProdutos, produtos }) {
    // Filtra os produtos com base no nome
    const filteredProdutos = produtos ? produtos.filter(item => 
        item.name.toUpperCase().includes(filterProdutos.toUpperCase())
    ) : [];

    // Ordena os produtos com base no positionIndex
    const sortedProdutos = filteredProdutos.sort((a, b) => a.positionIndex - b.positionIndex);

    return (
        <section id="produtos" className="produtos">
            <div className="listprodutos">
                {produtos ? (
                    sortedProdutos.length > 0 ? (
                        sortedProdutos.map((item,index) => (
                            <ProdutosCard
                                key={`${item.uuid}-${index}`} // Combina o uuid com o índice para garantir unicidade
                                id={item.uuid}
                                item={item}
                            />
                        ))
                    ) : (
                        <p>Nenhum produto encontrado.</p>
                    )
                ) : (
                    <LoudCard />
                )}
            </div>
        </section>
    )
}
