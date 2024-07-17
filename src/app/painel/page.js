'use client'
import './style.css'
import {useState } from "react";
import TopMenu from "@/viewPianel/TopMenu";
import PainelAtivo from '@/viewPianel/painelAtivo';

export default function Page() {
  const [menuAtivo, setMenuAtivo] = useState('Produtos')
  // const [produtos, setProdutos] = useState()
  // const [faq, setFaq] = useState()
  // const [contact, setContact] = useState()

  // const getData = async () => {
  //   // try {
  //   //   const [getProdutos, getFaq, getContact] = await Promise.all([
  //   //     GetPost('produtos'),
  //   //     GetPost('faq'),
  //   //     GetPost('contact')
  //   //   ]);

  //   //   console.log(getProdutos)
  
  //   //   getProdutos.result ? setProdutos(getProdutos.jsonData) : null;
  //   //   getFaq.result ? setFaq(getFaq.jsonData) : null;
  //   //   getContact.result ? setContact(getContact.jsonData) : null;
  
  //   // } catch (error) {
  //   //   console.error('Error fetching data:', error);
  //   // }
  // };

  // useEffect(()=>{
  //   getData()
  // },[])

  return (
    <div className="dashboard">
      <TopMenu setMenuAtivo={setMenuAtivo} />
      <PainelAtivo namePanel={menuAtivo}/>
    </div>
  );
}
