"use client";

import { useContext } from "react";
import { BooksContextAPI } from "../context/BooksContext";
import BookCard from "./Book";

const Books = () => {
  const data = useContext(BooksContextAPI);
  return (
    <div>
      <h2 className="text-4xl font-bold mb-5 text-center">Books</h2>
      <div className="grid grid-cols-3 gap-4 my-10">
        {data?.books.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
