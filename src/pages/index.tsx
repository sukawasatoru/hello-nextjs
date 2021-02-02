import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {ParsedUrlQuery} from "querystring";

interface Props {
  hello: string;
}

const Index: NextPage<Props> = (props) => {
  return (
    <p>
      {props.hello}
    </p>
  );
};

interface StaticPath extends ParsedUrlQuery {
  // do nothing.
}

export const getStaticPath: GetStaticPaths<StaticPath> = async () => {
  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async context => {
  return {
    props: {
      hello: "Hello",
    },
  };
};

export default Index;
