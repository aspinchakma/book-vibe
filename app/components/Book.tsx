import Image from "next/image";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import { Book } from "../context/BooksContext";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <Link
      href={`/books/${book.bookId}`}
      className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:-translate-y-2 transition duration-500"
    >
      {/* Book Cover Container with Rounded Corners & Padding */}
      <div className="relative flex h-80 w-full items-center justify-center rounded-xl bg-[#f3f3f3] p-6">
        <div className="relative h-full w-full">
          <Image
            src={book.image}
            alt={book.bookName}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
      </div>

      {/* Content */}
      <div className="mt-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#23be0a]/10 px-4 py-1.5 text-sm font-medium text-[#23be0a]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="font-serif text-2xl font-bold text-gray-900 mt-4 line-clamp-1">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-2 text-base font-medium text-gray-600">
          By : {book.author}
        </p>

        {/* Dashed Border Divider */}
        <div className="my-5 border-t border-dashed border-gray-300" />

        {/* Category & Rating */}
        <div className="flex items-center justify-between text-base font-medium text-gray-700">
          <span>{book.category}</span>

          <div className="flex items-center gap-2">
            <span>{Number(book.rating).toFixed(2)}</span>
            <FaRegStar className="text-gray-600" size={18} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
