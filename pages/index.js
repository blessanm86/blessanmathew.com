import Head from "next/head";
import { getSortedPostsData } from "Lib/posts";
import Layout from "Components/Layout";
import Posts from "Components/Posts";

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <Layout>
      <Head>…</Head>
      <ul>
        <Posts posts={posts} />
      </ul>
    </Layout>
  );
}
