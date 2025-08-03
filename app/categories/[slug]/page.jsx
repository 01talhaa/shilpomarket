import Link from "next/link";
import { notFound } from "next/navigation";

export default function CategoryPage({ params }) {
  const { slug } = params;

  // Category data with sample products
  const categories = {
    "electronics-and-components": {
      id: 1,
      name: "Electronics & Components",
      description: "Semiconductors, circuits, and electronic components",
      icon: "🔌",
      products: [
        {
          id: 1,
          name: "ARM Cortex-M4 Microcontroller",
          price: "$12.50",
          minOrder: "100 units",
          supplier: "TechCorp Industries",
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
          specifications: ["32-bit RISC", "120 MHz", "512KB Flash", "128KB RAM"],
          inStock: true,
          verified: true
        },
        {
          id: 2,
          name: "High-Performance Op-Amp IC",
          price: "$3.25",
          minOrder: "500 units",
          supplier: "Silicon Solutions",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=400&h=300&fit=crop",
          specifications: ["Low noise", "High gain", "Wide bandwidth", "Dual supply"],
          inStock: true,
          verified: true
        },
        {
          id: 3,
          name: "Power Management IC",
          price: "$8.75",
          minOrder: "200 units",
          supplier: "PowerTech Ltd",
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
          specifications: ["Multi-output", "High efficiency", "Thermal protection", "Compact size"],
          inStock: false,
          verified: true
        },
        {
          id: 4,
          name: "Bluetooth 5.0 Module",
          price: "$15.99",
          minOrder: "50 units",
          supplier: "WirelessTech Co",
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
          specifications: ["Long range", "Low power", "Easy integration", "FCC certified"],
          inStock: true,
          verified: true
        },
        {
          id: 5,
          name: "High-Speed ADC Converter",
          price: "$22.30",
          minOrder: "100 units",
          supplier: "DataConvert Inc",
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
          specifications: ["16-bit resolution", "1 MSPS", "Low power", "SPI interface"],
          inStock: true,
          verified: true
        },
        {
          id: 6,
          name: "LED Driver IC",
          price: "$4.50",
          minOrder: "300 units",
          supplier: "LightTech Solutions",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=400&h=300&fit=crop",
          specifications: ["PWM dimming", "High efficiency", "Thermal shutdown", "Wide voltage range"],
          inStock: true,
          verified: true
        }
      ]
    },
    "textiles-and-fabrics": {
      id: 2,
      name: "Textiles & Fabrics",
      description: "Cotton, silk, synthetic fabrics, and textile materials",
      icon: "🧵",
      products: [
        {
          id: 7,
          name: "Premium Cotton Canvas",
          price: "$8.50/meter",
          minOrder: "100 meters",
          supplier: "Cotton Mills Ltd",
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=300&fit=crop",
          specifications: ["100% Cotton", "Heavy weight", "Pre-shrunk", "Eco-friendly"],
          inStock: true,
          verified: true
        },
        {
          id: 8,
          name: "Silk Charmeuse Fabric",
          price: "$35.00/meter",
          minOrder: "50 meters",
          supplier: "Silk Traders Inc",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1520637836862-4d197d17c3a4?w=400&h=300&fit=crop",
          specifications: ["Pure silk", "Luxurious feel", "Breathable", "Natural sheen"],
          inStock: true,
          verified: true
        },
        {
          id: 9,
          name: "Polyester Blend Fabric",
          price: "$6.25/meter",
          minOrder: "200 meters",
          supplier: "Synthetic Textiles",
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1604719312566-023b269c92b9?w=400&h=300&fit=crop",
          specifications: ["Wrinkle resistant", "Durable", "Easy care", "Color fast"],
          inStock: true,
          verified: true
        },
        {
          id: 10,
          name: "Organic Hemp Fabric",
          price: "$18.75/meter",
          minOrder: "75 meters",
          supplier: "EcoFiber Co",
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop",
          specifications: ["Organic certified", "Antimicrobial", "UV resistant", "Sustainable"],
          inStock: false,
          verified: true
        },
        {
          id: 11,
          name: "Wool Blend Suiting",
          price: "$42.00/meter",
          minOrder: "25 meters",
          supplier: "Wool Masters",
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=300&fit=crop",
          specifications: ["70% Wool", "Wrinkle resistant", "Breathable", "Professional grade"],
          inStock: true,
          verified: true
        },
        {
          id: 12,
          name: "Technical Performance Fabric",
          price: "$28.90/meter",
          minOrder: "100 meters",
          supplier: "TechTextiles Pro",
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
          specifications: ["Moisture-wicking", "Stretch", "Antimicrobial", "Quick-dry"],
          inStock: true,
          verified: true
        }
      ]
    },
    "chemicals-and-materials": {
      id: 3,
      name: "Chemicals & Materials",
      description: "Industrial chemicals, polymers, and raw materials",
      icon: "⚗️",
      products: [
        {
          id: 13,
          name: "High-Grade Titanium Dioxide",
          price: "$2,850/ton",
          minOrder: "5 tons",
          supplier: "ChemCorp Industries",
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=400&h=300&fit=crop",
          specifications: ["99.5% purity", "Rutile grade", "Food safe", "UV stable"],
          inStock: true,
          verified: true
        },
        {
          id: 14,
          name: "Industrial Polymer Resin",
          price: "$1,200/ton",
          minOrder: "10 tons",
          supplier: "Polymer Solutions",
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
          specifications: ["High strength", "Chemical resistant", "Thermoplastic", "Recyclable"],
          inStock: true,
          verified: true
        },
        {
          id: 15,
          name: "Specialty Catalyst",
          price: "$15,000/kg",
          minOrder: "5 kg",
          supplier: "Catalyst Tech",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=400&h=300&fit=crop",
          specifications: ["High activity", "Selective", "Stable", "Regenerable"],
          inStock: true,
          verified: true
        },
        {
          id: 16,
          name: "Organic Solvent Grade",
          price: "$850/barrel",
          minOrder: "20 barrels",
          supplier: "Solvent Specialists",
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&h=300&fit=crop",
          specifications: ["99.8% purity", "Low water content", "Distilled", "Analytical grade"],
          inStock: true,
          verified: true
        },
        {
          id: 17,
          name: "Flame Retardant Additive",
          price: "$3,200/ton",
          minOrder: "2 tons",
          supplier: "Safety Chemicals",
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
          specifications: ["Halogen-free", "Low smoke", "Non-toxic", "Effective"],
          inStock: false,
          verified: true
        },
        {
          id: 18,
          name: "Pharmaceutical Excipient",
          price: "$4,500/ton",
          minOrder: "1 ton",
          supplier: "Pharma Materials",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
          specifications: ["USP grade", "Sterile", "Stable", "Biocompatible"],
          inStock: true,
          verified: true
        }
      ]
    }
  };

  const category = categories[slug];
  
  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Header */}
      <section className="bg-white py-3 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
                                      <Link href="/" className="flex items-center space-x-3 group mt-2">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white font-bold text-xl">🏭</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="text-gray-800">
              <div className="text-2xl font-bold tracking-tight">ShilpoMarket</div>
              <div className="text-xs text-gray-600 -mt-1">Raw Materials Marketplace</div>
            </div>
          </Link>
              <div className="h-10 w-px bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-sm">{category.icon}</span>
                </div>
                <h1 className="text-lg font-semibold text-gray-800">{category.name}</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-600">
              <span>{category.products.length} Products</span>
              <span>•</span>
              <span>Verified Suppliers</span>
            </div>
          </div>
          <div className="mt-2 ml-60 flex items-center space-x-4 text-xs text-gray-600">
            <Link href="/" className="hover:text-gray-800">Home</Link>
            <span>/</span>
            <Link href="/categories" className="hover:text-gray-800">Categories</Link>
            <span>/</span>
            <span className="text-gray-800">{category.name}</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Filters Sidebar */}
          <div className="lg:w-1/5">
            <div className="bg-white rounded-lg shadow p-4 sticky top-20">
              <h3 className="text-sm font-semibold text-gray-800 mb-4">Filters</h3>

              {/* Price Range */}
              <div className="mb-4">
                <h4 className="text-xs font-medium text-gray-700 mb-2">Price Range</h4>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>$0</span>
                    <span>$50,000</span>
                  </div>
                </div>
              </div>

              {/* Supplier */}
              <div className="mb-4">
                <h4 className="text-xs font-medium text-gray-700 mb-2">Supplier</h4>
                <div className="space-y-1">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-xs text-gray-700">Verified Only</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-xs text-gray-700">High Rating (4.5+)</span>
                  </label>
                </div>
              </div>

              {/* Stock Status */}
              <div className="space-y-2">
                <div>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-xs text-gray-700">In Stock</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-xs text-gray-700">Fast Shipping</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-4/5">
            {/* Sort and View Options */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-3 bg-white rounded-lg p-2 shadow-sm">
              <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                <span className="text-sm text-gray-600">{category.products.length} products</span>
              </div>
              <div className="flex items-center space-x-4">
                <select className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm">
                  <option value="relevance">Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {category.products.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <div className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      {product.verified && (
                        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                          ✓ Verified
                        </div>
                      )}
                      {!product.inStock && (
                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                          Out of Stock
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
                          <span className="text-xs text-gray-500 ml-1">(reviews)</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm font-bold text-gray-900">{product.price}</span>
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

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <div className="flex space-x-1">
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100 transition-colors">
                  Previous
                </button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">1</button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100 transition-colors">
                  2
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
