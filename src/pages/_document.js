import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href={"/assets/favicon.ico"} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </Head>
      <body>
        <noscript>Seu navegador não suporta javascript!</noscript>
        <Main/>
        <NextScript />
      </body>
    </Html>
  )
}