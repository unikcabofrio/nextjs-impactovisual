import { useEffect, useState } from 'react'
import jQuery from 'jquery'

import Preload from '@/Components/Preload'

export async function getServerSideProps() {
  // eslint-disable-next-line no-undef
  const url = process.env.URL_WEBSITE
  return { props: { url } }
}

export default function Index({ url }) {
  useEffect(() => {
    select('settings')
      .then((result) => {
        console.log(result)
      })
      .catch((erro) => {
        console.error(erro)
      })
    ;(function ($) {
      $('html, body').animate({ scrollTop: 0 }, 0)
    })(jQuery)
    setTimeout(() => {
      setPreload(false)
    }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const select = async (table) => {
    const req = await fetch(`${url}/api/select`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ table })
    })
    return await req.json()
  }

  // const [filterProdutos, setFilterProdutos] = useState()
  const [preload, setPreload] = useState(true)

  return <>{preload ? <Preload /> : <div id={'__main'}></div>}</>
}
