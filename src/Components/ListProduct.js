export default function ListProduct({ id, filterProdutos }) {
  console.log(filterProdutos)
  return (
    <div
      id={id}
      style={{
        width: '100vw',
        padding: '1rem'
      }}
    >
      <div
        className="sorry"
        style={{
          display: 'none',
          textAlign: 'center',
          height: '100vh'
        }}
      >
        <p
          style={{
            width: '100%',
            textAlign: 'center',
            fontSize: '.8rem',
            marginTop: '.5rem',
            color: '#8d8d8d'
          }}
        >
          <strong
            style={{
              fontSize: '1rem',
              color: '#605f5f'
            }}
          >
            Desculpe!{' '}
          </strong>
          <br />
          Mas não encontramos produtos com essas informações entre em contato
          com um de nossos vendedores
        </p>
      </div>
      <div
        className="box_product"
        style={{
          width: '100%',
          margin: '.5rem 0',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(350px,2fr))',
          gridGap: '8px',
          gap: '8px'
        }}
      >
        {filterProdutos
          .sort(function (x, y) {
            return x.position_product - y.position_product
          })
          .map((item, index) => {
            return (
              <div
                key={index}
                id={`product_id${item.id}`}
                style={{
                  width: '100%',
                  margintop: '1rem',
                  padding: '1rem .5rem',
                  borderRadius: '.5rem',
                  border: '1px solid #d6d5d5',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Descrição do Produto */}
                <div
                  style={{
                    width: '100%',
                    margintop: '1rem',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      fontSize: '.8rem'
                    }}
                  >
                    <h5
                      style={{
                        marginBottom: '.3rem',
                        fontSize: '1.1rem'
                      }}
                    >
                      {item.name_product.toUpperCase().trimEnd()}
                    </h5>
                    <p>{item.descript_product}</p>
                  </div>
                  <div
                    style={{
                      width: '50%'
                    }}
                  >
                    <img
                      src={item.image_product}
                      alt={`Foto do Produto`}
                      width={'100%'}
                    />
                  </div>
                </div>
                {/* Preço do Produto */}
                <div
                  style={{
                    width: '100%',
                    margintop: '1rem'
                  }}
                >
                  <table
                    style={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <thead>
                      <tr
                        style={{
                          width: '100%',
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          fontSize: '.8rem'
                        }}
                      >
                        <th
                          style={{
                            fontWeight: '600'
                          }}
                        >
                          Descrição
                        </th>
                        <th
                          style={{
                            fontWeight: '600'
                          }}
                        >
                          Preço
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.model_produtct.map((itens, key) => {
                        return (
                          <tr
                            key={key}
                            style={{
                              width: '100%',
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              fontSize: '.9rem'
                            }}
                          >
                            <td>{itens.descri}</td>
                            <td
                              style={{
                                color: 'red'
                              }}
                            >
                              R$ {itens.price}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
