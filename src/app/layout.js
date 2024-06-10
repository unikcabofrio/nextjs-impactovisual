import * as S from "@/styles/globalStyle"

export const metadata = {
  title: "Gráfica Impacto Visual",
  description: "Gráfica Impacto Visual. Material Gráfico de qualidade, Artes 100% Grátis e o Melhor Preço da Região. Clique para ver nossos horários. Loja de Cabo Frio.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const date = new Date().getFullYear()
  const dateLas = 2024
  return (
    <html lang="pt-BR">
      <body className={S.poppins.className}>
        {children}
        <footer>
          <p>Todos os direitos reservados © {date === dateLas ? date : `${dateLas} - ${date}`}</p>
          <a href="https://wa.me/5522992846675" target="_blank">  Unik Cabo Frio</a>
        </footer>
      </body>
    </html>
  );
}
