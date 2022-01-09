import Link from "next/link";
import { tags } from "../config";

export default function Tag({ name }) {
  const { backgroundColor, textColor } = tags[name] || tags.rest;

  return (
    <Link href={`/tags/${name}`}>
      <a className="inline-block">
        <span
          className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs lg:text-sm font-medium ${backgroundColor} ${textColor}`}
        >
          {name}
        </span>
      </a>
    </Link>
  );
}
