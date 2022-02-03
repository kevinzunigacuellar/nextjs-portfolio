import Container from "components/Container";
import LogInOutButton from "components/LogInOutButton";
import LoadingSpinner from "components/LoadingSpinner";
import { useSession, signIn } from "next-auth/react";
import Github from "components/icons/Github";

import type { NextPage } from "next";
const Guestbook: NextPage = () => {
  const { data: session } = useSession();
  return (
    <Container pageTitle="Guestbook" title="Guestbook - Kevin Zuniga Cuellar">
      <section className="mb-10 rounded-xl border border-blue-200 bg-blue-100 p-6 dark:border-blue-600 dark:bg-blue-900 ">
        <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          Sign the Guestbook
        </h2>
        <p className="mb-4 leading-7 text-gray-600 dark:text-blue-200">
          Feel free to share a message with a future visitor or tell me what you
          like the most about my website.
        </p>
        {session ? (
          <form className="relative">
            <input
              type="text"
              placeholder="Your message..."
              className="block w-full rounded-lg border border-slate-300 bg-white py-2 pl-3 pr-28 placeholder-slate-400 shadow-sm invalid:border-pink-500
                      invalid:text-pink-600 focus:border-blue-500 focus:outline-none focus:ring-2
                        focus:ring-blue-300 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200
                      disabled:bg-slate-50 disabled:text-slate-500
                      disabled:shadow-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:focus:border-blue-400 dark:focus:ring-blue-600 sm:pr-32"
            />
            <button
              className="bg-white-500 absolute bottom-[3px] right-[3px] flex w-24 items-center justify-center rounded-md bg-gray-200 px-4 py-2 font-semibold leading-5 text-gray-900 transition-colors hover:bg-gray-300 focus:outline-none  focus:ring-2
                        focus:ring-blue-400 focus:ring-offset-1 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800 sm:w-28"
            >
              Sign
              <LoadingSpinner />
            </button>
          </form>
        ) : (
          <button
            className="dark:bg-bg-700 focus:ring-3 flex shrink-0 items-center rounded-lg bg-gray-900 px-4 py-2 font-medium text-white hover:bg-gray-800"
            onClick={() => signIn("github")}
          >
            <Github className="mr-2 inline-block h-auto w-5 fill-white" /> Sign
            in with GitHub
          </button>
        )}
      </section>
      <LogInOutButton />
    </Container>
  );
};

export default Guestbook;
