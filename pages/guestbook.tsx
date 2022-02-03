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
      <section className="rounded-xl border border-blue-200 bg-blue-100 p-6 dark:border-blue-700 dark:bg-blue-900">
        <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          Sign the Guestbook
        </h2>
        <p className="mb-4 leading-7 text-gray-600 dark:text-blue-200">
          Feel free to share a message with a future visitor or tell me your
          favorite thing about this site
        </p>
        {session ? (
          <form className="relative">
            <input
              type="text"
              placeholder="Your message..."
              className="block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm
                      invalid:border-pink-500 invalid:text-pink-600 focus:border-blue-500 focus:outline-none
                        focus:ring-2 focus:ring-blue-300 focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                      disabled:border-slate-200 disabled:bg-slate-50
                      disabled:text-slate-500 disabled:shadow-none"
            />
            <button className="absolute bottom-[3px] right-[3px] flex items-center justify-center rounded-lg bg-blue-500 px-8 py-2 font-semibold leading-5 text-white transition-colors hover:bg-blue-600 dark:bg-blue-600">
              Sign
              <LoadingSpinner />
            </button>
          </form>
        ) : (
          <button
            className="dark:bg-bg-700 focus:shadow-outline text-whitee flex shrink-0 items-center rounded-full bg-gray-900 px-4 py-1 font-medium text-white"
            onClick={() => signIn("github")}
          >
            <Github className="mr-2 inline-block h-auto w-4 fill-white" /> Sign
            in with GitHub
          </button>
        )}
      </section>
      <LogInOutButton />
    </Container>
  );
};

export default Guestbook;
