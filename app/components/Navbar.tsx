"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <h3 className="text-3xl font-bold text-white">
            Book<span className="text-amber-500">Vibe</span>
          </h3>
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-8 text-sm font-medium">
          <li>
            <Link
              href="/"
              className={`transition duration-300 hover:text-amber-500 ${
                pathname === "/"
                  ? "text-amber-500 font-semibold"
                  : "text-slate-300"
              }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/listedBooks"
              className={`transition duration-300 hover:text-amber-500 ${
                pathname === "/listedBooks"
                  ? "text-amber-500 font-semibold"
                  : "text-slate-300"
              }`}
            >
              Listed Books
            </Link>
          </li>

          <li>
            <Link
              href="/pageToRead"
              className={`transition duration-300 hover:text-amber-500 ${
                pathname === "/pageToRead"
                  ? "text-amber-500 font-semibold"
                  : "text-slate-300"
              }`}
            >
              Pages To Read
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="px-6 py-3 rounded-lg border border-slate-700 text-slate-300 hover:border-amber-500 hover:text-amber-500 transition duration-300">
            Sign In
          </button>

          <button className="px-6 py-3 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-400 transition duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
