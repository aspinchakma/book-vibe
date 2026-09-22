import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Book<span className="text-gray-500">Vibe</span>
            </h2>

            <p className="mt-4 text-gray-600 leading-7 text-sm">
              Discover inspiring books, timeless classics, and modern
              bestsellers. Build your personal library and enjoy reading
              anytime, anywhere.
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-900 hover:text-white transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-900 hover:text-white transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-900 hover:text-white transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-900 hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Browse Books
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Authors
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Best Sellers
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-5">
              Categories
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>Fiction</li>
              <li>Science & Technology</li>
              <li>History</li>
              <li>Biography</li>
              <li>Children Books</li>
              <li>Self Development</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-5">
              Subscribe Newsletter
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              Get the latest book releases, reading tips, and exclusive
              recommendations directly in your inbox.
            </p>

            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} BookVibe. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-gray-900 transition">
              Terms of Service
            </a>

            <a href="#" className="hover:text-gray-900 transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
