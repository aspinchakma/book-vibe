const Banner = () => {
  return (
    <section className="bg-gray-100 rounded-md px-8 md:px-12 lg:px-20 py-12 lg:py-20 my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
          <span className="inline-block px-4 py-2 rounded-full bg-white text-gray-600 text-sm font-medium shadow-sm">
            📚 Discover Your Next Favorite Book
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Books to Freshen Up
            <br />
            Your Bookshelf
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl leading-8">
            Explore bestselling novels, timeless classics, self-development
            guides, and inspiring stories that will transform the way you think,
            learn, and grow.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-700 transition">
              View The List
            </button>

            <button className="border border-gray-300 px-8 py-4 rounded-xl font-medium text-gray-700 hover:bg-white transition">
              Browse Books
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/images/hero_img.jpg"
            alt="Books"
            className="w-full max-w-md rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
