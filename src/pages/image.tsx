import {GetStaticProps, NextPage} from "next";
import Image from "next/image";

interface Props {
  hello: string;
}

const NextImage: NextPage<Props> = (props) => {
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

export default NextImage;
