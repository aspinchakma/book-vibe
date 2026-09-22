"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="border flex items-center justify-between py-4">
      <h3 className="text-2xl font-bold">Book Vibe</h3>
      <ul className="flex items-center gap-4 ">
        <li>
          <Link
            href="/"
            className={`${pathname === "/" ? "font-bold text-green-700" : ""}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/listedBooks"
            className={`${pathname === "/listedBooks" ? "font-bold text-green-700" : ""}`}
          >
            Listed Books
          </Link>
        </li>
        <li>
          <Link
            href="/pageToRead"
            className={`${pathname === "/pageToRead" ? "font-bold text-green-700" : ""}`}
          >
            Page To Read
          </Link>
        </li>
      </ul>
      <div className="flex gap-3 items-center text-sm font-bold">
        <button className=" text-white bg-green-600 px-6 py-3 rounded-md">
          Sign In
        </button>
        <button className=" text-white bg-sky-600 px-6 py-3 rounded-md">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
