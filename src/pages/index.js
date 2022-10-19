import {useEffect,useState} from 'react'
import Head from 'next/head'
import jQuery from 'jquery'

// Import-Components
import Navbar from '../components/NavBar'
import Whatsapp from '../components/Whatsapp'

// Import-pages
import Header from '../components/pages/header'
import Material from '../components/pages/material'
import Contato from '../components/pages/contato'

export default function Index() {

  useEffect(() => {
    (function ($) {})(jQuery);

    
  },[jQuery])

  return (
  <>
    <Head>
      <title>Gráfica Impacto Visual</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="description" content="Otimize seu site institucional e alcance seus objetivos."/>  
    </Head>

    <Whatsapp/>
    <Navbar/>
    <div className='layout'>
      
      {/* <header id="Home"></header> */}
      <main>
        <Material id={'Material'} />
      </main>
      <footer id="Contato">
        <Contato/>
      </footer>
    </div>
  </>
  )
}
