import {NextPage} from "next";
import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router";

const Routes: NextPage = () => {
  const router = useRouter();
  return <>
    <Head>
      <title>routes</title>
    </Head>
    <ul>
      <li>
        <Link href="routes/normal-link">
          <a>normal link</a>
        </Link>
      </li>
      <li>
        <span onClick={() => router.push("/routes/router-push")}>
          router.push()
        </span>
      </li>
      <li>
        <span onClick={() => router.push("/routes/shallow-routing", undefined, {shallow: true})}>
          router.push(, undefined, {"{ shallow: true}"})
        </span>
      </li>
    </ul>
  </>;
};

export default Routes;
