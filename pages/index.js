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
      <img src={"/0.jpeg"} alt={"Impacto Visual"} width={'100%'}/>
      <img src={"/1.jpeg"} alt={"Impacto Visual"} width={'100%'}/>
      <img src={"/2.jpeg"} alt={"Impacto Visual"} width={'100%'}/>
      <img src={"/3.jpeg"} alt={"Impacto Visual"} width={'100%'}/>
      <img src={"/4.jpeg"} alt={"Impacto Visual"} width={'100%'}/>
      <img src={"/5.jpeg"} alt={"Impacto Visual"} width={'100%'}/>
    </div>
  )
}
