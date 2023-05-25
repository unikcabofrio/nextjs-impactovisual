import Head from 'next/head'

import '@/styles/globalStyle.css'
import '@/styles/response.css'

// eslint-disable-next-line no-undef
const { library } = require('@fortawesome/fontawesome-svg-core')

import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab, fas, far)

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> Gráfica Impacto Visual</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
