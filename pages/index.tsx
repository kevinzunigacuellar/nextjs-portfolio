import Container from "components/Container";
import Image from "next/image";
import profilePic from "public/images/me.jpg";
import TypeScript from "components/icons/TypeScript";
import TailwindCSS from "components/icons/TailwindCSS";
import PlanetScale from "components/icons/PlanetScale";
import Nextjs from "components/icons/Nextjs";
import Prisma from "components/icons/Prisma";
import ReactLogo from "components/icons/ReactLogo";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container>
      <section className="mb-10 sm:flex sm:items-center sm:justify-between">
        <div className="order-2 block h-auto w-44 overflow-hidden rounded-full sm:m-0">
          <Image
            className="aspect-square h-full w-full"
            src={profilePic}
            alt="Picture of the author"
            placeholder="blur"
            layout="responsive"
          />
        </div>
        <header className="mt-6 max-w-lg sm:my-0 lg:max-w-none">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Kevin Zuniga Cuellar
          </h1>
          <h2 className="mb-4 text-gray-900 dark:text-gray-300">
            Graduate Research Assistant at University of Vermont
          </h2>
          <p className="w-full font-normal leading-7 text-gray-600 dark:text-gray-400 sm:max-w-sm md:max-w-xl">
            Welcome to my slice of the internet. I am a graduate student in
            mechanical engineering at University of Vermont. In my free time I
            enjoy making websites and experimenting with web app technologies
          </p>
        </header>
      </section>
      <section>
        <h2 className="mb-6 text-2xl font-semibold dark:text-white">
          Favorite Technologies
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2">
          <Skill name="TypeScript">
            <TypeScript className="m-0.5 h-auto w-full rounded" />
          </Skill>
          <Skill name="TailwindCSS">
            <TailwindCSS className="h-auto w-full" />
          </Skill>
          <Skill name="Next.js">
            <Nextjs className="h-auto w-full fill-current stroke-current text-gray-900 dark:text-white" />
          </Skill>
          <Skill name="PlanetScale">
            <PlanetScale className="h-auto w-full rounded fill-transparent stroke-gray-900 dark:stroke-gray-200" />
          </Skill>
          <Skill name="Prisma">
            <Prisma className="m-1 h-auto w-full" />
          </Skill>
          <Skill name="React">
            <ReactLogo className="h-auto w-full" />
          </Skill>
        </div>
      </section>
    </Container>
  );
};

export default Home;

const Skill = ({ children, name }: { children: JSX.Element; name: string }) => {
  return (
    <div className="flex items-center space-x-3 rounded-lg">
      <span className="flex h-12 w-12 items-center justify-center rounded-full border p-2 shadow-sm dark:border-gray-700/80 dark:bg-gray-800">
        {children}
      </span>
      <p className="font-normal text-gray-700 dark:text-gray-300">{name}</p>
    </div>
  );
};
