import Book from 'components/Book'
import Container from 'components/Container'
import Header from 'components/Header'
import { ViewBoardsIcon } from '@heroicons/react/outline'
import books from 'content/books.json'

export default function Bookshelf() {
  return (
    <Container title="Bookshelf – Kevin Zuniga Cuellar">
      <Header title="Bookshelf" icon={<ViewBoardsIcon />} />
      <ul className="grid grid-cols-1 justify-items-center gap-8 md:justify-items-start">
        {books.map(({ id, ...rest }) => (
          <Book key={id} {...rest} />
        ))}
      </ul>
    </Container>
  )
}
