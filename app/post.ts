import path from "path";
import fs from "fs/promises";
import { format as formatDate, compareDesc } from "date-fns";
import { file as parseFrontMatter } from "smart-matter";
import readingTime from "reading-time";
import { marked } from "marked";
import hljs from "highlight.js";

const postsPath = path.join(__dirname, "../../posts");

export type Post = {
  title: string;
  slug: string;
  date: string;
  formattedDate: string;
  tags: string[];
  excerpt: string;
  readingTime: string;
};

function getFormattedDate(date: string, format = "MMM d, yyyy") {
  return formatDate(new Date(date), format);
}

export async function getPosts(tagFilter: string | null) {
  const dir = await fs.readdir(postsPath);
  let posts: Post[] = dir.map((filename) => {
    const { title, date, tags, excerpt, content } = parseFrontMatter(
      path.join(postsPath, filename)
    );

    return {
      title,
      slug: filename.replace(/\.mdx$/, ""),
      date,
      formattedDate: getFormattedDate(date),
      tags,
      excerpt,
      readingTime: readingTime(content).text,
    };
  });

  posts = tagFilter
    ? posts.filter((post) => post.tags.includes(tagFilter))
    : posts;

  posts = posts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return Promise.all(posts);
}

export async function getPost(slug: string) {
  const { title, content } = parseFrontMatter(
    path.join(path.join(postsPath, slug + ".mdx"))
  );

  marked.setOptions({
    highlight: function (code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  });

  return { title, html: marked.parse(content) };
}
