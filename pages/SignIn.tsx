import GoogleButton from "react-google-button";
import Head from "next/head";
import { googleSignin } from "../firebase/Authentication";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sign In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Sign In</h1>
        <GoogleButton
          onClick={() => {
            googleSignin();
          }}
        />
      </main>
    </>
  );
}
