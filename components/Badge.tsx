export default function Badge({
  text,
  color,
}: {
  text: string
  color: 'blue' | 'red' | 'green' | 'indigo'
}) {
  const colors = {
    blue: 'bg-blue-200 text-blue-800 dark:bg-blue-700 dark:text-blue-200',
    red: 'bg-red-200 text-red-800 dark:bg-red-700 dark:text-red-200',
    green: 'bg-green-200 text-green-800 dark:bg-green-700 dark:text-green-200',
    indigo: 'bg-indigo-200 text-indigo-800 dark:bg-indigo-700 dark:text-indigo-200',
  }
  return (
    <span
      className={`${colors[color]} inline-block rounded-full px-2 py-0.5 text-xs font-bold uppercase tracking-normal`}
    >
      {text}
    </span>
  )
}
