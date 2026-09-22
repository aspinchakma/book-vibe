"use client";

import WishListButton from "@/app/components/WishListButton";
import { Book, BooksContextAPI } from "@/app/context/BooksContext";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext } from "react";

const BookDetails = () => {
  const context = useContext(BooksContextAPI);
  const params = useParams<{ bookId: string }>();
  if (!context) {
    return <p>Loading</p>;
  }
  const { books, handleReadBooks } = context;

  const id = params.bookId;
  const book = books.find((bk: Book) => bk.bookId === Number(id));

  if (!book) {
    return <p>Book Not Found</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      {/* Left Column: Image Container */}
      <div className="md:col-span-5 bg-gray-100 rounded-3xl p-12 flex justify-center items-center h-full min-h-[500px]">
        {book && (
          <Image
            width={300}
            height={600}
            src={book.image}
            alt={book.bookName}
            className="w-[300px] h-auto object-contain drop-shadow-xl rounded-md"
          />
        )}
      </div>

      {/* Right Column: Book Details */}
      <div className="md:col-span-7 flex flex-col justify-between">
        {/* Title and Author */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 font-serif mb-2">
            {book?.bookName}
          </h1>
          <p className="text-gray-600 text-lg font-medium">
            By : {book?.author}
          </p>
        </div>

        <div className="border-t border-gray-200 my-4"></div>

        {/* Category */}
        <p className="text-gray-700 text-lg font-medium">{book?.category}</p>

        <div className="border-t border-gray-200 my-4"></div>

        {/* Review */}
        <p className="text-gray-600 leading-relaxed">
          <span className="font-bold text-gray-900">Review : </span>
          {book?.review}
        </p>

        {/* Tags */}
        <div className="flex items-center gap-3 my-6">
          <span className="font-bold text-gray-900">Tag</span>
          {book?.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-green-50 text-emerald-500 text-sm font-semibold px-4 py-2 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="border-t border-gray-200 my-2"></div>

        {/* Details Table/Grid */}
        <div className="space-y-3 my-4 text-gray-700">
          <div className="grid grid-cols-3 max-w-sm">
            <span className="text-gray-500">Number of Pages:</span>
            <span className="font-bold text-gray-900 col-span-2">
              {book?.totalPages}
            </span>
          </div>

          <div className="grid grid-cols-3 max-w-sm">
            <span className="text-gray-500">Publisher:</span>
            <span className="font-bold text-gray-900 col-span-2">
              {book?.publisher}
            </span>
          </div>

          <div className="grid grid-cols-3 max-w-sm">
            <span className="text-gray-500">Year of Publishing:</span>
            <span className="font-bold text-gray-900 col-span-2">
              {book?.yearOfPublishing}
            </span>
          </div>

          <div className="grid grid-cols-3 max-w-sm">
            <span className="text-gray-500">Rating:</span>
            <span className="font-bold text-gray-900 col-span-2">
              {book?.rating}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => handleReadBooks(book)}
            className="px-7 py-3 border border-gray-300 rounded-xl font-semibold text-gray-900 hover:bg-gray-50 transition"
          >
            Read
          </button>

          <WishListButton book={book} />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
