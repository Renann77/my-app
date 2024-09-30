import Head from 'next/head';
import styles from './Styles/Home.module.css'
import Card from './components/Card';
import './page.module.css'
import Footer from './components/Rodape';
import Image from 'next/image';
import Pedidos from './components/Pedidos';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projeto Lava-Rápido</title>
        <meta name="description" content="Site de lava-rápido com Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
      <header className={styles.header}>
        <h1>Lava-Rápido Express</h1>
      </header>

      <div className='id-prop'>
      <section className={styles.propaganda}>
        <div className={styles.propagandaContent}>
          <h2>Promoção Especial: Lave 3 Pague 2!</h2>
          <p>Deixe seu carro brilhando com nossos serviços profissionais.</p>
          <img src="" alt="Carro lavando" className={styles.propagandaImage} />
        </div>
      </section>
      </div>
      
      <section className={styles.cards}>
        <Card name="João" image="" feedback="Meu carro nunca esteve tão limpo!" />
        <Card name="Ana" image="" feedback="Serviço rápido e eficiente!" />
        <Card name="Pedro" image="" feedback="Estou impressionado com a qualidade!" />
      </section>

     <Pedidos/>


      <Footer/>
    </div>
  );
}
