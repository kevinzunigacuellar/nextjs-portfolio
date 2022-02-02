import Container from "components/Container";
import Image from "next/image";
import profilePic from "public/images/me.jpg";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container>
      <section className="pb-10 sm:flex sm:items-center sm:justify-between">
        <div className="max-w-sm sm:m-0 order-2">
          <div className="block w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden">
            <Image
              className="w-full h-full aspect-square"
              src={profilePic}
              alt="Picture of the author"
              placeholder="blur"
              layout="responsive"
            />
          </div>
        </div>
        <header>
          <div className="my-6 sm:my-4">
            <h1 className="font-bold mb-2 text-gray-900 tracking-tight text-3xl sm:text-4xl dark:text-white">
              Kevin Zuniga Cuellar
            </h1>
            <h2 className="py-1.5 max-w-lg font-medium text-gray-700 dark:text-gray-300">
              Graduate Research Assistant at University of Vermont
            </h2>
          </div>
          <p className="w-full font-normal leading-7 text-gray-600 sm:max-w-sm md:max-w-xl dark:text-gray-400">
            Welcome to my slice of the internet. I am a graduate student in
            mechanical engineering at University of Vermont. In my free time I
            enjoy making websites and experimenting with web app technologies
          </p>
        </header>
      </section>
    </Container>
  );
};

export default Home;
