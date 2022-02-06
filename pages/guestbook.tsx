import Container from "components/Container";
import LoadingSpinner from "components/LoadingSpinner";
import { useSession, signIn } from "next-auth/react";
import Github from "components/icons/Github";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  message: string;
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

import type { NextPage } from "next";
const Guestbook: NextPage = () => {
  const { status } = useSession();

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
        {status === "loading" && <LoadingSpinner />}
        {status === "authenticated" && <GuestbookForm />}
        {status === "unauthenticated" && <LogInWithGithub />}
      </section>
    </Container>
  );
};

export default Guestbook;

const GuestbookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await sleep(2000);
    console.log(data);
  };
  return (
    <form className="relative" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register("message", {
          required: "Don't forget to write something",
          maxLength: 200,
        })}
        placeholder="Your message..."
        disabled={isSubmitting}
        className="block w-full rounded-lg border border-slate-300 bg-white py-2 pl-3 pr-28 placeholder-slate-400 shadow-sm invalid:border-pink-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:focus:border-blue-400 dark:focus:ring-blue-600 sm:pr-32"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-white-500 absolute top-[3px] right-[3px] flex w-24 items-center justify-center rounded-md bg-gray-200 px-4 py-2 font-semibold leading-5 text-gray-900 transition-colors hover:bg-gray-300 focus:outline-none  focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800 sm:w-28"
      >
        Sign
        {isSubmitting && <LoadingSpinner />}
      </button>
      <span className="text-sm font-medium text-indigo-600 dark:text-white">
        {errors.message?.message}
      </span>
    </form>
  );
};

const LogInWithGithub = () => {
  return (
    <button
      className="dark:bg-bg-700 focus:ring-3 flex shrink-0 items-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-white hover:bg-gray-700"
      onClick={() => signIn("github")}
    >
      <Github className="mr-2 inline-block h-auto w-5 fill-white" /> Sign in
      with GitHub
    </button>
  );
};
