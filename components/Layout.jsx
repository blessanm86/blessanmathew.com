import Link from "next/link";
import { headerLinks } from "../config";

export default ({ children }) => (
  <div className="mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto py-4 sm:py-6 lg:py-8 flex flex-col gap-6 lg:gap-12">
      <header>
        <div className="flex items-center space-x-2 lg:space-x-6">
          <Link href="/">
            <a title="Home Page">
              <img
                className="w-16 h-16 rounded-full lg:w-32 lg:h-32"
                src="/profile-pic.jpeg"
                alt="profile-pic"
              />
            </a>
          </Link>
          <div className="font-medium text-lg leading-6 space-y-1">
            <Link href="/">
              <a title="Home Page">
                <h1 className=" text-xl lg:text-4xl hover:underline">
                  Blessan Mathew
                </h1>
              </a>
            </Link>
            <p className="text-rose-800 text-sm lg:text-xl">
              Senior Software Engineer
              <span className="text-black"> / </span> audibene
            </p>
            <ul
              role="list"
              className="flex space-x-3 lg:space-x-5 text-sky-700"
            >
              {headerLinks.map(({ key, href, title, children }) => (
                <li key={key}>
                  <a
                    href={href}
                    title={title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-800"
                  >
                    <span className="sr-only">{title}</span>
                    {children}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
      <main className="flex flex-col gap-5 lg:gap-10">{children}</main>
    </div>
  </div>
);
