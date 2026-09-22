"use client";
import ReadBookDetails from "@/app/components/ReadBookDetails";
import { BooksContextAPI } from "@/app/context/BooksContext";
import { useContext } from "react";

const WishListBooksPage = () => {
  const context = useContext(BooksContextAPI);
  if (!context) return <p>context problem</p>;
  const { wishlist } = context;
  return (
    <div>
      {wishlist.length ? (
        <div>
          {wishlist.map((book) => (
            <ReadBookDetails key={book.bookId} book={book} />
          ))}
        </div>
      ) : (
        <p>Select wishlist first</p>
      )}
    </div>
  );
};

export default WishListBooksPage;
