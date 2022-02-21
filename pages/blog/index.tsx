import Container from "components/Container";
import Header from "components/Header";
import type { NextPage } from "next";
import { PencilIcon } from "@heroicons/react/outline";
const Blog: NextPage = () => {
  return (
    <Container>
      <Header title="Blog" svg={<PencilIcon />} />
      <p>Under construction</p>
    </Container>
  );
};

export default Blog;
