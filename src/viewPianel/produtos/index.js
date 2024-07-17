import { useState } from "react";
import Table from "@/components/table"

export default function TableProdutos({ nametable }) {

    const headers = ['Foto', 'Produto', 'Descrição'];
    const columnWidths = ['10%', '30%', '50%']
    const initialData = [
        { id: 1, Foto: '[IMG]', Produto: 25, Descrição: 'Engenheira' },
        { id: 2, Foto: '[IMG]', Produto: 30, Descrição: 'Designer' },
        { id: 3, Foto: '[IMG]', Produto: 35, Descrição: 'Desenvolvedor' },
        { id: 4, Foto: '[IMG]', Produto: 28, Descrição: 'Arquiteto' },
        { id: 5, Foto: '[IMG]', Produto: 22, Descrição: 'Médica' },
        { id: 6, Foto: '[IMG]', Produto: 27, Descrição: 'Advogado' },
        { id: 7, Foto: '[IMG]', Produto: 29, Descrição: 'Professora' },
        { id: 8, Foto: '[IMG]', Produto: 32, Descrição: 'Empresário' },
        { id: 9, Foto: '[IMG]', Produto: 24, Descrição: 'Artista' },
        { id: 10, Foto: '[IMG]', Produto: 33, Descrição: 'Piloto' },
        { id: 11, Foto: '[IMG]', Produto: 31, Descrição: 'Dentista' },
        { id: 12, Foto: '[IMG]', Produto: 31, Descrição: 'Dentista' }
    ];

    const [data, setData] = useState(initialData);
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(data.length / 10);

    const handleEdit = (id) => {
        const newName = prompt('Digite o novo Foto:');
        if (newName) {
            setData(data.map(item => item.id === id ? { ...item, Foto: newName } : item));
        }
    };

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
        if (currentPage >= totalPages - 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <>
            <Table
                headers={headers}
                columnWidths={columnWidths}
                data={data}
                onEdit={handleEdit}
                onDelete={handleDelete}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </>
    )
}