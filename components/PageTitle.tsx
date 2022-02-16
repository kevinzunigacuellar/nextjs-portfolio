export default function PageTitle({ children }: { children: string }) {
  return (
    <h1 className="pb-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:pb-10 md:text-5xl">
      {children}
    </h1>
  );
}
