import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import QuoteBox from "@/components/QuoteBox";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const reduxColor = useSelector((state: RootState) => state.color.value);
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
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>

      <main
        className={`${inter.className} ${styles.mainAlignment}`}
        style={{ backgroundColor: reduxColor }}
      >
        <QuoteBox />
      </main>
    </>
  );
}
