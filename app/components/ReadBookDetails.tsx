import Image from "next/image";
import Link from "next/link";
import { Book } from "../context/BooksContext";

interface ReadBookDetailsProps {
  book: Book;
}

const ReadBookDetails = ({ book }: ReadBookDetailsProps) => {
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
    bookId,
  } = book;

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 my-4">
      {/* Book Cover Image Container */}
      <div className="flex justify-center items-center bg-gray-100 rounded-xl p-6 md:w-52 flex-shrink-0">
        <Image
          width={200}
          height={400}
          src={image || "/placeholder-book.png"}
          alt={bookName || "Book cover"}
          className="h-44 object-contain drop-shadow-md"
        />
      </div>

      {/* Book Information */}
      <div className="flex-1 flex flex-col justify-between space-y-3">
        {/* Header Information */}
        <div>
          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-50 text-green-600 text-xs font-semibold rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Title & Author */}
          <h2 className="text-xl font-bold text-gray-800">{bookName}</h2>
          <p className="text-sm font-medium text-gray-500 mt-1">
            By : <span className="text-gray-700">{author}</span>
          </p>
        </div>

        {/* Metadata Details */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-gray-500 border-b border-gray-100 pb-3">
          {totalPages && (
            <div className="flex items-center gap-1.5">
              <span className="font-medium text-gray-700">Pages:</span>
              <span>{totalPages}</span>
            </div>
          )}
          {publisher && (
            <div className="flex items-center gap-1.5">
              <span className="font-medium text-gray-700">Publisher:</span>
              <span>{publisher}</span>
            </div>
          )}
          {yearOfPublishing && (
            <div className="flex items-center gap-1.5">
              <span className="font-medium text-gray-700">Year:</span>
              <span>{yearOfPublishing}</span>
            </div>
          )}
        </div>

        {/* Badges & Actions Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex flex-wrap items-center gap-2">
            {category && (
              <span className="px-3 py-1.5 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                Category: {category}
              </span>
            )}
            {rating && (
              <span className="px-3 py-1.5 bg-amber-50 text-amber-600 text-xs font-medium rounded-full flex items-center gap-1">
                ★ {rating}
              </span>
            )}
          </div>

          <Link
            href={`/books/${bookId}`}
            className="px-4 py-2 text-xs font-medium text-white bg-green-600 hover:bg-green-700 active:scale-95 rounded-full transition-all"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadBookDetails;
