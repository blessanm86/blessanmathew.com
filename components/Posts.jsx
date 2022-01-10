import Link from "next/link";
import Tag from "./Tag";

export default function Posts({ posts }) {
  return posts.map(
    (
      { slug, title, excerpt, date, tags, formattedDate, readingTime },
      index
    ) => (
      <article className="flex flex-col gap-2" key={slug}>
        <Link href={`/posts/${slug}`}>
          <a className="dark:text-white text-2xl lg:text-3xl font-medium text-black hover:underline decoration-pink-800">
            {title}
          </a>
        </Link>
        <p className="mb-2 text-base">{excerpt}</p>
        <div className="flex gap-2">
          {tags && tags.map((tag) => <Tag name={tag} key={tag} />)}
        </div>
        <div className="flex space-x-1 text-sm text-gray-500">
          <time dateTime={date}>{formattedDate}</time>
          <span aria-hidden="true"> &middot; </span>
          <span>{readingTime}</span>
        </div>
        {index < posts.length - 1 && <hr className="mt-3 lg:mt-8" />}
      </article>
    )
  );
}