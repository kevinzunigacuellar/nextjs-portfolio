import { ReactNode } from "react";
import BubbleIcon from "components/BubbleIcon";
interface HeaderProps {
  title: string;
  svg: ReactNode;
}

export default function Header({ title, svg }: HeaderProps) {
  return (
    <header className="flex items-center space-x-6 pb-8 text-gray-800 dark:text-white md:pb-10">
      <BubbleIcon
        svg={svg}
        className="flex h-14 w-14 items-center justify-center rounded-2xl border p-2 text-gray-400 shadow-sm dark:border-gray-700/80 dark:bg-gray-800 dark:text-gray-500"
      />
      <h1 className="text-3xl font-semibold">{title}</h1>
    </header>
  );
}
