/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import * as S from './style'

import Table from '@/components/table'

export default function Index({ setIsPreload }) {

    const [table, setTable] = useState([])

    const handleEdit = (index) => {
        // Implemente a lógica para editar o item com o índice fornecido
        console.log('Editar item', index);
    };

    const handleDelete = (index) => {
        // Implemente a lógica para deletar o item com o índice fornecido
        console.log('Deletar item', index);
    };

    async function getListProducts() {
        setIsPreload(true)
        await fetch(`/api/products`)
        .then(async (result) => {
            const res = await result.json()
            setTable(res.data)
            setIsPreload(false)
        })

    }

    useEffect(() => {
        getListProducts()
    }, [])

    return (
        <>
            <S.DivContainer>
                <S.Title>Lista de Produtos</S.Title>
                <S.DivTable>
                    <Table
                        title={["Nome", "Descrição"]}
                        values={table.map(item => ({ nome: item.name_product, descricao: item.descript_product }))}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </S.DivTable>
            </S.DivContainer>
        </>
    )
}


