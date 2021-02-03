import {GetStaticProps, NextPage} from "next";

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

export const getStaticProps: GetStaticProps<Props> = async context => {
  return {
    props: {
      hello: "Hello",
    },
  };
};

export default Index;
