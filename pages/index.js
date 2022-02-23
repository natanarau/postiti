import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Bloco1 from './components/Bloco1';
import Bloco2 from './components/Bloco2';
import Bloco3 from './components/Bloco3';
import Bloco4 from './components/Bloco4';

export default function Home() {
  const [criarbloq1, setCriarbloq1] = React.useState(false);
  const [criarbloq2, setCriarbloq2] = React.useState(false);
  const [criarbloq3, setCriarbloq3] = React.useState();
  const [criarbloq4, setCriarbloq4] = React.useState();

  const criarPost = () => {
    if (!criarbloq1) {
      localStorage.setItem('bloq1', true);
      setCriarbloq1(true);
    } else if (!criarbloq2) {
      localStorage.setItem('bloq2', true);
      setCriarbloq2(true);
    } else if (!criarbloq3) {
      localStorage.setItem('bloq3', true);
      setCriarbloq3(true);
    } else if (!criarbloq4) {
      localStorage.setItem('bloq4', true);
      setCriarbloq4(true);
    }
  };

  return (
    <>
      <Head>
        <title>Meus Post It</title>
        <meta name="description" content="Meus Post It" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <button className={styles.btn} onClick={criarPost}>
          Criar
        </button>
        <div className={styles.blocoPost}>
          <Bloco1 situacaoBloq1={criarbloq1} />
          <Bloco2 situacaoBloq2={criarbloq2} />
          <Bloco3 situacaoBloq3={criarbloq3} />
          <Bloco4 situacaoBloq4={criarbloq4} />
        </div>
      </div>
    </>
  );
}
