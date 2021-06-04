import Head from 'next/head'
import dynamic from 'next/dynamic'
import Loader from 'react-loader-spinner'
import styles from '../styles/Home.module.css'
import { getData } from '../lib/ParseCSV'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

export default function Home(props) {
  const Map = dynamic(
    () => import('../components/Map'), // replace '@components/map' with your component's location
    { 
      loading: () => (<Loader
        className={styles.loader}
        type="Audio"
        color="#00BFFF"
        height={100}
        width={100}
      />),
      ssr: false // This line is important. It's what prevents server-side render
    }
  )

  console.log('stupid props', props)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Map/>
    </div>
  )
}

export async function getStaticProps() {
  const shit = "shit"
  console.log(shit)
  return {
    props: {
      name: shit
    }
  }
}