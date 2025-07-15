import Header from "@/components/Header";
import Link from "next/link";

export default function CategoriesPage() {
  const categories = [
    {
      id: 1,
      name: "Electronics & Components",
      slug: "electronics-and-components",
      description: "Semiconductors, circuits, and electronic components",
      icon: "🔌",
      color: "from-blue-500 to-purple-600",
      count: "2,847 products",
      productCount: 2847,
      image: "/placeholder.jpg"
    },
    {
      id: 2,
      name: "Textiles & Fabrics",
      slug: "textiles-and-fabrics",
      description: "Cotton, silk, synthetic fabrics, and textile materials",
      icon: "🧵",
      color: "from-green-500 to-teal-600",
      count: "1,923 products",
      productCount: 1923,
      image: "/placeholder.jpg"
    },
    {
      id: 3,
      name: "Chemicals & Materials",
      slug: "chemicals-and-materials",
      description: "Industrial chemicals, polymers, and raw materials",
      icon: "⚗️",
      color: "from-orange-500 to-red-600",
      count: "3,156 products",
      productCount: 3156,
      image: "/placeholder.jpg"
    },
    {
      id: 4,
      name: "Metals & Alloys",
      slug: "metals-and-alloys",
      description: "Steel, aluminum, copper, and specialty metals",
      icon: "🔩",
      color: "from-gray-500 to-blue-600",
      count: "1,634 products",
      productCount: 1634,
      image: "/placeholder.jpg"
    },
    {
      id: 5,
      name: "Agriculture & Food",
      slug: "agriculture-and-food",
      description: "Grains, spices, processed foods, and agricultural products",
      icon: "🌾",
      color: "from-yellow-500 to-orange-600",
      count: "2,245 products",
      productCount: 2245,
      image: "/placeholder.jpg"
    },
    {
      id: 6,
      name: "Construction & Building",
      slug: "construction-and-building",
      description: "Cement, tiles, hardware, and building materials",
      icon: "🏗️",
      color: "from-amber-500 to-yellow-600",
      count: "1,789 products",
      productCount: 1789,
      image: "/placeholder.jpg"
    },
    {
      id: 7,
      name: "Automotive & Transport",
      slug: "automotive-and-transport",
      description: "Auto parts, components, and transportation equipment",
      icon: "🚗",
      color: "from-red-500 to-pink-600",
      count: "2,098 products",
      productCount: 2098,
      image: "/placeholder.jpg"
    },
    {
      id: 8,
      name: "Healthcare & Medical",
      slug: "healthcare-and-medical",
      description: "Medical supplies, pharmaceuticals, and healthcare equipment",
      icon: "💊",
      color: "from-cyan-500 to-blue-600",
      count: "1,456 products",
      productCount: 1456,
      image: "/placeholder.jpg"
    },
    {
      id: 9,
      name: "Energy & Power",
      slug: "energy-and-power",
      description: "Solar panels, batteries, and power generation equipment",
      icon: "⚡",
      color: "from-purple-500 to-indigo-600",
      count: "987 products",
      productCount: 987,
      image: "/placeholder.jpg"
    },
    {
      id: 10,
      name: "Packaging & Containers",
      slug: "packaging-and-containers",
      description: "Boxes, bottles, packaging materials, and containers",
      icon: "📦",
      color: "from-indigo-500 to-purple-600",
      count: "1,234 products",
      productCount: 1234,
      image: "/placeholder.jpg"
    },
    {
      id: 11,
      name: "Tools & Machinery",
      slug: "tools-and-machinery",
      description: "Industrial tools, manufacturing equipment, and machinery",
      icon: "🔧",
      color: "from-slate-500 to-gray-600",
      count: "1,567 products",
      productCount: 1567,
      image: "/placeholder.jpg"
    },
    {
      id: 12,
      name: "Sports & Recreation",
      slug: "sports-and-recreation",
      description: "Sports equipment, recreational goods, and fitness products",
      icon: "⚽",
      color: "from-emerald-500 to-green-600",
      count: "823 products",
      productCount: 823,
      image: "/placeholder.jpg"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
              Product Categories
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Explore our comprehensive range of B2B products across various industries and sectors
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.slug}`}
                  className="group animate-slide-up hover-lift bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 font-semibold">{category.count}</span>
                    <span className="text-blue-600 group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center animate-slide-up">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {categories.reduce((sum, cat) => sum + cat.productCount, 0).toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Total Products</div>
              </div>
              <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {categories.length}
                </div>
                <div className="text-sm text-gray-600">Categories</div>
              </div>
              <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  2,500+
                </div>
                <div className="text-sm text-gray-600">Verified Suppliers</div>
              </div>
              <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  150+
                </div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Categories</h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Most popular categories with high-quality products from verified suppliers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.slice(0, 6).map((category, index) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.slug}`}
                  className="group animate-slide-up hover-lift bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <span className="text-xl">{category.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-blue-600 font-semibold">{category.count}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-600">Browse Products</span>
                    <span className="text-blue-600 group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
