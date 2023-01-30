import Head from 'next/head'

// Imports Sections
import Calculadora from 'components/section/calculadora'

export default function Index() {
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
      <Calculadora />
    </>
  )
}
