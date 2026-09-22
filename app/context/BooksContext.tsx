"use client";

import React, { createContext, useState } from "react";
export interface Book {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  review: string;
  totalPages: number;
  rating: number;
  category: string;

  tags: string[];
  publisher: string;
  yearOfPublishing: number;
}
interface BooksContextType {
  books: Book[];
  handleReadBooks: (book: Book) => void;
  readBooks: Book[];
  handleWishlistBooks: (book: Book) => void;
  wishlist: Book[];
}

export const BooksContextAPI = createContext<BooksContextType | undefined>(
  undefined,
);

const BooksContext = ({
  children,
  booksData,
}: {
  children: React.ReactNode;
  booksData: Book[];
}) => {
  const [books, setBooks] = useState<Book[]>(booksData);
  const [readBooks, setReadBooks] = useState<Book[]>([]);
  const [wishlist, setWishlist] = useState<Book[]>([]);

  const handleReadBooks = (book: Book): void => {
    const result = readBooks.filter((bk) => bk.bookId === book.bookId);
    if (result.length === 0) {
      setReadBooks([...readBooks, book]);
    } else {
      alert("Already Added!");
    }
  };

  const handleWishlistBooks = (book: Book): void => {
    const result = wishlist.filter((bk) => bk.bookId === book.bookId);
    if (result.length === 0) {
      setWishlist([...wishlist, book]);
    } else {
      alert("Already Added!");
    }
  };

  return (
    <BooksContextAPI.Provider
      value={{
        books,
        handleReadBooks,
        readBooks,
        handleWishlistBooks,
        wishlist,
      }}
    >
      {children}
    </BooksContextAPI.Provider>
  );
};

export default BooksContext;
