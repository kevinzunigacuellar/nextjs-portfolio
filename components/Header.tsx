import { ReactNode } from 'react'

interface HeaderProps {
  title: string
  icon: ReactNode
}

export default function Header({ title, icon }: HeaderProps) {
  return (
    <header className="mb-8 flex items-center space-x-4 text-gray-800 dark:text-white md:mb-10">
      <span
        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm p-2 text-gray-500/80
      dark:bg-gray-800 dark:text-gray-500"
      >
        {icon}
      </span>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
    </header>
  )
}
