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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-1">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                    {product.category}
                  </span>
                  {product.discount && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse shadow-lg">
                      {product.discount}
                    </span>
                  )}
                  {product.trending && (
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                      🔥 Hot
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex flex-col space-y-1">
                  <button className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all duration-300 group/btn">
                    <span className="text-sm text-gray-600 group-hover/btn:text-red-500 transition-colors">❤️</span>
                  </button>
                  <button className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all duration-300 group/btn">
                    <span className="text-sm text-gray-600 group-hover/btn:text-blue-500 transition-colors">👁️</span>
                  </button>
                </div>

                {/* Status Indicators */}
                <div className="absolute bottom-3 left-3 flex space-x-1">
                  {product.inStock && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      ✅ Stock
                    </span>
                  )}
                  {product.fastDelivery && (
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      🚀 Fast
                    </span>
                  )}
                </div>
              </div>

              <div className="p-5">
                {/* Rating and Reviews */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"}`}
                        >
                          ⭐
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-600 font-medium">({product.reviews})</span>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    Min: {product.minOrder}
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-600 mb-3 font-medium">{product.supplier}</p>

                {/* Pricing */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold text-green-600">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Link
                    href={`/products/${product.id}`}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    View Details
                  </Link>
                  <button className="bg-gray-100 text-gray-600 py-2.5 px-3 rounded-xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                    <span className="text-sm">💬</span>
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