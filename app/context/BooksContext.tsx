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
  const [books, setBooks] = useState(booksData);

  return (
    <BooksContextAPI.Provider value={{ books }}>
      {children}
    </BooksContextAPI.Provider>
  );
};

export default BooksContext;
