import { Link, LoaderFunction } from "remix";
import { useLoaderData } from "@remix-run/react";
import Tag from "~/components/Tag";
import { getPosts, Post } from "~/post";

export const loader: LoaderFunction = ({ request }) => {
  let url = new URL(request.url);
  let tag = url.searchParams.get("tag");
  return getPosts(tag);
};

export default function Index() {
  const posts = useLoaderData<Post[]>();

  return (
    <main className="flex flex-col gap-10">
      {posts.map(
        ({ slug, title, excerpt, date, tags, formattedDate, readingTime }) => (
          <article className="flex flex-col gap-2" key={slug}>
            <Link
              to={`posts/${slug}`}
              prefetch="render"
              className="text-3xl font-medium text-pink-800 hover:underline"
            >
              {title}
            </Link>
            <p className="mb-2">{excerpt}</p>
            <div className="flex gap-2">
              {tags.map((tag) => (
                <Tag name={tag} key={tag} />
              ))}
            </div>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={date}>{formattedDate}</time>
              <span aria-hidden="true"> &middot; </span>
              <span>{readingTime}</span>
            </div>
            <hr className="mt-8" />
          </article>
        )
      )}
    </main>
  );
}
