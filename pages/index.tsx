import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>@the.pokemonGallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.banner}>
        <img src="/bannerthin.png" alt="" />
      </div>

      <main className={styles.main}></main>

      <footer className={styles.footer}>
        <a
          href="https://richardcoric.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Richard with ❤
        </a>
      </footer>
    </div>
  );
};

export default Home;
