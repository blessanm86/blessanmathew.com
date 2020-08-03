import Layout from "Components/Layout";
import { getAllPostIds, getPostData } from "Lib/posts";
import Post from "Components/Post";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}

export default ({ post }) => {
  return (
    <Layout>
      <Post post={post} />
    </Layout>
  );
};
