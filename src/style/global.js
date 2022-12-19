import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding:0;
    margin:0;
    border: 0;
	  list-style: none;
    box-sizing: border-box;
    transition: .2s;
    scroll-behavior: smooth;
  }

  html {
    font-size:62,5%;
  }

  body, #__next{
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  a{
    text-decoration: none;
    color:#fff;
  }

  .showdivs {
    display: flex !important;
  }

  .active{
    background-color: #0178af;
    > a, > svg{
      color: #fff !important;
      fill:#fff  !important;
    }

    font-weight: 400;
  }
`

export default GlobalStyle
