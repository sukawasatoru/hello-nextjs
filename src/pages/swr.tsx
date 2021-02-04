import {fetcher} from "@/function";
import {GetStaticProps, NextPage} from "next";
import Head from "next/head";
import Link from "next/link";
import useSWR from "swr";

interface Props {
  hello: {
    origin: string;
  };
}

const SWR: NextPage<Props> = (props) => {
  const {
    data,
    error
  } = useSWR<Props["hello"]>("https://httpbin.org/get",
    fetcher,
    {initialData: {origin: `initialData: ${props.hello.origin}`}});

  const {data: dataWOInitial} = useSWR<Props["hello"]>("https://httpbin.org/get", fetcher);

  if (error) {
    return <>
      <Head>
        <title>
          SWR (error)
        </title>
      </Head>
      <p>
        ERROR {`${error}`}
      </p>
      <p>
        <Link href="/">
          <a>
            Top
          </a>
        </Link>
      </p>
    </>;
  }

  return <>
    <Head>
      <title>
        SWR
      </title>
    </Head>
    <p>
      initial data: {props.hello.origin}
    </p>
    <p>
      data.origin: {data!.origin}
    </p>
    <p>
      data w/o initialData: {dataWOInitial?.origin || "undefined"}
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    return {
      props: {
        hello: await fetcher("https://httpbin.org/get"),
      },
    };
  } catch {
    return {
      props: {
        hello: {
          origin: "failed to retrieve data via httpbin",
        },
      },
    };
  }
};

export default SWR;
