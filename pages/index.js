import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gráfica Impacto Visual</title>
        <meta name="description" content="Gráfica Rápida" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src={"/logo.jpg"} alt={"Impacto Visual"}/>
    </div>
  )
}
