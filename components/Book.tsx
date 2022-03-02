import Image from 'next/image';
import Badge from 'components/Badge';

interface BookProps {
  title: string;
  img: string;
  author: string;
  year: number;
  comment: string;
  reading?: boolean;
}

export default function Book({
  img, title, author, year, comment, reading,
}: BookProps) {
  return (
    <li className="font-body max-w-md list-none overflow-hidden rounded-xl bg-white shadow dark:border-gray-700 dark:bg-gray-800/90 dark:shadow-black/40 sm:w-full sm:max-w-4xl">
      <article className="px-6 pt-6 sm:flex sm:pb-6">
        <figure className="relative aspect-[3/4] max-w-md shrink-0 overflow-hidden rounded-xl shadow-sm sm:w-40">
          <Image
            className="absolute h-full w-full"
            src={img}
            alt={title}
            objectFit="cover"
            layout="fill"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsyQYAAWkA6VFHKYUAAAAASUVORK5CYII="
            placeholder="blur"
          />
        </figure>
        <div className="w-full py-6 sm:py-0 sm:px-6">
          <h2 className="mb-1.5 space-x-2 text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h2>
          <div className="mb-2 sm:flex sm:items-baseline">
            <p className="space-x-0.5 text-sm text-gray-600 dark:text-gray-400">
              <span className="text-gray-800 dark:text-gray-300">{author}</span>
              {' '}
              <span>&middot;</span>
              {' '}
              <span className="pr-0 sm:pr-2">{year}</span>
            </p>
            {reading && <Badge text="reading" color="indigo" />}
          </div>
          <p className="py-1 leading-relaxed text-gray-600 dark:text-gray-400">{`"${comment}"`}</p>
        </div>
      </article>
    </li>
  );
}
Book.defaultProps = {
  reading: false,
};
