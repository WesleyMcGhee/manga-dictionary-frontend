import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/2hfg52jflst.module.css";
import ai from "../public/ai.webp";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Go Away</title>
      </Head>
      <section className={styles.opener}>
        <h1 className={styles.openTitle}>Manga Dictionary</h1>
        <div>
          <button className={styles.btnOpener}>Sign Up</button>
        </div>
        <div className={styles.imgOpener}>
          <Image
            alt="best girl ai"
            src={ai}
            height={528}
            width={220}
            className={styles.imageAi}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
