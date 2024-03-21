import Header from "@/utils/Head";

import GlobalStyle from "@/styles/globalStyle";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </>
  );
}
