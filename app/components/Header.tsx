import React from "react";
import { Link } from "remix";
import { headerLinks } from "~/config";

export default function Header() {
  return (
    <header>
      <div className="flex items-center space-x-4 lg:space-x-6">
        <Link to="/" title="Home Page">
          <img
            className="w-28 h-28 rounded-full lg:w-32 lg:h-32"
            src="/profile-pic.jpeg"
            alt="profile-pic"
          />
        </Link>
        <div className="font-medium text-lg leading-6 space-y-1">
          <Link to="/" title="Home Page">
            <h1 className="text-4xl hover:underline">Blessan Mathew</h1>
          </Link>
          <p className="text-rose-800 text-xl">
            Senior Software Engineer
            <span className="text-black"> / </span> audibene
          </p>
          <ul role="list" className="flex space-x-5 text-sky-700">
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
  );
}
