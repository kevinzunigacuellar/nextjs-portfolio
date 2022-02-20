import Image from "next/image";
import Badge from "./Badge";
interface BookProps {
  title: string;
  img: string | StaticImageData;
  author: string;
  year: number;
  comment: string;
  status?: "reading";
}

export default function Book({
  img,
  title,
  author,
  year,
  comment,
  status,
}: BookProps) {
  return (
    <li className="font-body max-w-md overflow-hidden rounded-xl bg-gray-100 dark:border-gray-700 dark:bg-gray-800/90 sm:w-full sm:max-w-4xl">
      <article className="px-6 pt-6 sm:flex sm:pb-6">
        <figure className="block max-w-md shrink-0 overflow-hidden rounded-xl shadow-sm sm:w-40">
          <Image
            className="aspect-[3/4] h-full w-full"
            src={img}
            alt={title}
            layout="responsive"
            placeholder="blur"
          />
        </figure>
        <div className="w-full py-6 sm:py-0 sm:px-6">
          <h2 className="mb-1.5 space-x-2 text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h2>
          <div className="mb-2 sm:flex sm:items-baseline">
            <p className="space-x-0.5 text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium text-indigo-600/95 dark:text-cyan-500">
                {author}
              </span>{" "}
              <span>&middot;</span> <span className="pr-0 sm:pr-2">{year}</span>
            </p>
            {status && <Badge text={status} color="indigo" />}
          </div>

          <p className="py-1 leading-relaxed text-gray-600 dark:text-gray-400">{`"${comment}"`}</p>
        </div>
      </article>
    </li>
  );
}
