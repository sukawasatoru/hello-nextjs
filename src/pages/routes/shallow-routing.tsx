import {GetServerSideProps, NextPage} from "next";
import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router";

interface Props {
  now: string;
}

const ShallowRouting: NextPage<Props> = (props) => {
  const router = useRouter();
  const count = Number.parseInt(router.query.count as string) || 0;

  return <>
    <Head>
      <title>routes/shallow-routing</title>
    </Head>
    <p>
      shallow-routing.tsx
    </p>
    <p>
      date: {props.now}
    </p>
    <p>
      current: {count}
    </p>
    <p onClick={() => router.push(`?count=${count + 1}`, undefined, {shallow: true})}>
      count up (shallow: true)
    </p>
    <p onClick={() => router.push(`?count=${count + 1}`)}>
      count up (shallow: false)
    </p>
    <Link href="/routes">
      <a>Back to routes</a>
    </Link>
  </>;
};

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  return {
    props: {
      now: new Date().toString(),
    },
  };
};

export default ShallowRouting;
