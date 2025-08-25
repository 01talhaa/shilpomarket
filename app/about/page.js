import React from 'react'
import Header from '../../components/Header'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 pt-44 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-700 text-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-300 rounded-full mr-2"></span>
            Established 2025 • Connecting Global Markets
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-blue-700 mb-8 leading-tight">
            About <span className="text-transparent bg-clip-text bg-blue-700">ShilpoMarket</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            The premier B2B marketplace connecting manufacturers, suppliers, and buyers across diverse industries, 
            facilitating global trade through innovative digital commerce solutions and comprehensive supply chain management.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Verified Platform
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
              </svg>
              Global Reach
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03z" clipRule="evenodd"/>
              </svg>
              Innovation Driven
            </span>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To revolutionize global trade by creating a comprehensive B2B ecosystem that connects manufacturers, suppliers, and buyers 
              across diverse industries including textile, chemical, construction, and pharmaceutical sectors, ensuring transparent transactions, 
              competitive pricing, and sustainable business growth.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To establish ShilpoMarket as the world's leading B2B marketplace for industrial products and services, 
              where cutting-edge technology meets efficient supply chain management, fostering a sustainable 
              global economy that drives innovation across manufacturing, textile, construction, and healthcare industries.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-gray-600 leading-relaxed">
              We are dedicated to building transparent, efficient business relationships that prioritize supplier welfare, 
              environmental sustainability, and industrial innovation. Every transaction on our platform contributes to 
              strengthening global supply chains while driving technological advancement across key industry sectors.
            </p>
          </div>
        </div>

        {/* Company Overview & Goals Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 mb-24 border border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Company Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                    </svg>
                  </span>
                  Strategic Goals
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Onboard 10,000+ verified suppliers & manufacturers by 2026
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Expand operations to 50+ countries globally
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Facilitate $100M+ in B2B transactions annually
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Establish regional industrial hubs across key markets
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812z" clipRule="evenodd"/>
                    </svg>
                  </span>
                  Industry Sectors
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Textile & Apparel Manufacturing
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Chemical & Pharmaceutical Products
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Construction Materials & Equipment
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Electronics & Technology Components
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-24 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="text-xl mb-8 text-center text-gray-700 font-medium">
                From a university innovation lab to a global B2B marketplace transforming industrial commerce
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">The Beginning (2025)</h4>
                  <p className="mb-4">
                    ShilpoMarket was conceived during our final semester at North South University, Bangladesh, when our founding team 
                    identified the inefficiencies in traditional B2B procurement and the disconnect between manufacturers, suppliers, and buyers. 
                    What started as an industrial commerce research project evolved into a comprehensive business solution.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Market Challenges</h4>
                  <p className="mb-4">
                    Traditional suppliers and manufacturers faced barriers in reaching global markets due to complex procurement processes, 
                    lack of digital presence, and fragmented supply chains. Meanwhile, businesses across industries struggled with inefficient 
                    sourcing, limited supplier networks, and transparency issues in industrial procurement.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Our Solution</h4>
                <p className="mb-4">
                  We developed a comprehensive B2B platform that streamlines industrial commerce through technology, combining advanced 
                  procurement tools, supplier verification systems, and supply chain optimization. Our platform provides:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2"></span>Digital supplier & manufacturer profiles</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2"></span>Integrated procurement & payment systems</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2"></span>Global logistics & supply chain management</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2"></span>Quality assurance & compliance tracking</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2"></span>Market intelligence & analytics</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2"></span>Trade finance & credit solutions</li>
                </ul>
              </div>
              <p className="text-center text-gray-700 font-medium">
                Today, ShilpoMarket serves as a testament to the power of technology in modernizing industrial commerce 
                while creating efficient, transparent, and profitable business relationships across global markets.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Team Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our leadership team combines expertise in technology, business strategy, and industrial commerce, 
              united by a shared vision of revolutionizing global B2B trade and supply chain management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* CEO */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <span className="text-white font-bold text-4xl">AT</span>
                </div>
                {/* <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812z" clipRule="evenodd"/>
                  </svg>
                </div> */}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">A B S Talha</h3>
              <div className="text-blue-700 font-semibold text-lg mb-2">Chief Executive Officer</div>
              <div className="text-sm text-gray-500 mb-4 flex items-center justify-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/>
                </svg>
                North South University, Bangladesh
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Visionary leader with expertise in strategic planning and industrial technology innovation. 
                Spearheads company growth initiatives and oversees global expansion strategies across manufacturing 
                and supply chain sectors, ensuring sustainable development while maintaining our core mission of B2B excellence.
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-xs mb-6">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Strategic Planning</span>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Technology</span>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Leadership</span>
              </div>
              
              {/* Social Media Links */}
              <div className="flex justify-center gap-4 pt-4 border-t border-gray-100">
                <a href="https://www.facebook.com/the.abs.talha01" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/the_abs_talha?fbclid=IwY2xjawMZKYJleHRuA2FlbQIxMABicmlkETFkWEo3TVg3TjY2aGQ2RW11AR7bcqD7kp3Os0ytqc2EUBNoedMKs15u1c8lZBpx7huc0NEDFwWIEST-IjIAbg_aem_zG786U-vvHdy7c0AXi9rKg" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/abu-bakar-siddique-talha-802417215/" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* CMO */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <span className="text-white font-bold text-4xl">SA</span>
                </div>
                {/* <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                  </svg>
                </div> */}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Shihab Ahmed</h3>
              <div className="text-blue-700 font-semibold text-lg mb-2">Chief Marketing Officer</div>
              <div className="text-sm text-gray-500 mb-4 flex items-center justify-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/>
                </svg>
                North South University, Bangladesh
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Marketing strategist with deep understanding of B2B customer behavior and industrial market positioning. 
                Develops comprehensive marketing campaigns that effectively communicate value propositions to manufacturers and buyers 
                while driving sustainable business growth across international industrial markets.
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-xs mb-6">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">B2B Marketing</span>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Digital Strategy</span>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Market Analysis</span>
              </div>
              
              {/* Social Media Links */}
              <div className="flex justify-center gap-4 pt-4 border-t border-gray-100">
                <a href="https://www.facebook.com/shihabahmmed123456" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/shihab_ahmmed_01?igsh=MWxlMHA3czcwdnJnZg%3D%3D" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/shihab-ahmmed-68704b357/" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* CFO */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <span className="text-white font-bold text-4xl">AM</span>
                </div>
                {/* <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div> */}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ali Miladun</h3>
              <div className="text-blue-700 font-semibold text-lg mb-2">Chief Financial Officer</div>
              <div className="text-sm text-gray-500 mb-4 flex items-center justify-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/>
                </svg>
                North South University, Bangladesh
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Financial expert focused on sustainable growth and transparent fiscal management for B2B operations. 
                Ensures efficient payment structures for suppliers while maintaining platform profitability, 
                and oversees investment strategies that align with our industrial marketplace objectives.
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-xs mb-6">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Financial Planning</span>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Risk Management</span>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Investment Strategy</span>
              </div>
              
              {/* Social Media Links */}
              <div className="flex justify-center gap-4 pt-4 border-t border-gray-100">
                <a href="https://www.facebook.com/ali.miladun.56?rdid=DT4QKXe7MPlURj1s&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FHgiRXY1Y%2F#" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/ali_miladun?igsh=MThlbHpid2tpM2Z3Nw%3D%3D" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/ali-miladun/" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* University Connection */}
          {/* <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 text-center border border-blue-200">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Alumni of North South University</h4>
                <p className="text-sm text-gray-600">Dhaka, Bangladesh • Department of Computer Science & Engineering</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Our leadership team's shared educational background at North South University fostered the collaborative spirit 
              and innovative mindset that drives ShilpoMarket's success in bridging traditional manufacturing with modern technology.
            </p>
          </div> */}
        </div>

        {/* Core Values Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every relationship we build, 
              ensuring our commitment to ethical business practices and sustainable industrial growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trust & Verification</h3>
              <p className="text-gray-600 leading-relaxed">
                We ensure all suppliers and manufacturers receive fair treatment with transparent pricing structures, 
                eliminating intermediaries and establishing direct, honest relationships that benefit all business partners.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable Operations</h3>
              <p className="text-gray-600 leading-relaxed">
                Promoting eco-conscious manufacturing methods, sustainable materials sourcing, and efficient logistics solutions 
                to minimize environmental impact while optimizing operational efficiency.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation & Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Balancing cutting-edge technology with proven manufacturing excellence, 
                fostering innovation that enhances production capabilities while maintaining highest quality standards.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                Building strong, strategic networks that extend beyond individual transactions to create lasting positive impact 
                on manufacturing communities, supply chains, and industrial ecosystems.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics & Impact Section */}
        <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 rounded-3xl text-white p-8 md:p-16 mb-24 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-20 h-20 border border-white rounded-full"></div>
            <div className="absolute top-20 right-8 w-32 h-32 border border-white rounded-full"></div>
            <div className="absolute bottom-8 left-12 w-16 h-16 border border-white rounded-full"></div>
            <div className="absolute bottom-20 right-4 w-24 h-24 border border-white rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Industrial Impact</h2>
              <p className="text-xl text-blue-300 max-w-3xl mx-auto leading-relaxed">
                Measurable results that demonstrate our commitment to transforming industrial commerce 
                and strengthening manufacturing networks through strategic business partnerships.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">2,500+</div>
                  <div className="text-blue-200 font-medium">Verified Suppliers</div>
                  <div className="text-xs text-blue-300 mt-1">Across industrial sectors</div>
                </div>
              </div>
              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">50,000+</div>
                  <div className="text-blue-200 font-medium">Products Listed</div>
                  <div className="text-xs text-blue-300 mt-1">Quality assured</div>
                </div>
              </div>
              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">35+</div>
                  <div className="text-blue-200 font-medium">Countries Served</div>
                  <div className="text-xs text-blue-300 mt-1">Global distribution</div>
                </div>
              </div>
              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">$5M+</div>
                  <div className="text-blue-200 font-medium">Business Volume</div>
                  <div className="text-xs text-blue-300 mt-1">Annual transactions</div>
                </div>
              </div>
            </div>

            {/* Additional Impact Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-200 mb-1">95%</div>
                <div className="text-sm text-blue-300">Client Satisfaction Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-200 mb-1">150+</div>
                <div className="text-sm text-blue-300">Manufacturing Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-200 mb-1">4.8★</div>
                <div className="text-sm text-blue-300">Average Product Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 md:p-16 border border-slate-200">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-slate-100 text-slate-800 px-6 py-3 rounded-full text-sm font-medium mb-8">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03z" clipRule="evenodd"/>
              </svg>
              Join the Network
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Be Part of the 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900"> Industrial Commerce Revolution</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Whether you're a manufacturer ready to expand your market reach, a supplier seeking verified buyers, 
              or a business seeking reliable industrial partners, ShilpoMarket is your gateway to a thriving ecosystem of 
              B2B commerce and sustainable industrial growth.
            </p>

            {/* Two-column benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">For Suppliers & Manufacturers</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-3"></span>Global market access without intermediaries</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-3"></span>Competitive pricing and transparent payment systems</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-3"></span>Business development and scaling opportunities</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-3"></span>Industry networking and partnership opportunities</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">For Buyers & Businesses</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-3"></span>Quality verified industrial products and materials</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-3"></span>Direct connection with trusted manufacturers globally</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-3"></span>Ethical sourcing with sustainable business practices</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-3"></span>Specialized products across textile, chemical, construction sectors</li>
                </ul>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-blue-700 to-blue-800 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:from-blue-800 hover:to-blue-900 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center">
                <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                Start Selling Your Products
              </button>
              
              <button className="group border-2 border-blue-700 text-blue-700 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center">
                <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
                Explore Industrial Products
              </button>
            </div>

            {/* Contact Information */}
            <div className="mt-12 pt-8 border-t border-blue-200">
              <p className="text-gray-600 mb-4">Questions about joining our industrial network?</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
                <a href="mailto:shilpomarket@gmail.com" className="flex items-center hover:text-blue-700 transition-colors">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  shilpomarket@gmail.com
                </a>
                <a href="tel:+8801234567890" className="flex items-center hover:text-blue-700 transition-colors">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  +8801346-616109
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage