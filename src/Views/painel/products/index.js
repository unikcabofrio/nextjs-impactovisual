import { useState } from 'react'
import * as S from './style'

export default function Index({ sheet }) {
    const [items] = useState([
        {
            "index": 1,
            "nome": "Item",
            "descricao": "Descrição do Item"
        },
        {
            "index": 2,
            "nome": "Item",
            "descricao": "Descrição do Item"
        },
        {
            "index": 3,
            "nome": "Item",
            "descricao": "Descrição do Item"
        },
        {
            "index": 4,
            "nome": "Item",
            "descricao": "Descrição do Item"
        },
        {
            "index": 5,
            "nome": "Item",
            "descricao": "Descrição do Item"
        },
        {
            "index": 6,
            "nome": "Item",
            "descricao": "Descrição do Item"
        },
        {
            "index": 7,
            "nome": "Item",
            "descricao": "Descrição do Item"
        },
        {
            "index": 8,
            "nome": "Item",
            "descricao": "Descrição do Item"
        },
        {
            "index": 9,
            "nome": "Item",
            "descricao": "Descrição do Item"
        },
        {
            "index": 10,
            "nome": "Item",
            "descricao": "Descrição do Item"
        },
        {
            "index": 11,
            "nome": "Item",
            "descricao": "Descrição do Item"
        }
    ])

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const handleEdit = (index) => {
        // Implemente a lógica para editar o item com o índice fornecido
        console.log('Editar item', index);
    };

    const handleMove = (index, direction) => {
        // Implemente a lógica para alterar a posição do item com o índice fornecido
        console.log('Mover item', index, direction);
    };

    const handleDelete = (index) => {
        // Implemente a lógica para deletar o item com o índice fornecido
        console.log('Deletar item', index);
    };

    return (
        <S.DivContainer>
            <h3>Lista de Produtos</h3>
            <S.DivContent>
                <S.DivTable>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.index}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.descricao}</td>
                                    <td>
                                        <button onClick={() => handleEdit(indexOfFirstItem + index)}><i className="fi fi-br-edit"></i></button>
                                        <button onClick={() => handleMove(indexOfFirstItem + index, 'up')}><i className="fi fi-sr-arrow-alt-square-up"></i></button>
                                        <button onClick={() => handleMove(indexOfFirstItem + index, 'down')}><i className="fi fi-sr-arrow-alt-square-down"></i></button>
                                        <button onClick={() => handleDelete(indexOfFirstItem + index)}><i className="fi fi-sr-trash"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div>
                        <button onClick={prevPage} disabled={currentPage === 1}>
                            Anterior
                        </button>
                        <span>Página {currentPage} de {totalPages}</span>
                        <button onClick={nextPage} disabled={currentPage === totalPages}>
                            Próxima
                        </button>
                    </div>
                </S.DivTable>
            </S.DivContent>
        </S.DivContainer >
    )
}


