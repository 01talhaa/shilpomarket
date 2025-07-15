import Link from "next/link";

export default function Transactions({ recentTransactions }) {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Live Trading Activity
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real-time transactions happening on our platform - join thousands of successful trades daily
          </p>
        </div>

        {/* Auto-scrolling Transactions Container */}
        <div className="relative">
          {/* Gradient Overlays - Hidden on mobile */}
          <div className="hidden sm:block absolute left-0 top-0 w-16 md:w-24 lg:w-32 h-full bg-gradient-to-r from-gray-50 via-gray-50 to-transparent z-10"></div>
          <div className="hidden sm:block absolute right-0 top-0 w-16 md:w-24 lg:w-32 h-full bg-gradient-to-l from-gray-50 via-gray-50 to-transparent z-10"></div>
          
          {/* Scrolling Track */}
          <div className="flex space-x-6 animate-scroll-x-mobile sm:animate-scroll-x-fast lg:animate-scroll-x">
            {/* First set of transactions */}
            {recentTransactions.map((transaction, index) => (
              <div
                key={`first-${transaction.id}`}
                className="flex-shrink-0 group bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 min-w-[240px] sm:min-w-[280px] md:min-w-[320px]"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-lg ${
                      transaction.status === "completed"
                        ? "bg-gradient-to-r from-green-400 to-green-600"
                        : "bg-gradient-to-r from-blue-400 to-blue-600"
                    }`}>
                      <span className="text-white text-lg sm:text-xl">
                        {transaction.status === "completed" ? "✅" : "⏳"}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{transaction.product}</h3>
                      <p className="text-xs sm:text-sm text-gray-500">{transaction.buyer}</p>
                    </div>
                  </div>
                  <span className="text-lg sm:text-xl md:text-2xl">{transaction.country}</span>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-500">Amount</span>
                    <span className="font-semibold text-green-600 text-xs sm:text-sm">{transaction.amount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-500">Quantity</span>
                    <span className="font-semibold text-gray-700 text-xs sm:text-sm">{transaction.quantity}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-500">Time</span>
                    <span className="text-xs sm:text-sm text-gray-600">{transaction.date}</span>
                  </div>
                </div>

                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-gray-500">Status</span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        transaction.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless scrolling */}
            {recentTransactions.map((transaction, index) => (
              <div
                key={`second-${transaction.id}`}
                className="flex-shrink-0 group bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 min-w-[240px] sm:min-w-[280px] md:min-w-[320px]"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-lg ${
                      transaction.status === "completed"
                        ? "bg-gradient-to-r from-green-400 to-green-600"
                        : "bg-gradient-to-r from-blue-400 to-blue-600"
                    }`}>
                      <span className="text-white text-lg sm:text-xl">
                        {transaction.status === "completed" ? "✅" : "⏳"}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{transaction.product}</h3>
                      <p className="text-xs sm:text-sm text-gray-500">{transaction.buyer}</p>
                    </div>
                  </div>
                  <span className="text-lg sm:text-xl md:text-2xl">{transaction.country}</span>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-500">Amount</span>
                    <span className="font-semibold text-green-600 text-xs sm:text-sm">{transaction.amount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-500">Quantity</span>
                    <span className="font-semibold text-gray-700 text-xs sm:text-sm">{transaction.quantity}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-500">Time</span>
                    <span className="text-xs sm:text-sm text-gray-600">{transaction.date}</span>
                  </div>
                </div>

                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-gray-500">Status</span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        transaction.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link
            href="/transactions"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Transactions
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}