import TypeScript from 'components/icons/TypeScript';
import TailwindCSS from 'components/icons/TailwindCSS';
import ReactLogo from 'components/icons/ReactLogo';
import Nextjs from 'components/icons/Nextjs';
import PlanetScale from 'components/icons/PlanetScale';
import Prisma from 'components/icons/Prisma';

const skills = [
  {
    id: 1,
    name: 'TypeScript',
    href: 'https://www.typescriptlang.org',
    icon: <TypeScript className="m-0.5 h-auto w-full rounded" />,
  },
  {
    id: 2,
    name: 'Tailwind CSS',
    href: 'https://tailwindcss.com',
    icon: <TailwindCSS className="h-auto w-full" />,
  },
  {
    id: 3,
    name: 'React',
    href: 'https://reactjs.org',
    icon: <ReactLogo className="h-auto w-full" />,
  },
  {
    id: 4,
    name: 'Next.js',
    href: 'https://nextjs.org',
    icon: <Nextjs className="h-auto w-full fill-current stroke-current text-gray-900 dark:text-white" />,
  },
  {
    id: 5,
    name: 'PlanetScale',
    href: 'https://planetscale.com/',
    icon: <PlanetScale className="h-auto w-full rounded fill-transparent stroke-gray-900 dark:stroke-gray-200" />,
  },
  {
    id: 6,
    name: 'Prisma',
    href: 'https://www.prisma.io/',
    icon: <Prisma className="m-1 h-auto w-full" />,
  },
];

export default skills;
