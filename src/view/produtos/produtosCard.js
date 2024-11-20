import Imagem from "@/components/image"

export default function ProdutosCard({ item }) {
    
    // Função para formatar o preço
    const confiPriceText = (text) => {
        const containsLetter = /[a-zA-Z]/.test(text);

        if (containsLetter) {
            return Number.parseFloat(text) ? `R$ ${text}` : text;
        }

        const parsedNumber = Number.parseFloat(text);

        if (!isNaN(parsedNumber)) {
            return parsedNumber.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        }

        return text;
    };

    // Garantir que o item.prices é um array válido e parseado
    let parsedPrices = [];
    try {
        parsedPrices = item.prices ? JSON.parse(item.prices) : [];
    } catch (error) {
        console.error("Erro ao analisar preços:", error);
    }

    return (
        <div className="cardProdutos">
            <section className="top">
                <div>
                    <h1>{item.name}</h1>
                    <span>{item.descript}</span>
                </div>
                <Imagem
                    src={item.image}
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
                        {parsedPrices.length > 0 ? (
                            parsedPrices.map((value, index) => (
                                <tr key={index}>
                                    <td>{value.descri}</td>
                                    <td>{confiPriceText(value.price)}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2">Sem preços disponíveis</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
