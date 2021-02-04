import {NextPage} from "next";
import Head from "next/head";
import Link from "next/link";

const RouterPush: NextPage = () => {
  return <>
    <Head>
      <title>routes/router-push</title>
    </Head>
    <p>
      router-push.tsx
    </p>
    <Link href="/routes">
      <a>Back to routes</a>
    </Link>
  </>;
};

export default RouterPush;
