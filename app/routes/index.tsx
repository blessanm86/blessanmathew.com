import { useLoaderData } from "@remix-run/react";
import * as postA from "../../posts/2013-07-27-rolled-out-my-blog.mdx";

export const loader = () => {
  return [
    {
      slug: postA.filename.split(".")[0],
      ...postA,
    },
  ];
};

export default function Index() {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <main className="flex flex-col gap-10">
      <article className="flex flex-col gap-2">
        <a
          href="#"
          className="text-3xl font-medium text-pink-800 hover:underline"
        >
          Rust lifetimes
        </a>
        <p className="mb-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
        <div className="flex gap-2">
          <a href="#" className="inline-block">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
              {" "}
              Article{" "}
            </span>
          </a>
          <a href="#" className="inline-block">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              {" "}
              Article{" "}
            </span>
          </a>
        </div>
        <div className="flex space-x-1 text-sm text-gray-500">
          <time dateTime="2020-02-12"> Feb 12, 2020</time>
          <span aria-hidden="true"> &middot; </span>
          <span> 11 min read </span>
        </div>
      </article>
      <article className="flex flex-col gap-2">
        <a
          href="#"
          className="text-3xl font-medium text-pink-800 hover:underline"
        >
          Rust ownership
        </a>
        <p className="mb-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
        <div className="flex gap-2">
          <a href="#" className="inline-block">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-300 text-yellow-800">
              {" "}
              rust{" "}
            </span>
          </a>
          <a href="#" className="inline-block">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              {" "}
              general{" "}
            </span>
          </a>
        </div>
        <div className="flex space-x-1 text-sm text-gray-500">
          <time dateTime="2020-02-12"> Feb 12, 2020</time>
          <span aria-hidden="true"> &middot; </span>
          <span> 11 min read </span>
        </div>
      </article>
      <article className="flex flex-col gap-2">
        <a
          href="#"
          className="text-3xl font-medium text-pink-800 hover:underline"
        >
          Hahmaps VS Sets
        </a>
        <p className="mb-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
        <div className="flex gap-2">
          <a href="#" className="inline-block">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-300 text-green-800">
              {" "}
              rust{" "}
            </span>
          </a>
        </div>
        <div className="flex space-x-1 text-sm text-gray-500">
          <time dateTime="2020-02-12"> Feb 12, 2020</time>
          <span aria-hidden="true"> &middot; </span>
          <span> 11 min read </span>
        </div>
      </article>
      <article className="flex flex-col gap-2">
        <a
          href="#"
          className="text-3xl font-medium text-pink-800 hover:underline"
        >
          Willkommen
        </a>
        <p className="mb-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
        <div className="flex gap-2">
          <a href="#" className="inline-block">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              {" "}
              general{" "}
            </span>
          </a>
        </div>
        <div className="flex space-x-1 text-sm text-gray-500">
          <time dateTime="2020-02-12"> Feb 12, 2020</time>
          <span aria-hidden="true"> &middot; </span>
          <span> 11 min read </span>
        </div>
      </article>
    </main>
  );
}
