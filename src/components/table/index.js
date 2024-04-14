import { useState } from 'react'
import * as S from './style'

export default function Index(props) {

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10
    const totalPages = Math.ceil(props.values.length / itemsPerPage)
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = props.values.slice(indexOfFirstItem, indexOfLastItem)

    return (
        <>
            <S.Table>
                <S.Thead>
                    <S.Tr>
                        <S.Th>Id</S.Th>
                        {props.title.map((item, index) => (<S.Th key={index}>{item}</S.Th>))}
                    </S.Tr>
                </S.Thead>
                <S.Tbody>
                    {currentItems.map((item, index) => (
                        <S.Tr key={index}>
                            <S.Td>{indexOfFirstItem + index + 1}</S.Td>
                            {Object.values(item).map((value, i) => (
                                <S.Td key={i}>{value}</S.Td>
                            ))}
                            {/* <S.Td>
                                {
                                    props.handleEdit ?
                                        <S.ButtonIcon onClick={() => props.handleEdit(indexOfFirstItem + index)}><i className="fi fi-br-edit"></i></S.ButtonIcon> :
                                        <></>
                                }
                                {
                                    props.handleDelete ?
                                        <S.ButtonIcon onClick={() => props.handleDelete(indexOfFirstItem + index)}><i className="fi fi-sr-trash"></i></S.ButtonIcon> :
                                        <></>
                                }
                            </S.Td> */}
                        </S.Tr>
                    ))}
                </S.Tbody>
            </S.Table>
            <S.DivCotrolPage>
                <S.ButtonPage onClick={() => { setCurrentPage((prevPage) => prevPage - 1) }} disabled={currentPage === 1}>
                    <i className='fi fi-rr-caret-left' />
                </S.ButtonPage>
                <span>Página {currentPage} de {totalPages}</span>
                <S.ButtonPage onClick={() => { setCurrentPage((prevPage) => prevPage + 1) }} disabled={currentPage === totalPages}>
                    <i className='fi fi-rr-caret-right' />
                </S.ButtonPage>
            </S.DivCotrolPage>
        </>

    )
}


