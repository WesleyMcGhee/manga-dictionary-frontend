import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coming Soon</title>
      </Head>
      <h1>Coming Soon</h1>
    </div>
  );
};

export default Home;
