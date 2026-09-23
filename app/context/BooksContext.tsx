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
type SortOption = "rating" | "year" | "pages";
interface BooksContextType {
  books: Book[];
  handleReadBooks: (book: Book) => void;
  readBooks: Book[];
  handleWishlistBooks: (book: Book) => void;
  wishlist: Book[];
  handleSorts: (value: SortOption) => void;
  sortedReadBooks: Book[];
  sortedWishListBooks: Book[];
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
  const [sortedValue, setSortedValue] = useState<SortOption>("rating");

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

  const handleSorts = (value: SortOption): void => {
    setSortedValue(value);
  };
  const sortsBooks = (books: Book[]) => {
    const sortedBooks = [...books];
    if (sortedValue === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortedValue === "pages") {
      sortedBooks.sort((a, b) => a.totalPages - b.totalPages);
    } else if (sortedValue === "year") {
      sortedBooks.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
    }
    return sortedBooks;
  };
  const sortedReadBooks = sortsBooks(readBooks);
  const sortedWishListBooks = sortsBooks(wishlist);

  return (
    <BooksContextAPI.Provider
      value={{
        books,
        handleReadBooks,
        readBooks,
        handleWishlistBooks,
        wishlist,
        handleSorts,
        sortedReadBooks,
        sortedWishListBooks,
      }}
    >
      {children}
    </BooksContextAPI.Provider>
  );
};

export default BooksContext;
