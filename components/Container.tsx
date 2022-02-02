import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface ContainerProps {
  title?: string;
  description?: string;
  image?: string;
  children: ReactNode;
  date?: string;
  pageTitle?: string;
}

const defaultMeta = {
  title: "Kevin Zuniga Cuellar",
  description:
    "Front-end developer, TypeScript enthusiast, and a passionate learner.",
  image: "https://kevinzunigacuellar.com/static/images/me.jpg",
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
      {pageTitle && (
        <h1 className="pb-8 md:pb-10 font-bold tracking-tight text-gray-900 text-4xl md:text-5xl dark:text-white">
          {pageTitle}
        </h1>
      )}
      {children}
    </>
  );
};

Container.defaultProps = defaultMeta;

export default Container;
