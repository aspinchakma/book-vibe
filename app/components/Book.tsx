import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Book } from "../context/BooksContext";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Book Cover */}
      <div className="relative h-80 overflow-hidden bg-gray-100">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur-sm">
          {book.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-gray-500">by {book.author}</p>

        {/* Rating & Pages */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <FaStar className="text-yellow-500" size={14} />

            <span className="text-sm font-semibold text-gray-800">
              {book.rating}
            </span>
          </div>

          <span className="text-sm text-gray-500">{book.totalPages} pages</span>
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-gray-100" />

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Publisher & Year */}
        <div className="mt-5 flex items-center justify-between text-xs text-gray-500">
          <span>{book.publisher}</span>

          <span>{book.yearOfPublishing}</span>
        </div>
      </div>
    </article>
  );
};

export default BookCard;
