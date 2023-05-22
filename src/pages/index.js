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

  return { props: { products, settings } }
}

export default function Index({ products, settings }) {
  useEffect(() => {
    ;(function ($) {
      $('html, body').animate({ scrollTop: 0 }, 0)
    })(jQuery)
    setTimeout(() => {
      setPreload(false)
    }, 1000)
  }, [])

  const [filterProdutos, setFilterProdutos] = useState(products)
  const [preload, setPreload] = useState(true)

  return (
    <>
      {preload ? (
        <Preload />
      ) : (
        <div id={'__main'}>
          <TopBar
            id={`div_Top`}
            settings={settings}
            setFilterProdutos={setFilterProdutos}
            products={products}
          />
          <ListProduct id={`div_listProduct`} filterProdutos={filterProdutos} />
        </div>
      )}
    </>
  )
}
