import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Random Quote Machine</title>
        <meta
          name="description"
          content="FreeCodeCamp Project - Random Quote Machine"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={inter.className}>
        <div id="quote-box">Quote of the day</div>
      </main>
    </>
  );
}
