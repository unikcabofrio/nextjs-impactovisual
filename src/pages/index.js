import { useEffect, useState } from 'react'
import jQuery from 'jquery'

import Preload from '@/Components/Preload'
import TopBar from '@/Components/TopBar'
import ListProduct from '@/Components/ListProduct'

export default function Index({ posts }) {
  useEffect(() => {
    ;(function ($) {
      $('html, body').animate({ scrollTop: 0 }, 0)
    })(jQuery)
    setTimeout(() => {
      setPreload(false)
    }, 1000)
  }, [])

  const [filterProdutos, setFilterProdutos] = useState(posts)
  const [preload, setPreload] = useState(true)

  return (
    <>
      {preload ? (
        <Preload />
      ) : (
        <div id={'__main'}>
          <TopBar
            id={`div_Top`}
            setFilterProdutos={setFilterProdutos}
            products={posts}
          />
          <ListProduct id={`div_listProduct`} filterProdutos={filterProdutos} />
        </div>
      )}
      <footer>
        © {new Date().getFullYear()} - Todos os direitos reservados a
        <a href="/"> Gráfica Impacto Visual</a>
      </footer>
    </>
  )
}

export async function getServerSideProps() {
  const posts = []
  // eslint-disable-next-line no-undef
  const url = `https://docs.google.com/spreadsheets/d/${process.env.SHEET_ID}/gviz/tq?tqx=out:json`
  await fetch(url)
    .then((res) => res.text())
    .then((text) => {
      const data = JSON.parse(text.substr(47).slice(0, -2)).table.rows

      for (let index = 0; index < data.length; index++) {
        const element = data[index].c

        const json_element = {
          name_product: element[0].v,
          descript_product: element[1].v,
          image_product: element[2].v,
          model_product: []
        }

        if (element[3] != null) {
          json_element.model_product.push({
            descri: element[3].v,
            price: element[4].v
          })
        }
        if (element[5] != null) {
          json_element.model_product.push({
            descri: element[5].v,
            price: element[6].v
          })
        }
        if (element[7] != null) {
          json_element.model_product.push({
            descri: element[7].v,
            price: element[8].v
          })
        }
        if (element[9] != null) {
          json_element.model_product.push({
            descri: element[9].v,
            price: element[10].v
          })
        }
        if (element[11] != null) {
          json_element.model_product.push({
            descri: element[11].v,
            price: element[12].v
          })
        }
        if (element[13] != null) {
          json_element.model_product.push({
            descri: element[13].v,
            price: element[14].v
          })
        }
        if (element[15] != null) {
          json_element.model_product.push({
            descri: element[15].v,
            price: element[16].v
          })
        }
        if (element[17] != null) {
          json_element.model_product.push({
            descri: element[17].v,
            price: element[18].v
          })
        }
        if (element[19] != null) {
          json_element.model_product.push({
            descri: element[19].v,
            price: element[20].v
          })
        }
        if (element[21] != null) {
          json_element.model_product.push({
            descri: element[21].v,
            price: element[22].v
          })
        }
        if (element[23] != null) {
          json_element.model_product.push({
            descri: element[23].v,
            price: element[24].v
          })
        }
        if (element[25] != null) {
          json_element.model_product.push({
            descri: element[25].v,
            price: element[26].v
          })
        }
        if (element[27] != null) {
          json_element.model_product.push({
            descri: element[27].v,
            price: element[28].v
          })
        }
        if (element[29] != null) {
          json_element.model_product.push({
            descri: element[29].v,
            price: element[30].v
          })
        }

        posts.push(json_element)
      }
    })
  return {
    props: { posts }
  }
}
