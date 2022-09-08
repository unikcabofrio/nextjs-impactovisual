import react, { useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import JsonInfo from '../json/export.json';

export default function Home() {

  const date = new Date();
  const Yer = date.getFullYear();
  var link = "https://web.whatsapp.com/send?phone=+55"

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
      </Head>

      <div className={styles.container}>
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
            <div className={styles.containerFotter}>
              {JsonInfo.Lojas.map((props) => (
                <div key={Math.random()}>
                    <h2>{props.loca}</h2>
                    <p><strong> Endereço </strong><br/>{props.Endereço}</p>
                    <p><strong> Contato </strong><br/>
                      <a href={link+props.Contato1.trim().replace(' ','').replace('%','').replace('(','').replace(')','').replace('-','')}>{props.Contato1}</a> / 
                      <a href={link+props.Contato2.trim().replace(' ','').replace('%','').replace('(','').replace(')','').replace('-','')}> {props.Contato2}</a>
                    </p>
                    <br/>
                    <iframe className={styles.mapouter} src={props.gmaps}> </iframe>
                </div>
              ))}
            </div>
            <div className={styles.footerbottom}>
                <div>
                    <div>
                        <div className={styles.direitos}>
                            <p>&copy; {Yer} - Todos os direitos reservados a <a  href="https://www.unikcabofrio.com.br">Unik Cabo Frio</a> .</p>
                        </div>
                    </div>
                </div>
            </div>
          </footer>
      </div>
      
    </>
  )
}
