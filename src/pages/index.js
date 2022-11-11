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
      <meta name="google-site-verification" content="mMvD1pRH3dGoVYBc2wiLx_Qh3eR0aO65zevL3wLpdKg" />
      <meta name="google-site-verification" content="kDR_NUiMe97tW8mOZxjZ7pN2nAqZ0h091wUxoBJaaIU" />
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="description" content="Otimize seu site institucional e alcance seus objetivos."/>  
    </Head>

    <Whatsapp/>
    <Navbar/>
    <div className='layout'>
      
      {/* <header id="Home"></header> */}
      <main>
        <Material id={'material'} />
      </main>
      <footer id="contato">
        <Contato/>
      </footer>
    </div>
  </>
  )
}
