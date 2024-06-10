import Imagem from "@/components/image"

export default function ProdutosCard({ item }, ...props) {
    return (
        <div id={props.id} className="cardProdutos">
            <section className="top">
                <div>
                    <h1>{item.nome}</h1>
                    <span>{item.descricao}</span>
                </div>
                <Imagem
                    src={item.imagem}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/semIMG.png';
                    }}
                />
            </section>
            <section className="price">
                <table>
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            item.tabela_preco &&
                            item.tabela_preco.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{value.descri}</td>
                                        <td>{Number.parseFloat(value.price) ? value.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : value.price}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
        </div>
    )
}