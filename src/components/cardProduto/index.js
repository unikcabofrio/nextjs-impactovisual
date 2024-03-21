/* eslint-disable @next/next/no-img-element */
import styled from "styled-components"

export default function CardProducts({ produto }) {
    return (
        <DivContainer>
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


        </DivContainer>
    )
}

const DivContainer = styled.div`
    padding:1rem;
    margin: .5rem 0;
    display:flex;
    flex-direction: column;
    border:1px solid ${({ theme }) => { return theme.colors[3] }};
    border-radius:.5rem;
    color:${({ theme }) => { return theme.colors[4] }};

    .top{
        display:flex;
        flex-direction:row;
        justify-content: space-between;
        align-items: center;

        div{
            display:flex;
            flex-direction:column;
            font-size: 1.2rem;
            padding-right:.5rem;

            h5{
                line-height: 1rem;
            }

            p{
                font-size: 0.8rem;
            }
        }

        img {
            width:30%;
        }
    }

    .price{
        display:flex;
        flex-direction:column;
        justify-content: space-between;
        font-size: 0.8rem;
        margin-top:1rem;

        div{
            width:100%;
            display:flex;
            justify-content: space-between;
            align-items: center;
            color:${({ theme }) => { return theme.colors[4] }};

            .red{
                color:${({ theme }) => { return theme.colors[5] }};
            }
        }
    }
`