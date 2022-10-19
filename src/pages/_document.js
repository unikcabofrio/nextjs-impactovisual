import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href={"/assets/favicon.ico"} />
      </Head>
      <body>
        <noscript>Seu navegador não suporta javascript!</noscript>
        <Main/>
        <NextScript />
      </body>
    </Html>
  )
}