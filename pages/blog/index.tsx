import Container from 'components/Container';
import Header from 'components/Header';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { PencilIcon } from '@heroicons/react/outline';
import { getPosts } from 'lib/mdx';

interface frontmatter {
  title: string;
  date: string;
  description: string;
  slug: string;
}

function Blog({ posts }: { posts: [] }) {
  return (
    <Container title="Blog – Kevin Zuniga Cuellar">
      <Header title="Blog" icon={<PencilIcon />} />
      <div className="grid grid-cols-1 gap-5">
        {posts.map((post: frontmatter) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <a className="group block rounded-xl bg-white p-6 leading-relaxed text-gray-600 shadow hover:shadow-md
            dark:bg-gray-800 dark:text-gray-400 dark:shadow-black/40 transition-shadow duration-300"
            >
              <h2 className="text-lg inline-block font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text
              group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-pink-500 dark:text-white"
              >
                {post.title}
              </h2>
              <time dateTime={post.date} className="text-gray-500 dark:text-gray-400 text-sm block">
                {new Date(post.date).toLocaleDateString('en', {
                  month: 'long',
                  day: '2-digit',
                  year: 'numeric',
                })}
              </time>
              <p className="mt-2">{post.description}</p>
            </a>
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts().map((post) => post.frontmatter);
  return {
    props: { posts },
  };
};
