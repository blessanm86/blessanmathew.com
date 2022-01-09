import { Link } from "remix";
import { tags } from "~/config";

type Props = {
  name: string;
};

export default function Tag({ name }: Props) {
  const { backgroundColor, textColor } = tags[name] || tags.rest;

  return (
    <Link to={`/?tag=${name}`} className="inline-block">
      <span
        className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${backgroundColor} ${textColor}`}
      >
        {name}
      </span>
    </Link>
  );
}
