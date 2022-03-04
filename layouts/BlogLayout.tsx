import Image from 'next/image';
import profilePic from 'public/images/me.jpg';
import { ReactNode } from 'react';

export default function BlogLayout({ children, title, date }:
  { children: ReactNode, title: string, date: string }) {
  return (
    <>
      <h1 className="text-4xl sm:text-5xl font-sans font-bold mb-6">{title}</h1>
      <div className="flex space-x-2 mb-10 items-center text-sm sm:text-base">
        <Image
          className="rounded-full w-full h-full"
          width={24}
          height={24}
          src={profilePic}
          alt="Kevin Zuniga Cuellar"

        />
        <p className="dark:text-gray-300">
          <span className="mr-2">Kevin</span>
          &middot;
          <time className="ml-2" dateTime={date}>
            {new Date(date).toLocaleDateString('en', {
              month: 'long',
              year: 'numeric',
            })}
          </time>
        </p>
      </div>
      <main className="prose max-w-none prose-a:text-blue-500 prose-pre:bg-white prose-pre:text-gray-700
      dark:prose-invert dark:prose-a:text-indigo-500 dark:prose-pre:bg-gray-800 dark:prose-pre:text-gray-300"
      >
        {children}

      </main>
    </>
  );
}
