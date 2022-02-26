import { useSession, signIn, signOut } from 'next-auth/react';
import LoadingSpinner from 'components/LoadingSpinner';
import Github from 'components/icons/Github';

function LogInOutButton() {
  const { status } = useSession();

  const handleClick = async () => {
    if (status === 'authenticated') await signOut({ redirect: false });
    if (status === 'unauthenticated') await signIn('github');
  };

  if (status === 'loading') return <LoadingSpinner />;

  return (
    <button
      className="dark:bg-bg-700 focus:shadow-outline text-whitee flex shrink-0 items-center rounded-full bg-gray-900 px-4 py-1 font-medium text-white"
      onClick={handleClick}
      type="button"
    >
      {status === 'authenticated' ? (
        'Sign out'
      ) : (
        <>
          <Github className="mr-2 inline-block h-auto w-4 fill-white" />
          {' '}
          Sign in
          with GitHub
        </>
      )}
    </button>
  );
}

export default LogInOutButton;
