import Container from 'components/Container';
import Image from 'next/image';
import profilePic from 'public/images/me.jpg';
import Skill from 'components/Skill';
import skills from 'content/skills';

export default function Home() {
  return (
    <Container>
      <section className="mb-10 sm:flex sm:items-center sm:justify-between">
        <div className="order-2 block h-auto w-40 overflow-hidden rounded-full sm:m-0">
          <Image
            className="aspect-square h-full w-full"
            src={profilePic}
            alt="Picture of the author"
            placeholder="blur"
            layout="responsive"
          />
        </div>
        <header className="mt-6 max-w-lg sm:my-0">
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
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ id, ...rest }) => (
            <Skill
              key={id}
              {...rest}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}
