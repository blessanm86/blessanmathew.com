import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { format, compareDesc } from "date-fns";
import readingTime from "reading-time";
import { marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPosts(tagFilter) {
  const fileNames = fs.readdirSync(postsDirectory);
  let posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      slug,
      formattedDate: format(new Date(matterResult.data.date), "MMM d, yyyy"),
      readingTime: readingTime(matterResult.content).text,
      ...matterResult.data,
    };
  });

  posts = tagFilter
    ? posts.filter((post) => post.tags.includes(tagFilter))
    : posts;

  posts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return posts;
}

export function getTags() {
  const posts = getPosts();
  return Array.from(
    new Set(posts.reduce((acc, curr) => [...acc, ...curr.tags], [])),
  );
}

export function getPost(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  marked.use(
    markedHighlight({
      highlight: function (code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
    }),
  );

  return {
    id,
    html: marked.parse(matterResult.content),
    ...matterResult.data,
  };
}
