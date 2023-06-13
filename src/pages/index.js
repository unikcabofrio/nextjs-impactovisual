import { useEffect, useState } from 'react'
import jQuery from 'jquery'
import products from '@/data/products.json'
import settings from '@/data/settings.json'

import Preload from '@/Components/Preload'
import TopBar from '@/Components/TopBar'
import ListProduct from '@/Components/ListProduct'

export default function Index() {
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
      <footer>
        © {new Date().getFullYear()} - Todos os direitos reservados a
        <a href="https:\\www.unikcabofrio.com.br"> Unik Cabo Frio</a>
      </footer>
    </>
  )
}
