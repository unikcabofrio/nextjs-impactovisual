import Document, { Html, Head, Main, NextScript } from 'next/document'

class __Document extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <footer>
            © {new Date().getFullYear()} - Todos os direitos reservados a
            <a href="https:\\www.unikcabofrio.com.br"> Unik Cabo Frio</a>
          </footer>
        </body>
      </Html>
    )
  }
}

export default __Document
