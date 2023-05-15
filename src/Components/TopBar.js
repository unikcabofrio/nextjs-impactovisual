import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import jQuery from 'jquery'

export default function TopBar({ id, settings, setFilterProdutos, products }) {
  const [displayHour, setDisplayHour] = useState('none')
  const [bgColorFixed, setBgColorFixed] = useState('Transparent')
  const [iconSearch, setIconSearch] = useState(['fas', 'magnifying-glass'])

  function ClearFilter() {
    var divSorry = document.getElementsByClassName('sorry')[0].style
    document.getElementById('searchProduct').value = ''
    setIconSearch(['fas', 'magnifying-glass'])
    divSorry.display = 'none'
    setFilterProdutos(products)
  }
  function Filter(e) {
    var divSorry = document.getElementsByClassName('sorry')[0].style
    setIconSearch(['fas', 'delete-left'])
    const Filter = products.filter(function (products) {
      return products.name_product
        .toLowerCase()
        .includes(e.target.value.toLowerCase().trimEnd())
    })
    setFilterProdutos(Filter)
    if (Filter.length == 0) {
      divSorry.display = 'flex'
    } else {
      divSorry.display = 'none'
    }
  }

  useEffect(() => {
    ;(function ($) {
      $('#__main').scroll(function () {
        if ($(this).scrollTop() === 0) {
          setBgColorFixed('Transparent')
        } else {
          setBgColorFixed('#007db9')
        }
      })
    })(jQuery)
  }, [bgColorFixed])

  return (
    <div
      id={id}
      style={{
        width: '100vw'
      }}
    >
      <div
        style={{
          width: '100vw',
          display: 'flex',
          justifyContent: 'space-between',
          position: 'fixed',
          padding: '1rem',
          zIndex: '1',
          fontSize: '2rem',
          cursor: 'pointer',
          transition: 'all .2s',
          backgroundColor: bgColorFixed
        }}
      >
        <FontAwesomeIcon
          icon={['fas', 'bars']}
          className={'icon'}
          style={{
            fontSize: '2rem',
            cursor: 'pointer'
          }}
          onClick={() => {
            location.href = '/painel'
          }}
        />
        <FontAwesomeIcon
          icon={['fas', 'magnifying-glass']}
          className={'icon'}
          style={{
            fontSize: '2rem',
            cursor: 'pointer'
          }}
          onClick={() => {
            ;(function ($) {
              $('#__main').animate(
                {
                  scrollTop:
                    document.getElementById('searchProduct').offsetParent
                      .offsetTop - 80
                },
                0
              )
            })(jQuery)
          }}
        />
      </div>

      <div
        style={{
          width: '100%',
          backgroundColor: '#007db9',
          padding: '2rem',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      ></div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <div
          style={{
            width: '100%',
            position: 'absolute',
            top: '.6rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img
            src={settings[0]['logo']}
            alt="Imagem"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              margin: 'auto',
              width: '100px',
              height: '100px',
              backgroundColor: '#fff',
              objectFit: 'contain',
              borderRadius: '100%',
              padding: '0.1rem',
              border: '1px solid rgba(45,45,45,.2)'
            }}
          />
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            marginTop: '2rem',
            padding: '1rem'
          }}
        >
          <h4>{settings[0]['name']}</h4>
          <p
            style={{
              fontSize: '.8rem'
            }}
          >
            {settings[0]['descript']}
          </p>
          <button
            style={{
              marginTop: '1rem'
            }}
            onClick={() => {
              if (displayHour == 'none') setDisplayHour('flex')
              else setDisplayHour('none')
            }}
          >
            <FontAwesomeIcon
              icon={['fas', 'clock']}
              className={'icon'}
              style={{
                marginRight: '.5rem'
              }}
            />
            Clique para ver nossos horários
          </button>
          {/* Horario da empresa */}
          <div
            style={{
              width: '100%',
              display: displayHour,
              flexDirection: 'column',
              alignItems: ' flex-start'
            }}
          >
            {settings[0]['operation'].map((itens, index) => {
              return (
                <div
                  key={index}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    paddingTop: '.5rem'
                  }}
                >
                  <strong
                    style={{
                      fontSize: '.7rem'
                    }}
                  >
                    Loja de {itens['name']}
                  </strong>
                  {itens['timer'].map((itens_, index_) => {
                    return (
                      <div
                        key={index_}
                        style={{
                          width: '100%',
                          display: 'flex',
                          flexDirection: 'row',
                          fontSize: '.7rem',
                          justifyContent: 'space-between'
                        }}
                      >
                        <p>{itens_['descriptTimer']}</p>
                        <p>{itens_['TimerHour']}</p>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
          <strong
            style={{
              margin: '1rem 0',
              color: '#d1d1d1',
              fontSize: '.8rem'
            }}
          >
            Entre em contato
          </strong>
          {/* Rede Social da empresa */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              textAlign: 'center',
              paddingBottom: '.5rem',
              borderBottom: '1px solid #d1d1d1'
            }}
          >
            {settings[0]['social'].map((itens, index) => {
              return (
                <div
                  key={index}
                  className="socialTable"
                  style={{
                    width: ' 100%',
                    display: 'flex',
                    flexDirection: 'column',
                    fontSize: '1rem'
                  }}
                >
                  <h5>{itens['name']}</h5>
                  <div
                    style={{
                      width: ' 100%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      alignItems: 'center',
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                      marginTop: '.5rem'
                    }}
                  >
                    {itens['socialLink'].map((itens_, index_) => {
                      return (
                        <div key={index_}>
                          <FontAwesomeIcon
                            icon={['fab', itens_['type']]}
                            className={`icon ${itens_['type']}`}
                            style={{
                              marginRight: '.5rem'
                            }}
                            onClick={() => {
                              window.open(itens_['link'], '_blank')
                            }}
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          position: 'relative',
          display: 'inline-block',
          padding: '0 1rem'
        }}
      >
        <FontAwesomeIcon
          icon={iconSearch}
          className={'icon search'}
          style={{
            position: 'absolute',
            right: '1.5rem',
            top: '50%',
            transform: ' translate(-50%,-50%)',
            cursor: 'pointer'
          }}
          onClick={() => {
            if (iconSearch[1] == 'delete-left') ClearFilter()
          }}
        />
        <input
          id="searchProduct"
          placeholder="Digite sua busca..."
          onChange={(e) => {
            if (e.target.value.length > 0) Filter(e)
            else ClearFilter()
          }}
          onClick={() => {
            ;(function ($) {
              $('#__main').animate(
                {
                  scrollTop:
                    document.getElementById('searchProduct').offsetParent
                      .offsetTop - 80
                },
                0
              )
            })(jQuery)
          }}
        />
      </div>
    </div>
  )
}
