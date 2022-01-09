import Layout from "Components/Layout";
import { getPosts, getPost } from "Lib/posts";
import Head from "next/head";
import "highlight.js/styles/monokai-sublime.css";

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
  const post = await getPost(params.id);
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
      </Head>
      <div
        dangerouslySetInnerHTML={{ __html: post.html }}
        className="prose prose-a:text-sky-700 hover:prose-a:text-sky-800 prose-lg 2xl:prose-xl max-w-none"
      />
    </Layout>
  );
};
