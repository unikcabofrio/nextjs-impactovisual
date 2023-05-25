import { useEffect, useState } from 'react'
import jQuery from 'jquery'

import Preload from '@/Components/Preload'
import TopBar from '@/Components/TopBar'
import ListProduct from '@/Components/ListProduct'

export async function getServerSideProps() {
  // eslint-disable-next-line no-undef
  const req1 = await fetch(`${process.env.URL_WEBSITE}/api/select`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ table: 'product' })
  })
  const products = await req1.json()

  // eslint-disable-next-line no-undef
  const req2 = await fetch(`${process.env.URL_WEBSITE}/api/select`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ table: 'config' })
  })
  const settings = await req2.json()

  if (settings['code'] || products['code']) {
    return { props: { erro: true } }
  } else return { props: { products, settings, erro: false } }
}

export default function Index(props) {
  useEffect(() => {
    ;(function ($) {
      $('html, body').animate({ scrollTop: 0 }, 0)
    })(jQuery)
    setTimeout(() => {
      setPreload(false)
    }, 1000)
  }, [])

  const [filterProdutos, setFilterProdutos] = useState(props.products)
  const [preload, setPreload] = useState(true)
  const [erro] = useState(props.erro)

  return (
    <>
      {preload ? (
        <Preload />
      ) : erro ? (
        <div
          style={{
            width: '100vw',
            padding: '2vw',
            textAlign: 'center',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <h2>504</h2>
          <p>
            Sem problemas! Entendo que você está enfrentando um problema de
            conexão e estamos tentando corrigir isso. Se o problema persistir,
            entre em contato com o suporte.
          </p>
          <br />
          <a
            href="https:\\www.unikcabofrio.com.br"
            style={{
              color: 'red'
            }}
          >
            Suporte Unik Cabo Frio
          </a>
        </div>
      ) : (
        <div id={'__main'}>
          <TopBar
            id={`div_Top`}
            settings={props.settings}
            setFilterProdutos={setFilterProdutos}
            products={props.products}
          />
          <ListProduct id={`div_listProduct`} filterProdutos={filterProdutos} />
        </div>
      )}
      <footer>
        © {new Date().getFullYear()} - Todos os direitos reservados a
        <a href="https:\\www.unikcabofrio.com.br"> Unik Cabo Frio</a>
      </footer>
    </>
  )
}
