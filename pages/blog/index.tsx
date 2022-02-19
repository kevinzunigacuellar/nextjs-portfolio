import Container from "components/Container";
import Header from "components/Header";
import type { NextPage } from "next";
import { PencilIcon } from "@heroicons/react/outline";
const Blog: NextPage = () => {
  return (
    <Container>
      <Header title="Blog" svg={<PencilIcon />} />
      <h1>Hello Next.js</h1>
    </Container>
  );
};

export default Blog;
