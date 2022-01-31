import Link from "next/link";
import Github from "components/icons/Github";
import Tooltip from "components/Tooltip";
import DarkmodeButton from "./DarkmodeButton";

const Navbar = () => {
  return (
    <div className="fixed z-10 rounded-3xl -translate-x-1/2 bottom-6 left-1/2 backdrop-blur-sm p-2.5 bg-white/50 dark:bg-gray-800/50 border border-gray-300 shadow dark:border-gray-700 transition-colors">
      <nav className="flex items-center justify-center gap-2.5">
        <Link href="/">
          <a className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-2xl bg-gray-200 dark:bg-gray-700 transition-all hover:scale-110 active:scale-95 border-2 border-opacity-0 dark:border-opacity-0 dark:hover:border-opacity-100 hover:border-opacity-100 border-blue-600 dark:border-blue-700 hover:shadow-blue-200 dark:hover:shadow-blue-800 hover:shadow-md">
            <svg
              className="h-8 w-8 fill-gray-400 dark:fill-gray-500 group-hover:scale-125 dark:group-hover:fill-gray-400 group-hover:fill-gray-500 duration-300"
              viewBox="0 0 20 20"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <Tooltip text="Home" />
          </a>
        </Link>
        <Link href="/about">
          <a className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-2xl bg-gray-200 dark:bg-gray-700 transition-all hover:scale-110 active:scale-95 border-2 border-opacity-0 dark:border-opacity-0 dark:hover:border-opacity-100 hover:border-opacity-100 border-blue-600 dark:border-blue-700 hover:shadow-blue-200 dark:hover:shadow-blue-800 hover:shadow-md">
            <svg
              className="h-8 w-8 fill-gray-400 dark:fill-gray-500 group-hover:scale-125 dark:group-hover:fill-gray-400 group-hover:fill-gray-500 duration-300"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
            <Tooltip text="About" />
          </a>
        </Link>
        <Link href="/blog">
          <a className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-2xl bg-gray-200 dark:bg-gray-700 transition-all hover:scale-110 active:scale-95 border-2 border-opacity-0 dark:border-opacity-0 dark:hover:border-opacity-100 hover:border-opacity-100 border-blue-600 dark:border-blue-700 hover:shadow-blue-200 dark:hover:shadow-blue-800 hover:shadow-md">
            <svg
              className="h-8 w-8 fill-gray-400 dark:fill-gray-500 group-hover:scale-125 dark:group-hover:fill-gray-400 group-hover:fill-gray-500 duration-300"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                clipRule="evenodd"
              />
            </svg>
            <Tooltip text="Blog" />
          </a>
        </Link>
        <Link href="/bookshelf">
          <a className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-2xl bg-gray-200 dark:bg-gray-700 transition-all hover:scale-110 active:scale-95 border-2 border-opacity-0 dark:border-opacity-0 dark:hover:border-opacity-100 hover:border-opacity-100 border-blue-600 dark:border-blue-700 hover:shadow-blue-200 dark:hover:shadow-blue-800 hover:shadow-md">
            <svg
              className="h-8 w-8 fill-gray-400 dark:fill-gray-500 group-hover:scale-125 dark:group-hover:fill-gray-400 group-hover:fill-gray-500 duration-300"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
                clipRule="evenodd"
              />
            </svg>
            <Tooltip text="Bookshelf" />
          </a>
        </Link>
        <Link href="/guestbook">
          <a className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-2xl bg-gray-200 dark:bg-gray-700 transition-all hover:scale-110 active:scale-95 border-2 border-opacity-0 dark:border-opacity-0 dark:hover:border-opacity-100 hover:border-opacity-100 border-blue-600 dark:border-blue-700 hover:shadow-blue-200 dark:hover:shadow-blue-800 hover:shadow-md">
            <svg
              className="h-8 w-8 fill-gray-400 dark:fill-gray-500 group-hover:scale-125 dark:group-hover:fill-gray-400 group-hover:fill-gray-500 duration-300"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                clipRule="evenodd"
              />
            </svg>
            <Tooltip text="Guestbook" />
          </a>
        </Link>
        <hr className="border-r border h-16 dark:border-gray-700 rounded-lg" />
        <DarkmodeButton />
        <a
          href="https://github.com/kevinzunigacuellar"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-2xl bg-gray-200 dark:bg-gray-700 transition-all hover:scale-110 active:scale-95 border-2 border-opacity-0 dark:border-opacity-0 dark:hover:border-opacity-100 hover:border-opacity-100 border-blue-600 dark:border-blue-700 hover:shadow-blue-200 dark:hover:shadow-blue-800 hover:shadow-md"
        >
          <Github className="h-8 w-8 fill-gray-400 dark:fill-gray-500 group-hover:scale-125 dark:group-hover:fill-gray-400 group-hover:fill-gray-500 duration-300" />
          <Tooltip text="GitHub" />
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
