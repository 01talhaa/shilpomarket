'use client';

import { useState, useEffect, useCallback } from 'react';

export default function Transactions({ recentTransactions }) {
  const [transactions, setTransactions] = useState(recentTransactions || []);

  // Generate additional mock transactions for smooth scrolling
  const generateMockTransactions = useCallback(() => {
    const products = ['Steel Rods', 'Plastic Pellets', 'Cotton Fiber', 'Aluminum Sheets', 'Copper Wire', 'Rubber Sheets', 'Glass Panels', 'Ceramic Tiles', 'Wooden Planks', 'Cement Mix'];
    const buyers = ['Construction Corp', 'Manufacturing Inc', 'Textile Mills', 'Aerospace Ltd', 'Auto Parts Co', 'Electronics Corp', 'Packaging Solutions', 'Industrial Supply', 'Building Materials', 'Tech Components'];
    const countries = ['🇺🇸', '🇩🇪', '🇮🇳', '🇬🇧', '🇯🇵', '🇨🇦', '🇫🇷', '🇦🇺', '🇧🇷', '🇰🇷'];
    const statuses = ['completed', 'processing', 'completed', 'completed', 'processing'];
    
    const mockTransactions = [];
    const baseId = 1000;
    
    for (let i = 0; i < 15; i++) {
      const productIndex = Math.floor(Math.random() * products.length);
      const buyerIndex = Math.floor(Math.random() * buyers.length);
      const countryIndex = Math.floor(Math.random() * countries.length);
      const statusIndex = Math.floor(Math.random() * statuses.length);
      
      const amount = Math.floor(Math.random() * 500000) + 50000;
      const quantity = Math.floor(Math.random() * 200) + 10;
      const hoursAgo = Math.floor(Math.random() * 72) + 1;
      
      mockTransactions.push({
        id: baseId + i + 1,
        product: products[productIndex],
        buyer: buyers[buyerIndex],
        amount: `$${amount.toLocaleString()}`,
        quantity: `${quantity} tons`,
        date: `${hoursAgo} hours ago`,
        status: statuses[statusIndex],
        country: countries[countryIndex],
      });
    }
    
    return mockTransactions;
  }, []);

  // Initialize with original transactions + mock data
  useEffect(() => {
    const mockData = generateMockTransactions();
    setTransactions([...recentTransactions, ...mockData]);
  }, [recentTransactions, generateMockTransactions]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Recent Transactions</h2>
          <p className="text-gray-600">See what's happening on our platform</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden h-96 relative">
          {/* Gradient Overlays - Hidden on mobile */}
          <div className="hidden sm:block absolute top-0 left-0 right-0 h-6 md:h-8 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
          <div className="hidden sm:block absolute bottom-0 left-0 right-0 h-6 md:h-8 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Container */}
          <div className="relative h-full overflow-hidden">
            {/* Auto-scrolling transactions */}
            <div className="animate-scroll-y-mobile sm:animate-scroll-y-fast lg:animate-scroll-y space-y-2 p-4 hover:[animation-play-state:paused]">
              {/* First set of transactions */}
              {transactions.map((transaction, index) => (
                <div
                  key={`first-${transaction.id}`}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 cursor-pointer group hover:shadow-md transform hover:scale-[1.02] active:scale-[0.98] relative z-20"
                >
                  <div className="flex items-center space-x-4 flex-1">
                    <span className="text-2xl">{transaction.country}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold text-gray-800 text-sm truncate group-hover:text-blue-600 transition-colors">
                          {transaction.product}
                        </h4>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          transaction.status === 'completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {transaction.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>{transaction.buyer}</span>
                        <span>•</span>
                        <span>{transaction.quantity}</span>
                        <span>•</span>
                        <span>{transaction.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900 text-sm">{transaction.amount}</div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless scrolling */}
              {transactions.map((transaction, index) => (
                <div
                  key={`second-${transaction.id}`}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 cursor-pointer group hover:shadow-md transform hover:scale-[1.02] active:scale-[0.98] relative z-20"
                >
                  <div className="flex items-center space-x-4 flex-1">
                    <span className="text-2xl">{transaction.country}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold text-gray-800 text-sm truncate group-hover:text-blue-600 transition-colors">
                          {transaction.product}
                        </h4>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          transaction.status === 'completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {transaction.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>{transaction.buyer}</span>
                        <span>•</span>
                        <span>{transaction.quantity}</span>
                        <span>•</span>
                        <span>{transaction.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900 text-sm">{transaction.amount}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
