import {NextPage} from "next";
import Head from "next/head";
import Link from "next/link";

const NormalLink: NextPage = () => {
  return <>
    <Head>
      <title>routes/normal-link</title>
    </Head>
    <p>
      normal-link.tsx
    </p>
    <Link href="/routes">
      <a>Back to routes</a>
    </Link>
  </>;
};

export default NormalLink;
