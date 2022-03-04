import Image from 'next/image';
import Container from 'components/Container';
import BlogLayout from 'layouts/BlogLayout';
import { getPost, getPaths } from 'lib/mdx';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';

interface frontmatterProps {
  title: string;
  date: string;
  description: string;
  slug: string;
}

function RoundedImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="relative aspect-video w-full overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        placeholder="blur"
        className="absolute"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsyQYAAWkA6VFHKYUAAAAASUVORK5CYII="
      />
    </figure>
  );
}

export default function Post({ code, frontmatter }:
  { code: string, frontmatter: frontmatterProps }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <Container
      title={frontmatter.title}
      description={frontmatter.description}
      date={frontmatter.date}
    >
      <BlogLayout title={frontmatter.title} date={frontmatter.date}>
        <Component components={{ Image: RoundedImage }} />
      </BlogLayout>
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
