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
    <article className="font-body max-w-md border sm:w-full sm:max-w-4xl bg-white rounded-xl overflow-hidden dark:bg-gray-800/90 dark:border-gray-700 transition-colors">
      <div className="sm:flex">
        <div className="max-w-md p-4 pb-0 sm:pb-4 sm:pr-1">
          <div className="relative aspect-[3/4] sm:w-48">
            <Image
              className="absolute w-full h-full rounded-xl"
              src={img}
              alt={title}
              layout="fill"
              objectFit="fill"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="py-5 px-6 w-full">
          <h2 className="font-semibold pb-1.5 text-xl dark:text-white text-gray-900">
            {title}
          </h2>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="text-indigo-600/90 dark:text-cyan-500 font-medium">
              {author}
            </span>{" "}
            <span>&middot;</span> <span>{year}</span>
          </p>
          <p className="text-gray-500 py-2 dark:text-gray-400 leading-relaxed">{`"${comment}"`}</p>
        </div>
      </div>
    </article>
  );
}
