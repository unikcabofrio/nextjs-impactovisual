import { useState } from 'react'
import * as S from './style'

export default function Index({ sheet }) {
    const [listProduct] = useState([
        { name: "teste " },
        { name: "teste " },
        { name: "teste " },
        { name: "teste " },
        { name: "teste " },
        { name: "teste " },
        { name: "teste " },
        { name: "teste " }
    ])
    return (
        <S.DivContainer>
            <h3>Lista de Produtos</h3>
            <S.DivContent>
                <S.DivTable>
                    <table>
                        <thead>
                            <tr>
                                <td>Nome</td>
                                <td>Edição</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listProduct.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>
                                                <i className="fi fi-sr-edit"></i>
                                                <i className="fi fi-sr-trash"></i>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </S.DivTable>
                <S.DivEdit>
                    Tela para edição
                </S.DivEdit>
            </S.DivContent>
        </S.DivContainer>
    )
}


