'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

export default function TopSellingProducts({ topSellingProducts }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(topSellingProducts.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === totalPages - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const currentProducts = topSellingProducts.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );
  
  return (
    <section className="py-10 bg-white flex-1 rounded-xl shadow-sm border border-gray-100">
      <div className="max-w-lg mx-auto px-6">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-3">
            <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Top Selling Products</h2>
          </div>
          <p className="text-gray-600 text-sm max-w-md mx-auto">Most popular products with highest sales volumes</p>
          <div className="mt-2 flex justify-center">
            <Link
              href="/products?sort=bestselling"
              className="inline-flex items-center px-4 py-2 bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-100 transition-colors text-sm font-medium"
            >
              View All Best Sellers
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="space-y-3 h-[580px]">
            {currentProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
            <div className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer mb-6">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {product.bestSeller && (
                  <div className="absolute top-2 left-2 bg-gradient-to-r from-slate-600 to-slate-700 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                    🏆 Best Seller
                  </div>
                )}
                {product.discount && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                    {product.discount}
                  </div>
                )}
              </div>

              <div className="p-3">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-600 font-medium">{product.supplier}</p>
                  </div>
                  {product.inStock && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 font-medium">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                      In Stock
                    </span>
                  )}
                </div>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center mr-4">
                    <span className="text-yellow-400 text-xs">★</span>
                    <span className="text-xs font-medium text-gray-700 ml-1">{product.rating}</span>
                    <span className="text-xs text-gray-500 ml-1">({product.reviews} reviews)</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-gray-900">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-500 line-through ml-2">{product.originalPrice}</span>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500 block">Min order</span>
                    <span className="text-xs font-medium text-gray-700">{product.minOrder}</span>
                  </div>
                </div>
              </div>
            </div>
            </Link>
            ))}
          </div>
          
          {/* Slider indicators */}
          <div className="flex justify-center mt-14 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-slate-600 shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
