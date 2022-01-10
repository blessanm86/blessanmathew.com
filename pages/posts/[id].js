import Layout from "Components/Layout";
import { getPosts, getPost } from "Lib/posts";
import Head from "next/head";
import "highlight.js/styles/monokai-sublime.css";
import { domainName } from "../../config";

export async function getStaticPaths() {
  const paths = getPosts();

  return {
    paths: paths.map(({ slug }) => ({
      params: {
        id: slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPost(params.id);
  return {
    props: {
      post,
    },
  };
}

export default ({ post }) => {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={post.title} />
        <meta property="og:site_name" content="blessanmathew.com" />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`${domainName}/open-graph.png`} />
        <meta property="og:url" content={`${domainName}/posts/${post.id}`} />
      </Head>
      <div
        dangerouslySetInnerHTML={{ __html: post.html }}
        className="prose dark:prose-invert prose-lg 2xl:prose-xl max-w-none prose-a:decoration-pink-800"
      />
    </Layout>
  );
};
