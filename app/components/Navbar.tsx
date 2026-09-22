"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-gray-200 backdrop-blur-md border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <h2 className="text-3xl font-bold text-gray-900">
            Book<span className="text-gray-500">Vibe</span>
          </h2>
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-8 text-sm font-medium">
          <li>
            <Link
              href="/"
              className={`transition-all duration-300 ${
                pathname === "/"
                  ? "text-gray-900 font-bold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/listedBooks"
              className={`transition-all duration-300 ${
                pathname === "/listedBooks"
                  ? "text-gray-900 font-bold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Listed Books
            </Link>
          </li>

          <li>
            <Link
              href="/pageToRead"
              className={`transition-all duration-300 ${
                pathname === "/pageToRead"
                  ? "text-gray-900 font-bold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Pages To Read
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 transition">
            Sign In
          </button>

          <button className="px-5 py-2.5 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-700 transition">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
