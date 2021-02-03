import {GetStaticProps, NextPage} from "next";

interface Props {
  myEnv: string;
}

const Dotenv: NextPage<Props> = (props) => {
  return <>
    <p>
      Env: {props.myEnv}
    </p>
  </>;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      myEnv: process.env.ENV_HELLO!,
    },
  };
};

export default Dotenv;
