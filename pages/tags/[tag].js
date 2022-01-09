import Head from "next/head";
import { getPosts, getTags } from "../../lib/posts";
import Layout from "../../components/Layout";
import Posts from "../../components/Posts";

export async function getStaticPaths() {
  const tags = getTags();

  return {
    paths: tags.map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = getPosts(params.tag);
  return {
    props: {
      posts,
    },
  };
}

export default function TagPage({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Blessan Mathew's Personal Web Space</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Posts posts={posts} />
    </Layout>
  );
}
