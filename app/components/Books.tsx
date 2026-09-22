"use client";

import Link from "next/link";
import { useContext } from "react";
import { BooksContextAPI } from "../context/BooksContext";
import BookCard from "./Book";

const Books = () => {
  const data = useContext(BooksContextAPI);
  return (
    <div className="my-10">
      <h2 className="text-4xl font-bold mb-5 text-center">Books</h2>
      <div className="grid grid-cols-3 gap-4 my-10">
        {data?.books.slice(0, 3).map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/books"
          className="font-medium px-4 py-2 rounded-lg bg-green-600 text-white"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default Books;
