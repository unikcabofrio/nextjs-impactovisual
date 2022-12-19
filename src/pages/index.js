import Head from 'next/head'
import Script from 'next/script'
import { useEffect, useState } from 'react'

// Imports Sections
import { NavBarResponse, NavBar } from 'components/navBar'
import Preload from 'components/preload'
import { Whatsapp } from 'components/buttons'
import Home from 'components/section/home'
import Material from 'components/section/material'
import Unidade from 'components/section/unidade'
import Clientes from 'components/section/clientes'
import Contato from 'components/section/contato'

export default function Index() {
  const [executed, setExecuted] = useState(true)
  const [navBar, setNavBar] = useState(<NavBar id="navbar" />)
  useEffect(() => {
    if (executed) {
      if (window.screen.width < 600) {
        setNavBar(<NavBarResponse id="navbar" />)
      }

      window.scroll(0, 0)
      setExecuted(false)
    }
  }, [navBar, executed])
  return (
    <>
      <Head>
        <title>Gráfica - Impacto Visual</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Compre seus produtos -> Personalize -> Recebe em poucos dias! Confira o preço especial ACABA HOJE"
        />
      </Head>

      <Preload />
      <Whatsapp />

      {navBar}
      <main>
        <Home id="home" />
        <Material id="material" />
        <Unidade id="unidade" />
        <Clientes id="clientes" />
        <Contato id="contato" />
      </main>

      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></Script>
    </>
  )
}
