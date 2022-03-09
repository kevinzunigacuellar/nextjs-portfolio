import { useState, useEffect, ReactNode } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Github from 'components/icons/Github';
import Tooltip from 'components/Tooltip';
import {
  PencilIcon, AnnotationIcon, HomeIcon, ViewBoardsIcon, SunIcon, MoonIcon,
} from '@heroicons/react/solid';
import LinkedIn from './icons/LinkedIn';

const NAVIGATION = [
  {
    id: 1,
    href: '/',
    text: 'Home',
    icon: <HomeIcon />,
  },
  {
    id: 2,
    href: '/blog',
    text: 'Blog',
    icon: <PencilIcon />,
  },
  {
    id: 3,
    href: '/guestbook',
    text: 'Guestbook',
    icon: <AnnotationIcon />,
  },
  {
    id: 4,
    href: '/bookshelf',
    text: 'Bookshelf',
    icon: <ViewBoardsIcon />,
  },
];

function NavItem({ href, text, icon }:{ href:string, text:string, icon:ReactNode }) {
  return (
    <Link href={href}>
      <a className="group relative ml-1 flex h-14 w-14 flex-shrink-0 snap-end items-center justify-center rounded-2xl
      border-2 border-blue-600 border-opacity-0 bg-gray-200 transition-all hover:scale-110 hover:border-opacity-100
      active:scale-95 dark:border-indigo-600 dark:border-opacity-0 dark:bg-gray-800 dark:hover:border-opacity-100
      dark:hover:shadow-indigo-500/30 sm:m-0 sm:h-16 sm:w-16 sm:hover:shadow-md sm:hover:shadow-indigo-200"
      >
        <span className="h-8 w-8 text-gray-400 duration-300 group-hover:scale-125 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400">
          {icon}
        </span>
        <Tooltip text={text} />
      </a>
    </Link>
  );
}

function DarkmodeButton() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      type="button"
      className="group relative ml-1 flex h-14 w-14 flex-shrink-0 snap-end items-center justify-center rounded-2xl
      border-2 border-blue-600 border-opacity-0 bg-gray-200 transition-all hover:scale-110 hover:border-opacity-100
      active:scale-95 dark:border-indigo-600 dark:border-opacity-0 dark:bg-gray-800 dark:hover:border-opacity-100
      dark:hover:shadow-indigo-500/30 sm:m-0 sm:h-16 sm:w-16 sm:hover:shadow-md sm:hover:shadow-indigo-200"
    >
      <span className="h-8 w-8 text-gray-400 duration-300 group-hover:scale-125 group-hover:text-gray-500
      dark:text-gray-500 dark:group-hover:text-gray-400"
      >
        {mounted && resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </span>
      {mounted && (
        <Tooltip text={resolvedTheme === 'dark' ? 'Light mode' : 'Dark mode'} />
      )}
    </button>
  );
}

function Navbar() {
  return (
    <footer className="fixed bottom-6 left-1/2 z-10 w-4/5 max-w-min sm:max-w-none -translate-x-1/2 rounded-3xl border border-gray-300
    bg-white/60 px-2.5 py-1.5 shadow backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/60
    dark:shadow-black/60 sm:w-auto sm:p-2.5"
    >
      <nav className="flex snap-x items-center justify-start sm:gap-2.5 gap-1.5 overflow-x-auto sm:overflow-x-visible">
        {NAVIGATION.map(({ id, ...props }) => (<NavItem key={id} {...props} />))}
        <hr className="h-16 rounded-lg border border-r ml-1 sm:ml-0 dark:border-gray-700" />
        <DarkmodeButton />
        <a
          href="https://github.com/kevinzunigacuellar"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative ml-1 flex h-14 w-14 flex-shrink-0 snap-end items-center justify-center rounded-2xl
          border-2 border-blue-600 border-opacity-0 bg-gray-200 shadow-none transition-all hover:scale-110
          hover:border-opacity-100 active:scale-95 dark:border-indigo-600 dark:border-opacity-0 dark:bg-gray-800
          dark:hover:border-opacity-100 dark:hover:shadow-indigo-500/30 sm:m-0 sm:h-16 sm:w-16 sm:hover:shadow-md
          sm:hover:shadow-indigo-200"
        >
          <Github className="h-8 w-8 mb-0.5 fill-gray-400 duration-300 group-hover:scale-125 group-hover:fill-gray-500 dark:fill-gray-500 dark:group-hover:fill-gray-400" />
          <Tooltip text="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/kevinzunigacuellar/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mr-1.5 ml-1 flex h-14 w-14 flex-shrink-0 snap-end items-center justify-center rounded-2xl
          border-2 border-blue-600 border-opacity-0 bg-gray-200 shadow-none transition-all hover:scale-110
          hover:border-opacity-100 active:scale-95 dark:border-indigo-600 dark:border-opacity-0 dark:bg-gray-800
          dark:hover:border-opacity-100 dark:hover:shadow-indigo-500/30 sm:m-0 sm:h-16 sm:w-16 sm:hover:shadow-md
          sm:hover:shadow-indigo-200"
        >
          <LinkedIn className="ml-0.5 mb-0.5 h-8 w-8 fill-gray-400 duration-300 group-hover:scale-125 group-hover:fill-gray-500 dark:fill-gray-500 dark:group-hover:fill-gray-400" />
          <Tooltip text="LinkedIn" />
        </a>
      </nav>
    </footer>
  );
}

export default Navbar;
