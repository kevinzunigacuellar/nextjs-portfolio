import Image from 'next/image'
import profilePic from 'public/images/me.jpg'
import { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowSmLeftIcon } from '@heroicons/react/solid'

interface BlogLayoutProps {
  children: ReactNode
  title: string
  date: string
}

export default function BlogLayout({ children, title, date }: BlogLayoutProps) {
  return (
    <>
      <Link href="/blog">
        <a className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white inline-flex items-center space-x-1 py-0.5 rounded-full text-sm">
          <ArrowSmLeftIcon className="h-4" />
          <p>back to blog</p>
        </a>
      </Link>
      <h1 className="text-4xl sm:text-5xl font-sans font-semibold py-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
        {title}
      </h1>
      <div className="flex space-x-2 mb-16 items-center justify-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">
        <Image
          className="rounded-full w-full h-full"
          width={24}
          height={24}
          src={profilePic}
          alt="Kevin Zuniga Cuellar"
        />
        <p className="">
          <span className="mr-2">Kevin</span>
          &middot;
          <time className="ml-2" dateTime={date}>
            {new Date(date).toLocaleDateString('en', {
              dateStyle: 'full',
            })}
          </time>
        </p>
      </div>
      <article
        className="prose max-w-none prose-a:text-blue-500 prose-a:no-underline prose-pre:bg-white prose-pre:text-gray-700
      dark:prose-invert dark:prose-a:text-indigo-500 dark:prose-pre:bg-gray-800 dark:prose-pre:text-gray-300"
      >
        {children}
      </article>
    </>
  )
}
