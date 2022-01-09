import { MetaFunction, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { getPost } from "~/post";
import styles from "highlight.js/styles/monokai-sublime.css";

export const loader: LoaderFunction = async ({ params }) =>
  params.slug && getPost(params.slug);

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = ({ data }) => {
  return { title: data.title };
};

export default function PostSlug() {
  const post = useLoaderData();
  return (
    <div
      dangerouslySetInnerHTML={{ __html: post.html }}
      className="prose prose-a:text-sky-700 hover:prose-a:text-sky-800 prose-lg 2xl:prose-xl max-w-none"
    />
  );
}
