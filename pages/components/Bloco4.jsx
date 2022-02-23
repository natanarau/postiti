import React from 'react';
import Image from 'next/image';
import portiti4 from '../../public/postiti4.png';
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Bloco4(props) {
  const router = useRouter();
  const [post4, setPost4] = React.useState();
  const [criarbloq4, setCriarbloq4] = React.useState();

  React.useEffect(() => {
    const getBloqLocal4 = localStorage.getItem('bloq4');
    if (getBloqLocal4) setCriarbloq4(true);
  }, [props.situacaoBloq4]);

  React.useEffect(() => {
    const getPostLocal4 = localStorage.getItem('post4');
    if (getPostLocal4) setPost4(getPostLocal4);
  }, []);

  function gravar() {
    localStorage.setItem('post4', post4);
  }
  const fechar = () => {
    localStorage.removeItem('post4');
    localStorage.removeItem('bloq4');
    setPost4();
    setCriarbloq4(false);
    router.reload('');
  };
  return (
    <div className={styles.post4}>
      {criarbloq4 && (
        <textarea
          className={styles.textarea}
          rows="5"
          cols="25"
          id="post4"
          name="post4"
          value={post4}
          onChange={(e) => setPost4(e.target.value)}
          onBlur={(e) => gravar(e.target.value)}
        />
      )}
      {criarbloq4 && (
        <Image
          id="post4"
          alt="Post 4"
          src={portiti4}
          width={300}
          height={300}
        />
      )}
      {criarbloq4 && (
        <span onClick={fechar} className={styles.fechar}>
          X
        </span>
      )}
    </div>
  );
}
