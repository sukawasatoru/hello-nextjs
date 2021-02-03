import {GetServerSideProps, NextPage} from "next";

interface Props {
  hello: string;
  myId: string;
}

const ServerSideProp: NextPage<Props> = (props) => {
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

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  return {
    props: {
      hello: `Hello ${new Date()}`,
      myId: "my-id",
    },
  };
};

export default ServerSideProp;
