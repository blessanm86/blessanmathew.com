import Head from "next/head";
import {
  articleContent as articleContentStyle,
  twitterShareButton as twitterShareButtonStyle,
  content as contentStyle,
} from "Components/Layout.module.css";

export default ({ post: { title, contentHtml } }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <article className={articleContentStyle}>
        <h1>{title}</h1>
        <a
          href="https://twitter.com/share"
          className={twitterShareButtonStyle}
          data-via="blessenm86"
        >
          Tweet
        </a>
        <div
          className={`${contentStyle} markdown-body`}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </>
  );
};
