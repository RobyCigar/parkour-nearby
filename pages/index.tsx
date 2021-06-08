import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from '../styles/Home.module.css';
import ViewSource from "../components/ViewSource";

export default function Map() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>
      <ViewSource/>
      <div className={styles.container}>        
        <div className={styles.background}>
          <Image
            src="/Background.svg"
            alt="background"
            layout="fill"
          />
        </div>
      </div>
      <section className={styles.section}>
        <div className={styles.left}>
          <h1>Find Your Nearest Parkour Spot</h1>
          <p>Nearby Spot is web app designed to help parkour community to find nearest spot in their area. You can contribute to this project by clicking <a href="https://github.com/RobyCigar/parkour-nearby">this</a> link and then follow the guides there</p>
          <Link href="/map">
            <button className={styles.btn}>Xplore Now</button>
          </Link>
        </div>
        <div className={styles.right}>
          <Image
            src="/phone.png"
            alt="A map inside phone"
            layout="fixed"
            width="300"
            height="600"
          />
        </div>
      </section>
    </div>
  )
}