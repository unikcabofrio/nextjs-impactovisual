import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
// import jQuery from 'jquery'

export default function ListProduct({
  id,
  listFiler,
  setListFiler,
  data,
  setEditProduct,
  setDisplayCadProduct
}) {
  const [iconSearch, setIconSearch] = useState(['fas', 'magnifying-glass'])
  const [itemsPerPage, setItemsPerPage] = useState(0)
  const [countPage, setCountPage] = useState(1)

  useEffect(() => {}, [iconSearch, itemsPerPage, countPage])

  return (
    <div id={id}>
      <div className="box-top">
        <FontAwesomeIcon icon={['fas', 'boxes-stacked']} className={'icon'} />
        <h3>Lista de Produtos</h3>
      </div>
      <div className="box-search">
        <button
          className="buttonClick"
          onClick={() => {
            setEditProduct({
              id: 0,
              name_product: '',
              descript_product: '',
              image_product: '',
              model_produtct: []
            })
            setDisplayCadProduct('inline')
          }}
        >
          <FontAwesomeIcon icon={['fas', 'plus']} className={'icon'} />
          Adicionar Produto
        </button>
        <div className="box_search">
          <FontAwesomeIcon
            icon={iconSearch}
            className={'icon'}
            onClick={() => {
              if (iconSearch[1] == 'delete-left') {
                const inputSearch = document.getElementById('input_search')
                inputSearch.value = ''
                setIconSearch(['fas', 'magnifying-glass'])
                setListFiler(data)
              }
            }}
          />
          <input
            id={'input_search'}
            placeholder="Digite sua busca..."
            onChange={(e) => {
              if (e.target.value.length == 0) {
                setIconSearch(['fas', 'magnifying-glass'])
                setListFiler(data)
              } else {
                setIconSearch(['fas', 'delete-left'])
                const Filter = data.filter(function (data) {
                  return data.name_product
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase().trimEnd())
                })
                setListFiler(Filter)
              }
            }}
          />
        </div>
      </div>
      <div className="box-table" id={'table-container'}>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {listFiler
              .slice(itemsPerPage, itemsPerPage + 10)
              .map((item, index) => {
                return (
                  <tr key={index} className="lite">
                    <td>{item.name_product}</td>
                    <td className="table-button">
                      <FontAwesomeIcon
                        icon={['fas', 'pen-to-square']}
                        className={'icon edit'}
                        onClick={() => {
                          setEditProduct({
                            id: item.id,
                            name_product: item.name_product,
                            descript_product: item.descript_product,
                            image_product: item.image_product,
                            model_produtct: item.model_produtct
                          })
                          setDisplayCadProduct('inline')
                        }}
                      />
                      <FontAwesomeIcon
                        icon={['fas', 'xmark']}
                        className={'icon del'}
                        onClick={() => {
                          alert(`Deletando Produto ${item.id}`)
                        }}
                      />
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
        <div className="table_buttonnext">
          <FontAwesomeIcon
            icon={['fas', 'chevron-left']}
            onClick={() => {
              if (countPage == 1) return
              setCountPage(countPage - 1)
              setItemsPerPage(itemsPerPage - 10)
            }}
          />
          <p>
            Página {countPage} de {Math.ceil(listFiler.length / 10)}
          </p>
          <FontAwesomeIcon
            className="buttonClick"
            icon={['fas', 'chevron-right']}
            onClick={() => {
              if (countPage == Math.ceil(listFiler.length / 10)) return
              setCountPage(countPage + 1)
              setItemsPerPage(itemsPerPage + 10)
            }}
          />
        </div>
      </div>
    </div>
  )
}
