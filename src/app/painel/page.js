'use client'
import { useEffect, useState } from "react";

import TopMenu from "@/view/TopMenu";

export default function Page() {
  const [filterProdutos, setFilterProdutos] = useState('')
  const [produtos, setProdutos] = useState()
  const [faq, setFaq] = useState()
  const [contact, setContact] = useState()

  const getData = async () => {
    // try {
    //   const [getProdutos, getFaq, getContact] = await Promise.all([
    //     GetPost('produtos'),
    //     GetPost('faq'),
    //     GetPost('contact')
    //   ]);

    //   console.log(getProdutos)
  
    //   getProdutos.result ? setProdutos(getProdutos.jsonData) : null;
    //   getFaq.result ? setFaq(getFaq.jsonData) : null;
    //   getContact.result ? setContact(getContact.jsonData) : null;
  
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    // }
  };

  useEffect(()=>{
    getData()
  },[])

  return (
    <>
      <TopMenu setFilterProdutos={setFilterProdutos} />
      Painel
    </>
  );
}
