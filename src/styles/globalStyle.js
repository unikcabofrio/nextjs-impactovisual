import { createGlobalStyle, ThemeProvider } from "styled-components";

const Globalstyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: Poppins, sans-serif;
  }

  a {
    text-decoration: none;
    color:#FFFFFF;
  }

  .main{
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    height:100vh;
  }

  ._main{
    display: flex;
    height:100vh;
  }

  @media (max-width: 768px) {

    ._main{
      display: flex;
      flex-direction:column;
      height:100vh;
    }

  }
`;

const Theme = {
  colors: ["#FFFFFF", "#000000", "#017cb8", "#e9e6e6","#404040","#dd0303"],
};

export default function GlobalStyle({ children }) {
    return (
     <>
       <Globalstyle />
       <ThemeProvider theme={Theme}>
         {children}
       </ThemeProvider>
     </>
   );
 }