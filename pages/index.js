import Head from "next/head";
import { getPosts } from "Lib/posts";
import Layout from "Components/Layout";
import Posts from "Components/Posts";
import { domainName } from "../config";

export async function getStaticProps() {
  const posts = getPosts();
  return {
    props: {
      posts,
    },
  };
}

const title = "Blessan Mathew's Personal Web Space";

export default function Home({ posts }) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="blessanmathew.com" />
        <meta
          property="og:description"
          content="Hi, Welcome to my personal website. You can read my articles and find me on other social media platforms."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${domainName}/open-graph.png`} />
        <meta property="og:url" content={domainName} />
      </Head>
      <Posts posts={posts} />
    </Layout>
  );
}
