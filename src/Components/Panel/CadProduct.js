import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
export default function CadProduct({
  id,
  displayCadProduct,
  setDisplayCadProduct,
  editProduct,
  setEditProduct
}) {
  const [displayDelButton, setDisplayDelButton] = useState('none')
  const [timeoutId, setTimeoutId] = useState()

  function ClearTablePrices() {
    const divTablePrice = document.getElementsByClassName('tdAdd')

    while (divTablePrice.length > 0) {
      divTablePrice[0].remove()
    }
  }

  return (
    <div
      id={id}
      style={{
        display: displayCadProduct
      }}
    >
      <div className="box-cadproduct">
        <div className="title-top">Editar/Cadastrar</div>
        <div className="form">
          <p
            style={{
              display: 'inline'
            }}
          >
            {editProduct.id}
          </p>
          <label>
            Nome
            <input
              maxLength="40"
              id={'input_name'}
              placeholder="Nome do Produto"
              defaultValue={editProduct.name_product}
            />
          </label>
          <label>
            Descrição
            <input
              maxLength="250"
              id={'input_descript'}
              placeholder="Descrição do Produto"
              defaultValue={editProduct.descript_product}
            />
          </label>
          <label>
            Url da Imagem
            <input
              id={'input_urlimage'}
              placeholder="Endereço (URL) da imagem"
              defaultValue={editProduct.image_product}
            />
          </label>
          <label>
            <div className="table-top">
              <p>Tabela de Preço</p>
              <div>
                <button
                  onClick={() => {
                    const divTablePrice =
                      document.getElementsByClassName('table-prices')[0]

                    console.log(divTablePrice.children.length)
                    if (divTablePrice.children.length == 10) return

                    const divFather = document.createElement('div')
                    divFather.id = `key_${divTablePrice.children.length}`
                    divFather.className = `tdAdd`

                    const inputRadio = document.createElement('input')
                    inputRadio.type = 'radio'
                    inputRadio.id = `productid_${divTablePrice.children.length}`
                    inputRadio.name = 'check_tablePrice'
                    inputRadio.value = `productid_${divTablePrice.children.length}`
                    inputRadio.style.width = '5%'
                    inputRadio.style.marginRight = '.2rem'

                    const inputElement = document.body.appendChild(inputRadio)

                    inputElement.addEventListener('change', (e) => {
                      clearTimeout(timeoutId)
                      setTimeoutId()
                      setDisplayDelButton('inline')
                      setTimeoutId(
                        setTimeout(() => {
                          setDisplayDelButton('none')
                          e.target.checked = false
                        }, 5000)
                      )
                    })

                    const inputName = document.createElement('input')
                    inputName.type = 'text'
                    inputName.maxLength = '30'
                    inputName.id = `tablePriceDesc_${divTablePrice.children.length}`
                    inputName.style.overflow = 'hidden'
                    inputName.style.textOverflow = 'ellipsis'
                    inputName.style.textAlign = 'left'
                    inputName.style.width = '70%'

                    const inputValue = document.createElement('input')
                    inputValue.type = 'text'
                    inputValue.maxLength = '10'
                    inputValue.id = `tablePricePrice_${divTablePrice.children.length}`
                    inputValue.className = 'td_price'
                    inputValue.style.overflow = 'hidden'
                    inputValue.style.textOverflow = 'ellipsis'
                    inputValue.style.textAlign = 'left'
                    inputValue.style.width = '20%'

                    divFather.appendChild(inputRadio)
                    divFather.appendChild(inputName)
                    divFather.appendChild(inputValue)

                    divTablePrice.appendChild(divFather)
                  }}
                >
                  <FontAwesomeIcon icon={['fas', 'plus']} className={'icon'} />
                </button>
                <button
                  id={'del_tablePrice'}
                  style={{
                    display: displayDelButton,
                    marginLeft: '.5rem'
                  }}
                  onClick={() => {
                    const radioSelected = document.querySelector(
                      'input[name="check_tablePrice"]:checked'
                    )
                    const key = radioSelected.value.replace('productid_', '')

                    document.getElementById(`key_${key}`).remove()
                    clearTimeout(timeoutId)
                    setTimeoutId()
                    setDisplayDelButton('none')
                    radioSelected.checked = false
                  }}
                >
                  <FontAwesomeIcon icon={['fas', 'trash']} className={'icon'} />
                </button>
              </div>
            </div>

            <div className="table-prices">
              {editProduct.model_produtct.map((itens, key) => {
                return (
                  <div key={key} id={`key_${key}`}>
                    <input
                      type="radio"
                      id={`productid_${key}`}
                      name="check_tablePrice"
                      value={`productid_${key}`}
                      style={{
                        width: '5%',
                        marginRight: '.2rem'
                      }}
                      onChange={(e) => {
                        clearTimeout(timeoutId)
                        setTimeoutId()
                        setDisplayDelButton('inline')
                        setTimeoutId(
                          setTimeout(() => {
                            setDisplayDelButton('none')
                            e.target.checked = false
                          }, 5000)
                        )
                      }}
                    />
                    <input
                      style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        textAlign: 'left',
                        width: '70%'
                      }}
                      maxLength="30"
                      id={`tablePriceDesc_${key}`}
                      defaultValue={itens.descri}
                    />
                    <input
                      style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        textAlign: 'left',
                        width: '20%'
                      }}
                      maxLength="10"
                      className="td_price"
                      id={`tablePricePrice_${key}`}
                      defaultValue={itens.price}
                    />
                  </div>
                )
              })}
            </div>
          </label>
        </div>
        <div className="buttons">
          <button>Salvar Produtos</button>
          <button
            onClick={() => {
              setEditProduct({
                id: 0,
                name_product: '',
                descript_product: '',
                image_product: '',
                model_produtct: []
              })
              ClearTablePrices()
              setDisplayCadProduct('none')
            }}
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  )
}
