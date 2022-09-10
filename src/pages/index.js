import react, { useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import JsonInfo from '../json/export.json';

export default function Home() {

  const date = new Date();
  const Yer = date.getFullYear();
  var link = "https://api.whatsapp.com/send?phone=+55"

  useEffect(() => {

    // Object.keys(JsonInfo.Produtos).forEach(chave => {
    //   document.querySelector('#tbProdutos').innerHTML += `${chave}, valor: ${JsonInfo.Produtos[chave]} <br>`;
    // })

  },[])
  

  return (
    <>
      <Head>
        <title>Gráfica Impacto Visual</title>
        <meta name="description" content="Gráfica Rápida" />
        <link rel="icon" href="/favicon.ico" />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css'/>
      </Head>

      <div className={"ButtonZap"}>
        <i className="fi fi-brands-whatsapp"></i>
        {/* {JsonInfo.Lojas.map((props) => (
            <a href={link+props.Contato1}>{props.loca}</a>
        ))} */}
      </div>

      <header>
            <img src={"/banner.png"} />
          </header>
          <main className={styles.containermain}>
            <h1>TABELA DE PREÇO {Yer}</h1>
            {JsonInfo.Produtos.map((props) => (
              <div key={Math.random()} className={styles.containertables} >
                <div className={styles.containertables_titler}>
                  <div>
                    <h2>{props.nome}</h2>
                    <h4>{props.modelo}</h4>
                  </div>
                  <img src={props.img} alt={props.img}/>
                </div>
                <table className={styles.tables}>
                  <tbody>
                    {props.tipo.map((propsTable) => (
                      <tr key={Math.random()}>
                        <td>{propsTable.qtd}</td>
                        <td id="dados">{propsTable.dados}</td>
                        <td id="preço">R$ {propsTable.preço}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
             
             <div className={styles.info}>
              <p>* Valores promocionais em dinheiro, pix ou débito.</p>
              <p>* Crédito contem acréscimo, Consultar Taxa.</p>
             </div>
          </main>

          <footer>
            <div className={"footerTop"}>
              <h1>Locais para Retirada</h1>
              <p>Fique por dentro dos nossos pontos de atendimento em Cabo Frio.</p>
            </div>
            <div className={"footerMiddle"}>
              {JsonInfo.Lojas.map((props) => (
                  <div key={Math.random()}>
                      <h3>{props.loca}</h3>
                      <p><strong> Endereço </strong><br/>{props.Endereço}</p>
                      <p><strong> Atendimento </strong><br/>
                        <a  href={link+props.Contato1}> {props.Contato1}</a> / 
                        <a  href={link+props.Contato2}> {props.Contato2}</a><br/>
                        <a>{props.email}</a><br/><br/>
                        <a>{props.horario}</a>
                      </p>
                      <br/>
                      <div className={"footerMiddleIconSocial"}>
                        <a  href={link+props.Contato1}> <i className="fi fi-brands-whatsapp"></i></a>
                        <a  href={props.face}> <i className="fi fi-brands-facebook"></i></a>
                        <a  href={props.insta}> <i className="fi fi-brands-instagram"></i></a>
                      </div>
                      <iframe src={props.gmaps} />
                  </div>
              ))}
            </div>
            <div className={"footerBottom"}>
              <div className={"FooterText"}>
                <p>
                  {Yer} - &copy; 
                  Todos os direitos reservados a
                  <a  href="https://www.unikcabofrio.com.br"> Unik Cabo Frio</a>.
                </p>
              </div>
            </div>
          </footer>
      
    </>
  )
}
