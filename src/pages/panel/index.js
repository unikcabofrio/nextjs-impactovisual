import { useEffect, useState } from 'react'
import jQuery from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Preload from '@/Components/Preload'
import Top from '@/Components/TopBar'
import ListProduct from '@/Components/Panel/ListProduct'
import CadProduct from '@/Components/Panel/CadProduct'

export async function getServerSideProps() {
  // eslint-disable-next-line no-undef
  const res = await fetch(`${process.env.URL_WEBSITE}/api/ConnectMySql`, {
    body: JSON.stringify({
      query: 'SELECT * FROM product'
    }),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })

  const data = await res.json()
  return { props: { data } }
}

export default function Index({ data }) {
  function checkCookie(cookieName) {
    return document.cookie.indexOf(cookieName) >= 0
  }

  function getCookie(name) {
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim()
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1)
      }
    }
    return null
  }

  async function checkLogin(value) {
    const res = await fetch(`/api/AuthLogin`, {
      body: JSON.stringify({
        valueKey: value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const data = await res.json()

    if (data.result) {
      setAuthLog(true)
    }
  }

  const [authLog, setAuthLog] = useState(false)
  const [listFiler, setListFiler] = useState(data)
  const [displayCadProduct, setDisplayCadProduct] = useState('none')
  const [editProduct, setEditProduct] = useState({
    id: 0,
    name_product: '',
    descript_product: '',
    image_product: '',
    model_produtct: []
  })

  useEffect(() => {
    if (checkCookie('authlogin')) {
      checkLogin(getCookie('authlogin'))
    }
    ;(function ($) {
      $('html, body').animate({ scrollTop: 0 }, 0)
    })(jQuery)
  }, [displayCadProduct, authLog, listFiler, editProduct])

  return (
    <>
      <Preload />
      {authLog ? (
        <>
          <CadProduct
            id={'CadProduct'}
            displayCadProduct={displayCadProduct}
            setDisplayCadProduct={setDisplayCadProduct}
            editProduct={editProduct}
            setEditProduct={setEditProduct}
          />
          <Top id={`div_Top`} />
          <ListProduct
            id={`div_ListProduct_panel`}
            listFiler={listFiler}
            setListFiler={setListFiler}
            data={data}
            setDisplayCadProduct={setDisplayCadProduct}
            setEditProduct={setEditProduct}
          />
          <footer>
            © {new Date().getFullYear()} - Todos os direitos reservados a -{' '}
            <p>Unik Cabo Frio</p>
          </footer>
        </>
      ) : (
        <div className="ScreenBlockPanel">
          <div>
            <FontAwesomeIcon icon={['fas', 'lock']} className={'icon'} />
            <h3>Opss!</h3>
            <p>
              Não consegui identificar sua autorização... Acesse a página de
              login e realize a autenticação
            </p>
            <button
              onClick={() => {
                window.location.href = '/login'
              }}
            >
              Click aqui para Logar
            </button>
          </div>
        </div>
      )}
    </>
  )
}
