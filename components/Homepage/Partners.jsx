import React from 'react';

const Partners = ({ partners }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of companies worldwide who trust our platform for their raw material needs
          </p>
        </div>

        {/* Auto-scrolling Partners Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white via-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white via-white to-transparent z-10"></div>
          
          {/* Scrolling Track */}
          <div className="flex space-x-8 animate-scroll-x">
            {/* First set of partners */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-shadow duration-300 min-w-[280px]">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg">

                        
                      {partner.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">{partner.name}</h3>
                      <p className="text-gray-500 text-sm">{partner.industry}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Partnership since</span>
                      <span className="font-semibold text-gray-700">{partner.since}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-2">
                      <span className="text-gray-500">Volume</span>
                      <span className="font-semibold text-green-600">{partner.volume}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless scrolling */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-shadow duration-300 min-w-[280px]">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                      {partner.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">{partner.name}</h3>
                      <p className="text-gray-500 text-sm">{partner.industry}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Partnership since</span>
                      <span className="font-semibold text-gray-700">{partner.since}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-2">
                      <span className="text-gray-500">Volume</span>
                      <span className="font-semibold text-green-600">{partner.volume}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
