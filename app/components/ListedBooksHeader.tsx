"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  {
    label: "Read Books",
    href: "/listedBooks",
  },
  {
    label: "Wishlist Books",
    href: "/listedBooks/wishlistBooks",
  },
];

const ListedBooksHeader = () => {
  const pathname = usePathname();

  const getLinkClassName = (href: string) => {
    const isActive = pathname === href;

    return [
      "inline-block",
      "px-5",
      "py-3",
      "text-[17px]",
      "transition-colors",
      "duration-200",
      "whitespace-nowrap",
      isActive
        ? "-mb-[2px] border-t-2 border-x-2 border-b-0 border-gray-300 rounded-t-lg font-medium text-gray-800 bg-white"
        : "text-gray-500 hover:text-gray-800",
    ].join(" ");
  };

  return (
    <nav className="my-8" aria-label="Book navigation">
      <ul className="flex items-end border-b-2 border-gray-300">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={getLinkClassName(item.href)}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ListedBooksHeader;
