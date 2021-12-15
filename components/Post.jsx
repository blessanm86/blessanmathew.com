import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  articleContent as articleContentStyle,
  twitterShareButton as twitterShareButtonStyle,
  content as contentStyle,
} from "Components/Layout.module.css";

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

export default ({ post: { title, content } }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <article className={articleContentStyle}>
        <h1>{title}</h1>
        <ReactMarkdown
          className={`${contentStyle} markdown-body`}
          source={content}
          renderers={{ code: CodeBlock }}
        />
      </article>
    </>
  );
};
