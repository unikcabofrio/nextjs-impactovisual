/* eslint-disable @next/next/no-img-element */
import * as S from './style'

export default function Index({ produto }) {
    return (
        <S.DivContainer>
            <div className="top">
                <div>
                    <h5>{produto.name_product}</h5>
                    <p>{produto.descript_product}</p>
                </div>
                <img
                    src={produto.image_product}
                    alt={"Carregando Imagem"}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/semIMG.png';
                    }}
                />
            </div>

            <div className="price">
                <div>
                    <strong>Descrição</strong>
                    <strong>Preço</strong>
                </div>
                {
                    produto.model_product.map((item, index) => {
                        return (
                            <div key={index}>
                                <p>{item.descri}</p>
                                {
                                    item.price.includes(',') ? 
                                        <strong className="red">R$ {item.price}</strong> :
                                        <strong className="red">Consultar Preço</strong>
                                }
                               
                            </div>
                        )
                    })
                }
            </div>


        </S.DivContainer>
    )
}
