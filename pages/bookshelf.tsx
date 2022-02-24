import Book from "components/Book";
import eloquentJavaScript from "public/images/books/eloquent-javascript.jpg";
import aprendiendoGit from "public/images/books/aprendiendo-git.png";
import computerScienceDistilled from "public/images/books/cs-distilled.jpg";
import reactExplained from "public/images/books/react-explained.jpg";
import refactoringUI from "public/images/books/refactoring-ui.jpg";
import Container from "components/Container";
import type { NextPage } from "next";
import Header from "components/Header";
import { BookOpenIcon } from "@heroicons/react/outline";

const Bookshelf: NextPage = () => {
  return (
    <Container title="Bookshelf - Kevin Zuniga Cuellar">
      <Header title="Bookshelf" svg={<BookOpenIcon />} />
      <ul className="grid grid-cols-1 justify-items-center gap-10 md:justify-items-start">
        <Book
          title="Computer Science Distilled"
          author="Wladston Ferreira Filho"
          comment="So far loving this book, It illustrates the concepts of data structure and algorithms in a fun and easy way."
          img={computerScienceDistilled}
          year={2017}
          status="reading"
        />
        <Book
          title="Eloquent JavaScript"
          author="Marijn Haverbeke"
          comment="One of the best JavaScript books I have ever read. Even tough I finish this book a while ago. I still keep a hard copy in bookshelf to keep me always in day one mode."
          img={eloquentJavaScript}
          year={2018}
        />
        <Book
          title="Refactoring UI"
          author="Adam Whatan and Steve Schoger"
          comment="I absolutely loved this book. It improved my UI design skills a thousand times. This is a must have for every front-end developer."
          img={refactoringUI}
          year={2019}
        />
        <Book
          title="Aprendiendo Git"
          author="Miguel Ángel Duran"
          comment="I bought this book on presale to support one of my favorites twitch streamers. I highly recommend it regardless of your knowledge of git."
          img={aprendiendoGit}
          year={2021}
        />
        <Book
          title="React Explained"
          author="Zac Gordon"
          comment="I had high expectations for this book given the popularity of React. I did't like the order of the topics and the content was not updated for 2018. I think React is better understood by doing and there is lots of content online. Don't waste your time reading this book."
          img={reactExplained}
          year={2018}
        />
      </ul>
    </Container>
  );
};

export default Bookshelf;
