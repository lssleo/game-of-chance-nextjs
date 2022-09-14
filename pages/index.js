import Head from "next/head"
import styles from "../styles/Home.module.css"
import Header from "../components/Header"
import { useMoralis } from "react-moralis"
import LotteryEntrance from "../components/LotteryEntrance"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Game Of Chance</title>
                <meta name="description" content="Smart Contract Lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <LotteryEntrance />
            {/* header / connect button / nav bar    */}
        </div>
    )
}
