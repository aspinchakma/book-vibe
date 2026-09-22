"use client";
import { useContext } from "react";
import ReadBookDetails from "../components/ReadBookDetails";
import { Book, BooksContextAPI } from "../context/BooksContext";

const ListedBooksPage = () => {
  const context = useContext(BooksContextAPI);
  if (!context) {
    return <p>Loading</p>;
  }
  const { readBooks } = context;
  console.log(readBooks.length);
  return (
    <div>
      {readBooks.length ? (
        <div>
          {readBooks.map((book: Book) => (
            <ReadBookDetails key={book.bookId} book={book} />
          ))}
        </div>
      ) : (
        <p>Not data</p>
      )}
    </div>
  );
};

export default ListedBooksPage;
