import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {ParsedUrlQuery} from "querystring";

interface Props {
  hello: string;
  myId: string;
}

const MyPath: NextPage<Props> = (props) => {
  return (
    <>
      <p>
        {props.hello}
      </p>
      <p>
        ID: {props.myId}
      </p>
      <br/>
    </>
  );
};

interface StaticPath extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<StaticPath> = async () => {
  return {
    paths: [
      {
        params: {
          id: "aa",
        },
      },
      {
        params: {
          id: "bb",
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, StaticPath> = async context => {
  return {
    props: {
      hello: "Hello",
      myId: context.params!.id,
    },
  };
};

export default MyPath;
