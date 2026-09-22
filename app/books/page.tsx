"use client";
import { useContext } from "react";
import BookCard from "../components/Book";
import { BooksContextAPI } from "../context/BooksContext";

const BooksPage = () => {
  const data = useContext(BooksContextAPI);
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 my-8">
        {data?.books.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
