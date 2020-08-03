import Link from "next/link";
import { articleEntry as articleEntryStyle } from "Components/Layout.module.css";

export default function Posts({ posts }) {
  return posts.map(({ id, date, title }, index) => (
    <article className={articleEntryStyle} key={index}>
      <Link href="/[id]" as={`/${id}`}>
        <a>
          <h2>{title}</h2>
        </a>
      </Link>
      <h5>{date}</h5>
    </article>
  ));
}
