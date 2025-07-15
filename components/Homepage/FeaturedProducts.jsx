import Link from "next/link";

export default function FeaturedProducts({ featuredProducts }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Discover premium raw materials from verified suppliers with competitive pricing and guaranteed quality
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-28 sm:h-32 md:h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Badges */}
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col space-y-1">
                  <span className="bg-blue-600 text-white text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-medium shadow-lg">
                    {product.category}
                  </span>
                </div>

                {/* Action Buttons - Hidden on mobile */}
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 hidden sm:flex flex-col space-y-1">
                  <button className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2 shadow-lg hover:bg-white transition-all duration-300 group/btn">
                    <span className="text-xs sm:text-sm text-gray-600 group-hover/btn:text-red-500 transition-colors">❤️</span>
                  </button>
                </div>

                {/* Status Indicators */}
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 flex space-x-1">
                  {product.inStock && (
                    <span className="bg-green-500 text-white text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-medium">
                      ✅ Stock
                    </span>
                  )}
                  {product.fastDelivery && (
                    <span className="bg-blue-500 text-white text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-medium">
                      🚀 Fast
                    </span>
                  )}
                </div>
              </div>

              <div className="p-2 sm:p-3 md:p-4">
                {/* Rating and Reviews */}
                <div className="flex items-center justify-between mb-1 sm:mb-2">
                  <div className="flex items-center space-x-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-xs ${i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"}`}
                        >
                          ⭐
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-600 font-medium">({product.reviews})</span>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-full">
                    Min: {product.minOrder}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-xs text-gray-600 mb-2 font-medium truncate">{product.supplier}</p>

                {/* Pricing */}
                <div className="flex items-center space-x-1 mb-2 sm:mb-3">
                  <span className="text-sm sm:text-base font-bold text-green-600">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-1">
                  <Link
                    href={`/products/${product.id}`}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                  >
                    View Details
                  </Link>
                  <button className="bg-gray-100 text-gray-600 py-1.5 px-2 rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                    <span className="text-xs">💬</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}