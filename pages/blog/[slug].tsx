import { getPost, getPaths } from 'lib/mdx';
import { GetStaticPaths, GetStaticProps } from 'next';
import Container from 'components/Container';
import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';
import Image from 'next/image';

interface frontmatterProps {
  title: string;
  date: string;
  description: string;
  slug: string;
}

function RoundedImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
      <Image src={src} alt={alt} layout="fill" className="absolute" />
    </div>
  );
}

export default function Post({
  code,
  frontmatter,
}: {
  code: string;
  frontmatter: frontmatterProps;
}) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <Container
      title={frontmatter.title}
      description={frontmatter.description}
      date={frontmatter.date}
    >
      <main className="prose max-w-none prose-a:text-blue-600 prose-pre:bg-white prose-pre:text-gray-700
      dark:prose-invert dark:prose-a:text-blue-500 dark:prose-pre:bg-gray-800 dark:prose-pre:text-gray-300 lg:prose-lg"
      >
        <Component components={{ Image: RoundedImage }} />
      </main>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const post = await getPost(slug);
  return {
    props: { ...post },
  };
};
