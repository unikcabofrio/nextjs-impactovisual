'use client'
import { useEffect, useState } from "react";
import { getAPI } from "@/utils/googleSheets";

import TopMenu from "@/view/TopMenu";
import Produtos from "@/view/produtos";
import FAQ from "@/view/faq";
import Contato from "@/view/contato";

export default function Page() {
  const [filterProdutos, setFilterProdutos] = useState('')
  const [produtos, setProdutos] = useState()
  const [faq, setFaq] = useState()
  const [contact, setContact] = useState()

  const getData = async () => {
    try {

      let res = await getAPI("products")
      setProdutos(res.data)
      
      res = await getAPI("faq")
      setFaq(res.data)

      res = await getAPI("contact")
      setContact(res.data)

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <TopMenu setFilterProdutos={setFilterProdutos} />
      <Produtos filterProdutos={filterProdutos} produtos={produtos} />
      <FAQ faq={faq} />
      <Contato contact={contact} />
    </>
  );
}
