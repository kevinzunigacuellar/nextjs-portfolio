/* eslint-disable react/no-unused-prop-types */
import { useForm, SubmitHandler } from 'react-hook-form'
import { useSession, signIn } from 'next-auth/react'
import useSWR, { useSWRConfig, SWRConfig } from 'swr'
import toast, { Toaster } from 'react-hot-toast'
import Container from 'components/Container'
import LoadingSpinner from 'components/LoadingSpinner'
import Github from 'components/icons/Github'
import fetcher from 'lib/fetcher'
import Header from 'components/Header'
import { AnnotationIcon, TrashIcon } from '@heroicons/react/outline'
import prisma from 'lib/prisma'

type Inputs = {
  body: string
}

interface GuestbookEntry {
  id: string
  body: string
  created_by: string
  updated_at: string
  email: string
}

function GuestbookForm() {
  const { mutate } = useSWRConfig()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await toast.promise(
      fetch('/api/guestbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }),
      {
        loading: 'Posting your comment...',
        success: 'Thank you for your comment!',
        error: 'Something went wrong. Please try again later.',
      },
      {
        style: {
          minWidth: '200px',
        },
        success: {
          duration: 5000,
        },
      }
    )
    await mutate('/api/guestbook').then(() => reset())
  }
  return (
    <>
      <form className="relative" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('body', {
            required: "Don't forget to write something",
            maxLength: 200,
          })}
          placeholder="Your message..."
          disabled={isSubmitting}
          className="block w-full rounded-lg border-0 bg-gray-50 py-2 pl-3 pr-28 placeholder-gray-400 focus:bg-white
        focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-gray-300
        dark:focus:bg-gray-900 dark:focus:ring-indigo-500 sm:pr-32"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-white-500 absolute top-[2px] right-[2px] flex w-24 items-center justify-center rounded-md
        bg-gray-200 px-4 py-2 font-semibold leading-5 text-gray-900 transition-colors hover:bg-gray-300
        focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-blue-400 focus-visible:ring-offset-2
        disabled:bg-gray-100 disabled:text-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600
        dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-gray-800 dark:disabled:bg-gray-900
        dark:disabled:text-gray-400 sm:w-28"
        >
          Sign
          {isSubmitting && <LoadingSpinner className="ml-2 block h-4 w-4 animate-spin" />}
        </button>
      </form>
      <span className="block text-sm font-semibold text-red-500 dark:text-red-400 mt-2">
        {errors.body?.message}
      </span>
    </>
  )
}

function LogInWithGithub() {
  return (
    <button
      className="focus:ring-3 flex shrink-0 items-center rounded-xl border border-gray-800 bg-gray-800 px-4 py-2
      text-white hover:bg-gray-700 dark:hover:border-gray-400"
      onClick={() => signIn('github')}
      type="button"
    >
      <Github className="mr-2 inline-block h-auto w-5 fill-white" /> Sign in with GitHub
    </button>
  )
}

function GuestbookBody() {
  const { status } = useSession()

  if (status === 'loading') {
    return <LoadingSpinner className="my-2 inline-block h-5 w-auto animate-spin" />
  }

  if (status === 'unauthenticated') return <LogInWithGithub />

  return <GuestbookForm />
}

function Entry({ entry }: { entry: GuestbookEntry }) {
  const { mutate } = useSWRConfig()
  const { data } = useSession()

  const handleDelete = async () => {
    await fetch(`/api/guestbook/${entry.id}`, {
      method: 'DELETE',
    })
    await mutate('/api/guestbook')
  }

  return (
    <div className="p-6 dark:border-gray-700">
      <p className="text-gray-900 dark:text-gray-300">{entry.body}</p>
      <div className="sm:flex sm:justify-between sm:items-center">
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          <span>{entry.created_by}</span> &middot;{' '}
          <time dateTime={entry.updated_at}>
            {new Date(entry.updated_at).toLocaleDateString('en', {
              month: 'short',
              day: '2-digit',
              year: 'numeric',
            })}
          </time>
        </p>
        {data?.user?.email === entry.email && (
          <button
            type="button"
            onClick={handleDelete}
            className="text-gray-500 text-sm font-semibold inline-block p-1 -ml-1.5 hover:bg-red-200 hover:text-red-800 rounded-full mt-2 sm:m-0 transition-colors"
          >
            <TrashIcon className="h-5" />
          </button>
        )}
      </div>
    </div>
  )
}

function GuestbookEntries() {
  const { data: entries } = useSWR<GuestbookEntry[]>('/api/guestbook', fetcher)

  return (
    <div className="grid grid-cols-1 divide-y bg-white rounded-xl shadow dark:bg-gray-800 dark:shadow-black/50">
      {entries?.map((entry) => (
        <Entry key={entry.id} entry={entry} />
      ))}
    </div>
  )
}

export default function Guestbook({ fallback }: { fallback: { string: GuestbookEntry[] } }) {
  return (
    <Container title="Guestbook – Kevin Zuniga Cuellar">
      <Header title="Guestbook" icon={<AnnotationIcon />} />
      <section
        className="mb-8 rounded-xl border border-blue-200 bg-blue-100 p-6 dark:border-indigo-500
       dark:bg-indigo-800/90"
      >
        <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          Sign the Guestbook
        </h2>
        <p className="mb-4 leading-7 text-gray-600 dark:text-blue-200">
          Feel free to share a message with a future visitor or tell me what you like the most about
          my website.
        </p>
        <GuestbookBody />
      </section>
      <SWRConfig value={{ fallback }}>
        <GuestbookEntries />
      </SWRConfig>
      <Toaster />
    </Container>
  )
}

export async function getStaticProps() {
  const entries = await prisma.guestbook.findMany({
    orderBy: {
      created_at: 'desc',
    },
  })
  const initialEntries = entries.map((entry) => ({
    id: entry.id.toString(),
    body: entry.body,
    created_by: entry.created_by.toString(),
    updated_at: entry.updated_at.toString(),
    email: entry.email,
  }))

  return {
    props: {
      fallback: {
        '/api/guestbook': initialEntries,
      },
    },
  }
}
