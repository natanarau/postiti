import React from 'react';
import Image from 'next/image';
import portiti1 from '../../public/postiti1.png';
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Bloco1({ situacaoBloq1 }) {
  const router = useRouter();
  const [post1, setPost1] = React.useState();
  const [criarbloq1, setCriarbloq1] = React.useState(situacaoBloq1);
  React.useEffect(() => {
    const getBloqLocal1 = localStorage.getItem('bloq1');
    if (getBloqLocal1) setCriarbloq1(true);
  }, [situacaoBloq1]);

  React.useEffect(() => {
    const getPostLocal = localStorage.getItem('post1');
    if (getPostLocal) setPost1(getPostLocal);
  }, []);

  function gravar() {
    localStorage.setItem('post1', post1);
  }

  const fechar = () => {
    localStorage.removeItem('post1');
    localStorage.removeItem('bloq1');
    setPost1();
    setCriarbloq1(false);
    router.reload('');
  };

  return (
    <div className={styles.post1}>
      {criarbloq1 && (
        <textarea
          className={styles.textarea}
          rows="5"
          cols="25"
          id="post1"
          name="post1"
          value={post1}
          onChange={(e) => setPost1(e.target.value)}
          onBlur={(e) => gravar(e.target.value)}
        />
      )}
      {criarbloq1 && (
        <Image
          id="post1"
          alt="Post 1"
          src={portiti1}
          width={300}
          height={300}
        />
      )}
      {criarbloq1 && (
        <span onClick={fechar} className={styles.fechar}>
          X
        </span>
      )}
    </div>
  );
}
