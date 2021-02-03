import Image from "next/image";
import {GetStaticProps, NextPage} from "next";

interface Props {
  hello: string;
}

const PageCss: NextPage<Props> = (props) => {
  return <>
    <Image
      src="/me.jpg"
      width={320}
      height={320}
    />
  </>;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      hello: "Hello",
    },
  };
};

export default PageCss;
