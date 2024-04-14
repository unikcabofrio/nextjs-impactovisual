/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import * as S from './style'

import Table from '@/components/table.js'

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
        await fetch(`/api/cups`)
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
                <S.Title>Lista de Copos</S.Title>
                <S.DivTable>
                    <Table
                        title={["Tipo", "Quantidade", ""]}
                        values={table.map(item => ({ nome: item.name_cups, qtd: item.qtd_product }))}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </S.DivTable>
            </S.DivContainer>
        </>
    )
}


