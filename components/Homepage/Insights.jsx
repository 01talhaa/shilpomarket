"use client";

import Link from "next/link";

export default function Insights({ newsBlogs }) {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Industry Insights & News
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, market analysis, and industry developments
          </p>
        </div>

        <div className="">
          {/* Featured Article */}
          {/* <div className="lg:col-span-1">
            <Link href={`/insights/${newsBlogs[0]?.slug}`} className="block group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={newsBlogs[0]?.image}
                    alt={newsBlogs[0]?.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {newsBlogs[0]?.category}
                    </span>
                  </div>
                  {newsBlogs[0]?.trending && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        🔥 Trending
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {newsBlogs[0]?.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {newsBlogs[0]?.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{newsBlogs[0]?.author}</span>
                    <span>{newsBlogs[0]?.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div> */}

          {/* Auto-scrolling News Feed */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 h-96 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-800">Latest Updates</h3>
              </div>
              
              {/* Scrolling Container */}
              <div className="relative h-full overflow-hidden">
                {/* Gradient Overlays - Hidden on mobile */}
                <div className="hidden sm:block absolute top-0 left-0 right-0 h-6 md:h-8 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
                <div className="hidden sm:block absolute bottom-0 left-0 right-0 h-6 md:h-8 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
                
                {/* Scrolling Track */}
                <div className="animate-scroll-y-mobile sm:animate-scroll-y-fast lg:animate-scroll-y space-y-4 px-6 py-4 hover:[animation-play-state:paused]">
                  {/* First set of news */}
                  {newsBlogs.slice(1).map((article, index) => (
                    <Link
                      key={`first-${article.id}`}
                      href={`/insights/${article.slug}`}
                      className="flex space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200 cursor-pointer group hover:shadow-md transform hover:scale-[1.02] active:scale-[0.98] relative z-20"
                    >
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                            {article.category}
                          </span>
                          {article.trending && (
                            <span className="text-xs text-red-500">🔥</span>
                          )}
                        </div>
                        <h4 className="font-semibold text-gray-800 text-sm line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h4>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-gray-500">{article.author}</span>
                          <span className="text-xs text-gray-500">{article.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                  
                  {/* Duplicate set for seamless scrolling */}
                  {newsBlogs.slice(1).map((article, index) => (
                    <Link
                      key={`second-${article.id}`}
                      href={`/insights/${article.slug}`}
                      className="flex space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200 cursor-pointer group hover:shadow-md transform hover:scale-[1.02] active:scale-[0.98] relative z-20"
                    >
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                            {article.category}
                          </span>
                          {article.trending && (
                            <span className="text-xs text-red-500">🔥</span>
                          )}
                        </div>
                        <h4 className="font-semibold text-gray-800 text-sm line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h4>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-gray-500">{article.author}</span>
                          <span className="text-xs text-gray-500">{article.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link
            href="/insights"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Insights
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}