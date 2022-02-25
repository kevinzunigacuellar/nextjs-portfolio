import Book from "components/Book";
import Container from "components/Container";
import type { NextPage } from "next";
import Header from "components/Header";
import { BookOpenIcon } from "@heroicons/react/outline";
import books from "content/books.json";
const Bookshelf: NextPage = () => {
  return (
    <Container title="Bookshelf - Kevin Zuniga Cuellar">
      <Header title="Bookshelf" svg={<BookOpenIcon />} />
      <ul className="grid grid-cols-1 justify-items-center gap-10 md:justify-items-start">
        {books.map(({ id, ...bookProps }) => (
          <Book key={id} {...bookProps} />
        ))}
      </ul>
    </Container>
  );
};

export default Bookshelf;
