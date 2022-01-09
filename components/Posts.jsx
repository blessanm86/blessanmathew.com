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
          <a className="text-xl lg:text-3xl font-medium text-pink-800 hover:underline">
            {title}
          </a>
        </Link>
        <p className="mb-2 text-sm lg:text-base">{excerpt}</p>
        <div className="flex gap-2">
          {tags && tags.map((tag) => <Tag name={tag} key={tag} />)}
        </div>
        <div className="flex space-x-1 text-xs lg:text-sm text-gray-500">
          <time dateTime={date}>{formattedDate}</time>
          <span aria-hidden="true"> &middot; </span>
          <span>{readingTime}</span>
        </div>
        {index < posts.length - 1 && <hr className="mt-4 lg:mt-8" />}
      </article>
    )
  );
}
