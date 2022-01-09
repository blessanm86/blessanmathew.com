import Head from "next/head";
import { getPosts } from "Lib/posts";
import Layout from "Components/Layout";
import Posts from "Components/Posts";

export async function getStaticProps() {
  const posts = getPosts();
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
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
