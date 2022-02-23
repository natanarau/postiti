import React from 'react';
import Image from 'next/image';
import portiti2 from '../../public/postiti2.png';
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Bloco2(props) {
  const router = useRouter();
  const [post2, setPost2] = React.useState();
  const [criarbloq2, setCriarbloq2] = React.useState();

  React.useEffect(() => {
    const getBloqLocal2 = localStorage.getItem('bloq2');
    if (getBloqLocal2) setCriarbloq2(true);
  }, [props.situacaoBloq2]);

  React.useEffect(() => {
    const getPostLocal2 = localStorage.getItem('post2');
    if (getPostLocal2) setPost2(getPostLocal2);
  }, []);

  function gravar() {
    localStorage.setItem('post2', post2);
  }
  const fechar = () => {
    localStorage.removeItem('post2');
    localStorage.removeItem('bloq2');
    setPost2();
    setCriarbloq2(false);
    router.reload('');
  };
  return (
    <div className={styles.post2}>
      {criarbloq2 && (
        <textarea
          className={styles.textarea}
          rows="5"
          cols="25"
          id="post2"
          name="post2"
          value={post2}
          onChange={(e) => setPost2(e.target.value)}
          onBlur={(e) => gravar(e.target.value)}
        />
      )}
      {criarbloq2 && (
        <Image
          id="post2"
          alt="Post 2"
          src={portiti2}
          width={300}
          height={300}
        />
      )}
      {criarbloq2 && (
        <span onClick={fechar} className={styles.fechar}>
          X
        </span>
      )}
    </div>
  );
}
