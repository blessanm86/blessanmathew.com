import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "./tailwind.css";
import Header from "~/components/Header";

export const meta: MetaFunction = () => {
  return { title: "Blessan Mathew's personal web space" };
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto py-4 sm:py-6 lg:py-8 flex flex-col gap-12">
            <Header />
            <Outlet />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
