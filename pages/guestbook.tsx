/* eslint-disable react/no-unused-prop-types */
import { useForm, SubmitHandler } from 'react-hook-form'
import { useSession, signIn } from 'next-auth/react'
import useSWR, { useSWRConfig } from 'swr'
import toast, { Toaster } from 'react-hot-toast'
import Container from 'components/Container'
import LoadingSpinner from 'components/LoadingSpinner'
import Github from 'components/icons/Github'
import fetcher from 'lib/fetcher'
import Header from 'components/Header'
import { AnnotationIcon } from '@heroicons/react/outline'

type Inputs = {
  body: string
}

interface GuestbookEntry {
  id: string
  body: string
  created_by: string
  updated_at: string
}

interface EntryProps {
  message: string
  author: string
  date: string
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
        dark:focus:bg-gray-800 dark:focus:ring-indigo-500 sm:pr-32"
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
      <span className="text-xs font-medium text-red-600 dark:text-cyan-400">
        {errors.body?.message}
      </span>
    </form>
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

function Entry({ message, author, date }: EntryProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800 dark:shadow-black/50">
      <p className="text-gray-900 dark:text-gray-300">{message}</p>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        <span>{author}</span> &middot;{' '}
        <time dateTime={date}>
          {new Date(date).toLocaleDateString('en', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          })}
        </time>
      </p>
    </div>
  )
}

function EntryPlaceholder() {
  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="flex h-24 w-full animate-pulse flex-col space-y-3 rounded-xl bg-white p-6 dark:bg-gray-800">
        <div className="h-5 w-4/5 rounded-lg bg-gray-300 dark:bg-gray-700" />
        <div className="h-5 w-1/2 rounded-lg bg-gray-300 dark:bg-gray-700" />
      </div>
      <div className="flex h-24 w-full animate-pulse flex-col space-y-3 rounded-xl bg-white p-6 dark:bg-gray-800">
        <div className="h-5 w-4/5 rounded-lg bg-gray-300 dark:bg-gray-700" />
        <div className="h-5 w-1/2 rounded-lg bg-gray-300 dark:bg-gray-700" />
      </div>
    </div>
  )
}

function GuestbookEntries() {
  const { data: entries } = useSWR<GuestbookEntry[]>('/api/guestbook', fetcher)
  if (entries === undefined) return <EntryPlaceholder />
  return (
    <div className="grid grid-cols-1 gap-6">
      {entries.map(({ id, body, created_by: createdBy, updated_at: updatedAt }: GuestbookEntry) => (
        <Entry message={body} author={createdBy} date={updatedAt} key={id} />
      ))}
    </div>
  )
}

export default function Guestbook() {
  return (
    <Container title="Guestbook – Kevin Zuniga Cuellar">
      <Header title="Guestbook" icon={<AnnotationIcon />} />
      <section
        className="mb-10 rounded-xl border border-blue-200 bg-blue-100 p-6 dark:border-indigo-500
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
      <GuestbookEntries />
      <Toaster />
    </Container>
  )
}
