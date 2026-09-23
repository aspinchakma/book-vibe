"use client";

import { useContext } from "react";
import { BooksContextAPI } from "../context/BooksContext";

const SortBooks = () => {
  const context = useContext(BooksContextAPI);
  if (!context) return <p>Data Loading</p>;
  const { handleSorts } = context;
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Sort Books</h2>
        <p className="text-sm text-gray-500">
          Arrange books based on your preference
        </p>
      </div>

      <div className="w-full sm:w-auto">
        <select
          onChange={(e) =>
            handleSorts(e.target.value as "rating" | "pages" | "year")
          }
          className="w-full sm:w-64 rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        >
          <option disabled value="">
            Select Sorting
          </option>
          <option value="rating">⭐ Rating (High to Low)</option>
          <option value="pages">📖 Number of Pages</option>
          <option value="year">📅 Publisher Year</option>
        </select>
      </div>
    </div>
  );
};

export default SortBooks;
