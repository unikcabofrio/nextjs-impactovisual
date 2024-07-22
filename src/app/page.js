'use client'
import { useEffect, useState } from "react";
import { GetAllData,GetDataProdutos } from "@/utils/googleSheets";

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
      const resP = await GetDataProdutos()
      resP ? setProdutos(resP) : null;

      const res = await GetAllData()
      const getFaq = res.filter((item) => item.sheet == 'perguntas');
      const getContact = res.filter((item) => item.sheet == 'contato');
  
      getFaq[0] ? setFaq(getFaq[0].data) : null;
      getContact[0] ? setContact(getContact[0].data) : null;
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(()=>{
    getData()
  },[])

  return (
    <>
      <TopMenu setFilterProdutos={setFilterProdutos} />
      <Produtos filterProdutos={filterProdutos} produtos={produtos}/>
      <FAQ faq={faq}/>
      <Contato contact={contact}/>
    </>
  );
}
