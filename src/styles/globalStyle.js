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