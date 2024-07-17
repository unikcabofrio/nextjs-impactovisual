import './style.css'
import IconeSVG from '../icon';

export default function Table({ headers,columnWidths, data, onEdit, onDelete, currentPage, totalPages, onPageChange }) {
    const startIndex = currentPage * 10;
    const currentData = data.slice(startIndex, startIndex + 10);

    return (
        <div className={'table-container'}>
            <table className={'table'}>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} style={{ width: columnWidths[index] }}>{header}</th>
                        ))}
                        <th style={{ width: '10%' }}>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((row) => (
                        <tr key={row.id}>
                            {headers.map((header, colIndex) => (
                                <td key={colIndex}>{row[header]}</td>
                            ))}
                            <td>
                                <button className={'edit'} onClick={() => onEdit(row.id)}>
                                    <IconeSVG icone={'edit'}/>
                                </button>
                                <button className={'delete'} onClick={() => onDelete(row.id)}>
                                    <IconeSVG icone={'delete'}/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={'pagination'}>
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 0}
                >
                    Anterior
                </button>
                <span>Página {currentPage + 1} de {totalPages}</span>
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages - 1}
                >
                    Próximo
                </button>
            </div>
        </div>
    )
}