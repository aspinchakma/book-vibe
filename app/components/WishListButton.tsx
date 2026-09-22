import { useContext } from "react";
import { Book, BooksContextAPI } from "../context/BooksContext";

const WishListButton = ({ book }: { book: Book }) => {
  const context = useContext(BooksContextAPI);
  if (!context) {
    return <p>Loading</p>;
  }
  const { handleWishlistBooks } = context;
  return (
    <button
      onClick={() => handleWishlistBooks(book)}
      className="px-7 py-3 bg-[#50B1C9] text-white rounded-xl font-semibold hover:bg-[#3ea0b8] transition"
    >
      Wishlist
    </button>
  );
};

export default WishListButton;
