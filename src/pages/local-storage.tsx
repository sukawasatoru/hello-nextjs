import {GetStaticProps, NextPage} from "next";
import Head from "next/head";
import Link from "next/link";
import {useEffect, useState} from "react";

interface Props {
  hello: string;
}

const Index: NextPage<Props> = (props) => {
  const [getVal, setGetVal] = useState<string | null>("");

  useEffect(() => {
    setGetVal(localStorage.getItem('local-storage-get-val'));
  }, []);

  return <>
    <Head>
      <title>
        LocalStorage
      </title>
    </Head>
    <p>
      getVal: {getVal || "(none)"}
    </p>
    <p>
      <span onClick={() => localStorage.setItem('local-storage-get-val', new Date().toString())}>[SET]</span>
    </p>
    <p>
      <Link href="/">
        <a>
          Top
        </a>
      </Link>
    </p>
  </>;
};

export const getStaticProps: GetStaticProps<Props> = async context => {
  return {
    props: {
      hello: "Hello",
    },
  };
};

export default Index;
