import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link href="https://cdn.zyrosite.com/u1/google-fonts/font-faces?family=Poppins:wght@300;400;700&amp;display=swap" rel="preload" as="style" data-el-id="google-fonts-preload" />
        <link href="https://cdn.zyrosite.com/u1/google-fonts/font-faces?family=Poppins:wght@300;400;700&amp;display=swap" rel="stylesheet" referrerPolicy="no-referrer" data-el-id="google-fonts-stylesheet" />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.0.0/uicons-brands/css/uicons-brands.css' />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.1.0/uicons-solid-rounded/css/uicons-solid-rounded.css' />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.1.0/uicons-regular-rounded/css/uicons-regular-rounded.css' />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.1.0/uicons-solid-rounded/css/uicons-solid-rounded.css' />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.1.0/uicons-bold-rounded/css/uicons-bold-rounded.css' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}