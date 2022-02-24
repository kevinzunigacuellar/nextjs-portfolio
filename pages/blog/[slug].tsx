import { getPost, getPaths } from "lib/mdx";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "components/Container";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import Image from "next/image";

interface frontmatter {
  title: string;
  date: string;
  description: string;
  slug: string;
}

const Post = ({
  code,
  frontmatter,
}: {
  code: string;
  frontmatter: frontmatter;
}) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <Container
      title={frontmatter.title}
      description={frontmatter.description}
      date={frontmatter.date}
    >
      <main className="prose max-w-none prose-a:text-blue-600 prose-pre:bg-gray-100 prose-pre:text-gray-700 dark:prose-invert dark:prose-a:text-blue-500 dark:prose-pre:bg-gray-800 dark:prose-pre:text-gray-300 lg:prose-lg">
        <Component components={{ Image: RoundedImage }} />
      </main>
    </Container>
  );
};

export default Post;

const RoundedImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
      <Image src={src} alt={alt} layout="fill" className="absolute" />
    </div>
  );
};

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
