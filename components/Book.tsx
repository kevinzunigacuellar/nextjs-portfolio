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
    <li className="font-body max-w-md border sm:w-full sm:max-w-4xl bg-white rounded-xl overflow-hidden dark:bg-gray-800/90 dark:border-gray-700 transition-colors">
      <article className="sm:flex px-6 pt-6 sm:pb-6">
        <figure className="block shrink-0 sm:w-40 max-w-md rounded-xl overflow-hidden shadow-lg">
          <Image
            className="w-full h-full aspect-[3/4]"
            src={img}
            alt={title}
            layout="responsive"
            placeholder="blur"
          />
        </figure>
        <div className="py-6 sm:py-0 sm:px-6 w-full">
          <h2 className="font-semibold mb-1.5 text-xl dark:text-white text-gray-900">
            {title}
          </h2>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="text-indigo-600/95 dark:text-cyan-500 font-medium">
              {author}
            </span>{" "}
            <span>&middot;</span> <span>{year}</span>
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-400 leading-relaxed">{`"${comment}"`}</p>
        </div>
      </article>
    </li>
  );
}
