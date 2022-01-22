import Book from "components/Book";

import type { NextPage } from "next";
const Bookshelf: NextPage = () => {
  return (
    <div>
      <Book
        author="Kevin"
        comment="Good"
        img="/images/me.jpg"
        title="God"
        year="2022"
      />
      Father of the year
    </div>
  );
};

export default Bookshelf;
