import Image from "next/image";
interface BookProps {
  title: string;
  img: string | StaticImageData;
  author: string;
  year: number;
  comment: string;
}

export default function Book({ img, title, author, year, comment }: BookProps) {
  return (
    <li className="font-body max-w-md overflow-hidden rounded-xl border bg-white transition-colors dark:border-gray-700 dark:bg-gray-800/90 sm:w-full sm:max-w-4xl">
      <article className="px-6 pt-6 sm:flex sm:pb-6">
        <figure className="block max-w-md shrink-0 overflow-hidden rounded-xl shadow-lg sm:w-40">
          <Image
            className="aspect-[3/4] h-full w-full"
            src={img}
            alt={title}
            layout="responsive"
            placeholder="blur"
          />
        </figure>
        <div className="w-full py-6 sm:py-0 sm:px-6">
          <h2 className="mb-1.5 text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium text-indigo-600/95 dark:text-cyan-500">
              {author}
            </span>{" "}
            <span>&middot;</span> <span>{year}</span>
          </p>
          <p className="py-1 leading-relaxed text-gray-600 dark:text-gray-400">{`"${comment}"`}</p>
        </div>
      </article>
    </li>
  );
}
