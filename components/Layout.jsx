import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { headerLinks } from "../config";

export default ({ children }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-4 sm:py-6 lg:py-8 flex flex-col gap-6 lg:gap-12">
        <header className="flex justify-between items-start">
          <div className="flex items-center space-x-2 lg:space-x-6">
            {/*<Link href="/">*/}
            {/*  <a title="Home Page">*/}
            {/*    <img*/}
            {/*      className="w-16 h-16 rounded-full lg:w-32 lg:h-32"*/}
            {/*      src="/profile-pic.jpeg"*/}
            {/*      alt="profile-pic"*/}
            {/*    />*/}
            {/*  </a>*/}
            {/*</Link>*/}
            <div className="font-medium text-lg leading-6 space-y-1">
              <Link href="/">
                <a title="Home Page">
                  <h1 className="dark:text-white text-3xl lg:text-4xl hover:underline decoration-pink-800">
                    Blessan Mathew
                  </h1>
                </a>
              </Link>
              <p className="text-sky-800 dark:text-sky-500 text-lg lg:text-xl">
                Senior Software Engineer
                <span className="text-black"> / </span> audibene
              </p>
              <ul role="list" className="dark:text-white flex space-x-3">
                {headerLinks.map(({ key, href, title, children }) => (
                  <li key={key}>
                    <a
                      href={href}
                      title={title}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-pink-800"
                    >
                      <span className="sr-only">{title}</span>
                      {children}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {mounted && (
            <button
              aria-label={`Enable ${nextTheme} mode`}
              onClick={() => setTheme(nextTheme)}
              className="dark:text-white hover:text-pink-800 dark:hover:text-pink-800"
            >
              {currentTheme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          )}
        </header>
        <main className="flex flex-col gap-4 lg:gap-10">{children}</main>
      </div>
    </div>
  );
};
