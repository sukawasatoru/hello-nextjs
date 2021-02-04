import {GetStaticProps, NextPage} from "next";
import Head from "next/head";
import Link from "next/link";

interface Props {
  hello: string;
}

const Index: NextPage<Props> = (props) => {
  return <>
    <Head>
      <title>
        Hello Next.js
      </title>
    </Head>
    <p>
      {props.hello}
    </p>
    <ul>
      <li>
        <Link href="/dotenv">
          <a>
            dotenv
          </a>
        </Link>
      </li>
      <li>
        <Link href="/image">
          <a>
            image
          </a>
        </Link>
      </li>
      <li>
        <Link href="/pagecss">
          <a>
            pagecss
          </a>
        </Link>
      </li>
      <li>
        <Link href="/routes">
          <a>
            routes
          </a>
        </Link>
      </li>
      <li>
        <Link href="/serversideprop">
          <a>
            serversideprop
          </a>
        </Link>
      </li>
      <li>
        <Link href="/swr">
          <a>
            SWR
          </a>
        </Link>
      </li>
    </ul>
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
