import { ReactNode } from 'react'

interface skillProps {
  name: string
  icon: ReactNode
}

export default function Skill({ icon, name }: skillProps) {
  return (
    <a className="flex items-center space-x-3 rounded-xl p-2">
      <span
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-2 shadow dark:border-0
        dark:border-t dark:border-gray-700 dark:bg-gray-800"
      >
        {icon}
      </span>
      <p className="text-gray-600 dark:text-gray-400">{name}</p>
    </a>
  )
}
