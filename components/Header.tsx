import { ReactNode } from 'react';
import BubbleIcon from 'components/BubbleIcon';

interface HeaderProps {
  title: string;
  svg: ReactNode;
}

export default function Header({ title, svg }: HeaderProps) {
  return (
    <header className="mb-8 flex items-center space-x-4 text-gray-800 dark:text-white md:mb-10">
      <BubbleIcon
        svg={svg}
        className="flex h-12 w-12 items-center justify-center rounded-xl bg-white p-2 text-gray-400/80 shadow-sm dark:bg-gray-800 dark:text-gray-600 dark:shadow-black/50"
      />
      <h1 className="text-3xl font-semibold">{title}</h1>
    </header>
  );
}
