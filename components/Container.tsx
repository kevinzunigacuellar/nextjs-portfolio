import Head from "next/head";
import { useRouter } from "next/router";

interface ContainerProps {
  title?: string;
  description?: string;
  image?: string;
  children: React.ReactNode;
  date?: string;
  pageTitle?: string;
}

const defaultMeta = {
  title: "Kevin Zuniga Cuellar",
  description:
    "Front-end developer, JavaScript enthusiast, and a passionate learner.",
  image: "https://leerob.io/static/images/me.jpg",
};

const Container = ({
  children,
  title,
  description,
  image,
  date,
  pageTitle,
}: ContainerProps & typeof defaultMeta) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={description} name="description" />
        <meta
          property="og:url"
          content={`https://kevinzunigacuellar.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://kevinzunigacuellar.com${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Kevin Zuniga Cuellar" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kevinzunigacuel" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        {date && <meta property="article:published_time" content={date} />}
      </Head>
      <main className="bg-white dark:bg-gray-900/95 min-h-screen w-screen transition-colors">
        <div className="max-w-4xl mx-auto px-6 pb-24 py-20">
          {pageTitle && (
            <h1 className="pb-8 md:pb-10 font-bold tracking-tight text-gray-900 text-3xl sm:text-4xl md:text-5xl dark:text-white">
              {pageTitle}
            </h1>
          )}
          {children}
        </div>
      </main>
    </>
  );
};

Container.defaultProps = defaultMeta;

export default Container;
