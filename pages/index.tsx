import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import crying from "../public/cryingGirl.png";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coming Soon</title>
      </Head>
      <h1 className={styles.comingSoonLogo}>Coming Soon</h1>
      <p className={styles.comingSoonText}>
        Don&apos;t worry it&apos;ll be here before you know it
      </p>
      <div className={styles.cryingContainer}>
        <Image src={crying} height={336} width={223} alt="crying waifu" />
      </div>
    </div>
  );
};

export default Home;
