'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

export default function FeaturedSuppliers({ topCompanies }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(topCompanies.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === totalPages - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const currentCompanies = topCompanies.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );
  return (
    <section className="py-10 bg-gray-50 flex-1 rounded-xl shadow-sm border border-gray-100">
      <div className="max-w-lg mx-auto px-6">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-3">
            <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Top Suppliers</h2>
          </div>
          <p className="text-gray-600 text-sm max-w-md mx-auto">Connect with verified suppliers from around the world</p>
          <div className="mt-4 flex justify-center">
            <Link
              href="/suppliers"
              className="inline-flex items-center px-4 py-2 bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-100 transition-colors text-sm font-medium"
            >
              View All Suppliers
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="space-y-3 h-[580px]">
            {currentCompanies.map((company) => (
            <Link key={company.id} href={`/suppliers/${company.id}`}>
            <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer mb-6">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-8 h-8 rounded-lg border-2 border-gray-100 shadow-sm"
                    />
                    {company.verified && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full flex items-center justify-center">
                        <svg className="w-1.5 h-1.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="ml-2">
                    <h3 className="text-xs font-semibold text-gray-900 mb-1">{company.name}</h3>
                    <p className="text-xs text-gray-600 flex items-center">
                      <svg className="w-2.5 h-2.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {company.location}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-xs text-gray-700 mb-1">
                    <span className="text-amber-400 mr-1">★</span>
                    <span className="font-medium">{company.rating}</span>
                  </div>
                  <span className="text-xs text-gray-500">{company.products} products</span>
                </div>
              </div>

              <div className="mb-2">
                <div className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-slate-50 text-slate-700 font-medium">
                  {company.specialization}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-50 rounded-lg p-2">
                  <div className="text-xs text-gray-500 mb-1">Est.</div>
                  <div className="text-xs font-semibold text-gray-900">{company.yearEstablished}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <div className="text-xs text-gray-500 mb-1">Team</div>
                  <div className="text-xs font-semibold text-gray-900">{company.employees}</div>
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
