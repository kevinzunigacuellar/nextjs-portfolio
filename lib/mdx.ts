/* eslint-disable no-param-reassign */
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'

const POSTS_PATH = path.join(process.cwd(), 'posts')

const getMdxSource = (file: string) => fs.readFileSync(path.join(POSTS_PATH, file), 'utf8')

export const getPosts = () =>
  fs
    .readdirSync(path.join(POSTS_PATH))
    .filter((postPath) => /\.mdx?$/.test(postPath))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, '')
      const mdxSource = getMdxSource(file)
      const { data } = matter(mdxSource)

      return {
        frontmatter: data,
        slug,
      }
    })

export const getPost = async (slug: string) => {
  const mdxSource = getMdxSource(`${slug}.mdx`)
  const result = await bundleMDX({
    source: mdxSource,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeCodeTitles,
        [rehypePrismPlus, { ignoreMissing: true }],
      ]
      return options
    },
  })
  const { code, frontmatter } = result
  return {
    frontmatter,
    code,
  }
}

export const getPaths = () => {
  const paths = fs
    .readdirSync(path.join(POSTS_PATH))
    .filter((filePath) => /\.mdx?$/.test(filePath))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '')
      return { params: { slug } }
    })
  return paths
}
