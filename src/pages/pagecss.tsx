import styles from '@/pages/pagecss.module.css';
import {GetStaticProps, NextPage} from "next";

interface Props {
  hello: string;
}

const PageCss: NextPage<Props> = (props) => {
  return <>
    <p className={styles.myStyle}>
      {props.hello}
    </p>
    <style jsx>{`
      p {
        color: blue;
      }
    `}</style>
    <style global jsx>{`
      p {
        font-style: italic;
      }
    `}</style>
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
