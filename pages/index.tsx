import type { NextPage } from "next";
import Head from "next/head";
import PostBox from "../components/PostBox";

const Home: NextPage = () => {
  return (
    <div className="my-7 max-w-5xl mx-auto">
      <Head>
        <title>Reddit Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostBox />
      <div className="flex" ></div>
    </div>
  );
};

export default Home;
