import Link from "next/link";

export default function Category({ categories }) {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explore Categories</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Discover thousands of high-quality raw materials across multiple industries
          </p>
        </div>

        {/* Auto-scrolling Categories Container */}
        <div className="relative">
          {/* Scrolling Track */}
          <div className="flex space-x-6 animate-scroll-x-mobile sm:animate-scroll-x-fast lg:animate-scroll-x hover:[animation-play-state:paused]">
            {/* First set of categories */}
            {categories.map((category, index) => (
              <Link
                key={`first-${category.id}`}
                href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                className="flex-shrink-0 group bg-white rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100 hover:-translate-y-2 min-w-[200px] sm:min-w-[240px] md:min-w-[280px]"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <span className="text-lg sm:text-xl md:text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-blue-600 font-semibold">{category.count}</span>
                  <span className="text-blue-600 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </Link>
            ))}
            
            {/* Duplicate set for seamless scrolling */}
            {categories.map((category, index) => (
              <Link
                key={`second-${category.id}`}
                href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                className="flex-shrink-0 group bg-white rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100 hover:-translate-y-2 min-w-[200px] sm:min-w-[240px] md:min-w-[280px]"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <span className="text-lg sm:text-xl md:text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-blue-600 font-semibold">{category.count}</span>
                  <span className="text-blue-600 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-8">
          <Link
            href="/categories"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Categories
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}