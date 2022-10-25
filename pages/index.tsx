import Header from "components/Header";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Travel Agency</title>
        <meta name="description" content="Travel Agency APP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute z-10 w-full py-12">
        <Header />
      </div>
    </div>
  );
};

export default Home;
