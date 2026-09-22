import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Book <span className="text-amber-500">Vibe</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Discover thousands of books from bestselling authors, independent
              writers, and timeless classics. Your next favorite story starts
              here.
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="h-10 w-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="h-10 w-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all duration-300"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="h-10 w-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="h-10 w-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Books
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Authors
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Best Sellers
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Categories
            </h3>

            <ul className="space-y-3">
              <li>Fiction</li>
              <li>Science</li>
              <li>History</li>
              <li>Biography</li>
              <li>Children Books</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Stay Updated
            </h3>

            <p className="text-sm text-slate-400 mb-4">
              Get book recommendations, new arrivals, and exclusive offers.
            </p>

            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-amber-500"
              />

              <button className="w-full bg-amber-500 text-black font-semibold py-3 rounded-lg hover:bg-amber-400 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} BookNest. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-amber-500 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-amber-500 transition">
              Terms of Service
            </a>

            <a href="#" className="hover:text-amber-500 transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
