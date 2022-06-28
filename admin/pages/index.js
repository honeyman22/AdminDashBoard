import Head from "next/head";
import Image from "next/image";
import Home2 from "../components/DashBoard/Home";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head></Head>
      <Home2 />
    </div>
  );
}
