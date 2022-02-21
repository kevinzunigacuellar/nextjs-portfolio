import Container from "components/Container";
import Header from "components/Header";
import type { NextPage } from "next";
import { UserCircleIcon } from "@heroicons/react/outline";

const About: NextPage = () => {
  return (
    <Container>
      <Header title="About" svg={<UserCircleIcon />} />
      <p>Under construction</p>
    </Container>
  );
};

export default About;
