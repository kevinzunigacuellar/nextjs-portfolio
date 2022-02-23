import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import rehypePrismPlus from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
const POSTS_PATH = path.join(process.cwd(), "posts");

const getMdxSource = (file: string) => {
  return fs.readFileSync(path.join(POSTS_PATH, file), "utf8");
};

export const getPosts = () => {
  return fs
    .readdirSync(path.join(POSTS_PATH))
    .filter((path) => /\.mdx?$/.test(path))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const mdxSource = getMdxSource(file);
      const { data } = matter(mdxSource);

      return {
        frontmatter: data,
        slug: slug,
      };
    });
};

export const getPost = async (slug: string) => {
  const mdxSource = getMdxSource(slug + ".mdx");
  const result = await bundleMDX({
    source: mdxSource,
    xdmOptions(options, frontmatter) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        // rehypeSlug,
        // rehypeAutolinkHeadings,
        rehypeCodeTitles,
        // [rehypeCitation, { path: path.join(root, "data") }],
        [rehypePrismPlus, { ignoreMissing: true }],
        // rehypePresetMinify,
      ];
      return options;
    },
  });
  const { code, frontmatter } = result;
  return {
    frontmatter,
    code,
  };
};

export const getPaths = () => {
  const paths = fs
    .readdirSync(path.join(POSTS_PATH))
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      return { params: { slug } };
    });
  return paths;
};
