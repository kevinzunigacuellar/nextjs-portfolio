import Book from "components/Book";
import eloquentJavaScript from "public/images/books/eloquent-javascript.jpg";
import AprendiendoGit from "public/images/books/aprendiendo-git.png";
import Container from "components/Container";
import type { NextPage } from "next";

const Bookshelf: NextPage = () => {
  return (
    <Container pageTitle="Bookshelf" title="Bookshelf - Kevin Zuniga Cuellar">
      <ul className="grid grid-cols-1 justify-items-center md:justify-items-start gap-10">
        <Book
          title="Eloquent JavaScript"
          author="Marijn Haverbeke"
          comment="One of the best JavaScript books I have ever read. Even tough I finish this book a while ago. I still keep a hard copy in bookshelf to keep me always in day one mode."
          img={eloquentJavaScript}
          year={2018}
        />
        <Book
          title="Aprendiendo Git"
          author="Miguel Ángel Duran"
          comment="I bought this book on presale to support one of my favorites twitch streamers. I highly recommend it regardless of your knowledge of git."
          img={AprendiendoGit}
          year={2021}
        />
      </ul>
    </Container>
  );
};

export default Bookshelf;
