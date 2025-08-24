import React from 'react'
import Header from '../../components/Header'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 pt-40 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About ShilpoMarket
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connecting artisans and craftspeople with global markets, preserving traditional crafts while embracing modern commerce.
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">🎯</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To empower artisans and craftspeople by providing them with a digital platform that connects their traditional skills with modern markets, ensuring fair trade and sustainable livelihoods while preserving cultural heritage.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">👁️</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become the leading global marketplace for handcrafted products, where traditional craftsmanship meets contemporary design, creating a sustainable ecosystem that benefits artisans, buyers, and communities worldwide.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-600">
            <p className="mb-6">
              ShilpoMarket was born from a simple observation: incredible artisans and craftspeople around the world were struggling to reach global markets, while consumers were increasingly seeking authentic, handcrafted products with meaningful stories.
            </p>
            <p className="mb-6">
              Founded in 2025, we started as a small team passionate about preserving traditional crafts and empowering artisan communities. What began as a local initiative has grown into a comprehensive platform that bridges the gap between traditional craftsmanship and modern e-commerce.
            </p>
            <p>
              Today, ShilpoMarket serves thousands of artisans across different regions, helping them showcase their skills, reach new customers, and build sustainable businesses while maintaining the authenticity and quality that makes their work special.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Millu</h3>
              <p className="text-blue-600 font-medium mb-3">Co-Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Passionate about connecting traditional crafts with modern markets and empowering artisan communities.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">T</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Talha</h3>
              <p className="text-green-600 font-medium mb-3">Co-Founder & CTO</p>
              <p className="text-gray-600 text-sm">
                Technology enthusiast focused on building scalable platforms that make a positive impact on communities.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Shihab</h3>
              <p className="text-orange-600 font-medium mb-3">Co-Founder & COO</p>
              <p className="text-gray-600 text-sm">
                Operations expert dedicated to ensuring smooth platform experiences for both artisans and customers.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Fair Trade</h3>
              <p className="text-gray-600 text-sm">
                Ensuring artisans receive fair compensation for their craftsmanship and skills.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Sustainability</h3>
              <p className="text-gray-600 text-sm">
                Promoting eco-friendly practices and sustainable production methods.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Authenticity</h3>
              <p className="text-gray-600 text-sm">
                Preserving traditional techniques while embracing creative innovation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Community</h3>
              <p className="text-gray-600 text-sm">
                Building strong relationships between artisans, customers, and communities.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Artisans Empowered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Products Listed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Countries Reached</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're an artisan looking to showcase your work or a customer seeking authentic handcrafted products, ShilpoMarket is your gateway to a world of creativity and craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Become a Seller
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage