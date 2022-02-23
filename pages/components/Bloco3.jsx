import React from 'react';
import Image from 'next/image';
import portiti3 from '../../public/postiti3.png';
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Bloco3(props) {
  const router = useRouter();
  const [post3, setPost3] = React.useState();
  const [criarbloq3, setCriarbloq3] = React.useState();

  React.useEffect(() => {
    const getBloqLocal3 = localStorage.getItem('bloq3');
    if (getBloqLocal3) setCriarbloq3(true);
  }, [props.situacaoBloq3]);

  React.useEffect(() => {
    const getPostLocal3 = localStorage.getItem('post3');
    if (getPostLocal3) setPost3(getPostLocal3);
  }, []);

  function gravar() {
    localStorage.setItem('post3', post3);
  }
  const fechar = () => {
    localStorage.removeItem('post3');
    localStorage.removeItem('bloq3');
    setPost3();
    setCriarbloq3(false);
    router.reload('');
  };
  return (
    <div className={styles.post3}>
      {criarbloq3 && (
        <textarea
          className={styles.textarea}
          rows="5"
          cols="25"
          id="post3"
          name="post3"
          value={post3}
          onChange={(e) => setPost3(e.target.value)}
          onBlur={(e) => gravar(e.target.value)}
        />
      )}
      {criarbloq3 && (
        <Image
          id="post3"
          alt="Post 3"
          src={portiti3}
          width={300}
          height={300}
        />
      )}
      {criarbloq3 && (
        <span onClick={fechar} className={styles.fechar}>
          X
        </span>
      )}
    </div>
  );
}
