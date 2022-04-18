import Container from 'components/Container'
import Image from 'next/image'
import profilePic from 'public/images/me.jpeg'
import Skill from 'components/Skill'
import skills from 'content/skills'

export default function Home() {
  return (
    <Container>
      <section className="mb-10 sm:flex sm:items-center sm:justify-between">
        <Image
          className="aspect-square rounded-full"
          src={profilePic}
          alt="Picture of the author"
          placeholder="blur"
          width={160}
          height={160}
          quality={85}
        />
        <header className="mt-6 max-w-lg sm:my-0 sm:order-first">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Kevin Zuniga Cuellar
          </h1>
          <h2 className="mb-4 text-gray-900 dark:text-gray-300">
            Graduate Research Assistant at the University of Vermont
          </h2>
          <p className="w-full font-normal leading-7 text-gray-600 dark:text-gray-400 sm:max-w-sm md:max-w-xl">
            Welcome to my slice of the internet! I am a graduate student in mechanical engineering.
            In my free time I enjoy making websites and experimenting with web app technologies.
          </p>
        </header>
      </section>
      <section>
        <h2 className="mb-6 text-2xl font-semibold dark:text-white">Favorite Technologies</h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ id, ...props }) => (
            <Skill key={id} {...props} />
          ))}
        </ul>
      </section>
    </Container>
  )
}
