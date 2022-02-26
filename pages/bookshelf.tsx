import Book from 'components/Book';
import Container from 'components/Container';
import Header from 'components/Header';
import { BookOpenIcon } from '@heroicons/react/outline';
import books from 'content/books.json';

export default function Bookshelf() {
  return (
    <Container title="Bookshelf - Kevin Zuniga Cuellar">
      <Header title="Bookshelf" svg={<BookOpenIcon />} />
      <ul className="grid grid-cols-1 justify-items-center gap-10 md:justify-items-start">
        {books.map(({
          id, title, comment, year, author, img, reading,
        }) => (
          <Book
            key={id}
            title={title}
            comment={comment}
            year={year}
            author={author}
            img={img}
            reading={reading}
          />
        ))}
      </ul>
    </Container>
  );
}
