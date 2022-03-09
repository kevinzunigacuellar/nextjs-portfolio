import { ReactNode } from 'react'

export default function Skill({
  icon,
  name,
  href,
}: {
  icon: ReactNode
  name: string
  href: string
}) {
  return (
    <a
      className="group flex items-center space-x-3 rounded-xl p-2 transition-colors hover:bg-gray-50
      dark:hover:bg-gray-800/40"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-2 shadow dark:border-0
        dark:border-t dark:border-gray-700 dark:bg-gray-800"
      >
        {icon}
      </span>
      <p
        className="font-normal text-gray-600 group-hover:text-gray-900 dark:text-gray-400
      dark:group-hover:text-gray-300"
      >
        {name}
      </p>
    </a>
  )
}
