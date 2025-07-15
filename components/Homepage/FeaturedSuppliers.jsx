import Link from "next/link";

export default function FeaturedSuppliers({ topCompanies }) {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Top Verified Suppliers</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Partner with industry-leading suppliers who have proven track records and excellent ratings
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {topCompanies.map((company, index) => (
            <div
              key={company.id}
              className="group bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in border border-gray-100 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                {/* Company Logo */}
                <div className="relative mb-2 sm:mb-3">
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto rounded-lg sm:rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500 border-2 border-white"
                  />
                  {company.verified && (
                    <div className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full p-0.5 shadow-lg animate-pulse">
                      <span className="text-xs">✓</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {company.name}
                </h3>

                <p className="text-xs text-gray-600 mb-1 font-medium line-clamp-1">{company.specialization}</p>
                <p className="text-xs text-gray-500 mb-2 sm:mb-3 flex items-center justify-center">
                  <span className="mr-1">📍</span> {company.location}
                </p>

                {/* Company Stats */}
                <div className="bg-gray-50 rounded-lg p-1.5 sm:p-2 mb-2 sm:mb-3 space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Products:</span>
                    <span className="font-semibold text-blue-600">{company.products}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Rating:</span>
                    <span className="font-semibold text-yellow-600">⭐ {company.rating}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Since:</span>
                    <span className="font-semibold text-gray-800">{company.yearEstablished}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Size:</span>
                    <span className="font-semibold text-gray-800 truncate">{company.employees}</span>
                  </div>
                </div>

                <Link
                  href={`/sellers/${company.id}`}
                  className="block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}